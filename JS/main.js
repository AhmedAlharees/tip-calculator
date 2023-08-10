const billInput = document.querySelector("#calc__bill--input");
const tipContainer = document.querySelector(".tips__container");
const peopleInput = document.querySelector("#calc__people--input");
const tipPerPerson = document.querySelector("#tip__per__person");
const tipTotal = document.querySelector("#tip__total");
const resetBtn = document.querySelector(".reset__button");
const customTip = document.querySelector(".custom__tip");

function claculateTip(e) {
  const billValue = billInput.value;
  let tipValue = e.target.value;
  const numOfPeople = peopleInput.value;

  if (billValue && tipValue && numOfPeople) {
    if (e.target.classList.value == "custom__tip") tipValue /= 100;
    tipAmount = +((+billValue * +tipValue) / +numOfPeople).toFixed(2);
    totalBillPerPerson = +((+billValue + tipAmount) / +numOfPeople).toFixed(2);
    tipPerPerson.textContent = tipAmount ? "$" + tipAmount : "$0.00";
    tipTotal.textContent = totalBillPerPerson
      ? "$" + totalBillPerPerson
      : "$0.00";
  }
}

tipContainer.addEventListener("click", claculateTip);
tipContainer.addEventListener("keydown", claculateTip);

resetBtn.addEventListener("click", () => {
  billInput.value = peopleInput.value = customTip.value = "";
  tipTotal.textContent = tipPerPerson.textContent = "$0.00";
});
