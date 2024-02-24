// difference between synchronous and Asynchronous

function synchronous() {
    console.log("Start Synchronous function");
     
        for (let i = 0; i < 10; i++) {
            console.log(i);
        }
    
    console.log("End Synchronous function");
}
// synchronous();

function Asynchronous(){
    console.log("Start Asynchronous function");
    setTimeout(() => {
        for(let i = 0; i<10; i++){
            console.log(i);
        }
    }, 2000);
    console.log("End Asynchronous function");
}
Asynchronous();