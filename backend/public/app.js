const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector(".name-input");
const weightInput = document.querySelector(".weight-input");
const priceInput = document.querySelector(".price-input");
const listItems = document.querySelector(".list-items");

const checkValue = ()=>{
  if (nameInput.value === "" || weightInput.value ==="" || priceInput.value === ""){
    submitBtn.disabled = true;
  }
  else{
    submitBtn.disabled = false;
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  postRequest();
  getRequest();
});
window.addEventListener('load', () => {
  getRequest();
});

const postRequest = async () => {
  try {
    const postResponse = await fetch("/newEq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameInput.value,
        weight: weightInput.value,
        price: priceInput.value,
      }),
    });
    nameInput.value = "";
    weightInput.value = "";
    priceInput.value = "";
  } catch (error) {
    console.log(error);
  }
};

const getRequest = async () => {
  try {
    const getResponse = await fetch("/allEq", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await getResponse.json();
    updateList(data);
  } catch (error) {
    console.log(error);
  }
};

const deleteEq = async (e) => {
  const id = e.target.id;
  try {
    const deleteReq = await fetch("/deleteEq" + "/" + id, {
      method: "DELETE",
    });
    getRequest();
  } catch (error) {
    console.log(error);
  }
};

const updateList = (data) => {
  data = data.eq;
  listItems.innerHTML = "";

  data.map((eq, index) => {
    listItems.innerHTML += `<div class="list-item">
    <div class="number">${index+1}.</div>
    <div class="eq-name">${eq.name}</div>
    <div class="eq-weight">${eq.weight}Kg</div>
    <div class="eq-price">$${eq.price}</div>
    <div><i class="bi bi-trash" class="eq-delete" id="${eq._id}" onclick="deleteEq(event)"></i></div>
  </div>
</div>`;
  });
};
