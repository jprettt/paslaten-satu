'use strict';

/* PERSONAL SETTINGS: Ganti [NOMOR_WHATSAPP] dengan format internasional,
   contoh 6281234567890 (tanpa +, spasi, atau angka 0 di awal).
   Ganti [NAMA DIA] di index.html. Foto dan caption juga di index.html. */
const WHATSAPP_NUMBER = 6281282302027;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let toastTimer;

function showToast(message, secret = false) {
  const toast = document.querySelector('#toast');
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.toggle('secret', secret);
  toast.hidden = false;
  toastTimer = setTimeout(() => { toast.hidden = true; }, 6500);
}

function contactMe() {
  if (!/^[1-9]\d{7,14}$/.test(WHATSAPP_NUMBER)) {
    showToast('Nomor chat belum dipasang. Untuk pembuat: isi NOMOR_WHATSAPP di script.js dulu ya.');
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank', 'noopener,noreferrer');
}

/* OPENING */
function initOpening() {
  const opening = document.querySelector('#opening');
  const main = document.querySelector('#main-content');
  const button = document.querySelector('#open-letter');
  document.body.classList.add('letter-opening');
  button.addEventListener('click', () => {
    button.disabled = true;
    opening.classList.add('is-closing');
    setTimeout(() => {
      opening.hidden = true;
      main.hidden = false;
      main.classList.add('content-enter');
      document.body.classList.remove('letter-opening');
      window.scrollTo({ top: 0, behavior: 'instant' });
      const title = document.querySelector('.hero-title');
      title.tabIndex = -1;
      title.focus({ preventScroll: true });
      initScrollAnimations();
      initDateCountdown();
    }, reduceMotion.matches ? 0 : 450);
  }, { once: true });
}

/* OUR LITTLE DATE: explicit WITA offset keeps the same moment on every device. */
function initDateCountdown() {
  const dateTime = new Date('2026-10-04T14:00:00+08:00').getTime();
  const units = ['days', 'hours', 'minutes', 'seconds'].map(unit => document.querySelector(`#date-${unit}`));
  let timer;
  const update = () => {
    const remaining = Math.max(0, Math.ceil((dateTime - Date.now()) / 1000));
    const values = [Math.floor(remaining / 86400), Math.floor(remaining % 86400 / 3600), Math.floor(remaining % 3600 / 60), remaining % 60];
    units.forEach((unit, index) => { unit.textContent = String(values[index]).padStart(2, '0'); });
    document.querySelector('#countdown-digits').hidden = remaining === 0;
    document.querySelector('#countdown-finished').hidden = remaining > 0;
    if (remaining === 0) clearInterval(timer);
  };
  update();
  if (Date.now() < dateTime) timer = setInterval(update, 1000);
  document.addEventListener('visibilitychange', update);
}

/* MOOD CHECK */
function initMoodSelector() {
  const responses = {
    safe: 'okay.\nberarti masih masih bolehh inii',
    tired: 'understood.\nhari ini nggak perlu jadi produktif dulu.',
    annoyed: 'silakan kesel.\ndisini ga bakal suruh jenet “sabar ya”.',
    home: 'valid.\nmasalahnya orang-orang kinilow masih suka dengarin suaranya jenet.'
  };
  const buttons = document.querySelectorAll('[data-mood]');
  const response = document.querySelector('#mood-response');
  buttons.forEach(button => button.addEventListener('click', () => {
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    response.textContent = responses[button.dataset.mood];
    response.classList.remove('response-pop');
    void response.offsetWidth; // Restart the short response animation.
    response.classList.add('response-pop');
  }));
}

/* DOG THERAPY & PHOTO ALBUM: missing photos keep the illustrated placeholders. */
function initDogGallery() {
  document.querySelectorAll('.polaroid').forEach(card => {
    card.addEventListener('click', () => {
      const selected = card.classList.toggle('is-selected');
      card.setAttribute('aria-pressed', String(selected));
    });
  });
  document.querySelectorAll('.photo-frame img, .last-photo img').forEach(img => {
    const update = () => {
      if (img.complete && !img.naturalWidth) img.hidden = true;
    };
    img.addEventListener('error', () => { img.hidden = true; });
    img.addEventListener('load', () => { img.hidden = false; });
    update();
  });
}

/* STILL ANNOYED */
function initStillAnnoyed() {
  const stages = [
    { text: 'masih?', button: 'masih.' },
    { text: 'understandable.', button: 'masih kesel juga.' },
    { text: 'anohh masih kg.', button: 'iyo noh.' },
    { text: 'okay.\nthis seems like a job for your boyfriend.', button: 'chat me ↗' }
  ];
  let stage = 0;
  const text = document.querySelector('#annoyed-text');
  const button = document.querySelector('#annoyed-button');
  button.addEventListener('click', () => {
    if (stage === stages.length) { contactMe(); return; }
    text.textContent = stages[stage].text;
    button.textContent = stages[stage].button;
    text.classList.remove('response-pop');
    void text.offsetWidth;
    text.classList.add('response-pop');
    stage += 1;
  });
}

/* SECRET EASTER EGG */
function initEasterEgg() {
  let taps = 0;
  document.querySelector('#secret-heart').addEventListener('click', () => {
    taps += 1;
    if (taps === 5) {
      showToast('you found the secret message.\n\ngua sayang lu.\neven when you’re grumpy.', true);
      taps = 0;
    }
  });
}

/* SCROLL ANIMATIONS: individual entries reveal as they arrive. */
function initScrollAnimations() {
  if (reduceMotion.matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  document.body.classList.add('animate-reveals');
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}

/* VIRTUAL BONK & FAN */
function initStressBreaks() {
  const target = document.querySelector('#korpos-target');
  const count = document.querySelector('#bonk-count');
  const response = document.querySelector('#bonk-response');
  const pop = document.querySelector('#bonk-pop');
  const messages = ['oke. satu keluhan tersalurkan.', 'bonk diterima. rapat boleh ditunda dulu.', 'bonekanya mulai mempertanyakan agenda KKT.', 'tarik napas dulu. lanjut bonk kalau perlu.', 'gua dengerin kok. lu boleh cerita juga.'];
  let hits = 0;
  let bonkTimer;
  target.addEventListener('click', () => {
    hits += 1;
    count.textContent = hits;
    response.textContent = messages[Math.floor((hits - 1) / 5) % messages.length];
    clearTimeout(bonkTimer);
    target.classList.remove('is-bonked');
    pop.classList.remove('is-popping');
    void target.offsetWidth;
    target.classList.add('is-bonked');
    pop.classList.add('is-popping');
    bonkTimer = setTimeout(() => {
      target.classList.remove('is-bonked');
      pop.classList.remove('is-popping');
    }, 400);
  });
  document.querySelector('#bonk-reset').addEventListener('click', () => {
    clearTimeout(bonkTimer);
    hits = 0;
    count.textContent = '0';
    target.classList.remove('is-bonked');
    pop.classList.remove('is-popping');
    response.textContent = 'mulai lagi. bonekanya sudah siap.';
  });
  const stage = document.querySelector('#cooling-stage');
  const fan = document.querySelector('#little-fan');
  const art = document.querySelectorAll('[data-cooling-art]');
  const upgrade = document.querySelector('#cooling-upgrade');
  const reset = document.querySelector('#cooling-reset');
  const labels = ['kipas', 'AC', 'kulkas 2 pintu', 'gunung es'];
  const coolingMessages = ['kipas dulu siapa tau udah dingin.', 'AC 16 derajat. harusnya so boleh si ini.', 'dua pintu dibuka khusus buat jenet.', 'oke, satu gunung es. kalau masih panas jujur tso nntau e.'];
  let level = 0;
  const renderCooling = () => {
    stage.dataset.level = String(level);
    fan.hidden = level !== 0;
    art.forEach(item => { item.hidden = Number(item.dataset.coolingArt) !== level; });
    document.querySelector('#cooling-level').textContent = 'level ' + (level + 1) + ' / ' + labels[level];
    document.querySelector('#fan-response').textContent = coolingMessages[level];
    upgrade.hidden = level === 3;
    reset.hidden = level === 0;
  };
  upgrade.addEventListener('click', () => { level = Math.min(3, level + 1); renderCooling(); });
  reset.addEventListener('click', () => { level = 0; renderCooling(); });
  renderCooling();
}

initStressBreaks();
initDogGallery();
initMoodSelector();
initStillAnnoyed();
initEasterEgg();
initOpening();
