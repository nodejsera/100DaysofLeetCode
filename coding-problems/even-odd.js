/**
 * 
 * Find a given number is even or odd
 */
console.time('start');
// function checkEven(number){
//     console.log("timeStart")
//     if (number % 2 == 0) {
//         console.log("Even");
//     } else {
//         console.log("odd");
//     }
//     console.timeEnd('start');
// }

function checkEven(number){
    if (number & 1 == 1) {
        console.log("Even");
    } else {
        console.log("odd")
    }
    // if (number % 2 == 0) {
    //     console.log("Even");
    // } else {
    //     console.log("odd");
    // }
    console.timeEnd('start');
}
checkEven(7);



