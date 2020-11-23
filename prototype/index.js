class Csv {
    parse(string, separator) {
        let stringToArr = string.split(/\n/);
        let arr;

        if (separator === undefined) {
            let comma = 0;
            let semicolon = 0;
            let tab = 0;
            let arrOfSpr = [];
            let separatorInRows = [];

            stringToArr.forEach((str) =>
                str.split("").filter((smb) => {
                    if (smb === ",") {
                        comma++;
                    } else if (smb === ";") {
                        semicolon++;
                    } else if (smb === "\t") {
                        tab++;
                    }
                })
            );
            arrOfSpr.push(comma, semicolon, tab);

            //  disposable function that make object and record it to variable objOfSpr

            const objOfSpr = ((comma, semicolon, tab) => {
                return { ",": comma, ";": semicolon, "\t": tab };
            })(comma, semicolon, tab);

            for (let key in objOfSpr) {
                if (objOfSpr[key] === Math.max(...arrOfSpr)) {
                    separator = key;
                }
            }

            // get amount of separators from every row

            stringToArr.forEach((ar) => {
                let separatorCount = 0;
                let splitterArray = ar.split("");
                splitterArray.forEach((el) => {
                    if (el === separator) {
                        separatorCount++;
                    }
                });
                separatorInRows.push(separatorCount);
            });

            function checkingAmOfSpr() {
                if (separatorInRows.every((a) => a === separatorInRows[0])) {
                    arr = stringToArr.map((ar) => ar.split(separator));
                } else {
                    console.error(
                        "You should have the equal amount of separators in every row"
                    );
                }
            }

            checkingAmOfSpr();
        } else if (separator === "," || separator === ";" || separator === "\t") {
            let separatorInRows = [];

            stringToArr.forEach((ar) => {
                let separatorCount = 0;
                let splitterArray = ar.split("");
                splitterArray.forEach((el) => {
                    if (el === separator) {
                        separatorCount++;
                    }
                });
                separatorInRows.push(separatorCount);
            });

            function checkingAmOfSpr() {
                if (separatorInRows.every((a) => a === separatorInRows[0])) {
                    arr = stringToArr.map((ar) => ar.split(separator));
                } else {
                    console.error(
                        "You should have the equal amount of separators in every row"
                    );
                }
            }

            checkingAmOfSpr();
        } else {
            console.error(
                'Your separator is incorrect. Please take "," , ";" or "tab"'
            );
        }

        return arr;
    }

    generate(array, separator) {
        let newArray = [];
        array.forEach((row) => {
            if (separator === undefined) {
                row = row.join(",");
                newArray.push(row);
            } else if (separator === "," || separator === ";" || separator === "\t") {
                row = row.join(separator);
                newArray.push(row);
            } else {
                console.error(
                    'Your separator is incorrect. Please take "," , ";" or "tab"'
                );
            }
        });

        return (newArray = newArray.join("\n"));
    }
}

class CsvArray extends Array {
    constructor(arr) {
        super();
        this.arr = arr;
    }

    parse(string, separator) {
        let comma = 0;
        let semicolon = 0;
        let tab = 0;
        let arr;
        let arrOfSpr = [];
        let stringToArr = string.split(/\n/);
        if (separator === undefined) {
            stringToArr.forEach((str) =>
                str.split("").filter((smb) => {
                    if (smb === ",") {
                        comma++;
                    } else if (smb === ";") {
                        semicolon++;
                    } else if (smb === "\t") {
                        tab++;
                    }
                })
            );
            arrOfSpr.push(comma, semicolon, tab);


            const objOfSpr = ((comma, semicolon, tab) => {
                return { ",": comma, ";": semicolon, "\t": tab };
            })(comma, semicolon, tab);

            for (let key in objOfSpr) {
                if (objOfSpr[key] === Math.max(...arrOfSpr)) {
                    separator = key;
                }
            }
            this.arr = stringToArr.map((ar) => ar.split(separator));
        } else if (separator === "," || separator === ";" || separator === "\t") {
            this.arr = stringToArr.map((ar) => ar.split(separator));
        }

        return this.arr;
    }

    generate(separator) {
        let newArray = [];
        this.arr.forEach((row) => {
            if (separator === undefined) {
                row = row.join(",");
                newArray.push(row);
            } else if (separator === "," || separator === ";" || separator === "\t") {
                row = row.join(separator);
                newArray.push(row);
            } else {
                console.error(
                    'Your separator is incorrect. Please take "," , ";" or "tab"'
                );
            }
        });

        return (newArray = newArray.join("\n"));
    }

    getCell(cell) {
        const index = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ];

        if (/[A-Z]\d+/.test(cell)) {
            cell = cell.split("");
            let letter = index.indexOf(cell.slice(0, 1).toString());
            let num = cell.slice(1).join("") - 1;

            try {
                return this.arr[num][letter];
            } catch {
                console.error("Sorry, but number of cell is incorrect");
            }
        } else {
            console.error("Sorry, but the format of cell is incorrect");
        }
    }
}


