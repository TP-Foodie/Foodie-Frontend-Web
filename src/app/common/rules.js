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

export const CONSEQUENCE_RULES = {
    consequenceType: {
        presence: {
            message: "^ Por favor seleccione un tipo"
        }
    },
    consequenceValue: CONDITION_RULES.value
}

export const RULE_RULES = {
    name: {
        presence: {
            message: "^Por favor ingrese un nombre",
        },
        length: {
            minimum: 1,
            message: "^Por favor ingrese un nombre"
        }
    },
    conditions: {
        length: {
            minimum: 1,
            message: "^Por favor ingrese al menos una condicion"
        }
    }
}