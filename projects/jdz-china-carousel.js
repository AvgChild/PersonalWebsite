// Image array - add your image paths here
const images = [
    "../images/jdz-china/image1.jpg"
];

let currentIndex = 0;

const carouselImage = document.getElementById('carouselImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Update image display
function updateImage() {
    carouselImage.src = images[currentIndex];
    updateArrows();
}

// Update arrow visibility
function updateArrows() {
    // Hide arrows if only one image
    if (images.length <= 1) {
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
        return;
    }

    // Always show both arrows when looping is enabled
    prevBtn.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
}

// Previous image (with looping)
prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Loop to last image
    }
    updateImage();
});

// Next image (with looping)
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // Loop back to first image
    }
    updateImage();
});

// Initialize
updateArrows();
