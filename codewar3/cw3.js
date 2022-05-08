

function fff(str) {

   let  arrayStr = str.split('');

    let newArrayStr = arrayStr.filter((arr)=>(arr === 'a' | arr === 'e' | arr === 'i' | arr === 'o' | arr === 'u'));

    console.log(arrayStr);
    console.log(newArrayStr);
    console.log(newArrayStr.length);

    return newArrayStr;
}

id1.innerHTML = fff('aeiou');