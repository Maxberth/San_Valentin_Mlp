const btnNo = document.querySelector("#btn-random");

function moverAleatoriamente(btn) {
    btn.style.position = "absolute";
    btn.style.top = Math.random() * 80 + "%";
    btn.style.left = Math.random() * 80 + "%";
}

btnNo.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target);
});