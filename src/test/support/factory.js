export const successfulResponseWith = data => {
    return jest.fn(() => Promise.resolve({data}));
};

export const failedResponseWith = error => {
    return jest.fn(() => Promise.reject(error));
};

export const aPlace = () => {
    return {
        coordinates: {
            latitude: 1.0,
            longitude: 2.0
        },
        _id: 1,
        name: "Mac"
    }
};

export const aUser = () => {
    return {
        id: 1,
        name: "Juansito",
        last_name: "Lopez",
        type: "Tipo",
        email: "Email",
        phone: "Phone"
    }
};

export const anError = () => {
    return {
        message: "someError"
    };
};