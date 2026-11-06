// console.log("hii");

// {
// var customerName="Saman";
// let customerAddress="Colombo";

// console.log(customerName);
// console.log(customerAddress);
// }

// console.log(customerName);
// console.log(address);
// const address="walana";
// address="Panadura";

// const numbers=[1,2,3,4,5];
// console.log(numbers);
// numbers="Hiii";
// console.log(numbers);

// const numbers=[10,20,30,40,50,60,70,80];
// console.log(numbers[6]);
// numbers[numbers.length-1]=100;

// numbers.push(90); --> adding a new element to the end of the array
// numbers.pop();

// console.log(numbers.toReversed());

// const numbers=[10,11,100,19,80,70];
// console.log(numbers.toSorted());
// console.log(numbers.length);
// numbers.unshift(5); -->adding a new element to the beginning of the array
// numbers.shift(); -->removing the first element of the array
// console.log(numbers.indexOf(100));

// let numberList=[10,20,30,40,50];
// console.log(numberList);

// function updateValue(){
//     let oldValue=document.getElementById("oldValue").value;
//     let newValue=document.getElementById("newValue").value;

//     let index=numberList.indexOf(oldValue);
//     if(index!==-1){
//         numberList[index]=newValue;
//         document.getElementById("result").innerHTML=numberList;
//     }else{
//         document.getElementById("result").innerHTML="invalid value";
//     }
// }



// console.log(numbers);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// METHODS
// ---------Step 1
// function getSum(num1,num2){
//     return num1+num2;
// }
// console.log(getSum(10,20));

//---------Step 2
// let getSum=function (num1,num2){
//     return num1+num2;
// }
// console.log(getSum(10,20));

//---------Step 3
// let getSum=(num1,num2)=>{
//     return num1+num2;
// }

// let getSum=(num1,num2)=> num1+num2;

//---------Step 4
// let getSum=num1=>num1;

//---------Step 5
// let getSum=num1=>{
//     return num1;
// }

// console.log(getSum(10));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ARRAY LISTS

// const nameList=["Saman","Kamal","Nimal","Sunil"];
// nameList.forEach(cName=>(console.log(cName)));

// const empSalary=[75000, 30000, 25000,90000,150000];
// const newSalaryAr=empSalary.map(salary=>salary*2);
// console.log(newSalaryAr);


const nameList=["Saman","Kamal","Nimal","Sunil"];
const newNameAr=nameList.map(name=>"Welcome "+name +"!");
console.log(newNameAr);

