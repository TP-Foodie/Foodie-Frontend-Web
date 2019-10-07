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
    "OD": "Duracion de la orden",
    "ODI": "Distancia de la orden",
    "OP": "Localizacion de la orden",
    "ODA": "Fecha de la orden",
    "OT": "Hora de la orden",
    "OC": "Cantidad de productos en la orden",
    "TD": "Dia de la orden"
}

export class Parser {
    static buildRuleRequest = values => {
        return {
            conditions: values.conditions,
            consequence: {
                consequence_type: values.consequence.type,
                value: values.consequence.value
            },
            name: values.name
        }
    }

    static parseRuleVariables = variables => {
        return variables.map(variable => {
            return {value: variable, name: VARIABLES_NAMES[variable]}
        })
    }
}