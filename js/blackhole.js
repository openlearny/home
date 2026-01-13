const canvas = document.getElementById('blackholeCanvas');
const ctx = canvas.getContext('2d');

let width, height, centerX, centerY;
let particles = [];
let diskParticles = [];

// ==========================================
// CONFIGURATION
// ==========================================
const CONFIG = {
    // --- COLORS (R, G, B) ---
    // We use "R, G, B" format so the code can still control the Transparency (alpha) automatically.
    particleColors: [
        '255, 255, 255', // White
        '0,0,0'
    ],

    // --- Background Dust ---
    bgCount: 8000,
    bgSizeMin: 2,
    bgSizeMax: 5,
    bgSpeed: 0.8,
    bgAlpha: 0.8, // Maximum brightness
    
    // --- Accretion Disk (The Ring) ---
    diskCount: 500,
    diskWidth: 25,
    diskHeight: 2,
    diskSpeed: 0.015,
    diskTilt: 0.4,
    diskColor: '200, 200, 255', // Base color for the ring (Light Blueish)

    // --- Dynamic Sizing (Set in resize function) ---
    diskRadiusMin: 60,        
    diskRadiusMax: 90,        
    blackHoleRadius: 50,      
    glowColor: 'rgba(235, 192, 119, 0.3)' // Orange-ish glow
};

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
        // --- DESKTOP ---
        centerX = width * 0.75; 
        centerY = height * 0.40;
        
        CONFIG.blackHoleRadius = 85;   
        CONFIG.diskRadiusMin = 100;    
        CONFIG.diskRadiusMax = 250;    
    } else {
        // --- MOBILE ---
        centerX = width * 0.5;
        centerY = height * 0.65;
        
        CONFIG.blackHoleRadius = 60;
        CONFIG.diskRadiusMin = 75;
        CONFIG.diskRadiusMax = 150;
    }
}

// ==========================================
// PARTICLE CLASSES
// ==========================================
class Particle {
    constructor() {
        this.reset(true);
    }

    reset(initial = false) {
        this.angle = Math.random() * Math.PI * 2;
        const maxDist = Math.max(width, height) * 1.5;
        if (initial) {
            this.radius = Math.random() * maxDist + CONFIG.blackHoleRadius;
        } else {
            this.radius = maxDist;
        }
        this.size = Math.random() * (CONFIG.bgSizeMax - CONFIG.bgSizeMin) + CONFIG.bgSizeMin;
        this.speed = CONFIG.bgSpeed + Math.random() * 0.2; 
        
        // PICK A RANDOM COLOR FROM CONFIG
        this.color = CONFIG.particleColors[Math.floor(Math.random() * CONFIG.particleColors.length)];
    }

    update() {
        this.radius -= this.speed + (15 / this.radius);
        this.angle += 0.001 + (1 / this.radius);

        if (this.radius < CONFIG.blackHoleRadius) {
            this.reset();
        }
    }

    draw() {
        const x = centerX + Math.cos(this.angle) * this.radius;
        const y = centerY + Math.sin(this.angle) * this.radius;
        
        // Calculate transparency
        let alpha = Math.min(CONFIG.bgAlpha, (this.radius - CONFIG.blackHoleRadius) / 100);
        
        // USE THE RANDOM COLOR + CALCULATED ALPHA
        ctx.fillStyle = `rgba(${this.color}, ${alpha})`;
        ctx.fillRect(x, y, this.size, this.size);
    }
}

class DiskParticle {
    constructor() {
        this.reset();
    }

    reset() {
        this.angle = Math.random() * Math.PI * 2;
        this.radius = CONFIG.diskRadiusMin + Math.random() * (CONFIG.diskRadiusMax - CONFIG.diskRadiusMin);
        this.speed = CONFIG.diskSpeed + Math.random() * 0.005;
        
        // Optional: Disk particles can also have slight color variation
        // Let's make them mostly the diskColor, but some brighter/whiter
        this.color = Math.random() > 0.8 ? '255, 255, 255' : CONFIG.diskColor;
    }

    update() {
        this.angle += this.speed;
    }

    isBehind() {
        return Math.sin(this.angle) < 0;
    }

    draw() {
        const x = centerX + Math.cos(this.angle) * this.radius;
        const y = centerY + Math.sin(this.angle) * this.radius * CONFIG.diskTilt;

        ctx.save();
        ctx.translate(x, y);
        
        const rotation = Math.atan2(
            Math.cos(this.angle) * CONFIG.diskTilt, 
            -Math.sin(this.angle)
        );
        ctx.rotate(rotation);
        
        // Disk particles are usually solid/bright
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
    ctx.lineWidth = 2;
    ctx.shadowBlur = 20; // Increased glow
    ctx.shadowColor = CONFIG.glowColor; // Glow matches the config color
    ctx.stroke();
    ctx.shadowBlur = 0;
}

function init() {
    resize();
    particles = [];
    diskParticles = [];
    
    for (let i = 0; i < CONFIG.bgCount; i++) particles.push(new Particle());
    for (let i = 0; i < CONFIG.diskCount; i++) diskParticles.push(new DiskParticle());

    animate();
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    const backParticles = [];
    const frontParticles = [];

    diskParticles.forEach(dp => {
        dp.update();
        if (dp.isBehind()) {
            backParticles.push(dp);
        } else {
            frontParticles.push(dp);
        }
    });

    backParticles.forEach(dp => dp.draw());
    drawSphere();
    frontParticles.forEach(dp => dp.draw());

    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
window.onload = init;