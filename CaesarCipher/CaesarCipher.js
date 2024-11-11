export default function() {

    const getASCIIArray = function(string) {
        let arr = [];

        for (let i = 0; i < string.length; i++) {
            arr.push(string.charCodeAt(i));
        }

        return arr;
    }

    const mapASCIIArray = function(arr, shift) {
        return arr.map((value) => {
            if (value > 64 && value < 91) {
                return (value - 65 + shift) % 26 + 65;
            } else if (value > 96 && value < 123) {
                return (value - 92 + shift) % 26 + 92;
            } else {
                return value;
            }
        })
    }

    const getStringFromASCIIArray = function(arr) {
        let string = "";

        for (let i = 0; i < arr.length; i++) {
            string += String.fromCharCode(arr[i]);
        }

        return string;
    }

    const caesarCipher = function(input, shift) {
        let ASCIIarr = getASCIIArray(input);
        let mappedASCIIArr = mapASCIIArray(ASCIIarr, shift);
        let finalString = getStringFromASCIIArray(mappedASCIIArr)

        return finalString;
    }

    return {
        caesarCipher
    }
}