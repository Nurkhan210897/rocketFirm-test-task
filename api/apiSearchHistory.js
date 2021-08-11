const CLIENT_ID = 'zrZ3_Xv300UASiOqF_IUBvoVMmTeLreBulEmVNhvvOk';

export const apiSearchHistory = (searchValue) => {
    const url = new URL('https://api.unsplash.com/search/users')

    const params = [
        ['query', `${searchValue}`],
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