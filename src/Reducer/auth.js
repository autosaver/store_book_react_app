
const auth_post=(state = {authData:null}, { type, payload }) => {
    switch (type) {
    case "login":
        localStorage.setItem('profile',JSON.stringify({...payload}))
        return state;
    default:
        return state;
    }
}

export default auth_post;