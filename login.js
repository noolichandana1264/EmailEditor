function onSignIn(googleUser) {
  let profile = googleUser.getBasicProfile();
  console.log("User Information: ");
  console.log("Full Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());
  setDummyData(profile.getName(), profile.getEmail(), profile.getImageUrl());
  console.log("going");
  window.location.href = "https://chandana1264.myshopify.com/admin/apps";
}

let loginLink = document.getElementById("login-link");
loginLink.addEventListener(
  "click",
  setDummyData(
    "Bhairav Reddy",
    "tbhairavreddy@gmail.com",
    "https://bhairavreddy67.github.io/Imgaes/profile_pic.jpeg"
  )
);


