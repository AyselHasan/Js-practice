var elements = document.getElementsByClassName("main-content");
var button = document.querySelectorAll(".btn-btn");

button.forEach((e) => {
  e.addEventListener("click", function () {
    e.parentNode.classList.add("active");
    var activeclasses = document.getElementsByClassName("active");
    if (activeclasses.length < 3) {
      e.parentNode.classList.toggle("blur");
      if (e.parentNode.classList.contains("blur")) {
        e.innerText = "Hediyyeni ac";
        e.parentNode.classList.remove("active");
      } else {
        e.innerText = "Hediyyeni bagla";
      }
    } else if (e.parentNode.classList.contains("active")) {
      e.parentNode.classList.remove("active");
    }
  });
});

var imgUrls = new Array(
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carbon-fiber-shelby-mustang-1600685276.jpg?crop=0.9988636363636364xw:1xh;center,top&resize=480:*",
  "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/98_-_fastest_accelerating_road_cars_-_ferrari_f8_tributo.jpg?itok=cK2YYgq2",
  "https://car-images.bauersecure.com/pagefiles/79892/60_polestar-2.jpg",
  "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/story/hero_image/2019-Porsche-911-coupe-red-press-image-1001x565p-%281%29.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lucid-air-103-1599688020.jpg?crop=0.724xw:0.543xh;0.0673xw,0.173xh&resize=1200:*",
  "https://s3-prod.autonews.com/s3fs-public/lucidair-main_i.jpg",
  "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/large-2479-s-classsaloon.jpg?itok=QTxMln2k",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jPfwxWpclHTRkIpV5cnbspdGIDRwyEt8yg&usqp=CAU",
  "https://etimg.etb2bimg.com/photo/75618730.cms"
);

//var elments = document.getElementsByClassName("change-btn");
// elments.forEach((e) => {
//   e.addEventListener("click", function () {
//     var changedPics = document.getElementsByClassName("change");
//     for (var e = 0; e < changedPics.length; e++) {
//       var carImage = Math.floor(Math.random() * imgUrls.length);
//       changedPics[e].src = imgUrls[carImage];
//     }
//   });
// });

function ChangePic(index) {
  var changedPics = document.getElementsByClassName("change");
  for (var e = 0; e < changedPics.length; e++) {
    if (e === index) {
      var carImage = Math.floor(Math.random() * imgUrls.length);
      changedPics[e].src = imgUrls[carImage];
    }
  }
}

var hoverclasses = document.getElementsByClassName("content");
function Hover(z) {
  // if (! hoverclasses.contains("blur")) {
  //   z.style.border = "20px solid white";
  // }
  z.style.border = "20px solid white";
}

function NormalImg(z) {
  z.style.border = "none";
}
