const HANDLE_SUCCESS = "HANDLE_SUCCESS";

export const handlers = (state, action) => {
    if (action.type == HANDLE_SUCCESS) {
        return {
            ...state,
            showSuccess: true,
            successMessage: action.message
        };
    }
    return state || {showSuccess: false};
}

export const handleSuccess = message => {
    return {
        type: HANDLE_SUCCESS,
        message,
    }
}