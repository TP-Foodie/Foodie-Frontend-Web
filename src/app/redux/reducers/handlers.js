const HANDLE_SUCCESS = "HANDLE_SUCCESS";
const CLOSE_MESSAGE = "CLOSE_MESSAGE";
const HANDLE_ERROR = "HANDLE_ERROR";
const DEFAULT_ERROR_MESSAGE = "Ups! Algo salio mal :(";

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
                errorMessage: DEFAULT_ERROR_MESSAGE
            }
        case CLOSE_MESSAGE:
            return {
                ...state,
                showSuccess: false,
                showError: false,
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

export const hideMessage = () => {
    return {
        type: CLOSE_MESSAGE,
    }
}

export const handleError = (error) => {
    return {
        type: HANDLE_ERROR,
        error
    }
}