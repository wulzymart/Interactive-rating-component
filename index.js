const ratingBox = document.querySelector(".rating");
const ratingUnits = document.querySelectorAll(".rating-units");
const thankYouRating = document.querySelector("#selected-rating");
const rateUsCard = document.querySelector(".rate-us");
const thankYouCard = document.querySelector(".thanks");
let selectedRating;

ratingBox.addEventListener("click", function (e) {
  if (!e.target.classList.contains("rating-units"));
  if (e.target.classList.contains("rating-units")) {
    ratingUnits.forEach((ratingUnit) =>
      ratingUnit.classList.remove("selected")
    );
    e.target.classList.add("selected");
    selectedRating = e.target.innerText;
  }
});
document.querySelector("button").addEventListener("click", function (e) {
  console.log(selectedRating);
  if (selectedRating) {
    thankYouRating.innerText = selectedRating;
    setTimeout(function () {
      rateUsCard.classList.add("hidden");
      thankYouCard.classList.remove("hidden");
    }, 1000);
  } else {
    alert("Select a rating first");
  }
});
