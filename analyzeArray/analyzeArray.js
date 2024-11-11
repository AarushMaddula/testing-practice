export default function(arr) {
    if (!arr || arr.length === 0) throw new Error("Array is missing or empty!")

    let object = {};

    let sum = arr.reduce((sum, value) => {
        if (!(+value)) throw new Error("Array has non numberic value(s)!")
        return sum + +value
    }, 0)

    object.average = sum/arr.length;
    object.min = Math.min(...arr)
    object.max = Math.max(...arr)
    object.length = arr.length

    return object
}