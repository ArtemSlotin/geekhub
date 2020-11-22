function Csv() {
    Csv.prototype.parse = function (str, par = ' ') {

        const firstParse = str.split(par)
        const pars = calc(firstParse)
        const result = []

        for (let i = 0; i < firstParse.length; i++) {
            let partArrParse = firstParse[i].split(pars)
            result.push(partArrParse)
        }
        return result

        function calc(arr) {

            let coma = arr
                .map(item => item
                    .split('')
                    .filter(element => element === ','))
                .every((elem, i, prevArr) => !prevArr[i + 1] ? true : elem.length === prevArr[i + 1].length);

            let semiColon = arr
                .map(item => item
                    .split('')
                    .filter(element => element === ';'))
                .every((elem, i, prevArr) => !prevArr[i + 1] ? true : elem.length === prevArr[i + 1].length);

            let tab = arr
                .map(item => item
                    .split('')
                    .filter(element => element === '\t'))
                .every((elem, i, prevArr) => !prevArr[i + 1] ? true : elem.length === prevArr[i + 1].length);
            console.log(tab)

            if (coma === true) {
                return ','
            }
            if (semiColon === true) {
                return ';'
            }
            if (tab === true) {
                return '\t'
            }
            return arr
        }
    }
}