function wordReverse (message){

    let rev = message.split(" ");
    let result = [];

    for(let i=rev.length-1; i>=0; i--){
        result.push(rev[i]);
    }

    const revText=result.join(" ");
    
    return revText;

}

let message  = "i love you allah";
let revText = wordReverse(message);
console.log(revText);