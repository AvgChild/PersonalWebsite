// Sample projects - customize these with your own project names
const projects = [
    "instagram",
    "form and perception @gcadd",
    "clay archive",
    "breathing website",
    "ceramic 3d printer",
    "definitely a painter",
    "jdz china",
    "chair",
    "about",
    "contact info"
];

// Generate a random muted putty color (contemporary car colors)
function getRandomColor() {
    // Putty color palettes: grays, tans, sage greens, soft blues, taupes
    const colorRanges = [
        { hue: [0, 30], saturation: [10, 25], lightness: [55, 70] },      // Tans/beiges
        { hue: [30, 60], saturation: [15, 30], lightness: [50, 65] },     // Warm earth tones
        { hue: [80, 120], saturation: [12, 28], lightness: [55, 68] },    // Sage greens
        { hue: [180, 220], saturation: [10, 25], lightness: [55, 70] },   // Soft blues/grays
        { hue: [0, 360], saturation: [5, 15], lightness: [50, 68] }       // Pure grays
    ];

    const range = colorRanges[Math.floor(Math.random() * colorRanges.length)];
    const hue = Math.floor(Math.random() * (range.hue[1] - range.hue[0])) + range.hue[0];
    const saturation = Math.floor(Math.random() * (range.saturation[1] - range.saturation[0])) + range.saturation[0];
    const lightness = Math.floor(Math.random() * (range.lightness[1] - range.lightness[0])) + range.lightness[0];

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Map project names to their image paths
const projectImages = {
    "form and perception @gcadd": "images/form-and-perception/image1.jpg",
    "ceramic 3d printer": "images/ceramic-3d-printer/image1.jpg",
    "definitely a painter": "images/definitely-a-painter/image1.jpg",
    "jdz china": "images/jdz-china/image1.jpg",
    "chair": "images/chair/image1.jpg"
};

// Create project boxes
function createProjectGrid() {
    const grid = document.getElementById('projectGrid');

    projects.forEach((project) => {
        const box = document.createElement('div');
        box.className = 'project-box';
        box.style.backgroundColor = getRandomColor();

        // Add thumbnail image if project has one
        if (projectImages[project]) {
            const thumbnail = document.createElement('img');
            thumbnail.className = 'project-thumbnail';
            thumbnail.src = projectImages[project];
            thumbnail.alt = project;
            box.appendChild(thumbnail);
        }

        const text = document.createElement('div');
        text.className = 'project-text';
        text.textContent = project;

        box.appendChild(text);

        // Add click event to navigate to project page
        box.addEventListener('click', () => {
            if (project === "instagram") {
                window.location.href = "https://www.instagram.com/matt.obj/";
            } else if (project === "breathing website") {
                window.location.href = "https://avgchild.github.io/Meditation-project/";
            } else if (project === "clay archive") {
                window.location.href = "https://clayarchive.com";
            } else if (project === "Abstract Series") {
                window.location.href = "projects/abstract-series.html";
            } else if (project === "form and perception @gcadd") {
                window.location.href = "projects/form-and-perception-gcadd.html";
            } else if (project === "ceramic 3d printer") {
                window.location.href = "projects/ceramic-3d-printer.html";
            } else if (project === "definitely a painter") {
                window.location.href = "projects/definitely-a-painter.html";
            } else if (project === "jdz china") {
                window.location.href = "projects/jdz-china.html";
            } else if (project === "chair") {
                window.location.href = "projects/chair.html";
            } else if (project === "about") {
                window.location.href = "about.html";
            } else if (project === "contact info") {
                window.location.href = "contact.html";
            } else {
                // For other projects, create pages following the same pattern
                alert(`Opening ${project}...`);
                // Example: window.location.href = `projects/${project.toLowerCase().replace(/\s+/g, '-')}.html`;
            }
        });

        grid.appendChild(box);
    });
}

// Initialize the grid when the page loads
document.addEventListener('DOMContentLoaded', createProjectGrid);
