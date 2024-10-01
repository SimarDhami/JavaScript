//1. logical AND(&&) operator and logical OR(||) operator

function getname(){
    return 'simar'
}


let a=false
let b=true
// console.log(a&&b)
// console.log(a && getname())


//2. template literals
let firstname='simar';
let surname='dhami';
let prefix='er'

console.log(prefix+" "+ firstname +" "+surname)

console.log(`${prefix} ${firstname} ${surname}`);

//3. ternary operator: same as if else
let returnage=true;
function getage(age){
    return `this person is ${age} years old`
}
function getcity(){
    return `person is from usa`
}

// if(returnage){
//     console.log(getage(30))
// }else{
//     console.log(getcity())
// }

//condition ? statementfortrue : statementforfalse

returnage ? console.log(getage(70)) : console.log(getcity())

//4. object and array destructuring
//shorthand property names

const id=1;
const title="product 1";
const rating=5;

const product={
    // id:id,
    // title:title,
    // rating:rating
    //this can be written same as
    id,
    title,
    rating
}

console.log(product);


const prodone={
    prodname:'product one',
    proddescription: 'product description'

}
// let prodname=prodone.prodname;
// let proddescription=prodone.proddescription;

const {prodname,proddescription} = prodone;
//destructuring the property

console.log(prodname,proddescription)

let array=['john','doe'];
// let arrfirstelement=array[0];
// let arrsecondelement=array[1];

let [arrfirstelement,arrsecondelement ]=array;

console.log(arrfirstelement,arrsecondelement);


//5. default parameters
function sum(num1=1,num2=2){
    return num1+num2;
}
// if don't want to pass value here,we can pass in func
// let res=sum(1,2)
let res=sum(10,20)
//agr yaha value hai toh fun vali value ko override kr deta
console.log(res);

//6. spread operator, rest operator
const arrone=[1,2,3];
const arrtwo=[4,5,6];

console.log(...arrone,100,...arrtwo);
// console.log([...arrone])


function something(a,b,...c){
    console.log(a,b,c);
    return 'hello'
}

console.log(something(1,2,3,4,5));

//7. arrow functions and es6 methods

// function funname(){
//     //
// }

const funcname=()=>{
    //
}

//map

const personarray=[
    {
        name:'simar',
        age:'22',
        city:'bangalore'
    },
    {
        name:'tashu',
        age:'21',
        city:'chandigarh'
    },
    {
        name:'om',
        age:'22',
        city:'ludhiana'
    },
    {
        name:'gungeet',
        age:'23',
        city:'bangalore'
    }
]

let extractpersonname=personarray.map(
    (person,index)=>
    // return person.name;
    // return person.age;
    // return person.city;
    `${person.name}-${person.age}-${person.city}`
);
//gives same result
console.log(extractpersonname);

//filter
let extractfrombangalore=personarray.filter((person,index)=>person.city==='bangalore')

console.log(extractfrombangalore);

//some and every
let checksomemethod=personarray.some((person,index)=>person.age==='22')

console.log(checksomemethod)


let checkeverymethod=personarray.every(person=>person.age==='22');
console.log(checkeverymethod);


// array find()
// array reduce()
// array includes()
// indexOf 
// findIndex

const arraythree=[1,2,3,4]
//find will return the first occurence
let checkfindmethod=arraythree.find((item,index)=>index===1)
console.log(checkfindmethod,'find')

//reduce
let checkreduce=arraythree.reduce((acc,current,index,array)=>{
    console.log(acc,current,index,array);
    return acc+current
},0)//this 0 is the initial value

console.log(checkreduce,'reduce');

//include
console.log(arraythree.includes(3),'includes');

//indexOf
let checkindex=arraythree.indexOf(2)
console.log(checkindex,'indexof');

//findIndex
let checkfindindex=arraythree.findIndex(item=>item===300)
console.log(checkfindindex,'findindex');


//import and export
// components->a,b,c->
// export const SomeName=()=>{

// }

// function bcomponent(){
//     return 'something'
// }

// export default bcomponent
 
// import {SomeName} from 'path';
// import bcomponent from 'path';


//fetch api and async await

const list=document.querySelector('.list');
async function fetchListOfData(){
    try{
        const response=await fetch('https://dummyjson.com/products',{
            method:'GET'
        })
        const result=await response.json();
        console.log(result);

        if (result && result.products && result.products.length) renderProducts(result.products)

    }catch(e){
        console.log(e);
    }
}

function renderProducts(getproducts){
    list.innerHTML=getproducts.map((item)=>`<p>${item.title}</p>`).join(" ")
}

fetchListOfData()










































