const CLIENT_ID = 'zrZ3_Xv300UASiOqF_IUBvoVMmTeLreBulEmVNhvvOk';

export const apiGetImages = (page) => {
    const url = new URL('https://api.unsplash.com/photos/')

    const params = [
        ['page', `${page}`],
    ]

    url.search = new URLSearchParams(params).toString()

    return fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Client-ID ${CLIENT_ID}`
            },
        })
        .then((r) => r.json())
        .catch(error => {
            console.log(error);
        });
}