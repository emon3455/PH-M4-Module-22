function fibonacci(size){
    let n1=0,n2=1,n3;
    for(let i=0; i<=size; i++){
        console.log(n1);
        n3=n1+n2;
        n1=n2;
        n2=n3;
    }
}

let size = 10;
fibonacci(size);