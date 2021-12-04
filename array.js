// class Students{
//     constructor(n,a){
//     this.name= n;
//     this.age = a
//     } 
// }

// let  obj = new Students("ayesha",22)

// console.log(obj.name)

let array = [0,1,2,3,4,5];



// array.push(7)  // add in end
// array.pop() // remove  in end

//  array.shift() // remove  in begenning
// array.unshift(0) // add in begenning
array.splice(1,2)
console.log(array)

let array1 = [2,5,3,5,2,4]
 let array2 = [1,8,6,5,6,9]

 let array3 = array1.concat(array2)
console.log(array3)

console.log(array2.length)

array2.forEach((va)=>{
    console.log(va)
})
