
function collatz(n) {
    let sequence = [];
    let index = 0;
    let value = n;
    do {
        if (value % 2 === 0) {
            value = value / 2;
        } else {
            value = 3 * value + 1;
        }
        sequence.push([index, value]);
        index++;
    } while (value !== 1);
    return sequence;
}


function createData(n){
    let data = {
        x: [],
        y: []
    };
    let sequence = collatz(n);
    for (let i = 0; i < sequence.length; i++) {
        data.x.push(sequence[i][0]);
        data.y.push(sequence[i][1]);
    }
    return data;
}


//77031 <- Biggest collatz sequence for number under 100000

// module.exports = {
//     collatz: collatz,
//     createData: createData
// };