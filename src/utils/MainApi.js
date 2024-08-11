const baseUrl = process.env.NODE_ENV === "production" 
  ? "https://api.marconi.cow.strangled.net"
  : "http://localhost:3001";

const getToken = ()=> localStorage.getItem('jwt');

export const handleServerResponce = (res) =>{
    return res.ok? res.json() : Promise.reject(`Error: ${res.status}`);
}

export const signUp = ({ name, email, password })=>{
    console.log(baseUrl);
    return fetch(`${baseUrl}/signup`,{
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, password })
    }).then(handleServerResponce);
}

export const signin = ({ email, password })=>{
    return fetch(`${baseUrl}/signin`,{
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password })
    }).then(handleServerResponce);
}

export const getCurrentUser = ()=>{
    const token = getToken();
    return fetch(`${baseUrl}/users/me`,{
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    }).then(handleServerResponce);
}

export const getArticle = ()=>{
    const token = getToken();
    return fetch(`${baseUrl}/articles`,{
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    }).then(handleServerResponce);
}

export const saweArticle = ({ keyword, title, text, date, source, link, image }) => {
    const token = getToken();
    return fetch(`${baseUrl}/articles`,{
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ 
            keyword, 
            title, 
            text, 
            date, 
            source, 
            link, 
            image })
    }).then(handleServerResponce);
}

export const deleteArticle = ({id})=>{
    const token = getToken();
    return fetch(`${baseUrl}/articles/${id}`,{
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            "authorization": `Bearer ${token}`,
        }
    }).then(handleServerResponce);
}