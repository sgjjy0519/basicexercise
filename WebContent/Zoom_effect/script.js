const container = document.getElementById("container");
const img = document.querySelector("img");

container.addEventListener("mousemove", function(event) {
    const x = event.clientX - event.target.offsetLeft;
    const y = event.clientY - event.target.offsetTop;

    console.log(x, y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";
});

container.addEventListener("mouseleave", function(){
	img.style.transformOrigin = "center center";
	img.style.transform = "scale(1)";
})
