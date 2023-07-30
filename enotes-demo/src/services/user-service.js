import { myAxios } from "../api/bootapi";

export const loginUser = (loginDetail) => {
    return myAxios.post('/api/auth/authenticate', loginDetail)
        .then((response) => response.data)
}

export const signUp = (data) => {
    return myAxios.post('/api/auth/register', data)
        .then((response) =>
            response.data);
}