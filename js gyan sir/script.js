console.log("start...");

function myfunction(cb){
    setTimeout(() => {
        cb ("hello world ");

    },2000);
}
myfunction((data)=>{
    console.log(data);
});

console.log("end...");

get video list , get single video, get login