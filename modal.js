// Abrir o modal quando o botão é clicado
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");

openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

// Fechar o modal quando o botão "X" é clicado
const closeModalBtn = document.getElementById("closeModalBtn");

closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
});



// Fechar o modal quando clicar fora do modal
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
