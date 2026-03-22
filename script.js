document.getElementById("submitButton").addEventListener("click", function () {

    // Get values
    const username = document.querySelector("input[name='username']").value;
    const income = parseFloat(document.querySelector("input[name='income']").value);
    const ageLevel = document.querySelector("select[name='ageLevel']").value.toLowerCase();

    const savingsDiv = document.getElementById("savings");
    const feedbackDiv = document.getElementById("ageLevelFeedback");

    let savingsRate;

    // Validate age level
    if (ageLevel === "teenager") {
        savingsRate = 0.10;
    } else if (ageLevel === "young adult") {
        savingsRate = 0.20;
    } else if (ageLevel === "middle-aged adult") {
        savingsRate = 0.25;
    } else if (ageLevel === "older adult") {
        savingsRate = 0.15;
    } else {
        feedbackDiv.innerHTML = "Please select a valid age level.";
        savingsDiv.innerHTML = "";
        return;
    }

    // Clear feedback
    feedbackDiv.innerHTML = "";

    // Calculate savings
    const savings = income * savingsRate;

    // Show results section
    document.getElementById("results").style.display = "block";

    // Display result
    savingsDiv.innerHTML = `
        Hello <strong>${username}</strong> 👋<br><br>
        Based on your income of €${income.toFixed(2)},<br>
        your recommended savings is:<br><br>
        <strong>€${savings.toFixed(2)}</strong>
    `;
});
