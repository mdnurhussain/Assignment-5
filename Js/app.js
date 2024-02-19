const tickets = document.getElementsByClassName("ticket");
let count = 0;
let totalPrice = 0;

for (const ticket of tickets) {
    ticket.addEventListener("click", function (event) {
    if (count >= 4) {
      return alert("Limit is Crossed");
    } else {
      const seatElement = event.target;
      seatElement.classList.remove("bg-[#F7F8F8]");
      seatElement.classList.add("bg-[#1DD100]");
      seatElement.classList.add("pointer-events-none");
      seatElement.classList.add("text-white");

      const seatLeft = getElementTextById("seat-left");
      const leftValue = seatLeft - 1;
      count = count + 1;

      const seatNumber = event.target.innerText;

      const selectContainer = document.getElementById("select-container");
      const li = document.createElement("li");
      li.classList.add("flex");
      li.classList.add("justify-between");
      li.classList.add("mb-2");

      const p = document.createElement("p");
      p.innerText = seatNumber;
      const p2 = document.createElement("p");
      p2.innerText = "Economoy";
      const p3 = document.createElement("p");
      p3.innerText = 550;

      const price = p3.innerText;
      const priceConvert = parseInt(price);

      totalPrice = totalPrice + priceConvert;
      setInnerText("total-price", totalPrice);

      const gTotalEl = (document.getElementById("grand-total").innerText =
        totalPrice);

      li.appendChild(p);
      li.appendChild(p2);
      li.appendChild(p3);
      selectContainer.appendChild(li);

      setInnerText("seat-count", count);
      setInnerText("seat-left", parseInt(leftValue));
    }
  });
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function setInnerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}

function grandTotal() {
  const applyBtnEl = document.getElementById("apply-btn");
  const couponDivEl = document.getElementById("coupon-div");
  const couponInput = document.getElementById("coupon-input").value;

  const gradTotalCost = getElementTextById("grand-total");
  const convertGrandTotal = parseInt(gradTotalCost);
  couponInput.value = "";

  if (couponInput === "NEW15") {
    const fiftyPercentDiscount = (convertGrandTotal * 15) / 100;
    const discountedAmount = convertGrandTotal - fiftyPercentDiscount;
    setInnerText("grand-total", discountedAmount);
    couponDivEl.classList.add("hidden");
  } else if (couponInput === "Couple 20") {
    const towentyPercentDiscount = (convertGrandTotal * 20) / 100;
    const discountedAmount = convertGrandTotal - towentyPercentDiscount;
    setInnerText("grand-total", discountedAmount);
    couponDivEl.classList.add("hidden");
  } else {
    return alert("Invalid Coupon");
  }
}



