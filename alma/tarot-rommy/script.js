// =============================================
// Tarot de Rommy - Script Mágico
// =============================================

const tarotDeck = [
    { num: "00", file: "LABUBU TAROT/00.jpg", name: "El Loco", meaning: "Nuevos comienzos, fe, aventura", baseDesc: "un salto de fe hacia lo desconocido lleno de potencial ilimitado" },
    { num: "01", file: "LABUBU TAROT/01.png", name: "El Mago", meaning: "Manifestación, poder, habilidad", baseDesc: "el poder de materializar tus intenciones con destreza" },
    { num: "02", file: "LABUBU TAROT/02.png", name: "La Sacerdotisa", meaning: "Intuición, misterio, sabiduría interior", baseDesc: "la voz silenciosa y poderosa de tu intuición profunda" },
    { num: "03", file: "LABUBU TAROT/03.png", name: "La Emperatriz", meaning: "Abundancia, fertilidad, belleza", baseDesc: "la energía de la creación, el amor y la belleza que todo nutre" },
    { num: "04", file: "LABUBU TAROT/04.png", name: "El Emperador", meaning: "Estructura, autoridad, estabilidad", baseDesc: "el dominio, la disciplina y la fuerza de voluntad que construye" },
    { num: "05", file: "LABUBU TAROT/05.png", name: "El Hierofante", meaning: "Tradición, enseñanza, guía espiritual", baseDesc: "la sabiduría transmitida y las estructuras que dan sentido" },
    { num: "06", file: "LABUBU TAROT/06.png", name: "Los Enamorados", meaning: "Unión, elecciones, armonía", baseDesc: "una conexión importante del corazón o una decisión significativa" },
    { num: "07", file: "LABUBU TAROT/07.png", name: "El Carro", meaning: "Determinación, victoria, control", baseDesc: "el impulso imparable para avanzar con confianza y dirección" },
    { num: "08", file: "LABUBU TAROT/08.png", name: "La Fuerza", meaning: "Coraje, compasión, dominio interior", baseDesc: "la fuerza suave y el coraje interior que todo lo transforma" },
    { num: "09", file: "LABUBU TAROT/09.png", name: "El Ermitaño", meaning: "Soledad, introspección, guía", baseDesc: "un tiempo sagrado de búsqueda interior y sabiduría" },
    { num: "10", file: "LABUBU TAROT/10.png", name: "La Rueda de la Fortuna", meaning: "Cambio, destino, ciclos", baseDesc: "un giro importante del destino y los ciclos de la vida" },
    { num: "11", file: "LABUBU TAROT/11.jpg", name: "La Justicia", meaning: "Equilibrio, verdad, karma", baseDesc: "la cosecha justa y el equilibrio de tus acciones pasadas" },
    { num: "12", file: "LABUBU TAROT/12.jpg", name: "El Colgado", meaning: "Perspectiva, rendición, pausa", baseDesc: "una nueva visión que nace de la pausa y la entrega" },
    { num: "13", file: "LABUBU TAROT/13.jpg", name: "La Muerte", meaning: "Transformación, fin de ciclo, renacimiento", baseDesc: "el cierre de una etapa para dar paso al nuevo tú" },
    { num: "14", file: "LABUBU TAROT/14.jpg", name: "La Templanza", meaning: "Equilibrio, moderación, sanación", baseDesc: "la alquimia perfecta y el equilibrio armonioso entre opuestos" },
    { num: "15", file: "LABUBU TAROT/15.jpg", name: "El Diablo", meaning: "Ataduras, tentación, liberación", baseDesc: "las cadenas que nos autoimponemos y la oportunidad de liberarnos" },
    { num: "16", file: "LABUBU TAROT/16.jpg", name: "La Torre", meaning: "Revelación, derrumbe, liberación", baseDesc: "un despertar repentino y la liberación de estructuras obsoletas" },
    { num: "17", file: "LABUBU TAROT/17.jpg", name: "La Estrella", meaning: "Esperanza, inspiración, sanación", baseDesc: "la luz serena que guía y renueva después de la oscuridad" },
    { num: "18", file: "LABUBU TAROT/18.jpg", name: "La Luna", meaning: "Ilusión, intuición, emociones", baseDesc: "las sombras, los sueños y las verdades ocultas del inconsciente" },
    { num: "19", file: "LABUBU TAROT/19.jpg", name: "El Sol", meaning: "Alegría, éxito, vitalidad", baseDesc: "la energía radiante, la claridad y la alegría de vivir" },
    { num: "20", file: "LABUBU TAROT/20.jpg", name: "El Juicio", meaning: "Renacimiento, llamado, redención", baseDesc: "un llamado profundo a tu propósito superior y renacimiento" },
    { num: "21", file: "LABUBU TAROT/21.jpg", name: "El Mundo", meaning: "Culminación, realización, cierre", baseDesc: "el logro de un ciclo completo, la integración y la realización" }
];

// Tailwind script configuration
function initTailwind() {
    if (typeof tailwind !== 'undefined') {
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'mystic': '#140E24',
                        'gold': '#D4AF77',
                    }
                }
            }
        };
    }
}

// Create magical twinkling stars in the background
function createStars() {
    const container = document.getElementById('stars-container');
    const starCount = 75;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 2.8 + 0.9;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random twinkle timing
        const duration = Math.random() * 2.2 + 1.1;
        star.style.animation = `twinkle ${duration}s ease-in-out infinite`;
        star.style.animationDelay = `-${Math.random() * 3}s`;
        
        // Vary opacity for depth
        star.style.opacity = Math.random() * 0.6 + 0.25;
        
        container.appendChild(star);
    }
}

// Calculate zodiac sign from date
function getZodiacSign(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    const zodiacs = [
        { sign: "Capricornio", emoji: "♑", from: [1, 20], to: [1, 19] }, // careful with range
        { sign: "Acuario", emoji: "♒", from: [1, 20], to: [2, 18] },
        { sign: "Piscis", emoji: "♓", from: [2, 19], to: [3, 20] },
        { sign: "Aries", emoji: "♈", from: [3, 21], to: [4, 19] },
        { sign: "Tauro", emoji: "♉", from: [4, 20], to: [5, 20] },
        { sign: "Géminis", emoji: "♊", from: [5, 21], to: [6, 20] },
        { sign: "Cáncer", emoji: "♋", from: [6, 21], to: [7, 22] },
        { sign: "Leo", emoji: "♌", from: [7, 23], to: [8, 22] },
        { sign: "Virgo", emoji: "♍", from: [8, 23], to: [9, 22] },
        { sign: "Libra", emoji: "♎", from: [9, 23], to: [10, 22] },
        { sign: "Escorpio", emoji: "♏", from: [10, 23], to: [11, 21] },
        { sign: "Sagitario", emoji: "♐", from: [11, 22], to: [12, 21] }
    ];

    // Capricornio wraps around
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return { sign: "Capricornio", emoji: "♑" };
    }

    for (let i = 0; i < zodiacs.length; i++) {
        const z = zodiacs[i];
        if (month === z.from[0] && day >= z.from[1] || month === z.to[0] && day <= z.to[1]) {
            return { sign: z.sign, emoji: z.emoji };
        }
    }
    return { sign: "Místico", emoji: "✨" };
}

// Generate a beautiful, personalized interpretation
function generateInterpretation(name, question, position, card) {
    const user = name.trim() || "Viajero";
    const q = question.toLowerCase().trim();
    
    // Position intros
    const posIntros = {
        pasado: [
            "En tu pasado, ",
            "El camino que recorríste te muestra que ",
            "Las huellas del ayer revelan que "
        ],
        presente: [
            "En este momento presente, ",
            "Tu situación actual habla a través de ",
            "Ahora mismo, las energías apuntan a que "
        ],
        futuro: [
            "En tu futuro cercano, ",
            "El destino te prepara para que ",
            "Lo que se avecina indica que "
        ]
    };

    const intro = posIntros[position][Math.floor(Math.random() * posIntros[position].length)];
    
    // Base text from card
    let base = `la carta de <strong>${card.name}</strong> te recuerda ${card.baseDesc}.`;
    
    // Flavor based on question keywords
    let flavor = "";
    
    if (q.includes("amor") || q.includes("relación") || q.includes("corazón") || q.includes("pareja")) {
        flavor = " Esta energía tiene una fuerte influencia en los asuntos del corazón y las relaciones que te rodean.";
    } else if (q.includes("trabajo") || q.includes("carrera") || q.includes("empleo") || q.includes("dinero") || q.includes("abundancia")) {
        flavor = " Esta fuerza se manifiesta con claridad en tu camino profesional y tus recursos materiales.";
    } else if (q.includes("salud") || q.includes("cuerpo") || q.includes("bienestar") || q.includes("sanar")) {
        flavor = " La carta señala una profunda conexión con tu cuerpo y tu bienestar energético.";
    } else if (q.includes("decisión") || q.includes("camino") || q.includes("elegir") || q.includes("futuro")) {
        flavor = " Esta carta trae claridad precisamente sobre la dirección que estás considerando.";
    } else {
        flavor = " Las lecciones de esta carta están íntimamente ligadas a tu pregunta.";
    }

    // Personal touch
    const personal = ` ${user}, recuerda que el Tarot no dicta tu destino: te muestra las energías disponibles para que las aproveches.`;

    return `${intro}${base}${flavor}${personal}`;
}

// Create a beautiful overall closing message
function generateOverallMessage(cards, question) {
    const cardNames = cards.map(c => c.name).join(", ");
    return `Las cartas de <span class="font-semibold text-[#D4AF77]">${cardNames}</span> han hablado. El universo te ofrece claridad sobre tu pregunta. Confía en el proceso.`;
}

// Select 3 unique random cards from the Labubu tarot
function selectRandomCards() {
    const shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

// Create flying card animation (highly visual)
function createFlyingCardsAnimation(container, duration = 2400) {
    container.innerHTML = '';
    const numCards = 13;

    for (let i = 0; i < numCards; i++) {
        const card = document.createElement('div');
        card.className = 'flying-card';
        
        // Random starting position
        const startX = Math.random() * container.offsetWidth;
        const startY = Math.random() * container.offsetHeight * 0.8 + 20;
        
        card.style.left = `${startX}px`;
        card.style.top = `${startY}px`;
        card.style.transform = `rotate(${Math.random() * 70 - 35}deg) scale(${Math.random() * 0.45 + 0.75})`;
        card.style.transition = `transform ${duration}ms cubic-bezier(0.23, 1, 0.32, 1), opacity ${duration * 0.85}ms linear`;
        card.style.opacity = Math.random() * 0.55 + 0.75;
        
        container.appendChild(card);

        // Animate the flight
        setTimeout(() => {
            if (!card.parentNode) return;
            
            const endX = Math.random() * container.offsetWidth;
            const endY = Math.random() * container.offsetHeight * 0.75;
            const endRot = Math.random() * 280 - 140;
            const endScale = Math.random() * 0.3 + 0.6;
            
            card.style.transform = `translate(${endX - startX}px, ${endY - startY}px) rotate(${endRot}deg) scale(${endScale})`;
            card.style.opacity = '0.05';
        }, 30 + i * 11);
    }

    // Remove flying cards when done
    setTimeout(() => {
        container.innerHTML = '';
    }, duration + 150);
}

// Trigger beautiful golden particle burst
function createParticleBurst(element) {
    const rect = element.getBoundingClientRect();
    const container = document.body;
    
    const colors = ['#D4AF77', '#E8D4A3', '#C69C5F'];
    
    for (let i = 0; i < 22; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const x = rect.left + rect.width / 2 + (Math.random() - 0.5) * 55;
        const y = rect.top + rect.height / 2 + (Math.random() - 0.5) * 45;
        
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        const tx = (Math.random() - 0.5) * 160;
        const ty = (Math.random() - 0.5) * 130 - 40;
        
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = `${Math.random() * 4.5 + 2.5}px`;
        particle.style.height = particle.style.width;
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 900);
    }
}

// Reveal the 3 cards with staggered animation
function revealThreeCards(cards, userName, question) {
    const readingSection = document.getElementById('reading-section');
    const formSection = document.getElementById('form-section');
    const shuffleArea = document.getElementById('shuffle-area');
    
    // Hide form and shuffle
    formSection.style.display = 'none';
    shuffleArea.style.display = 'none';
    
    // Populate header
    document.getElementById('reading-header-name').innerHTML = `Lectura para <span class="text-[#D4AF77]">${userName}</span>`;
    
    // Zodiac
    const dobInput = document.getElementById('dob').value;
    const zodiac = getZodiacSign(dobInput);
    document.getElementById('zodiac-sign').innerHTML = `${zodiac.emoji} ${zodiac.sign}`;
    
    // Question reminder
    document.getElementById('question-reminder').innerHTML = `“${question}”`;
    
    // Overall message
    document.getElementById('overall-message').innerHTML = generateOverallMessage(cards, question);

    // Show reading
    readingSection.classList.remove('hidden');
    readingSection.style.display = 'block';

    // Populate and animate each card with real Labubu tarot images
    const positions = ['pasado', 'presente', 'futuro'];
    
    cards.forEach((card, index) => {
        const cardElement = document.getElementById(`card-${index + 1}`);
        const imgEl = document.getElementById(`card-img-${index + 1}`);
        const nameEl = document.getElementById(`name-${index + 1}`);
        const meaningEl = document.getElementById(`meaning-${index + 1}`);
        const interpEl = document.getElementById(`interpretation-${index + 1}`);
        
        // Load the actual Labubu tarot card image
        if (imgEl) {
            imgEl.src = card.file;
            imgEl.alt = `Carta ${card.name} - Tarot de Rommy`;
        }
        
        // Fill data (the image already shows the beautiful Labubu artwork + title)
        nameEl.innerHTML = card.name;
        meaningEl.innerHTML = card.meaning;
        
        // Generate beautiful personalized interpretation
        const interpText = generateInterpretation(userName, question, positions[index], card);
        interpEl.innerHTML = interpText;
        
        // Make sure card starts unflipped
        cardElement.classList.remove('flipped');
        
        // Staggered reveal + flip
        setTimeout(() => {
            // Flip it to reveal the real tarot card image
            cardElement.classList.add('flipped');
            
            // Add magical particles on the revealed card
            setTimeout(() => {
                createParticleBurst(cardElement);
            }, 650);
        }, 420 + (index * 480));
    });

    // Completely free scrolling. 
    // The whole reading (Labubu cards images + per-card info + interpretations + 
    // question reminder + action buttons + contact options) is ONE continuous, 
    // fully scrollable flow. 
    // The user can scroll up or down manually at any moment, any speed, any direction, 
    // with mouse wheel, trackpad, keyboard arrows, spacebar, or touch — with no forced jumps 
    // or blocks. The navigation buttons are purely optional shortcuts.
}

// Build a shareable image of the current reading without requiring a manual screenshot.
async function createReadingShareImage() {
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1350;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#140E24';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const gradient = ctx.createLinearGradient(0, 0, 1080, 1350);
    gradient.addColorStop(0, 'rgba(45,27,78,0.95)');
    gradient.addColorStop(1, 'rgba(20,14,36,0.98)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const gold = '#D4AF77';
    const cream = '#F5F0E6';
    const muted = '#CFC3A8';

    ctx.textAlign = 'center';
    ctx.fillStyle = gold;
    ctx.font = '700 58px Georgia, serif';
    ctx.fillText('Tarot de Rommy', 540, 90);
    ctx.fillStyle = cream;
    ctx.font = '32px Georgia, serif';
    ctx.fillText('Tu Lectura del Destino', 540, 140);

    const name = document.getElementById('name')?.value?.trim() || 'Consultante';
    const question = document.getElementById('question')?.value?.trim() || '';
    ctx.fillStyle = muted;
    ctx.font = '26px Arial, sans-serif';
    ctx.fillText(name, 540, 185);

    const positions = ['Pasado', 'Presente', 'Futuro'];
    const imageEls = [1, 2, 3].map(i => document.getElementById(`card-img-${i}`));
    await Promise.all(imageEls.map(img => {
        if (!img || img.complete) return Promise.resolve();
        return new Promise(resolve => {
            img.addEventListener('load', resolve, { once: true });
            img.addEventListener('error', resolve, { once: true });
        });
    }));

    const cardW = 280, cardH = 430, gap = 35;
    const startX = (1080 - (cardW * 3 + gap * 2)) / 2;
    const y = 260;

    imageEls.forEach((img, index) => {
        const x = startX + index * (cardW + gap);
        ctx.fillStyle = gold;
        ctx.font = '700 24px Arial, sans-serif';
        ctx.fillText(positions[index], x + cardW / 2, y - 22);

        ctx.fillStyle = '#1F1633';
        ctx.fillRect(x - 5, y - 5, cardW + 10, cardH + 10);
        ctx.strokeStyle = gold;
        ctx.lineWidth = 3;
        ctx.strokeRect(x - 5, y - 5, cardW + 10, cardH + 10);

        if (img && img.complete && img.naturalWidth) {
            const scale = Math.min(cardW / img.naturalWidth, cardH / img.naturalHeight);
            const w = img.naturalWidth * scale;
            const h = img.naturalHeight * scale;
            ctx.drawImage(img, x + (cardW - w) / 2, y + (cardH - h) / 2, w, h);
        }

        const cardName = document.getElementById(`name-${index + 1}`)?.textContent?.trim() || '';
        ctx.fillStyle = cream;
        ctx.font = '700 23px Arial, sans-serif';
        ctx.fillText(cardName, x + cardW / 2, y + cardH + 48);
    });

    // Question, wrapped so long questions remain inside the image.
    ctx.fillStyle = gold;
    ctx.font = '700 24px Arial, sans-serif';
    ctx.fillText('Tu pregunta', 540, 815);
    ctx.fillStyle = muted;
    ctx.font = '25px Arial, sans-serif';
    const words = question.split(/\s+/);
    const lines = [];
    let line = '';
    for (const word of words) {
        const test = line ? line + ' ' + word : word;
        if (ctx.measureText(test).width > 900 && line) {
            lines.push(line);
            line = word;
        } else line = test;
    }
    if (line) lines.push(line);
    lines.slice(0, 4).forEach((l, i) => ctx.fillText(l, 540, 855 + i * 34));

    ctx.fillStyle = cream;
    ctx.font = '27px Georgia, serif';
    ctx.fillText('Pasado · Presente · Futuro', 540, 1050);
    ctx.fillStyle = muted;
    ctx.font = '22px Arial, sans-serif';
    ctx.fillText('Lectura generada en Tarot de Rommy', 540, 1100);
    ctx.fillStyle = gold;
    ctx.font = '20px Arial, sans-serif';
    ctx.fillText('tarotvia.cl', 540, 1140);

    return new Promise((resolve, reject) => {
        canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('No se pudo generar la imagen')), 'image/png', 0.95);
    });
}

async function shareReadingImage() {
    const button = document.getElementById('share-reading-btn');
    const original = button ? button.innerHTML : '';
    try {
        if (button) {
            button.disabled = true;
            button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><span>Preparando imagen...</span>';
        }

        const blob = await createReadingShareImage();
        const file = new File([blob], 'tarot-de-rommy-lectura.png', { type: 'image/png' });
        const shareData = {
            title: 'Mi lectura - Tarot de Rommy',
            text: 'Te comparto mi lectura de Tarot de Rommy.',
            files: [file]
        };

        // On supported phones this opens the native share sheet, where WhatsApp can be chosen.
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share(shareData);
            return;
        }

        // Desktop / unsupported browser fallback: download the image, then open WhatsApp.
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);

        const message = encodeURIComponent('Hola Rommy, te envío la imagen de mi lectura del Tarot de Rommy. Me gustaría una consulta personalizada y profunda.');
        window.open(`https://wa.me/56949378439?text=${message}`, '_blank', 'noopener');
    } catch (error) {
        // AbortError simply means the user closed the native share sheet.
        if (error?.name !== 'AbortError') {
            console.error('Error al compartir la lectura:', error);
            alert('No pude compartir la imagen automáticamente. Intenta nuevamente o usa “Copiar lectura”.');
        }
    } finally {
        if (button) {
            button.disabled = false;
            button.innerHTML = original;
        }
    }
}

// Scroll back to the Labubu cards (used from the contact box)
function scrollToCards() {
    const cardsGrid = document.querySelector('#reading-section .grid');
    if (cardsGrid) {
        cardsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        // Fallback to top of reading
        const reading = document.getElementById('reading-section');
        if (reading) reading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Scroll down to the contact section (used from the action buttons area)
function scrollToContact() {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Floating back-to-top button visibility (helps easy navigation up and down the full reading)
function initBackToTop() {
    const btn = document.getElementById('back-to-top-btn');
    if (!btn) return;

    const toggleBtn = () => {
        if (window.scrollY > 450) {
            btn.classList.remove('hidden');
            btn.classList.add('flex');
        } else {
            btn.classList.remove('flex');
            btn.classList.add('hidden');
        }
    };

    window.addEventListener('scroll', toggleBtn);

    // Initial state
    toggleBtn();
}

// Initialize after everything is ready
document.addEventListener('DOMContentLoaded', () => {
    initBackToTop();
});

// Flip a single card manually (nice interactive touch)
function flipCard(cardElement) {
    if (cardElement.classList.contains('flipped')) {
        cardElement.classList.remove('flipped');
    } else {
        cardElement.classList.add('flipped');
    }
}

// Main shuffle function
function handleShuffle() {
    const form = document.getElementById('tarot-form');
    const nameInput = document.getElementById('name');
    const dobInput = document.getElementById('dob');
    const questionInput = document.getElementById('question');
    
    const name = nameInput.value.trim();
    const dob = dobInput.value;
    const question = questionInput.value.trim();
    
    // Basic validation
    if (!name || !dob || !question) {
        const btn = document.getElementById('shuffle-btn');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = `<i class="fa-solid fa-exclamation-triangle"></i> <span>Completa todos los campos</span>`;
        btn.style.background = 'linear-gradient(145deg, #5C3D2E 0%, #3D2A20 100%)';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
        }, 1950);
        return;
    }
    
    // UI transition
    const formSection = document.getElementById('form-section');
    const shuffleArea = document.getElementById('shuffle-area');
    const flyingContainer = document.getElementById('flying-cards-container');
    const shuffleText = document.getElementById('shuffle-text');
    
    formSection.style.transition = 'opacity 0.3s ease';
    formSection.style.opacity = '0';
    
    setTimeout(() => {
        formSection.style.display = 'none';
        shuffleArea.classList.remove('hidden');
        shuffleArea.style.display = 'block';
        
        shuffleText.textContent = 'Las cartas se están barajando con intención...';
        
        // Launch beautiful flying animation
        createFlyingCardsAnimation(flyingContainer, 2550);
        
        // Pick cards after the dramatic shuffle
        setTimeout(() => {
            const selectedCards = selectRandomCards();
            
            // Change text during final reveal moment
            shuffleText.textContent = 'El destino se materializa...';
            
            setTimeout(() => {
                // Reveal the three cards
                revealThreeCards(selectedCards, name, question);
                
                // Clean up
                flyingContainer.innerHTML = '';
                shuffleArea.style.display = 'none';
            }, 650);
            
        }, 2550);
        
    }, 320);
}

// Reset the entire experience
function resetReading() {
    const formSection = document.getElementById('form-section');
    const readingSection = document.getElementById('reading-section');
    const shuffleArea = document.getElementById('shuffle-area');
    
    // Reset visibility
    readingSection.style.display = 'none';
    readingSection.classList.add('hidden');
    shuffleArea.style.display = 'none';
    formSection.style.display = 'block';
    formSection.style.opacity = '1';
    
    // Reset form
    document.getElementById('tarot-form').reset();
    
    // Remove any leftover particles or flying cards
    document.querySelectorAll('.particle, .flying-card').forEach(el => el.remove());
    
    // Clear the real tarot card images and texts
    for (let i = 1; i <= 3; i++) {
        const img = document.getElementById(`card-img-${i}`);
        if (img) img.src = '';
        const nameEl = document.getElementById(`name-${i}`);
        if (nameEl) nameEl.innerHTML = '';
        const meaningEl = document.getElementById(`meaning-${i}`);
        if (meaningEl) meaningEl.innerHTML = '';
        const interpEl = document.getElementById(`interpretation-${i}`);
        if (interpEl) interpEl.innerHTML = '';
    }
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Copy the full reading to clipboard
function copyReading() {
    const nameEl = document.getElementById('reading-header-name');
    const questionEl = document.getElementById('question-reminder');
    const zodiacEl = document.getElementById('zodiac-sign');
    
    const card1Name = document.getElementById('name-1').innerText;
    const card1Interp = document.getElementById('interpretation-1').innerText;
    const card2Name = document.getElementById('name-2').innerText;
    const card2Interp = document.getElementById('interpretation-2').innerText;
    const card3Name = document.getElementById('name-3').innerText;
    const card3Interp = document.getElementById('interpretation-3').innerText;
    
    const overall = document.getElementById('overall-message').innerText;
    
    const text = `✦ Tarot de Rommy — Lectura Mística ✦\n\n` +
        `${nameEl.innerText} | ${zodiacEl.innerText}\n\n` +
        `Tu pregunta: ${questionEl.innerText}\n\n` +
        `━━━━━━━━━━━━━━━━━━\n` +
        `PASADO — ${card1Name}\n${card1Interp}\n\n` +
        `PRESENTE — ${card2Name}\n${card2Interp}\n\n` +
        `FUTURO — ${card3Name}\n${card3Interp}\n\n` +
        `━━━━━━━━━━━━━━━━━━\n` +
        `${overall}\n\n` +
        `— El destino es una conversación. Gracias por consultar con Tarot de Rommy. ✧`;
    
    navigator.clipboard.writeText(text).then(() => {
        // Show temporary toast
        const toast = document.createElement('div');
        toast.className = `fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-3xl bg-[#1F1633] border border-[#D4AF77]/60 text-[#D4AF77] text-sm shadow-2xl flex items-center gap-x-2 z-[999]`;
        toast.innerHTML = `<i class="fa-solid fa-check"></i> <span>Lectura copiada al portapapeles</span>`;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.transition = 'all 0.4s ease';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 350);
        }, 1950);
    }).catch(() => {
        // Fallback
        alert(text);
    });
}

// Main initialization
function initTarot() {
    initTailwind();
    createStars();
    
    // Attach shuffle button handler
    const shuffleBtn = document.getElementById('shuffle-btn');
    shuffleBtn.addEventListener('click', handleShuffle);
    
    // Allow Enter key on form to trigger shuffle (nice UX)
    const form = document.getElementById('tarot-form');
    form.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            // Only if not in textarea
            if (document.activeElement.tagName !== 'TEXTAREA') {
                e.preventDefault();
                handleShuffle();
            }
        }
    });
    
    // Make the cards initially interactive once shown (handled in reveal)
    // Bonus: subtle hover glow on cards when revealed (CSS handles most)
    
    // Easter egg: click the title to create extra stars
    const title = document.querySelector('h1');
    if (title) {
        title.addEventListener('click', () => {
            const container = document.getElementById('stars-container');
            for (let i = 0; i < 22; i++) {
                setTimeout(() => {
                    const star = document.createElement('div');
                    star.className = 'star';
                    star.style.width = '2.5px';
                    star.style.height = '2.5px';
                    star.style.left = `${Math.random() * 100}vw`;
                    star.style.top = `${Math.random() * 60}%`;
                    star.style.opacity = '0.9';
                    star.style.animation = 'twinkle 900ms ease forwards';
                    container.appendChild(star);
                    
                    setTimeout(() => star.remove(), 1200);
                }, i * 6);
            }
        });
    }
    
    // Keyboard support for flipping cards (when visible)
    document.addEventListener('keydown', (e) => {
        if (e.key === '?') {
            const cards = document.querySelectorAll('.tarot-card.flipped');
            if (cards.length > 0) {
                cards.forEach(c => c.classList.remove('flipped'));
            } else {
                document.querySelectorAll('.tarot-card').forEach(c => c.classList.add('flipped'));
            }
        }
    });
    
    // Welcome console message (for the curious)
    console.log('%c[Tarot de Rommy] Página cargada con magia. Las estrellas están alineadas.', 'color:#685C7A');
}

// Boot everything
document.addEventListener('DOMContentLoaded', initTarot);