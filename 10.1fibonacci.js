function fibonacci (size){
    let fb = [0,1];
    for(let i=2;i<=size; i++ ){
        fb[i]=fb[i-1]+fb[i-2];
    }
    return fb;
}

let fibo = fibonacci(10);
console.log(fibo);