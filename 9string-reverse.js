function stringRev(message){

    let res = "";
    for(let i=message.length-1; i>=0; i--){
        res = res.concat(message[i]);
    }
    return res;

}

let message  = "i love you allah";
let result  = stringRev(message);
console.log(result);