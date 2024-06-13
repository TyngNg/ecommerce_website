//#region unsplash API
const clientId = "BwbPJ5iMWHjY-Ecu4BnizmQTIgybna3i6cHo1mgD41g";

//#region hero

const sliderBackground = document.querySelector(".slider");
const sliderBackgroundImg =
  "a-white-and-green-wall-with-a-blue-and-yellow-stripe-aLGiPJ4XRO4";

fetch(
  `https://api.unsplash.com/photos/${sliderBackgroundImg}?client_id=${clientId}`
)
  .then((response) => response.json())
  .then((data) => {
    sliderBackground.style.backgroundImage = `url(${data.urls.regular})`;
  })
  .catch((error) => console.error("Error fetching image:", error));

//#endregion

//#region features
const featureImgs = document.querySelectorAll(".featureImg");
const featureImgIds = [
  "online-seller-works-at-home-office-and-packs-shipping-delivery-box-to-customer-small-business-owner-or-entrepreneur-doing-e-commerce-business-on-the-internet-1VFNNIS7OJ4",
  "person-holding-white-printer-paper-oNlMfgwLbWI",
  "person-holding-black-rectangular-paper-qlNNYxkKoDc",
  "black-ip-desk-phone-on-black-wooden-table-Dkn8-zPIbwo",
];

featureImgIds.forEach((imgId, index) => {
  fetch(`https://api.unsplash.com/photos/${imgId}?client_id=${clientId}`)
    .then((response) => response.json())
    .then((data) => {
      featureImgs[index].src = data.urls.regular;
    })
    .catch((error) => console.error("Error fetching image:", error));
});
//#endregion features

//#region gallery
const galleryImgs = document.querySelectorAll(".galleryImg");
const galleryImgIds = [
  "man-on-running-field-9HI8UJMSdZA",
  "woman-walking-on-pathway-during-daytime-mNGaaLeWEp0",
  "person-sitting-on-basketball-ringboard-reCcJhzeM9U",
];

galleryImgIds.forEach((imgId, index) => {
  fetch(`https://api.unsplash.com/photos/${imgId}?client_id=${clientId}`)
    .then((response) => response.json())
    .then((data) => {
      galleryImgs[index].src = data.urls.regular;
    })
    .catch((error) => console.error("Error fetching image:", error));
});
//#endregion

//#region newSeason
const nsImg = document.querySelectorAll(".nsImg");
const nsImgIds = [
  "pair-of-gray-running-shoes-Y4fKN-RlMV4",
  "woman-wearing-white-trainer-shoes-levitating-to-the-air-b-fkcjhW3lc",
];

nsImgIds.forEach((imgId, index) => {
  fetch(`https://api.unsplash.com/photos/${imgId}?client_id=${clientId}`)
    .then((response) => response.json())
    .then((data) => {
      nsImg[index].src = data.urls.regular;
    })
    .catch((error) => console.error("Error fetching image:", error));
});
//#endregion

//#endregion

const menuItems = document.querySelectorAll(".menuItem");
const wrapper = document.querySelector(".sliderWrapper");
const product = [
  {
    id: 1,
    title: "Air Force",
    price: "$119",
    colors: [
      { color: "red", img: "./img/shoes.png" },
      { color: "blue", img: "./img/shoes_blue.png" },
    ],
  },
  {
    id: 2,
    title: "Jordan",
    price: "$129",
    colors: [
      { color: "black", img: "./img/shoes2.png" },
      { color: "lightblue", img: "./img/shoes2_lightblue.png" },
    ],
  },
  {
    id: 3,
    title: "BLAZAR",
    price: "$139",
    colors: [
      { color: "brown", img: "./img/shoes3.png" },
      { color: "pink", img: "./img/shoes3_pink.png" },
    ],
  },
  {
    id: 4,
    title: "CRATER",
    price: "$149",
    colors: [
      { color: "white", img: "./img/shoes4.png" },
      { color: "green", img: "./img/shoes4_green.png" },
    ],
  },
  {
    id: 5,
    title: "HIPPIE",
    price: "$159",
    colors: [
      { color: "orange", img: "./img/shoes5.png" },
      { color: "yellow", img: "./img/shoes5_yellow.png" },
    ],
  },
];

let choosenProduct = product[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProductsizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove("active");
    });
    item.classList.add("active");
    wrapper.style.transform = `translateX(-${index * 100}vw)`;

    choosenProduct = product[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColor.forEach((colorElement, indexColor) => {
      colorElement.style.backgroundColor =
        choosenProduct.colors[indexColor].color;
    });
  });
});

currentProductColor.forEach((color, colorIndex) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[colorIndex].img;
  });
});

currentProductsizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductsizes.forEach((size) => {
      size.style.backgroundColor = "ghostwhite";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const close = document.querySelector(".close");
const payment = document.querySelector(".payment");
const overlay = document.querySelector(".overlay");
const productButton = document.querySelector(".productButton");

productButton.addEventListener("click", () => {
  document.body.classList.add("no-scroll");
  payment.style.display = "flex";
  overlay.style.display = "block";
  setTimeout(() => {
    payment.style.transform = "translateY(0)";
    overlay.style.transform = "translateY(0)";
  }, 1);
});

function closePayment() {
  document.body.classList.remove("no-scroll");
  payment.style.transform = "translateY(-100vh)";
  payment.style.display = "none";
  overlay.style.display = "none";
}

const galleryImg = document.querySelectorAll(".galleryImg");
const galleryTitle = document.querySelectorAll(".galleryTitle");

galleryImg.forEach((gallery, index) => {
  gallery.addEventListener("mouseover", () => {
    galleryTitle[index].style.transform = "scale(1.1)";
  });
  gallery.addEventListener("mouseout", () => {
    galleryTitle[index].style.transform = "scale(1.0)";
  });
});
