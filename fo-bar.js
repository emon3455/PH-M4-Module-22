function bar(){
    console.log("Bar");
}

function foo(){
    console.log("Foo");
    bar();
}

foo();