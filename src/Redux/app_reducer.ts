const APP_ACT = "APP_ACT";

export type ProfileActionsType = ReturnType<typeof addPostActionCreator>

let initialState: any = {};

const profileReducer = (state = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case APP_ACT:
            return {
                ...state,
            };
        default :
            return state
    }
}

export const addPostActionCreator = (newVariable: string) => {
    return {
        type: APP_ACT,
        newVariable
    } as const
}


export default profileReducer