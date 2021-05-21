const toggle = document.getElementById("toggle"); // 토글객체생성

toggle.addEventListener("change",function(event){
	document.body.classList.toggle("dark", event.target.checked);
})