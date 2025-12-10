// Sample projects - customize these with your own project names
const projects = [
    "Abstract Series",
    "Digital Art",
    "Portraits",
    "Landscapes",
    "Mixed Media",
    "Photography",
    "clay archive",
    "breathing website"
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

// Get a random geometric shape class
function getRandomShape() {
    const shapes = [
        'shape-rounded-square',
        'shape-circle',
        'shape-blob',
        'shape-octagon',
        'shape-pentagon',
        'shape-hexagon',
        'shape-diamond',
        'shape-trapezoid'
    ];
    return shapes[Math.floor(Math.random() * shapes.length)];
}

// Create project boxes
function createProjectGrid() {
    const grid = document.getElementById('projectGrid');

    projects.forEach((project) => {
        const box = document.createElement('div');
        box.className = `project-box ${getRandomShape()}`;
        box.style.backgroundColor = getRandomColor();

        const text = document.createElement('div');
        text.className = 'project-text';
        text.textContent = project;

        box.appendChild(text);

        // Add click event to navigate to project page
        box.addEventListener('click', () => {
            if (project === "breathing website") {
                window.location.href = "https://avgchild.github.io/Meditation-project/";
            } else if (project === "clay archive") {
                window.location.href = "https://clayarchive.com";
            } else if (project === "Abstract Series") {
                window.location.href = "projects/abstract-series.html";
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
