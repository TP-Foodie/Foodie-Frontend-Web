const VARIABLES_NAMES = {
    "UR": "Reputacion del usuario",
    "DR": "Reputacion del delivery",
    "UDT": "Viajes diarios del usuario",
    "UMT": "Viajes mensuales del usuario",
    "UA": "Antiguedad del usuario",
    "DDT": "Viajes diarios del delivery",
    "DMT": "Viajes mensuales del delivery",
    "DA": "Antiguedad del delivery",
    "DB": "Saldo del usuario",
    "CPM": "Pago con efectivo",
    "CRPM": "Pago con tarjeta de credito",
    "OD": "Duracion de la orden (minutos)",
    "ODI": "Distancia de la orden (kilometros)",
    "OP": "Localizacion de la orden (ciudad)",
    "ODA": "Fecha de la orden",
    "OT": "Hora de la orden",
    "OC": "Cantidad de productos en la orden",
    "TD": "Dia del viaje",
    "PM": "Metodo de pago",
    "ORD": "Dia de la orden",
    "TT": "Hora del viaje",
};

const OPERATORS_NAMES = {
    "GTE": "Mayor o igual a",
    "GT": "Mayor a",
    "LTE": "Menor o igual a",
    "LT": "Menor a",
    "IT": "Igual a"
};

const CONSEQUENCE_TYPES_NAMES = {
    "V": "Valor fijo",
    "P": "Porcentaje",
    "PV": "Valor por unidad"
}

export class Parser {
    static buildRuleRequest = values => {
        return {
            conditions: values.conditions.map(condition => {
                return {
                    variable: condition.variable,
                    operator: condition.operator,
                    condition_value: condition.value
                }
            }),
            consequence: {
                consequence_type: values.consequence.type,
                value: values.consequence.value,
                variable: values.consequence.variable
            },
            name: values.name,
            active: values.active,
            benefit: values.benefit,
        }
    };

    static parseVariable = variable => {
        return {value: variable, name: VARIABLES_NAMES[variable]}
    }

    static parseOperator = operator => {
        return {value: operator, name: OPERATORS_NAMES[operator]}
    }

    static parseConsequenceType = type => {
        return {value: type, name: CONSEQUENCE_TYPES_NAMES[type]};
    }

    static parseRuleVariables = variables => {
        return variables.map(variable => {
            return Parser.parseVariable(variable);
        })
    };

    static parseRuleOperators = operators => {
        return operators.map(operator => {
            return Parser.parseOperator(operator)
        })
    }

    static parseRuleConsequenceTypes = types => {
        return types.map(type => {
            return Parser.parseConsequenceType(type);
        })
    }

    static parseRule = rule => {
        return {
            id: rule.id,
            name: rule.name,
            conditions: rule.conditions.map((condition, index) => {
                return {
                    variable: condition.variable,
                    operator:condition.operator,
                    value: condition.condition_value,
                    id: index
                };
            }),
            consequence: {
                type: rule.consequence.consequence_type,
                value: rule.consequence.value
            },
            active: rule.active,
        }
    }

    static buildUpdateBalanceRequest = (value) => {
        return {
            balance: value,
        };
    }

    static parseSubscription = subscription => {
        return subscription[0] + subscription.toLowerCase().slice(1)
    }

    static parseUsers = users => {
        return users.users;
    }

    static buildSubscriptionObj = subscription => ({
        subscription
    })
}
