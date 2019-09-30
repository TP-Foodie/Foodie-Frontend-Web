export const LOGIN_RULES = {
    email: {
        email: {
            message: "^Ingrese un email valido"
        },
        presence: {
            message: "^Ingrese un email valido"
        }
    },
    password: {
        presence: {
            message: "^Ingrese una contraseña valida"
        }
    }
};
