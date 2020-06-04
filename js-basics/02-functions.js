// "normal" function
function saySomething() {
    console.log("Hello World");
}

// "arrow" function
// "annoymous" function
// functions are first class citizen
// you can assign a function to a variable
let saySomething2 = () => {
    console.log("Hello World Again")
}

saySomething2();

function addTwo(n1, n2) {
    return n1 + n2;
}

let addTwoNumbers = (n1,n2)=>n1+n2;