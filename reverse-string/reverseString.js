export default function (input) {
    if (typeof input !== "string") return null;

    return input.split("").reverse().join("");
}
