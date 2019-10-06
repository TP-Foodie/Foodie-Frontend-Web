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
}