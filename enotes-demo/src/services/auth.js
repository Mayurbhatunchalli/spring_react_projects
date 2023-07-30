

export const isLoggedIn = () => {
    let data = localStorage.getItem("Authorization")

    if (data != null) return true;
    else return false;

};

export const doLogin = (data) => {
    localStorage.setItem("Authorization", JSON.stringify(data))
}