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

export const CONDITION_RULES = {
    variable: {
        presence: {
            message: "^ Por favor seleccione una variable"
        }
    },
    operator: {
        presence: {
            message: "^ Por favor seleccione un operador"
        }
    },
    value: {
        presence: {
            message: "^ Por favor seleccione un valor"
        }
    }
};
