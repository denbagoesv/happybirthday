/* ─── DEFAULT CONFIGURATION ────────────────── */
const CONFIG_VERSION = 2;
const DEFAULT_CONFIG = {
  configVersion: CONFIG_VERSION,
  name: "Adel",
  age: 21,
  ageSuffix: "st",
  birthdayDate: "13-09-2005",
  heroSubtext: "Today is all about you, Adel. I hope this little surprise makes your 21st birthday feel extra special. ♡",
  message: `Tulis pesan utama untuk Adel di sini... 💌

Kamu bisa mengganti bagian ini dengan pesan ulang tahun, cerita kecil, atau kata-kata yang ingin kamu sampaikan.

No rush — make it as personal as you want. ♡`,
  messageSig: "— With all my love, ♡",
 musicTitle: "Ed Sheeran - Perfect",
  musicArtist: "Ed Sheeran",
  theme: "rose",
  wishes: [
    { icon: "♡", text: "happy 21st birthday, sayanggg. i hope this new chapter of your life brings you so many beautiful things and moments that you’ll always remember. i hope you’ll always love and cherish your family, keep focusing on your education and your dreams, and never stop becoming the person you want to be. no matter how difficult things get, i hope you’ll always remember how strong you are and how far you’ve already come. i’m so proud of everything you’ve accomplished, especially all the things you had to go through to get where you are today. i know it wasn’t always easy, but you kept going, and that’s one of the things i admire most about you. thank you for accepting me as your boyfriend and for letting me be a part of your life. thank you for all the little moments, the laughs, the memories, and even the difficult times that have taught us to understand each other better. i’m truly grateful to have you in my life. if i could choose again, i’d still choose to meet you, know you, and love you. i don’t know what the future will look like, but i hope we’ll have many more birthdays, photobooths, flowers, random laughs, late-night conversations, and little memories together. i love you so much, more than words can ever say. and wherever life takes us, in this universe or any other, i’ll always love you. ❤️ happy 21st, my love. ❤️ ", author: "— Bagoes Luhung Prasetyo ♡", color: "#7f1734" }
  ],
timeline: [
    {
      year: "2023",
      title: "you were always beautiful",
      desc: "do you remember this? this was one of your pictures from when we were just getting close. you were trying out makeup back then, and the result was… damnnn, you looked so beautiful! whether you’re barefaced or wearing makeup, you’re still just as beautiful to me. ❤️",
      icon: "🎀",
      photo: "images/jour6.jpg"
    },
    {
      year: "2024",
      title: "you made it to uns ♡",
      desc: "this is one of your pictures from when you finally passed the university entrance exam after going through so many ups and downs. you know what? i'm so proud of you. you’re one of the strongest women i know, right after my mom! ❤️",
      icon: "🌸",
      photo: "images/jour7.jpg"
    },
    
   
    {
      year: "2026",
      title: "our latest photobooth ♡",
      desc: "and this is our latest photobooth, with the thumbelina flowers i gave you way too late hahaha. sorry, babyyy. i’ll make it up to you by giving you flowers more often from now on. ❤️",
      icon: "📸",
      photo: "images/jour10.jpg"
    },
    {
      year: "2026",
      title: "MAMMMM",
      desc: "apapun makanan yang bisa bikin kamu happy, ayoo kita mammmm",
      icon: "📸",
      photo: "images/jour11.jpg"
    },

    {
      year: "2026",
      title: "anyway, happy birthday once again, my love ♡",
      desc: "you being born into this world is one of the most beautiful blessings that has ever happened in my life.",
      icon: "❤️",
      photo: "images/jour12.jpg"
    },

    {
      year: "2026",
      title: "thank you, mom ♡",
      desc: "and i guess i also have to thank your mom for bringing you into this world. thank you for giving birth to the girl who would one day become such an important part of my life. because of her, i got to meet you, know you, and eventually call you the person i love. you came into this world as someone’s daughter, but somehow, you became my world too.",
      icon: "❤️",
      photo: "images/jour13.jpg"
    },

    {
      year: "2026",
      title: "you mean so much to me",
      desc: "you’re not just someone i love. you’re someone whose presence has become a part of my everyday life. from the smallest conversations, random laughs, silly moments, photobooths, birthdays, and all the little memories we’ve made together, i’m grateful for every single one of them. even the imperfect moments mean something to me, because they’re all part of our story.",
      icon: "❤️",
      photo: "images/jour14.jpg"
    },

     {
      year: "2026",
      title: "watching you grow ♡",
      desc: "now that you’re 21, i hope you realize how far you’ve come. i’ve seen some of your struggles, your ups and downs, the moments when things didn’t go the way you wanted, and the moments when you finally made it through. and honestly, seeing you grow into the person you are today makes me incredibly proud.i hope you’ll always keep chasing your dreams, keep loving your family, and never stop becoming the person you want to be.",
      icon: "❤️",
      photo: "images/jour15.jpg"
    },
    
    {
      year: "2026",
      title: "for the years ahead",
      desc: "i don’t know exactly what the future will look like, but i hope there are many more memories waiting for us. more birthdays, more photobooths, more flowers, more random laughs, and more moments we can look back on and say, “we really made it this far.” i’ll always be grateful that our paths crossed. thank you for being you, for letting me be a part of your life, and for choosing to grow with me. i hope this new chapter brings you happiness, peace, success, and everything you’ve been working so hard for. i love you so much, more than words could ever say. ❤️",
      icon: "❤️",
      photo: "images/jour16.jpg"
    },
    



    
    
  ],
  thingsILove: [
    { icon: "🎀", title: "Your Smile", desc: "Tulis apa yang kamu suka dari senyumnya di sini." },
    { icon: "🌷", title: "Your Personality", desc: "Tulis hal tentang kepribadiannya yang kamu suka di sini." },
    { icon: "✨", title: "The Little Things", desc: "Tulis kebiasaan kecilnya yang menurutmu menggemaskan." },
    { icon: "🦋", title: "The Way You Are", desc: "Tulis hal yang membuat Adel berbeda dan spesial bagimu." },
    { icon: "💌", title: "Our Moments", desc: "Tulis sesuatu tentang momen kalian yang paling kamu sayangi." },
    { icon: "💗", title: "Just You", desc: "Tulis alasan sederhana kenapa kamu sayang Adel." }
  ],
 photos: [
    "images/jour1.jpg",
    "images/jour2.jpg",
    "images/jour3.jpg",
    "images/jour4.jpg",
    "images/jour5.jpg",
    
  ]
};

// Load saved config from localStorage when available so uploads persist across pages
let activeConfig;
try {
  const savedConfig = JSON.parse(localStorage.getItem('bday_config'));
  activeConfig = (savedConfig && savedConfig.configVersion === CONFIG_VERSION)
    ? savedConfig
    : JSON.parse(JSON.stringify(DEFAULT_CONFIG));
} catch (err) {
  activeConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
}

// Ensure there is a photos array; don't overwrite existing user photos
if (!activeConfig.photos || !Array.isArray(activeConfig.photos) || activeConfig.photos.length === 0) {
  activeConfig.photos = DEFAULT_CONFIG.photos.slice();
}

// Keep the wish board intentionally simple: one large personal note.
if (!Array.isArray(activeConfig.wishes) || activeConfig.wishes.length === 0) {
  activeConfig.wishes = DEFAULT_CONFIG.wishes.map(w => ({ ...w }));
} else {
  activeConfig.wishes = [activeConfig.wishes[0]];
  activeConfig.wishes[0] = { ...DEFAULT_CONFIG.wishes[0], ...activeConfig.wishes[0] };
}

function saveConfig() {
  localStorage.setItem('bday_config', JSON.stringify(activeConfig));
}

function applyTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName || 'rose');
}

// Apply theme instantly on load
applyTheme(activeConfig.theme);

/* ─────────────────────────────────────
   SMOOTH CURSOR LERP
   ───────────────────────────────────── */
function initCursor() {
  const cur = document.getElementById("cursor");
  const trail = document.getElementById("cursor-trail");
  if (!cur || !trail) return;

  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let curX = mouseX, curY = mouseY;
  let trailX = mouseX, trailY = mouseY;

  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function tickCursor() {
    curX += (mouseX - curX) * 0.25;
    curY += (mouseY - curY) * 0.25;
    trailX += (mouseX - trailX) * 0.08;
    trailY += (mouseY - trailY) * 0.08;

    cur.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
    trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(tickCursor);
  }
  requestAnimationFrame(tickCursor);

  // Hover effects
  document.addEventListener('mouseover', e => {
    if (e.target.closest('button, a, .wish-card, .polaroid-card, .cake, .gift-box, .ctrl-btn, .theme-opt, .color-btn, .icon-btn, .customizer-toggle, .digit-input, input, textarea, select')) {
      trail.style.width = '52px';
      trail.style.height = '52px';
      trail.style.borderColor = 'var(--primary)';
      trail.style.background = 'rgba(255, 79, 123, 0.08)';
      cur.style.transform = 'translate(-50%, -50%) scale(0.5)';
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest('button, a, .wish-card, .polaroid-card, .cake, .gift-box, .ctrl-btn, .theme-opt, .color-btn, .icon-btn, .customizer-toggle, .digit-input, input, textarea, select')) {
      trail.style.width = '36px';
      trail.style.height = '36px';
      trail.style.borderColor = 'var(--secondary)';
      trail.style.background = 'none';
      cur.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  });

  document.addEventListener("mouseleave", () => {
    cur.style.opacity = 0;
    trail.style.opacity = 0;
  });
  document.addEventListener("mouseenter", () => {
    cur.style.opacity = 1;
    trail.style.opacity = 0.6;
  });
}

/* ─────────────────────────────────────
   BACKGROUND CANVAS PARTICLES
   ───────────────────────────────────── */
function initBackgroundCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let fireworks = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 2.5 + .5;
    this.vx = (Math.random() - .5) * .3;
    this.vy = (Math.random() - .5) * .3;
    this.c = ["#F8BBD0", "#F48FB1", "#EC407A", "#FCE4EC"][Math.floor(Math.random() * 4)];
    this.a = Math.random() * .5 + .1;
  }

  for (let i = 0; i < 70; i++) particles.push(new Particle());

  window.createFirework = function (x, y) {
    const count = 60;
    const colors = ["#F48FB1", "#EC407A", "#EF5350", "#F8BBD0", "#FFFFFF"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1.5;
      fireworks.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: color,
        r: Math.random() * 2 + 1
      });
    }
  };

  (function animBG() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background particles
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c; ctx.globalAlpha = p.a; ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });

    // Active fireworks particles
    fireworks.forEach((f, idx) => {
      ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = f.color; ctx.globalAlpha = f.alpha; ctx.fill();
      f.x += f.vx;
      f.y += f.vy;
      f.vy += 0.04; // gravity
      f.alpha -= 0.012;

      if (f.alpha <= 0) {
        fireworks.splice(idx, 1);
      }
    });

    requestAnimationFrame(animBG);
  })();
}

/* ─────────────────────────────────────
   CONFETTI BURST EFFECT
   ───────────────────────────────────── */
function launchConfetti() {
  const colors = ["#ff4f7b", "#ffd166", "#c77dff", "#ff9b6a", "#fff", "#7dd3fc", "#52b788", "#ff007f"];
  for (let i = 0; i < 50; i++) {
    const p = document.createElement("div");
    p.className = "confetti-piece";
    p.style.cssText = `
      left: ${Math.random() * 100}vw;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      --tx: ${(Math.random() - 0.5) * 350}px;
      animation-duration: ${1.2 + Math.random() * 1.6}s;
      animation-delay: ${Math.random() * .3}s;
      transform: rotate(${Math.random() * 360}deg);
      width: ${4 + Math.random() * 6}px;
      height: ${7 + Math.random() * 9}px;
    `;
    document.body.appendChild(p);
    p.addEventListener("animationend", () => p.remove());
  }
}

/* ─────────────────────────────────────
   WEB AUDIO API SYNTHESIZER
   ───────────────────────────────────── */
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playBlowSound() {
  initAudio();
  if (!audioCtx) return;
  const startTime = audioCtx.currentTime;

  // White noise blast for puff sound
  const bufferSize = audioCtx.sampleRate * 0.12;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(450, startTime);
  filter.Q.setValueAtTime(2.5, startTime);

  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.08, startTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.11);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  noise.start(startTime);
  noise.stop(startTime + 0.12);
}

function playSuccessChime() {
  initAudio();
  if (!audioCtx) return;
  const startTime = audioCtx.currentTime;

  // Success Arpeggio: C5 -> E5 -> G5 -> C6
  const tones = [523.25, 659.25, 783.99, 1046.50];
  tones.forEach((freq, idx) => {
    const time = startTime + idx * 0.12;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.08, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.3);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(time);
    osc.stop(time + 0.35);
  });
}

// Initial calls on DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initBackgroundCanvas();

  // Soft feminine decorative accents — purely visual and non-interactive.
  const decor = [
    ["♡", "d1"], ["✦", "d2"], ["🎀", "d3"], ["♡", "d4"], ["✨", "d5"]
  ];
  decor.forEach(([symbol, cls]) => {
    const el = document.createElement("span");
    el.className = `girl-decor ${cls}`;
    el.textContent = symbol;
    document.body.appendChild(el);
  });
});
