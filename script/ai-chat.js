/* ══════════════════════════════════════════════════
   ASK ME ANYTHING — Smart Local AI (No API needed)
   Portfolio of Rashedul Alam
══════════════════════════════════════════════════ */

const RESPONSES = [
  {
    keys: ['skill', 'tech', 'know', 'stack', 'language', 'tool', 'expertise', 'good at', 'proficient'],
    answer: `My core skills span both software and hardware:\n\n**Frontend:** HTML, CSS, JavaScript, Tailwind CSS, DaisyUI\n**Backend/DB:** PHP, MySQL\n**Languages:** C, C++, Python\n**Hardware/IoT:** Arduino, Embedded Systems, RF Modules, Circuit Design\n**Tools:** Git, GitHub, OpenGL\n\nI'm especially passionate about AI integration and building clean, human-centered UIs. 🚀`
  },
  {
    keys: ['project', 'work', 'built', 'made', 'portfolio', 'app', 'application', 'system'],
    answer: `Here are my notable projects:\n\n**Payoo Mobile Wallet** — 40+ fintech features (send money, QR pay, budgeting) using HTML/Tailwind/JS. Live at easypayoo.netlify.app 🔗\n\n**Hostel Management System** — Full web app with PHP/MySQL for room booking, payments & admin dashboard.\n\n**Smart IoT Plant Care** — Arduino system that monitors soil, temperature & automates watering.\n\n**Dhaka City View** — Cinematic C++/OpenGL visual project capturing Dhaka's culture.\n\n**Wireless Transmitter** — Hardware RF data transmitter using embedded systems.`
  },
  {
    keys: ['payoo', 'wallet', 'fintech', 'mobile wallet'],
    answer: `Payoo is my proudest project — a full mobile wallet simulation inspired by Bangladeshi fintech apps like bKash. It has 40+ features including send money, add money, bill payments, mobile recharge, QR payments, budgeting tools, and financial calculators. Everything runs on localStorage — no backend needed! You can try it live at **easypayoo.netlify.app** 🎉`
  },
  {
    keys: ['iot', 'plant', 'arduino', 'hardware', 'embedded', 'wireless', 'transmitter'],
    answer: `I love hardware projects! My **Smart IoT Plant Care System** uses Arduino to monitor soil moisture, temperature, humidity, and light levels — it sends alerts and automates watering automatically. I also built a **Wireless RF Transmitter** demonstrating signal communication between devices without physical connections. These projects taught me embedded C++ and circuit design deeply. ⚡`
  },
  {
    keys: ['education', 'study', 'university', 'college', 'school', 'degree', 'aiub', 'student', 'cgpa', 'academic'],
    answer: `I'm currently pursuing my **B.Sc. in Computer Science & Engineering** at AIUB (American International University-Bangladesh), enrolled since 2023.\n\nBefore that:\n• **HSC** — Hathazari Govt. College (2021)\n• **SSC** — Wadudia High School (2019)\n• **JSC** — Wadudia High School (2016)\n\nI'm passionate about applying what I learn in class to real-world projects. 🎓`
  },
  {
    keys: ['hire', 'why you', 'why should', 'best candidate', 'value', 'offer', 'strength', 'unique', 'different'],
    answer: `Great question! Here's why I'd be a strong addition to any team:\n\n✅ **Full-spectrum skills** — from frontend UI to IoT hardware\n✅ **Real project experience** — 6+ projects including a live fintech app\n✅ **Fast learner** — I pick up new frameworks and tools quickly\n✅ **Design-minded** — I care about how things look AND work\n✅ **Passionate** — I build things in my free time because I genuinely love it\n\nI bridge the gap between engineering and design — which is rare. 💡`
  },
  {
    keys: ['goal', 'future', 'plan', 'looking for', 'job', 'intern', 'opportunity', 'career', 'aspire', 'dream'],
    answer: `I'm actively looking for **internships or full-time roles** in software engineering, full-stack development, or AI/ML integration. My goal is to build intelligent, scalable products that solve real problems — especially in the fintech or tech space. I'm also passionate about learning system design and cloud technologies next. 🌟`
  },
  {
    keys: ['hobby', 'interest', 'free time', 'outside', 'fun', 'personal', 'passion', 'like to do'],
    answer: `Outside of coding, I'm really into **creative videography** — I've made cinematic videos of Dhaka city which is actually one of my projects! I also enjoy graphic design, exploring new technology, and problem-solving challenges. I find that creative hobbies make me a better engineer because they train visual thinking and attention to detail. 🎥`
  },
  {
    keys: ['contact', 'reach', 'email', 'message', 'connect', 'talk', 'collaborate', 'hire me'],
    answer: `You can reach me through multiple channels:\n\n📧 Use the **Contact section** at the bottom of this page\n💼 **LinkedIn:** linkedin.com/in/rashed07\n🐙 **GitHub:** github.com/rashedmojammel\n📸 **Instagram:** instagram.com/rashed_mojammel\n\nI'm always open to interesting collaborations and opportunities! 🤝`
  },
  {
    keys: ['github', 'linkedin', 'instagram', 'facebook', 'social', 'profile', 'link'],
    answer: `Here are my social and professional links:\n\n🐙 **GitHub:** github.com/rashedmojammel\n💼 **LinkedIn:** linkedin.com/in/rashed07\n📸 **Instagram:** instagram.com/rashed_mojammel\n🌐 **Live Project:** easypayoo.netlify.app\n\nFeel free to check out my code and connect! 🙌`
  },
  {
    keys: ['name', 'who are you', 'who is', 'about you', 'introduce', 'tell me about', 'yourself'],
    answer: `Hi! I'm **Rashedul Alam** (most people call me Rashed) — a Software Engineer and CSE student at AIUB, Bangladesh. I'm passionate about bridging AI, design, and engineering to build intelligent, scalable solutions.\n\nI love both the creative side (UI/UX, videography) and the technical side (IoT, backend, AI) of building things. Ask me about my skills, projects, or anything else! 😊`
  },
  {
    keys: ['bangladesh', 'location', 'from', 'where', 'country', 'dhaka'],
    answer: `I'm based in **Bangladesh** 🇧🇩 — specifically working and studying in the tech scene here. Bangladesh has a rapidly growing tech community and I'm excited to be part of it. My Payoo project is actually inspired by local fintech apps like bKash that are transforming how people in Bangladesh handle money!`
  },
  {
    keys: ['python', 'javascript', 'js', 'css', 'html', 'php', 'c++', 'cpp', 'mysql', 'tailwind'],
    answer: `Yes, I work with that! My main programming languages are **C, C++, Python, and JavaScript**. For web development I use HTML/CSS/JS on the frontend with Tailwind CSS and DaisyUI for rapid styling, and PHP + MySQL on the backend. C++ is my go-to for hardware/IoT projects with Arduino and OpenGL. I enjoy learning new languages and pick them up quickly! 💻`
  },
  {
    keys: ['opengl', 'graphics', 'visual', 'animation', '3d', 'rendering'],
    answer: `I've used **OpenGL with C++** for two projects — a Smart Calculator with visual graphics, and the Dhaka City View cinematic project which captures the architecture and culture of Dhaka through code-generated visuals. It's one of the most creative and challenging things I've built — combining art and engineering! 🎨`
  },
  {
    keys: ['video', 'youtube', 'cv', 'resume', 'videography', 'film', 'cinematic'],
    answer: `I actually have a **Video CV on YouTube** that you can watch right below this section! It gives a much more personal look at my background and goals. I also create cinematic videos as a hobby — my Dhaka City View project is a great example of that creative side. 🎬`
  },
  {
    keys: ['hello', 'hi', 'hey', 'howdy', 'greetings', 'good morning', 'good afternoon', 'good evening', 'sup', 'yo'],
    answer: `Hey there! 👋 Great to meet you! I'm an AI assistant that knows everything about Rashedul's portfolio.\n\nYou can ask me about his **skills**, **projects**, **education**, **career goals**, or anything else you're curious about. What would you like to know? 😊`
  },
  {
    keys: ['thanks', 'thank you', 'thx', 'appreciate', 'great', 'awesome', 'cool', 'nice', 'good', 'helpful'],
    answer: `You're welcome! 😊 Happy to help. If you have more questions about Rashedul's work or want to know anything else, just ask! And don't forget to check out the **Contact section** at the bottom if you'd like to get in touch directly. 🚀`
  },
];

const FALLBACK_RESPONSES = [
  `Hmm, I'm not sure about that specific topic! Try asking me about Rashedul's **skills**, **projects**, **education**, or **contact info**. 😊`,
  `I don't have info on that, but I'd love to answer something else! Ask me about his **tech stack**, **projects like Payoo**, or **career goals**. 🤔`,
  `That's outside what I know! I'm best at answering questions about Rashedul's **portfolio, skills, and background**. What would you like to know? 💡`,
];

// ── DOM refs ─────────────────────────────────────
const amaMessages    = document.getElementById('ama-messages');
const amaInput       = document.getElementById('ama-input');
const amaSendBtn     = document.getElementById('ama-send-btn');
const amaSuggestions = document.getElementById('ama-suggestions');
const aiFab          = document.getElementById('ai-fab');
const aiPopup        = document.getElementById('ai-popup');
const aiPopupClose   = document.getElementById('ai-popup-close');

// ── Floating button toggle ────────────────────────
if (aiFab && aiPopup) {
  aiFab.addEventListener('click', () => {
    const isOpen = aiPopup.classList.toggle('is-open');
    aiFab.classList.toggle('is-open', isOpen);
    aiPopup.setAttribute('aria-hidden', String(!isOpen));
    if (isOpen && amaInput) setTimeout(() => amaInput.focus(), 320);
  });

  aiPopupClose && aiPopupClose.addEventListener('click', () => {
    aiPopup.classList.remove('is-open');
    aiFab.classList.remove('is-open');
    aiPopup.setAttribute('aria-hidden', 'true');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (aiPopup.classList.contains('is-open') &&
        !aiPopup.contains(e.target) &&
        !aiFab.contains(e.target)) {
      aiPopup.classList.remove('is-open');
      aiFab.classList.remove('is-open');
      aiPopup.setAttribute('aria-hidden', 'true');
    }
  });
}

if (amaMessages) {
  let suggestionsHidden = false;
  let fallbackIndex = 0;

  // Suggestion chips
  amaSuggestions && amaSuggestions.querySelectorAll('.ama-suggestion-btn').forEach(btn => {
    btn.addEventListener('click', () => sendAMA(btn.dataset.q));
  });

  function hideSuggestions() {
    if (!suggestionsHidden && amaSuggestions) {
      suggestionsHidden = true;
      amaSuggestions.classList.add('ama-suggestions-hidden');
      amaMessages.classList.add('ama-messages-visible');
    }
  }

  function getResponse(text) {
    const lower = text.toLowerCase();
    // Score each response by how many keywords match
    let bestScore = 0;
    let bestAnswer = null;

    for (const item of RESPONSES) {
      let score = 0;
      for (const key of item.keys) {
        if (lower.includes(key)) score++;
      }
      if (score > bestScore) {
        bestScore = score;
        bestAnswer = item.answer;
      }
    }

    if (bestAnswer) return bestAnswer;

    // Fallback — rotate through fallback messages
    const msg = FALLBACK_RESPONSES[fallbackIndex % FALLBACK_RESPONSES.length];
    fallbackIndex++;
    return msg;
  }

  function sendAMA(text) {
    text = (text || amaInput.value).trim();
    if (!text) return;
    amaInput.value = '';
    hideSuggestions();
    amaMessages.classList.add('ama-messages-visible');
    addBubble(text, 'user');

    // Show typing for realism
    const typing = addTyping();
    const delay = 600 + Math.random() * 600;

    setTimeout(() => {
      typing.remove();
      const reply = getResponse(text);
      addBubble(reply, 'bot');
    }, delay);
  }

  amaSendBtn && amaSendBtn.addEventListener('click', () => sendAMA());
  amaInput && amaInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendAMA(); }
  });

  function addBubble(text, role) {
    const wrap = document.createElement('div');
    wrap.className = 'ama-bubble ama-bubble-' + role;
    if (role === 'bot') {
      wrap.innerHTML = '<div class="ama-bubble-avatar"><i class="fas fa-robot"></i></div><div class="ama-bubble-body">' + fmt(text) + '</div>';
    } else {
      wrap.innerHTML = '<div class="ama-bubble-body">' + fmt(text) + '</div>';
    }
    amaMessages.appendChild(wrap);
    amaMessages.scrollTop = amaMessages.scrollHeight;
    return wrap;
  }

  function addTyping() {
    const wrap = document.createElement('div');
    wrap.className = 'ama-bubble ama-bubble-bot ama-typing-bubble';
    wrap.innerHTML = '<div class="ama-bubble-avatar"><i class="fas fa-robot"></i></div><div class="ama-bubble-body ama-dots"><span></span><span></span><span></span></div>';
    amaMessages.appendChild(wrap);
    amaMessages.scrollTop = amaMessages.scrollHeight;
    return wrap;
  }

  function fmt(t) {
    return t
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>')
      .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
  }
}