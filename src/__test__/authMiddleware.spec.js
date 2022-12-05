import { authMiddleware } from "../redux/authMiddleware";
import { Authenticate } from "../redux/actions";
import {serverLogin} from '../api'

jest.mock('../api', () => ({serverLogin: jest.fn(() => true)}))

describe("authMiddleware", () => {
    describe("#AUTHENTICATE", () => {
        it("authenticate through api", async () => {
            const dispatch = jest.fn()

            await authMiddleware({dispatch})()(
                Authenticate("testlogin", "testpassword")
            )
            expect(serverLogin).toBeCalledWith("testlogin", "testpassword")
            expect(dispatch).toBeCalledWith(
                {type: "LOG_IN"}
            )
        })
    })
})