const checkBtn = document.querySelector("#check-btn");
const resultDiv = document.querySelector("#result");

checkBtn.addEventListener("click", () => {
  const text1 = document.querySelector("#text1").value;
  const text2 = document.querySelector("#text2").value;

  // Call API to check for plagiarism
  //   fetch("http://api.example.com/check", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ text1, text2 })
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data.isPlagiarized) {
  //       resultDiv.textContent = "The texts are plagiarized.";
  //       resultDiv.style.display = "block";
  //     } else {
  //       resultDiv.textContent = "The texts are not plagiarized.";
  //       resultDiv.style.display = "block";
  //     }
  //   })
  //   .catch(error => console.error(error));

  if (text1.value || text2.value) {
    alert("hello brother");
  }
});
