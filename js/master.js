// chick If There is color option in the localStorage
let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {
   // console.log('Local Storage Is Not Empty You Can Set It On Root Now');
   // console.log(localStorage.getItem("color_option"));

   document.documentElement.style.setProperty("--main-color", mainColors);

   // Remove Active Class From All Colors List Item
   document.querySelectorAll(".colors-list li").forEach((element) => {
      element.classList.remove("active");

      // Add Active Class On Element With Data-Color === Local Storage Item
      if (element.dataset.color === mainColors) {
         // Add Active Class
         element.classList.add("active");
      }
   });
}

// Random Background Option
let backgroundOption = true;

// Variable To Corntol The Background INterval
let backgroundInterval;

// Check If Ther's Local Storage Random Background
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {
   if (backgroundLocalItem == "true") {
      backgroundOption = true;
   } else {
      backgroundOption = false;
   }

   // Remove active class from all Spans
   document.querySelectorAll(".random-backgrounds span").forEach((element) => {
      element.classList.remove("active");
   });

   if (backgroundLocalItem === "true") {
      document
         .querySelector(".random-backgrounds .yes")
         .classList.add("active");
      // let list = document.querySelectorAll(".random-backgrounds .yes").classList;
      // console.log(list.classList)
      // list.add("active")
   } else {
      let list = document.querySelector(".random-backgrounds .yes");
      console.log(list.classList);
      // list.add("active")
   }
}

// Toggle Spin Class ON Icon
document.querySelector(".toggle-sittings .fa-gear").onclick = function () {
   // Toggle Class Fa-spin For Rotation On self
   this.classList.toggle("fa-spin");

   // Toggle Class Open On Main Settings Box
   document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop In All List Items
colorsLi.forEach((li) => {
   // chick On Every List Items
   li.addEventListener("click", (e) => {
      // Set Color On Root
      document.documentElement.style.setProperty(
         "--main-color",
         e.target.dataset.color
      );

      // Set Color On Local Storage
      localStorage.setItem("color-option", e.target.dataset.color);

      // Remove Active Class From All Cheldren
      e.target.parentElement.querySelectorAll(".active").forEach((element) => {
         element.classList.remove("active");
      });

      // Add Active Class to the Self
      e.target.classList.add("active");
   });
});

// Switch Ramdom Backgrounds
const randomBackEL = document.querySelectorAll(".random-backgrounds span");

// Loop In All Spans
randomBackEL.forEach((span) => {
   // chick On Every Span
   span.addEventListener("click", (e) => {
      // Remove Active Class From All Cheldren
      e.target.parentElement.querySelectorAll(".active").forEach((element) => {
         element.classList.remove("active");
      });

      // Add Active Class to the Self
      e.target.classList.add("active");
      // console.log(e.target.dataset.background)
      if (e.target.dataset.background == "yes") {
         backgroundOption = true;
         randomizeImgs();

         console.log(backgroundOption);
         localStorage.setItem("background_option", true);
      } else if (e.target.dataset.background == "no") {
         backgroundOption = false;
         console.log(backgroundOption);

         localStorage.setItem("background_option", false);
         clearInterval(backgroundInterval);
      }
   });
});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg"];

// Function to randomize Imgs
function randomizeImgs() {
   if (backgroundOption === true) {
      backgroundInterval = setInterval(() => {
         // Get Random Number Every 3sec
         let Random = Math.floor(Math.random() * imgsArray.length);

         // Change Background Image Url
         landingPage.style.backgroundImage =
            'url("/imgs/' + imgsArray[Random] + '")';
      }, 5000);
   }
}
randomizeImgs();

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
   // Skills Offset Top
   let skillsOffsetTop = ourSkills.offsetTop;
   // all the space upper Skills section in px

   // Skills Outer Height
   let skillsOuterHeight = ourSkills.offsetHeight;
   // the space of the section

   // Window Height
   windowHeight = this.innerHeight;
   // the windowHeight

   // Window ScrollTop
   windowScrollTop = this.pageYOffset;
   // the position of the scroll

   if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
      let allSkills = document.querySelectorAll(
         ".skill-box .skill-progress span"
      );

      allSkills.forEach((skill) => {
         skill.style.width = skill.dataset.progress;
      });
   }
};

// cerat popup With the Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
   img.addEventListener("click", (e) => {
      // Cereat Overlay Element
      let Overlay = document.createElement("div");

      // Add Class To Overlay
      Overlay.className = "popup-overlay";

      // Append Overlay To The Body
      document.body.appendChild(Overlay);

      // Creat The Popup Box
      let popupBox = document.createElement("div");

      // Add Class To The Popup Box
      popupBox.className = "popup-box";

      if (img.alt !== null) {
         // Creat Heading
         let imgHeading = document.createElement("h3");

         // Creat Text For Heading
         let imgText = document.createTextNode(img.alt);

         // Abend The Text To The Heading
         imgHeading.appendChild(imgText);

         // abend the heading to the popup box
         popupBox.appendChild(imgHeading);
      }

      // Creat The Image
      let popupImage = document.createElement("img");

      // Set Image Source
      popupImage.src = img.src;

      // Append Image To popup Box
      popupBox.appendChild(popupImage);

      // Append The PopupBox To Body
      document.body.appendChild(popupBox);

      // creat the close span
      let closeBotton = document.createElement("apan");

      // creat the close button text
      let closeButtonText = document.createTextNode("X");

      // append text to close b
   });
});
