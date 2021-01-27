let arr = ["jola", "pola", 2, 56, 569, 45]

// let arrLength = arr.length

// let random = Math.floor(Math.random() * arrLength)

// let arrEl = arr[random]
// console.log(arrEl)

function randomArray(arr){
    const arrLength = arr.length
    let random = Math.floor(Math.random() * arrLength)
    let arrEl = arr[random]
    return arrEl

}

console.log(randomArray(arr))