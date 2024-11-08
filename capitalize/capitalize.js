
function capitalize(input) {
    if (typeof input !== "string") return null

    const firstChar = input.slice(0, 1);
    const restChars = input.slice(1);
    
    return firstChar.toUpperCase() + restChars;
}

export default capitalize;