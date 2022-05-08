function ssb(n) {

    let arrayNumber = [''];
    let i = 0, summ = 0, summ1 = '';


    while (n > 0) {
        arrayNumber[i] = n;
        summ1 = String(arrayNumber[i])
        summ += summ1.length;
        n = n - 1;
        i++;

        // console.log(summ1.length)
    }
    // console.log(arrayNumber)
    // console.log(summ)
    return summ;
}

function ins(sumNum) {
    let number=0;

    if (sumNum<10)  number = sumNum;
    else if (sumNum<100)  number = (sumNum + 9)/2;
    else if (sumNum<1100)  number = (sumNum + 108)/3;
    else if (sumNum<11100)   number = (sumNum + 1107)/4;
    else if (sumNum<111100)  number = (sumNum + 11106)/5;
    else if (sumNum<1000000)   number = (sumNum + 111105)/6;
    return Math.floor(number);

}

// id1.innerHTML = `ssb(190): ${ssb(190)} ssb(200): ${ssb(200)} ssb(210): ${ssb(210)} ssb(300): ${ssb(300)}`;

id1.innerHTML = ssb(7000);
id2.innerHTML = ins(26893);






