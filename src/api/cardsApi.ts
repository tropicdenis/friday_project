import axios from 'axios'
import { setNewPasswordTCType } from '../Redux/passwordRecoveryReducer'

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/",
    //baseURL: 'http://localhost:7542/2.0/',
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
        return instance.delete('auth/me', {})
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
//min=${min}&max=${max}&
export const packsAPI = {
    getCardsPack(page: number = 2, pageCount: number) {
        return instance.get(`cards/pack?page=${page}&pageCount=${pageCount}&sortPacks=0updated`)
    },
    createPack(cardsPack: CardsPackCreateType) {
        return instance.post('cards/pack', cardsPack);
    },
    deletePack(packsId: string) {
        return instance.delete(`cards/pack?id=${packsId}`)
    },
    updatePack(cardsPack: CardsPackUpdateType) {
        return instance.put(`cards/pack`, cardsPack)
    }
}

export const cardsAPI = {
    getCardsPack(cardsPack_id: string) {
        return instance.get(`cards/card?cardsPack_id=${cardsPack_id}&pageCount=20`)
    },
    createCard(card: CardType) {
        return instance.post(`cards/card`, card)
    },
    deleteCard(cardsPack_id: string) {
        return instance.delete(`cards/card?id=${cardsPack_id}`)
    },
    updateCard(card: UpdateCardType) {
        return instance.put(`cards/card`, card)
    },
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
export type CardType = {
    card: {
        cardsPack_id: string
        question?: string // если не отправить будет таким	
        answer?: string // если не отправить будет таким	
        grade?: number // 0..5, не обязателен	
        shots?: number // не обязателен	
        rating?: number // не обязателен	
        answerImg?: string // не обязателен	
        questionImg?: string // не обязателен	
        questionVideo?: string // не обязателен	
        answerVideo?: string // не обязателен	
        type?: string // если не отправить будет таким	
    }
}
export type UpdateCardType = {
    card: {
        answer?: string,
        question?: string,
        cardsPack_id?: string,
        grade?: string,
        shots?: number,
        user_id?: string,
        created?: string,
        updated?: string,
        _id: string
    }
}
export type CardsPackCreateType = {
    cardsPack: {
        name?: string // если не отправить будет таким	
        path?: string // если не отправить будет такой	
        grade?: number // не обязателен	
        shots?: number // не обязателен	
        rating?: number // не обязателен	
        deckCover?: string // не обязателен	
        private?: false // если не отправить будет такой	
        type?: string // если не отправить будет таким	
    }
}
export type CardsPackUpdateType = {
    cardsPack: {
        _id: string
        user_id?: string
        name?: string
        path?: string // папка		
        cardsCount?: number
        grade?: number // средняя оценка карточек		
        shots?: number // количество попыток		
        rating?: number // лайки		
        type?: string // ещё будет "folder" (папка)		
        created?: string
        updated?: string
        __v?: number
    }
}