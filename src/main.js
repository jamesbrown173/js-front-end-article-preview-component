console.log("running");
const share_buttons = document.getElementsByClassName("share-button");
const share_container_mobile = document.getElementById(
  "share-container-mobile"
);
const share_container_tablet = document.getElementById(
  "share-container-tablet"
);
const avatar_container = document.getElementById("avatar-container");

console.log(share_buttons);

// Loop over the two share buttons to add function for hiding or showing elements
for (let i = 0; i < share_buttons.length; i += 1) {
  share_buttons[i].addEventListener("click", (e) => {
    share_container_mobile.classList.toggle("hidden");
    avatar_container.classList.toggle("hidden");
    avatar_container.classList.toggle("md:flex");
    share_container_tablet.classList.toggle("md:hidden");
  });
}

// share_button.onclick = function () {
//   console.log("clicked");
// };

// const avatar_container = document.getElementById("avatar-container");
// const share_container = document.getElementById("share-container");

// // share_container.classList.toggle("hidden");
// // share_container.classList.toggle("hidden");

// // share_container.onclick = function () {
// //   console.log("You clicked");
// // };
