// Use this array for solution
let array = [3, 5, -7, 7, 5, -9, -4]

let arr = []
for (let i = 0; i < array.length; i++) {
    let count = 1
    const element =array[i]
    for (let j = 0; j < array.length; j++) {
        const element2 = array[j];
        if (element == element2 && i!==j) {
            count++
        }
    } if (count == 1) {
        arr.push(element)
    }
    
}console.log(arr);