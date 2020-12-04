// let csvString = 'Lorem Ipsum - це те;кст-"риб;а", що ви;користовується в\n' +
//     'друкарстві т;а дизайні. ;Lorem Ip;sum є, факти\n' +
//     'чно, станд;артною; "рибою" аж з XVI; сторіччя, коли не';
//
// function Csv(inputString, separator) {
// }
//
// Csv.prototype.parse = function parse(inputString, separator) {
//     if (!separator) {
//         separator = '\n';
//     }
//     if (inputString) {
//         arr = inputString.split(separator);
//     }
//     return arr
// };
//
// function CalcSeparator(arr) {
//     var arrCount = [];
//     for (var i = 0; i < arr.length; ++i) {
//         var count = 0;
//         var numberAsString = arr[i].toString();
//         numberAsString.split('').forEach(char => {
//             if (char === ';') {
//                 count++
//             }
//         });
//     }
//     arrCount.push(count)
//     return arrCount
// }
//
//
// Csv.prototype.generate = function generate(arr, separator) {
//
//     outputArr = []
//     countOutputArr = [];
//     if (!separator) {
//         separator = ',';
//     }
//
//     for (let elem of arr) {
//         outputArr.push(elem.split(separator));
//         let compareArr = CalcSeparator(outputArr);
//         countOutputArr.push(compareArr);
//     }
//
//     console.log(countOutputArr);
//     prevCompareArr = true;
//     for (i = 0; i < countOutputArr.length; i++) {
//         if (countOutputArr[i] !== countOutputArr[i + 1]) {
//             prevCompareArr = false
//         }
//         console.log(i);
//         console.log(prevCompareArr);
//     }
//
//     console.log(countOutputArr[0], countOutputArr[1], countOutputArr[2])
//     console.log(outputArr)
// };
//
// let csv = Csv.prototype.parse(csvString, '');
// Csv.prototype.generate(arr)

function sum(a, b) {
    return function () {
        return 5;
    }    
}
var result = sum(2, 4);
console.log(result);
