function showPortfolio() {
    var enteredName = document.getElementById("name").value.trim();

    if (enteredName.toLowerCase() === "genesis") {
        // If the entered name is "Genesis," show the portfolio section
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("portfolioSection").style.display = "block";
        document.getElementById("portfolioName").innerText = enteredName;
    } else {
        // If the entered name is not "Genesis," display an alert
        alert("That's not my name!");
    }
}
