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

export async function login() {
    
    
}