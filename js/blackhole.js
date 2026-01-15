const canvas = document.getElementById('blackholeCanvas');
const ctx = canvas.getContext('2d');

let width, height, centerX, centerY;
let particles = [];
let diskParticles = [];

// ==========================================
// 1. GLOBAL VIEW VARIABLES (For 3D Control)
// ==========================================
let viewRotation = 0; // Horizontal rotation (Orbit)
let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;

// ==========================================
// CONFIGURATION
// ==========================================
const CONFIG = {
    particleColors: ['255, 255, 255'],

    // --- Background Dust ---
    bgCount: 100,
    bgSizeMin: 2,
    bgSizeMax: 8,
    bgSpeed: 0.8,
    bgAlpha: 0.8,

    // --- Accretion Disk ---
    diskCount: 500,
    diskWidth: 5,
    diskHeight: 1,
    diskSpeed: 0.025,

    // Tilt is now dynamic, but we set a starting value
    diskTilt: 0.4,
    diskColor: '200, 200, 255',

    // --- Dimensions ---
    diskRadiusMin: 10,
    diskRadiusMax: 50,
    blackHoleRadius: 50,
    lineWidth: 4,
    glowColor: 'rgba(255, 255, 255, 0.86)'
};

// ==========================================
// MOUSE INTERACTION EVENTS
// ==========================================
canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    canvas.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
    isDragging = false;
    canvas.style.cursor = 'grab';
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMouseX;
    const deltaY = e.clientY - lastMouseY;

    // Horizontal Drag -> Rotates the view (Orbit)
    viewRotation += deltaX * 0.005;

    // Vertical Drag -> Changes the Tilt
    CONFIG.diskTilt += deltaY * 0.005;

    // Clamp tilt so it doesn't flip completely inside out (optional)
    // Limits tilt between -1 (upside down) and 1 (top down)
    if (CONFIG.diskTilt > 1.0) CONFIG.diskTilt = 1.0;
    if (CONFIG.diskTilt < -1.0) CONFIG.diskTilt = -1.0;

    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
});



// ==========================================
// RESIZE
// ==========================================
function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width;
    height = rect.height;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    if (window.innerWidth > 768) {
        centerX = width * 0.5;
        centerY = height * 0.50;
        CONFIG.blackHoleRadius = 85;
        CONFIG.diskRadiusMin = 100;
        CONFIG.diskRadiusMax = 250;
    } else {
        centerX = width * 0.5;
        centerY = height * 0.5;
        CONFIG.blackHoleRadius = 20;
        CONFIG.diskRadiusMin = 25;
        CONFIG.diskRadiusMax = 55;
        CONFIG.bgSizeMin = 0.2;
        CONFIG.bgSizeMax = 3;
        CONFIG.diskWidth = 2;
        CONFIG.diskHeight = 0.2;
        CONFIG.lineWidth=0.8;
    }
}

// ==========================================
// PARTICLE CLASSES
// ==========================================
class Particle {
    constructor() { this.reset(true); }
    reset(initial = false) {
        this.angle = Math.random() * Math.PI * 2;
        const maxDist = Math.max(width, height) * 1.5;
        this.radius = initial ? Math.random() * maxDist + CONFIG.blackHoleRadius : maxDist;
        this.size = Math.random() * (CONFIG.bgSizeMax - CONFIG.bgSizeMin) + CONFIG.bgSizeMin;
        this.speed = CONFIG.bgSpeed + Math.random() * 0.2;
        this.color = CONFIG.particleColors[Math.floor(Math.random() * CONFIG.particleColors.length)];
    }
    update() {
        this.radius -= this.speed + (15 / this.radius);
        this.angle += 0.001 + (1 / this.radius);
        if (this.radius < CONFIG.blackHoleRadius) this.reset();
    }
    draw() {
        // Background particles ignore viewRotation for simplicity, 
        // giving a sense that the camera orbits the hole, not the universe.
        const x = centerX + Math.cos(this.angle) * this.radius;
        const y = centerY + Math.sin(this.angle) * this.radius;
        let alpha = Math.min(CONFIG.bgAlpha, (this.radius - CONFIG.blackHoleRadius) / 100);
        ctx.fillStyle = `rgba(${this.color}, ${alpha})`;
        ctx.fillRect(x, y, this.size, this.size);
    }
}

class DiskParticle {
    constructor() { this.reset(); }
    reset() {
        this.angle = Math.random() * Math.PI * 2;
        this.radius = CONFIG.diskRadiusMin + Math.random() * (CONFIG.diskRadiusMax - CONFIG.diskRadiusMin);
        this.speed = CONFIG.diskSpeed + Math.random() * 0.005;
        this.color =  CONFIG.diskColor;
    }

    update() {
        this.angle += CONFIG.diskSpeed + (this.isSparkle ? 0.002 : 0)
    }

    // Determine if particle is behind the black hole based on View Rotation
    isBehind() {
        // We add viewRotation to the check
        return Math.sin(this.angle + viewRotation) < 0;
    }

    draw() {
        // 1. Calculate the Visual Angle (Actual Angle + Camera Offset)
        const visualAngle = this.angle + viewRotation;

        // 2. Position based on Visual Angle
        const x = centerX + Math.cos(visualAngle) * this.radius;
        const y = centerY + Math.sin(visualAngle) * this.radius * CONFIG.diskTilt;

        ctx.save();
        ctx.translate(x, y);

        const rotation = Math.atan2(Math.cos(this.angle) * CONFIG.diskTilt, -Math.sin(this.angle)); ctx.rotate(rotation);

        ctx.fillStyle = `rgba(${this.color}, 0.9)`;
        ctx.fillRect(-CONFIG.diskWidth / 2, -CONFIG.diskHeight / 2, CONFIG.diskWidth, CONFIG.diskHeight);
        ctx.restore();
    }
}

// ==========================================
// DRAWING
// ==========================================
function drawSphere() {
    ctx.beginPath();
    ctx.arc(centerX, centerY, CONFIG.blackHoleRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#000000';
    ctx.fill();

    ctx.strokeStyle = CONFIG.glowColor;
    ctx.lineWidth = CONFIG.lineWidth;
    ctx.shadowBlur = 20;
    ctx.shadowColor = CONFIG.glowColor;
    ctx.stroke();
    ctx.shadowBlur = 0;
}

function init() {
    resize();
    particles = [];
    diskParticles = [];
    for (let i = 0; i < CONFIG.bgCount; i++) particles.push(new Particle());
    for (let i = 0; i < CONFIG.diskCount; i++) diskParticles.push(new DiskParticle());

    // Set initial cursor style
    canvas.style.cursor = 'grab';

    animate();
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw Background Dust
    particles.forEach(p => {
        p.update();
        p.draw();
    });

    const backParticles = [];
    const frontParticles = [];

    // Sort disk particles based on the current view rotation
    diskParticles.forEach(dp => {
        dp.update();
        if (dp.isBehind()) {
            backParticles.push(dp);
        } else {
            frontParticles.push(dp);
        }
    });

    // Draw Back -> Black Hole -> Front
    backParticles.forEach(dp => dp.draw());
    drawSphere();
    frontParticles.forEach(dp => dp.draw());

    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);

// ==========================================
// UI CONTROLS LOGIC
// ==========================================

// 1. Toggle Panel Visibility
const settingsBtn = document.getElementById('bh-settings-btn');
const settingsPanel = document.getElementById('bh-panel');

if (settingsBtn && settingsPanel) {
    settingsBtn.addEventListener('click', () => {
        settingsPanel.classList.toggle('hidden');
    });
}

// 2. Helper: Hex to RGB String (e.g. "#ffffff" -> "255, 255, 255")
function hexToRgb(hex) {
    // Remove hash
    hex = hex.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
}

// 3. Attach Listeners to Inputs
const speedInput = document.getElementById('ctrl-speed');
const sizeInput = document.getElementById('ctrl-size');
const tiltInput = document.getElementById('ctrl-tilt');
const colorInput = document.getElementById('ctrl-color');
const glowInput = document.getElementById('ctrl-glow');

// Speed
if (speedInput) {
    speedInput.addEventListener('input', (e) => {
        CONFIG.diskSpeed = parseFloat(e.target.value);
    });
}
// Disk Size (Radius Max) - Immediate Update
if (sizeInput) {
    sizeInput.addEventListener('input', (e) => {
        CONFIG.diskRadiusMax = parseInt(e.target.value);

        // This is the key part: Force all particles to reset 
        // immediately so they snap to the new size instantly.
        diskParticles.forEach(p => p.reset());
    });
}


// Tilt (Syncs with the mouse drag logic)
if (tiltInput) {
    tiltInput.addEventListener('input', (e) => {
        CONFIG.diskTilt = parseFloat(e.target.value);
    });
}

// Disk Color
if (colorInput) {
    colorInput.addEventListener('input', (e) => {
        const rgb = hexToRgb(e.target.value);
        CONFIG.diskColor = rgb;
        // Optional: Update existing particles immediately? 
        // Or just let new resets pick it up. 
        // If you want immediate update, uncomment below:
        diskParticles.forEach(p => p.color = rgb);
    });
}

// Glow Color
if (glowInput) {
    glowInput.addEventListener('input', (e) => {
        // For glow, we can just use the HEX directly or convert to RGB
        // Your current drawSphere uses CONFIG.glowColor directly
        CONFIG.glowColor = e.target.value;
    });
}

// 4. Update Slider when Mouse Drags
// Since mouse dragging changes tilt, we should update the slider to match
// Add this inside your existing 'mousemove' and 'touchmove' event listeners:
/*
    // ... inside mousemove ...
    if(tiltInput) tiltInput.value = CONFIG.diskTilt;
*/
// ... existing inputs ...
const countInput = document.getElementById('ctrl-count');

// DISK COUNT (Real-time update)
if (countInput) {
    countInput.addEventListener('input', (e) => {
        const newCount = parseInt(e.target.value);
        const currentCount = diskParticles.length;

        CONFIG.diskCount = newCount;

        if (newCount > currentCount) {
            // Add particles
            for (let i = 0; i < (newCount - currentCount); i++) {
                diskParticles.push(new DiskParticle());
            }
        } else if (newCount < currentCount) {
            // Remove particles
            diskParticles.splice(newCount, currentCount - newCount);
        }
    });
}
window.onload = init;