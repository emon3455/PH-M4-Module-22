function getMaxInArray(numbers){

    let max  = numbers[0];
    for(let i =0; i<numbers.length; i++){

        if(max<numbers[i]){
            max =numbers[i];
        }

    }

    return max;

}

let numbers = [10,25,200,9,30,80,99,30,100];
let max = getMaxInArray(numbers);
console.log("Maximum: ",max);