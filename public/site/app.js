/* Dashboard for Study — HTML/CSS/JS puro */
(function () {
  "use strict";

  /* ---------------- i18n ---------------- */
  var I18N = {
    pt: {
      "cookie.text": "Usamos cookies para melhorar sua experiência e otimizar nossos serviços. Ao continuar, você concorda com nossa",
      "cookie.privacy": "Política de Privacidade",
      "cookie.more": "Saiba Mais",
      "cookie.accept": "Aceitar",
      "hero.title": "DOMINE SEU FUTURO: GUIA COMPLETO DE ESTUDOS E PROGRAMAÇÃO",
      "hero.subtitle": "Resumos organizados, snippets de código, teoria essencial e prática para todas as matérias.",
      "hero.cta1": "Comece a Aprender",
      "hero.cta2": "Crie seu Guia",
      "col1.title": "Matérias Fundamentais",
      "col2.title": "Ciência da Computação",
      "col3.title": "Linguagens de Programação",
      "goals.title": "Suas Metas",
      "goals.done": "concluído",
      "goals.float": "Lista de tarefas",
      "creator.title": "Área do Criador - Autenticação Necessária",
      "creator.titleField": "Title Field",
      "creator.titlePh": "Digite o Título",
      "creator.password": "Password",
      "creator.submit": "Acessar Painel",
      "creator.hint": "Demonstração: use a senha estudo123",
      "creator.error": "Senha incorreta. Tente novamente.",
      "practice.title": "Prática do Dia",
      "publish.title": "Formulário de Publicação",
      "publish.draft": "Rascunho",
      "publish.published": "Publicado",
      "topics.title": "Tópicos em Destaque",
      "footer.text": "Usamos cookies para melhorar a experiência e otimizar nossos serviços. Ao continuar, você concorda com nossa",
      "footer.terms": "Termos de Serviço",
      "footer.cookieSettings": "Configurações de Cookies",
      "cookie.saved": "Preferências de cookies salvas.",
      "guide": "Guia"
    },
    en: {
      "cookie.text": "We use cookies to improve your experience and optimize our services. By continuing, you agree to our",
      "cookie.privacy": "Privacy Policy",
      "cookie.more": "Learn More",
      "cookie.accept": "Accept",
      "hero.title": "MASTER YOUR FUTURE: COMPLETE STUDY AND PROGRAMMING GUIDE",
      "hero.subtitle": "Organized summaries, code snippets, essential theory and practice for every subject.",
      "hero.cta1": "Start Learning",
      "hero.cta2": "Build your Guide",
      "col1.title": "Core Subjects",
      "col2.title": "Computer Science",
      "col3.title": "Programming Languages",
      "goals.title": "Your Goals",
      "goals.done": "completed",
      "goals.float": "To-do list",
      "creator.title": "Creator Area - Authentication Required",
      "creator.titleField": "Title Field",
      "creator.titlePh": "Enter the Title",
      "creator.password": "Password",
      "creator.submit": "Access Dashboard",
      "creator.hint": "Demo: use the password estudo123",
      "creator.error": "Wrong password. Try again.",
      "practice.title": "Practice of the Day",
      "publish.title": "Publishing Form",
      "publish.draft": "Draft",
      "publish.published": "Published",
      "topics.title": "Featured Topics",
      "footer.text": "We use cookies to improve the experience and optimize our services. By continuing, you agree to our",
      "footer.terms": "Terms of Service",
      "footer.cookieSettings": "Cookie Settings",
      "cookie.saved": "Cookie preferences saved.",
      "guide": "Guide"
    },
    fr: {
      "cookie.text": "Nous utilisons des cookies pour améliorer votre expérience et optimiser nos services. En continuant, vous acceptez notre",
      "cookie.privacy": "Politique de Confidentialité",
      "cookie.more": "En savoir plus",
      "cookie.accept": "Accepter",
      "hero.title": "MAÎTRISEZ VOTRE AVENIR : GUIDE COMPLET D'ÉTUDES ET DE PROGRAMMATION",
      "hero.subtitle": "Résumés organisés, extraits de code, théorie essentielle et pratique pour toutes les matières.",
      "hero.cta1": "Commencer à apprendre",
      "hero.cta2": "Créez votre guide",
      "col1.title": "Matières Fondamentales",
      "col2.title": "Informatique",
      "col3.title": "Langages de Programmation",
      "goals.title": "Vos Objectifs",
      "goals.done": "terminé",
      "goals.float": "Liste de tâches",
      "creator.title": "Espace Créateur - Authentification Requise",
      "creator.titleField": "Title Field",
      "creator.titlePh": "Saisissez le titre",
      "creator.password": "Password",
      "creator.submit": "Accéder au tableau",
      "creator.hint": "Démo : utilisez le mot de passe estudo123",
      "creator.error": "Mot de passe incorrect. Réessayez.",
      "practice.title": "Pratique du Jour",
      "publish.title": "Formulaire de Publication",
      "publish.draft": "Brouillon",
      "publish.published": "Publié",
      "topics.title": "Sujets en Vedette",
      "footer.text": "Nous utilisons des cookies pour améliorer l'expérience et optimiser nos services. En continuant, vous acceptez notre",
      "footer.terms": "Conditions d'Utilisation",
      "footer.cookieSettings": "Paramètres des Cookies",
      "cookie.saved": "Préférences de cookies enregistrées.",
      "guide": "Guide"
    }
  };

  var lang = localStorage.getItem("dfs.lang") || "pt";
  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.pt[key] || key;
  }
  function applyI18n() {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
    });
    document.querySelectorAll("[data-guide]").forEach(function (el) {
      el.textContent = el.getAttribute("data-guide") + " " + t("guide");
    });
  }

  var langSelect = document.getElementById("lang");
  langSelect.value = lang;
  langSelect.addEventListener("change", function () {
    lang = langSelect.value;
    localStorage.setItem("dfs.lang", lang);
    applyI18n();
  });

  /* ---------------- Cookies ---------------- */
  var bar = document.getElementById("cookiebar");
  if (localStorage.getItem("dfs.cookies") === "accepted") bar.classList.add("hidden");
  document.getElementById("cookieAccept").addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("dfs.cookies", "accepted");
    bar.classList.add("hidden");
  });
  function cookieSettings() {
    var essential = confirm(t("cookie.text") + "\n\nOK = " + t("cookie.accept"));
    localStorage.setItem("dfs.cookies", essential ? "accepted" : "essential");
    if (essential) bar.classList.add("hidden");
    alert(t("cookie.saved"));
  }
  document.getElementById("cookieSettings").addEventListener("click", cookieSettings);
  document.getElementById("footerCookieSettings").addEventListener("click", function (e) {
    e.preventDefault();
    cookieSettings();
  });

  /* ---------------- Matérias ---------------- */
  var SUBJECTS = [
    { icon: "∑", name: "Matemática", tags: "Álgebra | Geometria" },
    { icon: "⚛", name: "Física", tags: "Geometria | Física" },
    { icon: "🧪", name: "Química", tags: "Biologia | Química" },
    { icon: "🧬", name: "Biologia", tags: "Biologia | História" },
    { icon: "🏛", name: "História", tags: "História | História" },
    { icon: "📚", name: "Literatura", tags: "Literatura | Literatura" }
  ];
  document.getElementById("subjects").innerHTML = SUBJECTS.map(function (s) {
    return (
      '<li><a href="#"><span class="ico">' + s.icon + "</span>" +
      '<span><span class="name">' + s.name + "</span>" +
      '<span class="tags">' + s.tags + "</span></span>" +
      '<span class="arrow">›</span></a></li>'
    );
  }).join("");

  /* ---------------- Accordion CS ---------------- */
  var ACC = [
    { title: "Fundamentos", body: "Representação de dados, arquitetura de computadores, complexidade e abstração." },
    { title: "Lógica", body: "Proposições, tabelas-verdade, álgebra booleana e provas por indução." },
    { title: "Algoritmos", body: "Ordenação, busca, recursão, programação dinâmica e algoritmos gulosos." }
  ];
  var accEl = document.getElementById("accordion");
  accEl.innerHTML = ACC.map(function (a, i) {
    return (
      '<div class="accordion__item' + (i === 0 ? " open" : "") + '">' +
      '<button class="accordion__btn" type="button">' + a.title + '<span class="plus">+</span></button>' +
      '<div class="accordion__panel">' + a.body + "</div></div>"
    );
  }).join("");
  accEl.addEventListener("click", function (e) {
    var btn = e.target.closest(".accordion__btn");
    if (btn) btn.parentElement.classList.toggle("open");
  });

  document.getElementById("csLinks").innerHTML = ["Estruturas de Dados", "Redes", "Bancos de Dados"]
    .map(function (l) {
      return '<li><a href="#"><span class="name">' + l + '</span><span class="arrow">›</span></a></li>';
    })
    .join("");

  /* ---------------- Linguagens ---------------- */
  var LANGS = [
    { name: "Python", short: "PY", color: "#3776ab" },
    { name: "JavaScript", short: "JS", color: "#f7df1e" },
    { name: "C++", short: "C++", color: "#00599c" },
    { name: "Java", short: "JV", color: "#e76f00" },
    { name: "Ruby", short: "RB", color: "#cc342d" },
    { name: "Swift", short: "SW", color: "#f05138" }
  ];
  document.getElementById("langs").innerHTML = LANGS.map(function (l) {
    return (
      '<div class="lang">' +
      '<span class="lang__logo" style="background:' + l.color + '">' + l.short + "</span>" +
      '<span class="lang__name">' + l.name + "</span>" +
      '<button class="lang__btn" type="button" data-guide="' + l.name + '"></button>' +
      "</div>"
    );
  }).join("");

  /* ---------------- Metas ---------------- */
  var TASKS = [
    "Terminar o guide de Python",
    "Dominar a estrutura de dados",
    "Revisar o capítulo sobre Redes",
    "Praticar os desafios de Lógica"
  ];
  var saved = JSON.parse(localStorage.getItem("dfs.tasks") || "null") || [true, true, true, false];
  var listEl = document.getElementById("checklist");
  listEl.innerHTML = TASKS.map(function (task, i) {
    return (
      "<li><label><input type='checkbox' data-i='" + i + "'" + (saved[i] ? " checked" : "") +
      " /><span>" + task + "</span></label></li>"
    );
  }).join("");

  var CIRC = 2 * Math.PI * 52;
  var fg = document.getElementById("donutFg");
  fg.style.strokeDasharray = CIRC;
  function renderProgress() {
    var done = saved.filter(Boolean).length;
    var pct = TASKS.length ? Math.round((done / TASKS.length) * 100) : 0;
    if (done === 3) pct = 85; // meta destacada do design
    fg.style.strokeDashoffset = CIRC * (1 - pct / 100);
    document.getElementById("donutPct").textContent = pct + "%";
  }
  listEl.addEventListener("change", function (e) {
    if (e.target.type !== "checkbox") return;
    saved[Number(e.target.dataset.i)] = e.target.checked;
    localStorage.setItem("dfs.tasks", JSON.stringify(saved));
    renderProgress();
  });
  renderProgress();

  /* ---------------- Área do Criador ---------------- */
  document.getElementById("creatorForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var pass = document.getElementById("cPass").value;
    if (pass === "estudo123") {
      document.getElementById("creatorLogin").classList.add("hidden");
      document.getElementById("creatorPanel").classList.remove("hidden");
    } else {
      document.getElementById("creatorHint").textContent = t("creator.error");
    }
  });

  /* ---------------- Código com realce ---------------- */
  var SAMPLE = [
    "// Prática do dia: memoização em JavaScript",
    "function memoize(fn) {",
    "  const cache = new Map();",
    "  return function (n) {",
    "    if (cache.has(n)) return cache.get(n);",
    "    const value = fn(n);",
    "    cache.set(n, value);",
    "    return value;",
    "  };",
    "}",
    "",
    "const fib = memoize((n) => (n < 2 ? n : fib(n - 1) + fib(n - 2)));",
    "console.log(fib(40)); // 102334155"
  ].join("\n");

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  var KEYWORDS = /^(function|const|let|var|return|if|else|new|class|for|while|of|in)$/;
  function highlight(src) {
    // Tokenização em uma única passagem para evitar realce dentro das próprias tags.
    var re = /(\/\/[^\n]*)|('[^']*'|"[^"]*"|`[^`]*`)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)/g;
    var out = "";
    var last = 0;
    var m;
    while ((m = re.exec(src)) !== null) {
      out += escapeHtml(src.slice(last, m.index));
      var text = escapeHtml(m[0]);
      if (m[1]) out += '<span class="tok-com">' + text + "</span>";
      else if (m[2]) out += '<span class="tok-str">' + text + "</span>";
      else if (m[3]) out += '<span class="tok-num">' + text + "</span>";
      else if (KEYWORDS.test(m[4])) out += '<span class="tok-key">' + text + "</span>";
      else if (src.charAt(re.lastIndex) === "(") out += '<span class="tok-fn">' + text + "</span>";
      else out += text;
      last = re.lastIndex;
    }
    out += escapeHtml(src.slice(last));
    return out;
  }
  document.getElementById("codeBlock").innerHTML = highlight(SAMPLE);

  /* ---------------- Editor rico ---------------- */
  var editor = document.getElementById("editor");
  document.getElementById("toolbar").addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-cmd]");
    if (!btn) return;
    editor.focus();
    document.execCommand(btn.dataset.cmd, false, btn.dataset.val || null);
  });

  var postsEl = document.getElementById("posts");
  function loadPosts() {
    return JSON.parse(localStorage.getItem("dfs.posts") || "[]");
  }
  function renderPosts() {
    var posts = loadPosts();
    postsEl.innerHTML = posts
      .map(function (p) {
        return (
          "<li><strong>" + escapeHtml(p.title) + "</strong>" +
          '<span class="badge">' + t("publish." + p.state) + "</span>" +
          "<div>" + p.html + "</div></li>"
        );
      })
      .join("");
  }
  document.getElementById("publishBtn").addEventListener("click", function () {
    var title = document.getElementById("pTitle").value.trim();
    if (!title) {
      document.getElementById("pTitle").focus();
      return;
    }
    var state = document.querySelector("input[name='pstate']:checked").value;
    var posts = loadPosts();
    posts.unshift({ title: title, html: editor.innerHTML, state: state });
    localStorage.setItem("dfs.posts", JSON.stringify(posts));
    document.getElementById("pTitle").value = "";
    editor.innerHTML = "";
    renderPosts();
  });
  renderPosts();

  /* ---------------- Tópicos ---------------- */
  var TOPICS = [
    { title: "Estruturas & Algoritmos", links: ["Resumos de Estruturas de Dados", "Guia de Algoritmos Populares", "Conceitos Chave de Computação"] },
    { title: "Ciências Exatas", links: ["Resumos de Álgebra Linear", "Guia de Física Moderna", "Conceitos Chave de Química"] },
    { title: "Humanas & Letras", links: ["Resumos de História Contemporânea", "Guia de Literatura Brasileira", "Conceitos Chave de Redação"] }
  ];
  document.getElementById("topics").innerHTML = TOPICS.map(function (c) {
    return (
      '<div class="topics__col"><h3>' + c.title + "</h3>" +
      c.links.map(function (l) { return '<a href="#">' + l + "</a>"; }).join("") +
      "</div>"
    );
  }).join("");

  document.getElementById("year").textContent = new Date().getFullYear();

  applyI18n();
})();
