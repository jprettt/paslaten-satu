# A Little Break for You

Buka index.html langsung atau melalui Live Server. Tidak ada dependency, backend, login, atau database.

## Struktur folder

```text
any/
??? index.html
??? style.css
??? script.js
??? assets/
    ??? images/
    ?   ??? dog1.jpg ... dog4.jpg   (tambahkan foto anjing)
    ?   ??? her1.jpg ... her4.jpg   (tambahkan foto pacar)
    ?   ??? us1.jpg                (tambahkan foto kalian)
    ??? music/
        ??? song.mp3               (opsional)
```

File foto dan musik adalah file yang perlu kamu tambahkan sendiri; saat ini direktori aset kosong dan halaman menampilkan placeholder.

## Personalisasi

- Ganti `[NAMA DIA]` di index.html.
- Ganti `[NOMOR_WHATSAPP]` di script.js dengan nomor internasional, misalnya `6281234567890`.
- Tambahkan foto dan lagu ke path di atas. Caption diedit langsung di index.html.
- Google Fonts membutuhkan internet; font lokal cadangan tetap digunakan saat offline.

## Kode lengkap

### index.html

```html
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f5f2e9">
  <meta name="description" content="A little break for you. Sebuah tempat kecil untuk beristirahat selama KKT.">
  <title>A Little Break for You</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
</head>
<body>
  <!-- OPENING: Ganti [NAMA DIA] dengan nama atau panggilan kesayangan. -->
  <section id="opening" class="opening" aria-labelledby="opening-title">
    <div class="opening-top"><span class="brand">a little break for you <span>✳</span></span><span class="edition">a small corner of the internet</span></div>
    <div class="letter-cover">
      <span class="postmark" aria-hidden="true">a little care<br>from me to you<br>✳</span>
      <p class="eyebrow">a note for your heavy days</p>
      <h1 id="opening-title">For you<span class="ink-dot">.</span></h1>
      <p class="opening-copy">because KKT has been<br>a little too much lately.</p>
      <span class="little-rule" aria-hidden="true"></span>
      <p class="soft">from someone who knows you've had a rough day.</p>
      <button id="open-letter" class="button">open when you're tired <span aria-hidden="true">↗</span></button>
      <p class="handwritten cover-note">take your time. there's no rush.</p>
    </div>
    <div class="opening-bottom"><span>made with care, somewhere during KKT.</span><span class="handwritten">just for [NAMA DIA]</span></div>
  </section>

  <main id="main-content" hidden>
    <header class="site-header"><a class="brand" href="#hero">a little break for you <span>✳</span></a><span class="header-note">you can exhale here.</span></header>
    <button id="music-toggle" class="music-toggle" aria-label="Putar musik" aria-pressed="false" hidden>♫</button>
    <!-- Lagu: tambahkan assets/music/song.mp3. Musik tidak diputar otomatis. -->
    <audio id="music" preload="none" loop src="assets/music/song.mp3"></audio>

    <!-- HERO -->
    <section id="hero" class="hero full-screen">
      <div class="hero-inner">
        <p class="eyebrow reveal">a pause, just for you</p>
        <h2 class="hero-title reveal">hey, you<span class="ink-dot">.</span></h2>
        <p class="hero-copy reveal">I know these past few days<br>haven't been easy.</p>
        <p class="soft reveal">so I made you a tiny place where<br>you don't have to do anything.</p>
        <a class="button reveal" href="#tired">stay here for a bit <span aria-hidden="true">↓</span></a>
        <p class="handwritten hero-note reveal">no tasks. no deadlines. just a little breathing room.</p>
      </div>
      <span class="hero-spark" aria-hidden="true">✳</span>
      <div class="section-foot"><span>leave the heavy stuff at the door.</span><span>01 / a little breathing room</span></div>
    </section>

    <!-- ACKNOWLEDGEMENT -->
    <section id="tired" class="section narrow journal">
      <p class="eyebrow reveal">first, let me say this</p>
      <h2 class="reveal">I know you're tired.</h2>
      <p class="reveal">gua tahu akhir-akhir ini lu capek.</p>
      <p class="reveal">gua tahu ada banyak hal yang bikin lu kesel selama KKT.</p>
      <p class="reveal">dan mungkin ada beberapa hari di mana semuanya terasa lebih berat dari seharusnya.</p>
      <div class="journal-emphasis reveal"><p>jadi sebelum hal lain,</p><p class="handwritten">lu nggak perlu pura-pura<br>baik-baik aja di sini.</p></div>
    </section>

    <!-- APOLOGY LETTER -->
    <section class="section apology-wrap">
      <article class="letter-paper reveal">
        <span class="tape" aria-hidden="true"></span>
        <p class="eyebrow">a little honesty</p>
        <h2>also... there's something<br>I want to say.</h2>
        <p>gua juga mau minta maaf.</p>
        <p>selama KKT ini mungkin gua belum bisa support lu semaksimal yang gua pengen.</p>
        <p>kadang gua mungkin nggak tahu harus bilang apa.</p>
        <p>kadang gua nggak selalu ada di waktu yang tepat.</p>
        <p>dan mungkin ada beberapa saat di mana gua seharusnya bisa lebih peka atau lebih hadir buat lu.</p>
        <p>tapi bukan berarti gua nggak peduli.</p>
        <p>gua selalu pengen lu baik-baik aja, bahkan ketika gua sendiri nggak tahu cara terbaik buat bantu.</p>
        <div class="letter-ending"><p>jadi website kecil ini mungkin nggak menyelesaikan apa-apa.</p><p>tapi anggap aja ini salah satu cara kecil gua bilang:</p><p class="handwritten big-note">I'm still here.</p></div>
        <p class="handwritten signature">with care, me.</p>
      </article>
    </section>

    <!-- TRANSITION -->
    <section class="section transition narrow">
      <p class="handwritten big-note reveal">okay.</p>
      <h2 class="reveal">enough serious stuff.</h2>
      <p class="reveal">I think this situation requires professional help.</p>
      <p class="handwritten reveal">fortunately, I know someone. ↓</p>
    </section>

    <!-- DOG THERAPY: Ganti dog1.jpg–dog4.jpg dengan foto anjingmu. Caption bisa diedit di sini. -->
    <section id="dogs" class="section gallery-section sage-section">
      <div class="section-heading reveal"><p class="eyebrow">meet your support team</p><h2>Emergency Dog Therapy</h2><p class="soft">medically unproven.<br>emotionally effective.</p><p class="handwritten gallery-hint">tap a photo. he's listening.</p></div>
      <div class="photo-strip" aria-label="Galeri foto anjing">
        <button class="polaroid dog-card" aria-pressed="false"><span class="photo-frame dog-placeholder"><span class="placeholder-art" aria-hidden="true">🐶</span><span class="placeholder-label">your little therapist · 01</span><img src="assets/images/dog1.jpg" alt="Foto anjing pertama" loading="lazy"></span><span class="photo-caption">he has no idea what KKT is.<br>honestly, good for him.</span><span class="tap-note">off duty, always.</span></button>
        <button class="polaroid dog-card" aria-pressed="false"><span class="photo-frame dog-placeholder"><span class="placeholder-art" aria-hidden="true">🐾</span><span class="placeholder-label">employee of the month · 02</span><img src="assets/images/dog2.jpg" alt="Foto anjing kedua" loading="lazy"></span><span class="photo-caption">professional emotional<br>support employee.</span><span class="tap-note">payment accepted in treats.</span></button>
        <button class="polaroid dog-card" aria-pressed="false"><span class="photo-frame dog-placeholder"><span class="placeholder-art" aria-hidden="true">🐕</span><span class="placeholder-label">living the dream · 03</span><img src="assets/images/dog3.jpg" alt="Foto anjing ketiga" loading="lazy"></span><span class="photo-caption">0 assignments. 0 responsibilities.<br>living the dream.</span><span class="tap-note">his schedule is fully empty.</span></button>
        <button class="polaroid dog-card" aria-pressed="false"><span class="photo-frame dog-placeholder"><span class="placeholder-art" aria-hidden="true">💤</span><span class="placeholder-label">certified nap advocate · 04</span><img src="assets/images/dog4.jpg" alt="Foto anjing keempat" loading="lazy"></span><span class="photo-caption">he believes you<br>deserve a nap.</span><span class="tap-note">doctor's orders. probably.</span></button>
      </div>
      <p class="gallery-footer">a very qualified team. absolutely no qualifications.</p>
    </section>

    <!-- MOOD CHECK -->
    <section class="section narrow mood-section">
      <p class="eyebrow reveal">a tiny check-in</p><h2 class="reveal">okay.<br>current status?</h2>
      <div class="mood-options reveal" role="group" aria-label="Pilih suasana hati">
        <button data-mood="safe" aria-pressed="false"><span>😐</span>masih aman</button>
        <button data-mood="tired" aria-pressed="false"><span>😮‍💨</span>capek</button>
        <button data-mood="annoyed" aria-pressed="false"><span>😤</span>kesel</button>
        <button data-mood="home" aria-pressed="false"><span>🤬</span>pengen pulang dari KKT</button>
      </div>
      <p id="mood-response" class="response" role="status" aria-live="polite">whatever it is, there's room for it here.</p>
    </section>

    <!-- PHOTO ALBUM: Ganti her1.jpg–her4.jpg dengan foto pacar. Caption bebas diedit. -->
    <section class="section gallery-section album-section">
      <div class="section-heading reveal"><p class="eyebrow">little moments, kept close</p><h2>My Favourite Photos of You</h2><p class="soft">or more accurately,<br>some of my favourite versions of you.</p></div>
      <div class="photo-strip" aria-label="Album foto favorit">
        <button class="polaroid album-card" aria-pressed="false"><span class="photo-frame memory-placeholder"><span class="placeholder-art handwritten">a happy<br>little moment</span><span class="placeholder-label">a space for you · 01</span><img src="assets/images/her1.jpg" alt="Foto favorit pertama: terlihat bahagia" loading="lazy"></span><span class="photo-caption">I don't know why,<br>but you look really happy here.</span></button>
        <button class="polaroid album-card" aria-pressed="false"><span class="photo-frame memory-placeholder"><span class="placeholder-art handwritten">that smile<br>of yours</span><span class="placeholder-label">a space for you · 02</span><img src="assets/images/her2.jpg" alt="Foto favorit kedua: senyumnya" loading="lazy"></span><span class="photo-caption">I really like your smile<br>in this one.</span></button>
        <button class="polaroid album-card" aria-pressed="false"><span class="photo-frame memory-placeholder"><span class="placeholder-art handwritten">I remember<br>this one</span><span class="placeholder-label">a space for you · 03</span><img src="assets/images/her3.jpg" alt="Foto favorit ketiga: sebuah kenangan" loading="lazy"></span><span class="photo-caption">you probably don't even remember<br>this picture. but I do.</span></button>
        <button class="polaroid album-card" aria-pressed="false"><span class="photo-frame memory-placeholder"><span class="placeholder-art handwritten">a favourite.<br>always.</span><span class="placeholder-label">a space for you · 04</span><img src="assets/images/her4.jpg" alt="Foto favorit keempat" loading="lazy"></span><span class="photo-caption">still one of<br>my favourites.</span></button>
      </div>
      <p class="handwritten gallery-footer">ordinary moments. a very extraordinary you.</p>
    </section>

    <!-- REMINDERS -->
    <section class="section reminders">
      <div class="section-heading reveal"><p class="eyebrow">a few things to keep</p><h2>things I hope you<br>remember today.</h2></div>
      <div class="notes-grid">
        <article class="note reveal"><span>01</span><p>hari buruk nggak berarti seluruh KKT lu buruk.</p></article>
        <article class="note reveal"><span>02</span><p>lu boleh capek tanpa harus merasa bersalah.</p></article>
        <article class="note reveal"><span>03</span><p>lu nggak harus selalu kelihatan kuat.</p></article>
        <article class="note reveal"><span>04</span><p>satu hari buruk nggak menentukan seluruh minggu.</p></article>
      </div>
      <div class="rooting-note reveal"><p>dan kalau semuanya terasa terlalu ramai,<br>please remember that somewhere,<br>there's someone who's always rooting for you.</p><span class="handwritten">yes, that's me. ↖</span></div>
    </section>

    <!-- KKT KIT -->
    <section class="section kit-section">
      <div class="section-heading reveal"><p class="eyebrow">for the slightly harder days</p><h2>Emergency KKT Kit</h2><p class="soft">pilih sesuai kondisi anda.</p></div>
      <div class="kit-grid reveal">
        <details><summary><span>🍜</span>hungry?<span class="plus" aria-hidden="true">+</span></summary><div><p>eat first.<br>existential crisis later.</p><small>masalah hidup terasa sekitar 37% lebih parah ketika lapar.<br>source: saya sendiri.</small></div></details>
        <details><summary><span>🛏️</span>tired?<span class="plus" aria-hidden="true">+</span></summary><div><p>sleep.<br>the problem can wait until tomorrow.</p></div></details>
        <details><summary><span>💢</span>annoyed?<span class="plus" aria-hidden="true">+</span></summary><div><p>complaint department:<br>open 24/7.</p></div></details>
        <details><summary><span>🫂</span>need company?<span class="plus" aria-hidden="true">+</span></summary><div><p>call me.<br>no explanation required.</p><button class="text-button contact-button">chat me ↗</button></div></details>
        <a class="dog-kit" href="#dogs"><span>🐶</span><span>dog emergency?<small>return to Emergency Dog Therapy.</small></span><span aria-hidden="true">↗</span></a>
        <details><summary><span>🤎</span>need me?<span class="plus" aria-hidden="true">+</span></summary><div><p>unfortunately,<br>this service comes with lifetime subscription.</p></div></details>
      </div>
    </section>

    <!-- STILL ANNOYED -->
    <section class="section narrow annoyed-section"><p class="eyebrow reveal">no judgment, by the way</p><div class="reveal"><h2 id="annoyed-text" aria-live="polite">masih kesel?</h2><button id="annoyed-button" class="button">iya. <span aria-hidden="true">→</span></button></div></section>

    <!-- ONE LAST THING: Ganti us1.jpg dengan foto kalian berdua. -->
    <section class="section last-section">
      <div class="last-photo reveal"><span class="handwritten">you & me.<br>still figuring things out.</span><img src="assets/images/us1.jpg" alt="Foto kami berdua" loading="lazy"></div>
      <div class="last-copy reveal"><p class="eyebrow">one last thing</p><h2>I can't promise I'll always<br>know the right thing to say.</h2><p>but I'll keep trying to be someone you can come back to.</p><p class="soft">sorry if I haven't been the best support lately.</p><p class="handwritten">I hope I can do better.</p></div>
    </section>

    <!-- ENDING -->
    <section class="ending full-screen">
      <div class="reveal"><p class="handwritten">anyway.</p><h2>you survived today<span class="ink-dot">.</span></h2><p class="soft">that's enough for me.</p><div class="ending-promise"><p>and until things feel a little easier,<br>you have:</p><p class="handwritten">this tiny website,<br>my dog,<br>and me.</p></div><button id="secret-heart" class="secret-heart" aria-label="Hati kecil">♡</button></div>
      <footer><p>made for you,<br>somewhere during KKT.</p><span class="handwritten">I'm still here.</span><a href="#hero" class="back-top">back to our little corner ↑</a></footer>
    </section>
  </main>
  <div id="toast" class="toast" role="status" aria-live="polite" hidden></div>
  <noscript><style>#opening{display:none}#main-content[hidden]{display:block}</style><p class="no-script">Surat ini bisa dibaca tanpa JavaScript. Aktifkan JavaScript untuk interaksi kecilnya.</p></noscript>
</body>
</html>

```

### style.css

```css
/* PALETTE & BASE */
:root{--cream:#f5f2e9;--sage:#dbe3d6;--dusty-blue:#dce5e9;--warm-brown:#8c7056;--text-dark:#394239;--text-soft:#73796c;--paper:#fffdf7;--line:#d9ddcf;--shadow:0 8px 28px #3942390d;--hand:'Caveat',cursive;--body:'DM Sans',sans-serif;--serif:Georgia,'Times New Roman',serif}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:85px}body{margin:0;background:var(--cream);color:var(--text-dark);font-family:var(--body);font-size:15px;line-height:1.8}body.letter-opening{overflow:hidden}button,a{-webkit-tap-highlight-color:transparent}button{font:inherit;color:inherit;cursor:pointer}button,a,summary{touch-action:manipulation}button{border:0}a{color:inherit}button:focus-visible,a:focus-visible,summary:focus-visible{outline:3px solid var(--warm-brown);outline-offset:5px}[hidden]{display:none!important}h1,h2,p{margin-top:0}h2{font-family:var(--serif);font-size:clamp(30px,4vw,46px);font-weight:400;line-height:1.2;letter-spacing:-1.3px;margin-bottom:30px}p{margin-bottom:22px}img{width:100%;height:100%;object-fit:cover}.soft{color:var(--text-soft)}.handwritten{font-family:var(--hand);font-size:27px;line-height:1.3}.eyebrow{text-transform:uppercase;letter-spacing:2.6px;font-size:10px;font-weight:600;color:var(--text-soft);margin-bottom:25px}.ink-dot{color:var(--warm-brown)}.button{display:inline-flex;align-items:center;justify-content:center;gap:30px;min-height:52px;padding:13px 25px;border-radius:100px;background:var(--text-dark);color:var(--paper);text-decoration:none;font-size:13px;box-shadow:0 4px 12px #39423912;transition:transform .3s,background .3s}.button:hover{background:#4e5e48;transform:translateY(-2px)}.button:active{transform:scale(.97)}.button span{font-size:19px}.brand{text-decoration:none;font-size:12px;letter-spacing:.4px;font-weight:500;display:inline-flex;align-items:center;gap:14px}.brand span{color:var(--warm-brown);font-size:23px}.full-screen{min-height:100svh}.section{padding:110px 28px}.narrow{max-width:640px;margin:auto}.section-heading{text-align:center;max-width:640px;margin:0 auto 45px}.section-heading h2{margin-bottom:18px}.big-note{font-size:clamp(49px,7vw,68px)}

/* DIGITAL LETTER OPENING */
.opening{min-height:100svh;display:flex;flex-direction:column;padding:25px 5vw;background:radial-gradient(ellipse at 75% 70%,#e1e7d9 0,transparent 60%),var(--cream);position:relative;transition:opacity .45s,transform .45s}.opening.is-closing{opacity:0;transform:translateY(-12px)}.opening-top,.opening-bottom{display:flex;align-items:center;justify-content:space-between;gap:20px}.edition,.opening-bottom{font-size:10px;color:var(--text-soft);letter-spacing:.6px}.letter-cover{position:relative;text-align:center;max-width:620px;width:100%;margin:auto;padding:85px 24px 55px}.letter-cover h1{font-family:var(--serif);font-weight:400;font-size:clamp(86px,14vw,132px);letter-spacing:-6px;line-height:1;margin:0 0 30px}.opening-copy{font-family:var(--serif);font-size:clamp(22px,4vw,29px);line-height:1.5;letter-spacing:-.5px}.letter-cover>.soft{font-size:12px;max-width:270px;margin:28px auto}.little-rule{display:block;width:35px;height:1px;background:var(--warm-brown);margin:auto}.cover-note{margin:22px 0 0;font-size:22px;color:var(--warm-brown);transform:rotate(-4deg)}.postmark{position:absolute;right:0;top:12px;width:86px;height:86px;border:1px solid #8c705650;border-radius:50%;display:grid;place-content:center;color:var(--warm-brown);font-size:9px;line-height:1.5;letter-spacing:1px;transform:rotate(13deg)}.opening-bottom{padding-bottom:4px}.opening-bottom .handwritten{font-size:22px}

/* HERO */
.site-header{display:flex;align-items:center;justify-content:space-between;padding:20px 5vw;position:absolute;top:0;left:0;right:0;z-index:2}.header-note{font-family:var(--hand);font-size:22px;color:var(--text-soft);padding-right:50px}.music-toggle{position:fixed;top:20px;right:22px;width:43px;height:43px;border:1px solid var(--line);border-radius:50%;background:var(--paper);z-index:10;font-size:21px;box-shadow:var(--shadow)}.music-toggle[aria-pressed=true]{background:var(--sage)}.hero{position:relative;display:grid;place-items:center;padding:120px 28px 105px;background:radial-gradient(ellipse at 80% 55%,#e3e8db80,transparent 50%)}.hero-inner{text-align:center;width:100%;max-width:620px}.hero-title{font-size:clamp(80px,13vw,140px);letter-spacing:-5px;margin-bottom:20px}.hero-copy{font-family:var(--serif);font-size:25px;line-height:1.55;letter-spacing:-.4px}.hero-inner>.soft{font-size:14px;margin-bottom:30px}.hero-note{font-size:22px;max-width:300px;margin:23px auto 0;transform:rotate(-3deg);color:var(--warm-brown)}.hero-spark{position:absolute;right:15%;top:28%;font-size:49px;color:#a7b09a;transform:rotate(17deg)}.section-foot{position:absolute;bottom:26px;left:5vw;right:5vw;display:flex;justify-content:space-between;font-size:10px;color:var(--text-soft);letter-spacing:.4px}

/* JOURNAL & APOLOGY LETTER */
.journal{padding-top:130px;padding-bottom:130px}.journal>p:not(.eyebrow){max-width:460px}.journal-emphasis{margin-top:48px;padding:25px 0 0 25px;border-left:2px solid #bcc8b2}.journal-emphasis .handwritten{font-size:36px}.apology-wrap{background:#eae9df;padding-top:80px;padding-bottom:80px}.letter-paper{max-width:620px;margin:auto;background:var(--paper);padding:58px 55px 35px;border-radius:4px 4px 24px 4px;box-shadow:var(--shadow);position:relative}.tape{position:absolute;top:-13px;left:calc(50% - 42px);width:84px;height:28px;background:#b9c5a981;transform:rotate(-5deg)}.letter-paper h2{font-size:32px}.letter-paper>p:not(.eyebrow){font-size:14px;line-height:1.95}.letter-ending{margin-top:45px;padding-top:25px;border-top:1px solid var(--line)}.letter-ending>p:not(.handwritten){font-size:14px}.letter-ending .big-note{margin:30px 0;color:#5f7559;transform:rotate(-3deg)}.signature{text-align:right;color:var(--warm-brown);font-size:25px!important}.transition{text-align:center;padding-top:125px;padding-bottom:125px}.transition>.big-note{margin-bottom:55px}.transition h2{font-size:34px}.transition>p:not(.handwritten){font-size:14px}.transition>.handwritten:last-child{font-size:26px;color:var(--warm-brown)}

/* POLAROIDS: horizontal scroll belongs to the gallery, not the page. */
.sage-section{background:var(--sage)}.gallery-section{padding-left:0;padding-right:0}.section-heading{padding:0 28px}.gallery-hint{font-size:22px;color:var(--warm-brown);margin-top:25px}.photo-strip{display:flex;align-items:flex-start;gap:25px;overflow-x:auto;overscroll-behavior-x:contain;scroll-snap-type:x proximity;padding:22px max(28px,calc((100vw - 1100px)/2)) 35px;scrollbar-width:thin;scrollbar-color:#aeb9a2 transparent}.polaroid{flex:0 0 244px;min-width:0;background:var(--paper);padding:12px 12px 20px;border-radius:3px;box-shadow:0 7px 16px #39423915;transform:rotate(-3deg);transition:transform .35s,box-shadow .35s;scroll-snap-align:center;text-align:center}.polaroid:nth-child(even){transform:rotate(3deg);margin-top:14px}.polaroid:nth-child(3){transform:rotate(-2deg)}.polaroid:hover,.polaroid.is-selected{transform:rotate(0) translateY(-5px);box-shadow:0 12px 25px #39423923}.photo-frame{display:flex;position:relative;height:245px;align-items:center;justify-content:center;flex-direction:column;overflow:hidden}.photo-frame img,.last-photo img{position:absolute;inset:0;z-index:1;transition:transform .4s}.polaroid.is-selected img{transform:scale(1.055)}.dog-placeholder{background:#e8e7da;color:#7b8168}.polaroid:nth-child(2) .photo-frame{background:#dce5e9}.polaroid:nth-child(3) .photo-frame{background:#e8ddd0}.polaroid:nth-child(4) .photo-frame{background:#dfe6d8}.placeholder-art{font-size:67px;line-height:1.2}.placeholder-label{font-family:var(--body);position:absolute;bottom:18px;font-size:9px;letter-spacing:1px;color:var(--text-soft)}.photo-caption{display:block;font-family:var(--hand);font-size:23px;line-height:1.2;padding:20px 1px 0;min-height:76px}.tap-note{display:block;font-size:10px;line-height:1.5;color:var(--warm-brown);max-height:0;opacity:0;overflow:hidden;transition:max-height .35s,opacity .35s,margin .35s}.is-selected .tap-note{max-height:55px;opacity:1;margin-top:12px}.gallery-footer{text-align:center;font-size:11px;color:var(--text-soft);margin:26px 28px 0}.memory-placeholder{background:#e6dfd2}.memory-placeholder .placeholder-art{font-size:38px;color:#91856f;transform:rotate(-5deg)}.album-section{background:#efeee5}.album-section .gallery-footer{font-size:25px;color:var(--warm-brown)}

/* MOOD CHECK */
.mood-section{text-align:center}.mood-options{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:35px}.mood-options button{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;min-height:100px;border-radius:14px;background:var(--paper);border:1px solid var(--line);padding:14px 10px;font-size:12px;transition:transform .3s,background .3s,border-color .3s}.mood-options button span{font-size:27px}.mood-options button:hover{transform:translateY(-3px)}.mood-options button[aria-pressed=true]{background:var(--sage);border-color:#839777}.response{min-height:110px;display:grid;place-content:center;white-space:pre-line;margin:25px 0 0;font-size:14px;color:var(--text-soft)}.response-pop{animation:response-in .35s ease both}@keyframes response-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}

/* HANDWRITTEN REMINDERS */
.notes-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:760px;margin:55px auto}.note{background:#e6e9da;padding:25px 27px;box-shadow:var(--shadow);border-radius:3px;transform:rotate(-2deg)}.note:nth-child(2){background:#e8ded0;transform:rotate(2deg)}.note:nth-child(3){background:var(--dusty-blue);transform:rotate(1deg)}.note:nth-child(4){background:#ede4ce;transform:rotate(-2deg)}.note>span{font-size:10px;color:var(--text-soft)}.note p{font-family:var(--hand);font-size:30px;line-height:1.3;margin:14px 0 8px}.rooting-note{max-width:610px;margin:70px auto 0;text-align:center;font-family:var(--serif);font-size:23px;line-height:1.65}.rooting-note .handwritten{display:block;text-align:right;color:var(--warm-brown);font-size:28px;transform:rotate(-5deg)}

/* KKT KIT */
.kit-section{background:#e7ece9}.kit-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;max-width:800px;margin:auto;align-items:start}.kit-grid details,.dog-kit{background:var(--paper);border:1px solid #d9dfd6;border-radius:14px;box-shadow:var(--shadow)}.kit-grid summary{min-height:80px;padding:22px;display:flex;gap:14px;align-items:center;cursor:pointer;list-style:none;font-size:14px}.kit-grid summary::-webkit-details-marker{display:none}.kit-grid summary>span:first-child,.dog-kit>span:first-child{font-size:25px}.plus{margin-left:auto;font-size:23px;font-weight:400;color:var(--text-soft);transition:transform .3s}.kit-grid details[open] .plus{transform:rotate(45deg)}.kit-grid details>div{padding:0 22px 24px;animation:response-in .3s}.kit-grid details p{font-size:15px}.kit-grid small{display:block;font-size:11px;color:var(--text-soft);line-height:1.7}.dog-kit{display:flex;gap:14px;align-items:center;padding:22px;min-height:80px;text-decoration:none;font-size:14px;transition:transform .3s}.dog-kit:hover{transform:translateY(-3px)}.dog-kit>span:last-child{margin-left:auto}.dog-kit small{margin-top:5px}.text-button{background:transparent;padding:10px 0;min-height:44px;color:var(--warm-brown);text-decoration:underline;text-underline-offset:5px}.annoyed-section{text-align:center;padding-top:130px;padding-bottom:130px}.annoyed-section h2{white-space:pre-line}.last-section{display:grid;grid-template-columns:1fr 1.2fr;gap:70px;align-items:center;max-width:1100px;margin:auto}.last-photo{position:relative;display:grid;place-items:center;aspect-ratio:4/5;background:linear-gradient(145deg,#dfe6d8,#e5ddd0);border:12px solid var(--paper);border-bottom-width:38px;box-shadow:var(--shadow);transform:rotate(-4deg);border-radius:3px}.last-photo>span{text-align:center;font-size:34px;color:#838976}.last-copy h2{font-size:32px}.last-copy>.handwritten{color:var(--warm-brown);font-size:31px}.last-copy>p:not(.handwritten){font-size:14px}

/* ENDING & SECRET */
.ending{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:95px 28px 30px;background:#e3e8dc}.ending>.reveal{margin:auto 0;padding-bottom:50px}.ending h2{font-size:clamp(38px,6vw,64px);margin-bottom:18px}.ending-promise{margin-top:60px}.ending-promise>p:first-child{font-size:13px;color:var(--text-soft)}.ending-promise .handwritten{font-size:34px;line-height:1.4}.secret-heart{background:transparent;min-height:48px;min-width:48px;font-size:31px;color:var(--warm-brown);transition:transform .3s}.secret-heart:active{transform:scale(1.15)}.ending footer{font-size:10px;color:var(--text-soft)}.ending footer p{margin-bottom:10px}.ending footer .handwritten{font-size:22px}.back-top{display:block;margin-top:25px;font-size:10px;text-decoration:none}.toast{position:fixed;bottom:25px;left:50%;transform:translateX(-50%);width:min(340px,calc(100% - 40px));background:var(--paper);border:1px solid var(--line);padding:22px 25px;border-radius:16px;box-shadow:0 10px 45px #39423926;z-index:20;white-space:pre-line;text-align:center;font-size:14px;animation:response-in .35s}.toast.secret{font-family:var(--hand);font-size:27px}.no-script{text-align:center;padding:15px;font-size:12px}

/* SCROLL ANIMATIONS: only enabled after observer initialization. */
.animate-reveals .reveal{opacity:0;translate:0 15px;transition:opacity .6s ease,translate .6s ease}.animate-reveals .reveal.is-visible{opacity:1;translate:0 0}.content-enter{animation:response-in .6s ease both}

/* MOBILE FIRST ADJUSTMENTS */
@media(min-width:1200px){.photo-strip{justify-content:center}.photo-strip .polaroid{flex-basis:240px}}
@media(max-width:600px){body{font-size:14px}.opening{padding:20px 23px}.edition,.header-note{display:none}.letter-cover{padding:95px 0 50px}.postmark{right:0;top:20px;width:70px;height:70px;font-size:8px}.letter-cover h1{font-size:94px}.letter-cover .eyebrow{font-size:9px;letter-spacing:2px}.opening-copy{font-size:25px}.opening-bottom{align-items:flex-end;font-size:8px;letter-spacing:0}.opening-bottom>span:first-child{max-width:150px}.opening-bottom .handwritten{font-size:20px}.section{padding:80px 26px}.site-header{padding:20px 25px}.brand{font-size:11px;gap:10px}.hero{padding:120px 26px 100px}.hero-title{font-size:94px}.hero-copy{font-size:23px}.hero-spark{right:10%;top:24%;font-size:30px}.section-foot{left:26px;right:26px;font-size:8px}.section-foot>span:last-child{display:none}.journal{padding-top:100px;padding-bottom:100px}.letter-paper{padding:45px 26px 25px}.letter-paper h2{font-size:28px}.letter-paper>p:not(.eyebrow){font-size:13px}.apology-wrap{padding:65px 20px}.journal-emphasis .handwritten{font-size:32px}.transition{padding:100px 28px}.gallery-section{padding-left:0;padding-right:0}.polaroid{flex-basis:244px}.photo-strip{gap:22px}.note{padding:20px 18px}.notes-grid{gap:18px;margin-top:40px}.note p{font-size:25px}.rooting-note{font-size:20px}.rooting-note br{display:none}.kit-grid{grid-template-columns:1fr}.kit-grid summary{min-height:74px}.last-section{display:flex;flex-direction:column;gap:55px;padding:90px 32px}.last-photo{width:75%;max-width:280px}.last-copy{text-align:center}.last-copy h2{font-size:29px}.ending{padding:90px 25px 30px}.ending-promise{margin-top:48px}.ending h2{font-size:43px}.annoyed-section{padding-top:100px;padding-bottom:100px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important}.animate-reveals .reveal{opacity:1;translate:none}}

```

### script.js

```javascript
'use strict';

/* PERSONAL SETTINGS: Ganti [NOMOR_WHATSAPP] dengan format internasional,
   contoh 6281234567890 (tanpa +, spasi, atau angka 0 di awal).
   Ganti [NAMA DIA] di index.html. Foto dan caption juga di index.html. */
const WHATSAPP_NUMBER = '[NOMOR_WHATSAPP]';
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
      initMusic();
    }, reduceMotion.matches ? 0 : 450);
  }, { once: true });
}

/* MOOD CHECK */
function initMoodSelector() {
  const responses = {
    safe: 'okay.\nberarti kita masih punya harapan 😌',
    tired: 'understood.\nhari ini nggak perlu jadi produktif dulu.',
    annoyed: 'silakan kesel.\nwebsite ini tidak akan menyuruh anda “sabar ya”.',
    home: 'valid.\nsayangnya fitur teleport masih dalam development.'
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

/* KKT KIT: native details supports touch and keyboard without a modal. */
function initKktKit() {
  document.querySelectorAll('.contact-button').forEach(button => {
    button.addEventListener('click', contactMe);
  });
}

/* STILL ANNOYED */
function initStillAnnoyed() {
  const stages = [
    { text: 'masih?', button: 'masih.' },
    { text: 'understandable.', button: 'masih kesel juga.' },
    { text: 'buset lama juga.', button: 'iya anjir.' },
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

/* OPTIONAL MUSIC: load only after the letter opens, and never autoplay. */
function initMusic() {
  const audio = document.querySelector('#music');
  const button = document.querySelector('#music-toggle');
  let busy = false;
  const sync = () => {
    button.setAttribute('aria-pressed', String(!audio.paused));
    button.setAttribute('aria-label', audio.paused ? 'Putar musik' : 'Jeda musik');
    button.textContent = audio.paused ? '♫' : 'Ⅱ';
  };
  audio.addEventListener('loadedmetadata', () => { button.hidden = false; });
  audio.addEventListener('error', () => { button.hidden = true; });
  audio.addEventListener('play', sync);
  audio.addEventListener('pause', sync);
  audio.preload = 'metadata';
  audio.load();
  button.addEventListener('click', async () => {
    if (busy) return;
    if (!audio.paused) { audio.pause(); return; }
    busy = true;
    try { await audio.play(); }
    catch (error) {
      if (audio.error) button.hidden = true;
      else showToast('Musiknya belum bisa diputar. Coba tap sekali lagi ya.');
    } finally { busy = false; sync(); }
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

initDogGallery();
initMoodSelector();
initKktKit();
initStillAnnoyed();
initEasterEgg();
initOpening();

```

