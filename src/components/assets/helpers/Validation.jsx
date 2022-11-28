
function Validation(input) {
    const errors = {};
    if (!input.name) {
        errors.name = "Name is required"
    }
    else if (!input.name.match(/^[A-Za-z\s]+$/)) {
        errors.name = "Only letters, please"
    }
    if (!input.life_span) {
        errors.life_span = "Life span is required"
    }
    else if (input.life_span < 1 || input.life_span > 30) {
        errors.life_span = "Between 1 - 30 years"
    }
    if (!input.min_height) {
        errors.min_height = "Min height is required"
    }
    if (!input.max_height) {
        errors.max_height = "Max height is required"
    }
    if (!input.min_weight) {
        errors.min_weight = "Min weight is required"
    }
    else if (input.min_weight < 2) {
        errors.min_weight = "Must be more than 2 kg"
    }
    if (!input.max_weight) {
        errors.max_weight = "Max weight is required"
    }
    else if (input.max_weight > 100) {
        errors.max_weight = "Must be less than 100 kg"
    }
    else if (Number(input.min_height) > Number(input.max_height)) {
        errors.max_height = "Must be higher than min height"
    }
    else if (Number(input.min_weight) > Number(input.max_weight)) {
        errors.max_weight = "Must be heavier than min weight"
    }

    return errors
}

export default Validation;