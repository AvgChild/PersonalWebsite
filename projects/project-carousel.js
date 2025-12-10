// Image array - add your image paths here
const images = [
    "https://via.placeholder.com/800x600/888888/FFFFFF?text=Image+1",
    "https://via.placeholder.com/800x600/6B8E23/FFFFFF?text=Image+2",
    "https://via.placeholder.com/800x600/8B4513/FFFFFF?text=Image+3",
    "https://via.placeholder.com/800x600/4682B4/FFFFFF?text=Image+4"
    // Replace these with your actual image paths:
    // "../images/abstract-1.jpg",
    // "../images/abstract-2.jpg",
    // "../images/abstract-3.jpg"
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

    // Show/hide left arrow
    if (currentIndex === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }

    // Show/hide right arrow
    if (currentIndex === images.length - 1) {
        nextBtn.classList.add('hidden');
    } else {
        nextBtn.classList.remove('hidden');
    }
}

// Previous image
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});

// Next image
nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
});

// Initialize
updateArrows();
