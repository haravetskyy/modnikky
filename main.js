function openMobileNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

window.onload = function() {
  var input = document.querySelector("#s-in-form");
  var button = document.querySelector("#join-button");
  if (input && button) {
    button.addEventListener("click", e => {
      if (input.value !== "") {
        alert("Welcome! You signed in!!");
      }
    });
  }
};
