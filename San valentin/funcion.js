document.addEventListener("DOMContentLoaded", function () {
  // Seleccionamos los botones
  const btnYes = document.getElementById("btnYes");
  const btnNo = document.getElementById("btnNo");

  // Verificamos si existen antes de asignar eventos
  if (btnYes) {
    btnYes.addEventListener("click", function () {
      window.location.href = "valentin.html"; 
    });
  }

  if (btnNo) {
    btnNo.addEventListener("click", function () {
      window.location.href = "error.html"; // Redirige al mensaje de error
    });
  }
});

onload = () => {
    document.body.classList.remove("container");
};
