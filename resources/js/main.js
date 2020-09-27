// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

function plus(val) {
  val.innerHTML = '<i class="fas fa-plus"></i>';
}
function minu(val) {
  val.innerHTML = '<i class="fas fa-minus"></i>';
}
function checkIcons() {
  setTimeout(() => {
    let icon1 = document.querySelector(".showIconOne");
    let icon2 = document.querySelector(".showIconTwo");
    let icon3 = document.querySelector(".showIconThree");
    let icon4 = document.querySelector(".showIconFour");
    let c1 = document.querySelector("#collapseOne");
    let c2 = document.querySelector("#collapseTwo");
    let c3 = document.querySelector("#collapseThree");
    let c4 = document.querySelector("#collapseFour");
    console.log("cl");
    if (c1.classList.contains("show")) {
      minu(icon1);
    } else {
      plus(icon1);
    }
    if (c2.classList.contains("show")) {
      minu(icon2);
    } else {
      plus(icon2);
    }
    if (c3.classList.contains("show")) {
      minu(icon3);
    } else {
      plus(icon3);
    }
    if (c4.classList.contains("show")) {
      minu(icon4);
    } else {
      plus(icon4);
    }
  }, 500);
}
