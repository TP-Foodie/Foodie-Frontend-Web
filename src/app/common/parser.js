export class Parser {
    static buildRuleRequest = values => {
        return {
            conditions: values.conditions,
            consequence: {
                consequence_type: values.consequence.consequenceType,
                value: values.consequence.consequenceValue
            },
            name: values.name
        }
    }
}