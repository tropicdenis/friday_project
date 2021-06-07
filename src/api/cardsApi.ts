import axios from 'axios'
import { setNewPasswordTCType } from '../Redux/passwordRecoveryReducer'

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/",
    // baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const authAPI = {
    registration(data: RegistrationDataType) {
        return instance.post('auth/register', data)
    },
    login(data: LoginType) {
        return instance.post<ResponseType>("auth/login", data)
    },
    logout() {
        return instance.delete('auth/me',{})
    },
    passwordRecovery(recoveryData: PasswordRecoveryDataType) {
        return instance.post('auth/forgot', recoveryData)
    },
    isAuth() {
        return instance.post('auth/me')
    },
    setNewPassword(data: setNewPasswordTCType) {
        return instance.post('auth/set-new-password', data)
    }
}
//Types
export type LoginType = {
    email: string,
    password: string,
    rememberMe?: boolean
}
export type ResponseType = {
    _id: string
    email: string
    name: string
    avatar: string | null
    publicCardPacksCount: number
    created: string;
    updated: string;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;
    error: string;
    token: string
}
export type RegistrationDataType = {
    email: string
    password: string
}
export type PasswordRecoveryDataType = {
    email: string,
    from: string,
    message: string
}