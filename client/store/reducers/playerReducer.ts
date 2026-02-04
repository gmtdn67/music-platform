import { PlayerAction, PlayerActionTypes, PlayerState } from "@/types/player"

const initialState: PlayerState = {

}

export const playerReducer = (state = initialState, action: PlayerAction): PlayerState => {

    switch (action.type) {
        case PlayerActionTypes.PLAY:
            return {}
        case PlayerActionTypes.PAUSE:
            return {}
        case PlayerActionTypes.SET_ACTIVE:
            return {}
        case PlayerActionTypes.SET_CURRENT_TIME:
            return {}
        case PlayerActionTypes.SET_VOLUME:
            return {}
        case PlayerActionTypes.SET_DURATION:
            return {}
    }
    default:
        return state
}