const HANDLE_SUCCESS = "HANDLE_SUCCESS";
const CLOSE_SUCCESS_MESSAGE = "CLOSE_SUCCESS_MESSAGE";
const HANDLE_ERROR = "HANDLE_ERROR";

export const handlers = (state, action) => {
    switch (action.type) {
        case HANDLE_SUCCESS:
            return {
                ...state,
                showSuccess: true,
                successMessage: action.message
            };
        case HANDLE_ERROR:
            return {
                ...state,
                showError: true,
                errorMessage: action.error
            }
        case CLOSE_SUCCESS_MESSAGE:
            return {
                ...state,
                showSuccess: false
            }
        default:
            return state || {showSuccess: false};
    }
}

export const handleSuccess = message => {
    return {
        type: HANDLE_SUCCESS,
        message,
    }
}

export const hideSuccess = () => {
    return {
        type: CLOSE_SUCCESS_MESSAGE,
    }
}

export const handleError = (error) => {
    return {
        type: HANDLE_ERROR,
        error
    }
}