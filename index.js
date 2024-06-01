const body= document.querySelector("body")
tagle = document.querySelector(".tagle")
tagle.addEventListener("click",() => {tagle.classList.toggle("active")
if (body.style.backgroundColor==="black"){
    body.style.backgroundColor=("white")
}else{   body.style.backgroundColor=("black")
}
});


