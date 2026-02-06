// function handleclick(){
//     document.getElementById("head").
//     style.color="red";

//     document.getElementById("btn").
//     textcontent="color changed"
// }

const handleClick = () => {
    const image = document.createElement("img");
    image.setAttribute("src","https://assets.clevelandclinic.org/transform/LargeFeatureImage/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg")
    image.setAttribute("alt","kr mangalam");

    document.getElementById("content").append(image);
}