const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const response = await fetch("http://localhost:5000/newEq");
  // console.log(response);
  const data = await response.json();
  console.log(data);
});
