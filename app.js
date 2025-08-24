const images = [
  {
    url: "https://images.unsplash.com/photo-1549608276-5786777e6587?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJpcmRzfGVufDB8fDB8fHww",
    alt: "three beautiful identical parrots side by side on a branch",
  },
  {
    url: "https://media.istockphoto.com/id/2153576608/photo/eastern-bluebird-in-flight.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q4Y_F1zD7siA0gD6P8EaIZixjoh-cWq9s_GXtY2MNuk=",
    alt: "focused lens on a small blue bird about to take flight off a post",
  },
  {
    url: "https://images.unsplash.com/photo-1620694563886-c3a80ec55f41?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpcmRzfGVufDB8fDB8fHww",
    alt: "a beautiful yellow bird nesting on top of blossomed leaves",
  }
];

let currentImageGallery = 0;

const galleryContainer = document.getElementById("gallery");

const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");

const imageElement = document.createElement("img");
galleryContainer.appendChild(imageElement);

function showImage() {
  imageElement.src = images[currentImageGallery].url;
  imageElement.alt = images[currentImageGallery].alt;
}

function showNextImage() {
  currentImageIndex = currentImageGallery + 1;
  
  if (currentImageGallery >= images.length) {
    currentImageGallery = 0;
  }
  
  showImage();
}


function showPrevImage() {
  currentImageGallery = currentImageGallery- 1;

  if (currentImageGallery < 0) {
    currentImageGallery = images.length - 1;
  }
  
  showImage();
}

nextButton.addEventListener("click", showNextImage);
prevButton.addEventListener("click", showPrevImage);

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowRight") {
    showNextImage();
  }
  if (event.key === "ArrowLeft") {
    showPrevImage();
  }
});

showImage();


