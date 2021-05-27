const PROF_ACT = "PROF_ACT";

export type ProfileActionsType = ReturnType<typeof addPostActionCreator>

let initialState: any = {};

const profileReducer = (state = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case PROF_ACT:
            return {
                ...state,
            };
        default :
            return state
    }
}

export const addPostActionCreator = (newVariable: string) => {
    return {
        type: PROF_ACT,
        newVariable
    } as const
}


export default profileReducer