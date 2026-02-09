function checkURL() {
  let url = document.getElementById("urlInput").value;
  let result = document.getElementById("result");
  let riskScore = 0;

  // Empty input
  if (url === "") {
    result.innerText = "Please enter a website link";
    result.style.color = "orange";
    document.getElementById("loginBox").style.display = "none";
    return;
  }

  // HTTPS check
  if (!url.startsWith("https://")) {
    riskScore += 50;
  }

  // Suspicious words check
  let suspiciousWords = ["login", "verify", "bank", "secure", "update"];

  for (let word of suspiciousWords) {
    if (url.toLowerCase().includes(word)) {
      riskScore += 30;
    }
  }

  // Final decision
  if (riskScore >= 50) {
    result.innerText = "⚠️ High Risk Website (" + riskScore + "%)";
    result.style.color = "red";
    document.getElementById("loginBox").style.display = "block";
  } else {
    result.innerText = "✅ Low Risk Website (" + riskScore + "%)";
    result.style.color = "green";
    document.getElementById("loginBox").style.display = "none";
  }

  if (!url.includes(".") || url.endsWith(".")) {
  result.innerText = "❌ No valid website exists";
  result.style.color = "red";
  document.getElementById("loginBox").style.display = "none";
  return;
}

}

function fakeLogin() {
  alert(
    "⚠️ This could be a phishing attempt.\nNever enter your real password on suspicious sites."
  );
}