
    const checkVin = (vin) => {
        let arrVin = [], sum=0, mod = 0;

        arrDecode = [
            {
                code: "A",
                decode: 1,
            },
            {
                code: "B",
                decode: 2,
            },
            {
                code: "C",
                decode: 3,
            },
            {
                code: "D",
                decode: 4,
            },
            {
                code: "E",
                decode: 5,
            },
            {
                code: "F",
                decode: 6,
            },
            {
                code: "G",
                decode: 7,
            },
            {
                code: "H",
                decode: 8,
            },
            {
                code: "I",
                decode: 0,
            },
            {
                code: "J",
                decode: 1,
            },
            {
                code: "K",
                decode: 2,
            },
            {
                code: "L",
                decode: 3,
            },
            {
                code: "M",
                decode: 4,
            },
            {
                code: "N",
                decode: 5,
            },
            {
                code: "O",
                decode: 0,
            },
            {
                code: "P",
                decode: 7,
            },
            {
                code: "Q",
                decode: 0,
            },
            {
                code: "R",
                decode: 9,
            },
            {
                code: "S",
                decode: 2,
            },
            {
                code: "T",
                decode: 3,
            },
            {
                code: "U",
                decode: 4,
            },
            {
                code: "V",
                decode: 5,
            },
            {
                code: "W",
                decode: 6,
            },
            {
                code: "X",
                decode: 7,
            },
            {
                code: "Y",
                decode: 8,
            },
            {
                code: "Z",
                decode: 9,
            },
            {
                code: "2",
                decode: 2
            },
            {
                code: "1",
                decode: 1,
            },
            {
                code: "2",
                decode: 2,
            },
            {
                code: "3",
                decode: 3,
            },
            {
                code: "4",
                decode: 4,
            },
            {
                code: "5",
                decode: 5,
            },
            {
                code: "6",
                decode: 6,
            },
            {
                code: "7",
                decode: 7,
            },
            {
                code: "8",
                decode: 8,
            },
            {
                code: "9",
                decode: 9,
            },
        ];
        arrWes = [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];
        if (vin.length !== 17) return false;
        else {
                    for (let i = 0; i < vin.length; i++) {
                if (vin[i] === "I" || vin[i] === "O" || vin[i] === "Q") return false;
                else {
                    arrVin[i] = vin[i];
                    arrDecode.forEach(function(elem) {if(arrVin[i] === elem.code) arrVin[i] = elem.decode;
                    });
                    sum += arrVin[i]*arrWes[i];

                }
            }
 mod = sum % 11
            if (mod === vin[8]) return true; else {
                if (mod === 10 && vin[8] === "X") return true;
                else return false;
            }

        }
    };
    id1.innerHTML = checkVin("5VGYMVUX7JV764512")











