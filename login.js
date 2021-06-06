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
    "Chandana",
    "noolichandana1264@gmial.com",
    "noting"
  )
);

function setDummyData(name, email, imageUrl) {
  let obj = {
    name: name,
    email: email,
    profileImageUrl: imageUrl,
  };
  localStorage.setItem("currentUser", JSON.stringify(obj));
}


