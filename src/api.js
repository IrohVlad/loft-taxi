export async function serverLogin (mail, pass) {
    return fetch('https://loft-taxi.glitch.me/auth', {
        headers: {
            'Content-type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify({email: mail, password: pass})
    }).then(data => data.json())
    .then(data => data.success)
}