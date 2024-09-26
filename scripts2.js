var obj = {
    name: "simar",
    age: 25,
    // kuchbhi:kuchbhi
};

// object hota h key-value pairs

//agr hum chahte ke value obj vali show ho toh we use freeze
// Object.freeze(obj);

obj.name;
obj.age = 30;
obj["name"];
//just ways to access from object

// var arr=[1,2,3,4]
// function abcd(a,b,c){

// }
//no. of parameters is length function mai
// beca use functions are objects in js

function abcd() {
    return "hello";
}

var ans = abcd();

//line by line code chale is known as asynchronous
//asynchronous:  jo bhi code async nature ka ho, usse side stack mai bhej do and agle code mai chalao jo bhi sync nature ka ho, jab bhi saara sync code chal jaaye, tab check kro ki async code complete hua ya nhi and agr vo complete hua ho toh usse main stack mai laao and chala do

async function abc() {
    var blob = await fetch('https//randomuser.me/api/');
    //koi async code run kr sake
    // fetch is async by nature
    var res = await blob.json();
    console.log(res.results[0].name);
}

abc();



