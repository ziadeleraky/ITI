let checkEvent = new Event("timeout");

document.addEventListener("timeout", function () {
  let username, password;
  let interval = setInterval(function () {
    username = document.getElementById("usrname").value;
    password = document.getElementById("password").value;
    if (username && password) {
      clearInterval(interval);
    } else {
      alert("Please enter your data...");
    }
  }, 5000);
});

document.dispatchEvent(checkEvent);
