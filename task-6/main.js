// Use this matrices for solution

let prices = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; 

let seats = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
]; 

let sum = 0;
for (let i = 0; i < seats.length; i++) { //
  let row = seats[i];
  for (let j = 0; j < row.length; j++) {
    const seat = seats[i][j];
    if (seat === 1) {
      sum += prices[i][j];
    }
  }
}

console.log(sum);