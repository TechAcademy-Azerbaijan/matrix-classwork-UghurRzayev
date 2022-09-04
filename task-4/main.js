// Use this matrix for solution

let matrix = [
    [4, -2, 5],
    [1, -4, -12],
    [0, 1, -3]
];

let n = 0
for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    for (let j = 0; j < element.length; j++) {
        const element2 = element[j];
        if (element2>0) {
            n = parseInt(n) + parseInt(element2)
        }
    }
    
}console.log(n);