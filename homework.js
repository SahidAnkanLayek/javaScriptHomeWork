// Questions:
// 1. Print all the elements of an array using forEach Method

 let arr=[10,20,30,40,50]
 function callBack(ele){
    console.log(ele);
 }
 arr.forEach(callBack)

 //using Arrow function 
 //arr.forEach(()=>console.log(ele))




// 2. Add 10 to all the elements of an array using map Method

let arr1=[12,56,98,36,89];
function addElement(ele){
    return ele+10;
}

let ans1 =arr1.map(addElement);
console.log(ans1);


// 3. Filter out all the students's marks who has got less than 50 in the exam

let arr2=[56,85,36,12,63,10,45];
function marksCalculation(ele){
    return ele<50;
}
let ans2 = arr2.filter(marksCalculation);
console.log(ans2);


// 4. Find out the average number of that class using reduce Method


let arr3=[63,56,22,10,32,63];
function averageCalculation(accmulator,currentvalue){
    return accmulator+currentvalue
}
let avg =arr3.reduce(averageCalculation,0);
console.log(avg/arr3.length);