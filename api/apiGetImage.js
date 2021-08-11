const CLIENT_ID = "zrZ3_Xv300UASiOqF_IUBvoVMmTeLreBulEmVNhvvOk";

export const getImage = (id) => {
    const url = `https://api.unsplash.com/photos/${id}`

    return fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Client-ID ${CLIENT_ID}`
            }
        })
        .then(r => r.json())
        .catch(error => {
            console.log(error);
        });
}