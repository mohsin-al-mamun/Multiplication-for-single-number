// let num = 2
//  2*1=2
//  2*2=4
//  2*3=6
//  2*4=8
//  2*5=10
//  2*6=12
//  2*7=14
//  2*8=16
//  2*9=18
//  2*10=20
// console.log(`The Multiplication table of ${num} is..`)
// for (let i = 1; i < 11; i++) {
//     console.log(`${num}x${i}= ${num * i}`);
//     // console.log(`${num * i}`)
// }

// multiplicationTable(2)

function multiplicationTable(num) {
    console.log(`The Multiplication table of ${num} is..`);
    for (let i = 1; i < 11; i++) {
        console.log(`${num}x${i}= ${num * i}`);
    }
}

multiplicationTable(15)