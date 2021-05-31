import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:7542/2.0/',
	withCredentials: true,
})


export const authAPI = {
	registration(data: RegistrationDataType) {
		return instance.post('auth/register', data)
	}
}

export type RegistrationDataType = {
	email: string
	password: string
}