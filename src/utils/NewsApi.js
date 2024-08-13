const apiKey = "c05cf0af963547b8bfcfc802ac214763"

const baseUrl = "https://nomoreparties.co/news/v2/everything";

export const handleServerResponce = (res) =>{
    return res.ok? res.json() : Promise.reject(`Error: ${res.status}`);
}

export const searchNews = ({query}) =>
{
    const url = `${baseUrl}?q=${query}&apiKey=${apiKey}`;
    return fetch( url,{
        method: 'GET'
    }).then(handleServerResponce);
}