
/* 
const obj1 = { 
    hacker: "Narayana",
    input: "me",
    hello: "hello"
}

const obj2 = {
    hacker: "sree",
    input: "me",
    hello: "hello"
}


let obj3 = [];
for (const [key, val] of Object.entries(obj1)) {
    if(val == obj2[key]){
        obj3.push(val)
    }
}
console.log(obj3); */


/* const arr = [3,5,1,2,6,8,9,12,11,9];

let finalArr = []
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[j] < arr[j+1]){
            let tmp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = tmp
        }
    }
}

console.log(dup) */


/* const dupArr = [2,3,2,5,4,3,6,4]
let uniqArr = []
for(let i=0; i<dupArr.length; i++){

    if(dupArr.indexOf(i) != -1){
        uniqArr.push(dupArr[i])
    }
}
console.log(uniqArr) */

/************* Factorial ***************** */

/* function Factorial(num){
    console.log(num);
    if(num == 0) return true;
    let data = num * Factorial(num -1);
    return data;
}

let data = Factorial(5);
console.log(data); */

/***********  Bubble sort ****************/

/* const arr = [6,9,5,4,1,2,5]

function bubbleSort(arr){
    let newArr = []
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1; j++){
            if(arr[j] > arr[j+1]){ */
                /* let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp */
                /* [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;

}

let data = bubbleSort(arr)
console.log(data) */

