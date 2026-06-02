function abrirLivro(){
    document.getElementById("inicio").style.display = "none";
    document.getElementById("livro").style.display = "flex";    
}

for(let i = 0; i < 25; i++){

    let heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration =
      (Math.random() * 3 + 4) + "s";

    document.body.appendChild(heart);
}
