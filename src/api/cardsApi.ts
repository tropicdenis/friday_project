import axios from 'axios'

const instance = axios.create({
	/*baseURL: "https://neko-back.herokuapp.com/2.0",*/
	baseURL: 'http://localhost:7542/2.0/',
	withCredentials: true,
})


export const authAPI = {
	registration(data: RegistrationDataType) {
		return instance.post('auth/register', data)
	},
	login(data: LoginType) {
		return instance.post<ResponseType>("auth/login", data)
	}

}
//Types
export type LoginType = {
	email: string,
	password: string,
	rememberMe?: boolean
}
export type ResponseType = {
	id: string
	email: string
	name: string
	avatar?: string
	publicCardPacksCount: number

	created: Date;
	updated: Date;
	isAdmin: boolean;
	verified: boolean;
	rememberMe: boolean;

	error?: string;
}
export type RegistrationDataType = {
	email: string
	password: string
}