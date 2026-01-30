let user={
    name:"anshika",
    address:{
        city: "gurugram",
        state: "haryana",
    },      
    mobileno: 9044183322,
    favcolor : ["white","black","red"],
    demo:function(){
        return"demo function"
    }
}
console.log(user.name,user.mobileno,user.favcolor[2],user.address.city,user.demo());

console.log("my name is "+user.name+". my fav color is "+user.favcolor[0]);

//string literal
console.log(`my name is ${user.name}. my fav color is ${user.favcolor[0]}`);

 //object methods

 //object.keys(variable name)

 console.log(Object.keys(uder));
  

const car = {
    make:"mahindra",
    model: "thar",
};
//Object,freeze(car);- we cant add anything while in seal we can change or update value and key pair.
Object.seal(car);
car.model="XUV700"
car.color = "zblack";
console.log(car);


