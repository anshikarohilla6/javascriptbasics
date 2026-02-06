const head=document.getElementById("heading");

 console.log(head.innerText)//will show only visible text
 console.log(head.textContent)//will show all text including hidden text
 console.log(head.innerHTML)//will show all text with its tag/element

 // dom modification
 //create a new element and set its content
//  const newParagraph.textContent = "this is dynamically created paragraph";
 console.log(newParagraph.textContent);
 //append the new element to the container

const container = document.getElementById("container");
container.appendChild(newParagraph);

//remove element
document.querySelector("#container p").remove();

let date = new data ()
    console.log(date);

setTimeout(() => {
    console.log("welcome")
    alert("offer valid till 12 pm")
}, 5000);
setInterval(()=>{
    console.log("repeat");
},1000);

function handleClick(){
    document.getElementById("output").textContent="button clicked!";
}

