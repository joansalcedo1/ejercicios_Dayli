const urlBase = "http://localhost:3005/api/dayli01"
export async function getUsuarios() {
    try {
        const result = await fetch(urlBase);
        const user = await result.json();
        if (!result.ok) throw new Error(`Error HTTP: ${result.status}`)
        return user;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function login(mail) {
    let siLoTrajo= true
    try {

        const res = await fetch(`${urlBase}/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mail })
        })
        // Manejar errores HTTP
        if (!res.ok) {
            siLoTrajo=false
            const errText = await res.text();
            throw new Error(`HTTP ${res.status}: ${errText}`);
        }

        const data = await res.json();
        const contestacion= {data, siLoTrajo}
        return contestacion;

    } catch (error) {
        console.error(error);
        return error;
    }
}