function getMinInArray(numbers){

    let min = numbers[0];
    for(let i=0; i<numbers.length; i++){
        if(min>numbers[i]){
            min = numbers[i];
        }
    }

    return min;

}

let numbers = [10,25,1,200,9,30,80,99,30,100];
let min = getMinInArray(numbers);
console.log("Minimum: ",min);