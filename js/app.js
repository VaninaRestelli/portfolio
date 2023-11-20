window.onload = function () {
  emailjs.init("Oqa_XHWRGC-iR5EBl");
  const divMensaje = document.querySelector("#divMensaje");
  const divInputs = document.querySelector("#divInputs");
  const spanEnviando = document.querySelector("#spanEnviando");
  const botonEnviar = document.querySelector("#botonEnviar");
  document.querySelector("#formContacto").addEventListener("submit", function (e) {
    e.preventDefault();
    botonEnviar.setAttribute("disabled", "");
    spanEnviando.classList.remove("oculto");
    this.contact_number.value = (Math.random() * 100000) | 0;
    emailjs
      .sendForm("service_s8lt85c", "template_0bl4z4f", this)
      .then(
        function () {
          divMensaje.classList.remove("oculto");
          divInputs.classList.add("oculto");
        },
        function (error) {
          alert(error);
        }
      )
      .finally(function () {
        botonEnviar.removeAttribute("disabled");
        spanEnviando.classList.add("oculto");
      });
  });
};
