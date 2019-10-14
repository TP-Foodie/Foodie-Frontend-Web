const SET_LOADING = "SET_LOADING"

export const loading = (state, action) => {
    return {
        ...state,
        loading: action.value
    }
}

export const setLoading = value => {
    return {
        type: SET_LOADING,
        value
    }
}
