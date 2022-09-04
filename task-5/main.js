// Use this matrix for solution

let matrix = [
    [134, 475, 30, 424],
    [303, 151, 419, 235],
    [248, 166, 90, 42],
    [318, 237, 184, 36]
];

let j = 0
let cem1 = 0
let d = 0
let cem2 = 0
for (let i = 0; i < matrix.length; i++) {
     const element = matrix[i];
     const element2 = element[j];   
     j=j+1 
     cem1 = parseInt(cem1) + parseInt(element2)    
    
    }  for (let a = 3; a >= 0; a--) {
        const element3 = matrix[d];
        const element4 = element3[a]
        d=d+1
        cem2 = parseInt(cem2) + parseInt(element4)
    } console.log(`${cem1} ${cem2}`);