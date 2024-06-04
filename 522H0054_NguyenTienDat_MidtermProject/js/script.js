window.addEventListener("beforeunload", function (event) {
    var confirmationMessage = "Leave this page?";
    event.returnValue = confirmationMessage; 
    return confirmationMessage; 
});

document.addEventListener('DOMContentLoaded', function() {
    var text = document.getElementById("additionalText");
    text.classList.add("hidden");
  });
  
  function toggleText() {
    var text = document.getElementById("additionalText");
    text.classList.toggle("hidden");
  }


  