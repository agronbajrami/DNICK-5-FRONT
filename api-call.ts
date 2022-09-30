import { default as axios } from "./axiosConfig";

export const loginAction = async (data: { username: string, password: string }) => {
    try {
        const res = await axios.post(`/login`, {
            ...data,
        });
        return res.data;
    } catch (err: any) {
        return {
            error: true,
            data: err.response.data
        }
    }
}
interface registerData {
    name: string,
    lastName: string,
    username: string,
    password: string
}

export const registerAction = async (data: registerData) => {
    try {
        const res = await axios.post(`/register`, {
            ...data,
        });
        return res.data;
    } catch (err: any) {
        return {
            error: true,
            data: err.response.data
        }
    }
}

interface contactData {
    name: string,
    email: string,
    message: string,
}

export const contactAction = async (data: contactData) => {
    try {
        const res = await axios.post(`/contact`, {
            ...data,
        });
        return res.data;
    } catch (err: any) {
        return {
            error: true,
            data: err.response.data
        }
    }
}
export const contactGetAction = async () => {
    try {
        const res = await axios.get(`/contacts`);
        return res.data;
    } catch (err: any) {
        return {
            error: true,
            data: err.response.data
        }
    }
}