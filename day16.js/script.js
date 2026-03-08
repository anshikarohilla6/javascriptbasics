const pro = new Promise((res,rej)=>{
    setTimeout(()=> {
        let payment = false;
        if (payment==="true")
            res("payment done");
        else
            rej("payment failed")
    },3000)
})

async function getData () {
    try{
        const value = await pro;
        console.log(value);
        console.log("dashboard access given");
    }catch(error){
        console.error(error);
        console.log("access denied");
    }
}
getData();