export default function (state = {}, action) {
    console.log('state-', state)
    switch (action.type) {
        case "CAR_SELECTED":
            return action.payload;
        default:
            return state
    }
}