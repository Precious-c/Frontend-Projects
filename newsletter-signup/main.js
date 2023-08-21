document.querySelector(".button").addEventListener("click", () => {
  //Adds a click event to the button
  const emailInput = document.getElementById("emailInput").value.trim(); //gets the email input value and removes spaces
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
    console.log("true " + emailInput);
    document.querySelector("span").style.visibility = "hidden";
    document.getElementById("emailInput").classList = "";
    document.querySelector(".btn-link").setAttribute("href", "./success.html");
  } else {
    console.log("false " + emailInput);
    document.querySelector("span").style.visibility = "visible";
    document.getElementById("emailInput").classList = "emailInput-error";
  }
});
