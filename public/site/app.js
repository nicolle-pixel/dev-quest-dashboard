/* Dashboard for Study — lógica da página inicial (HTML/CSS/JS puro) */
(function () {
  "use strict";

  var I18N = window.DFS_I18N;
  var DATA = window.DFS_DATA;
  var LANGS = window.DFS_LANGS;

  var lang = localStorage.getItem("dfs.lang") || "pt";
  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.pt[key] || key;
  }
  function content() {
    return DATA[lang] || DATA.pt;
  }
  function escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---------------- i18n ---------------- */
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
    renderAll();
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

  /* ---------------- Painel ---------------- */
  function renderSubjects() {
    document.getElementById("subjects").innerHTML = content()
      .subjects.map(function (s, i) {
        return (
          '<li><a href="#" data-subj="' + i + '" title="' + escapeHtml(s.summary) + '"><span class="ico">' + s.icon + "</span>" +
          '<span><span class="name">' + escapeHtml(s.name) + "</span>" +
          '<span class="tags">' + escapeHtml(s.tags) + "</span>" +
          '<span class="summary">' + escapeHtml(s.summary) + "</span></span>" +
          '<span class="arrow">›</span></a></li>'
        );
      })
      .join("");
  }

  var accEl = document.getElementById("accordion");
  function renderAccordion() {
    accEl.innerHTML = content()
      .accordion.map(function (a, i) {
        return (
          '<div class="accordion__item' + (i === 0 ? " open" : "") + '">' +
          '<button class="accordion__btn" type="button">' + escapeHtml(a.title) + '<span class="plus">+</span></button>' +
          '<div class="accordion__panel">' + escapeHtml(a.body) + "</div></div>"
        );
      })
      .join("");
  }
  accEl.addEventListener("click", function (e) {
    var btn = e.target.closest(".accordion__btn");
    if (btn) btn.parentElement.classList.toggle("open");
  });

  function renderCsLinks() {
    document.getElementById("csLinks").innerHTML = content()
      .csLinks.map(function (l, i) {
        return (
          '<li><a href="#" data-cs="' + i + '" title="' + escapeHtml(l.summary) + '"><span>' +
          '<span class="name">' + escapeHtml(l.name) + "</span>" +
          '<span class="summary">' + escapeHtml(l.summary) + "</span></span>" +
          '<span class="arrow">›</span></a></li>'
        );
      })
      .join("");
  }

  function renderLangs() {
    document.getElementById("langs").innerHTML = LANGS.map(function (l) {
      return (
        '<div class="lang">' +
        '<span class="lang__logo" style="background:' + l.color + '">' + l.short + "</span>" +
        '<span class="lang__name">' + l.name + "</span>" +
        '<button class="lang__btn" type="button" data-lang="' + escapeHtml(l.name) + '" data-guide="' + l.name + '"></button>' +
        "</div>"
      );
    }).join("");
  }

  /* ---------------- Janela de detalhes ---------------- */
  var modal = document.getElementById("modal");
  var modalTitle = document.getElementById("modalTitle");
  var modalBody = document.getElementById("modalBody");

  function openModal(title, sections) {
    modalTitle.textContent = title;
    modalBody.innerHTML = (sections || [])
      .map(function (s) {
        return (
          '<div class="modal__section"><h3>' + escapeHtml(s.title) + "</h3>" +
          "<p>" + escapeHtml(s.text) + "</p></div>"
        );
      })
      .join("");
    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  }
  function openModalHtml(title, html) {
    modalTitle.textContent = title;
    modalBody.innerHTML = html;
    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  }
  function closeModal() {
    modal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }
  modal.addEventListener("click", function (e) {
    if (e.target.dataset && e.target.dataset.close) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  function subjectNames(index) {
    return Object.keys(DATA).map(function (l) {
      var s = (DATA[l].subjects || [])[index];
      return s ? norm(s.name) : "";
    });
  }
  function subjectPosts(index) {
    var names = subjectNames(index);
    return publishedPosts().filter(function (p) {
      return names.indexOf(norm(p.subject || "")) > -1;
    });
  }
  document.getElementById("subjects").addEventListener("click", function (e) {
    var link = e.target.closest("a[data-subj]");
    if (!link) return;
    e.preventDefault();
    var idx = Number(link.dataset.subj);
    var subject = content().subjects[idx];
    if (!subject) return;
    var posts = subjectPosts(idx);
    var html = '<p class="modal__lead">' + escapeHtml(subject.summary) + "</p>";
    html += posts.length
      ? '<ul class="summarylist">' +
        posts
          .map(function (p) {
            return (
              "<li>" +
              '<button class="summarylist__btn" type="button"><span class="summarylist__caret">›</span>' +
              escapeHtml(p.title) +
              '<span class="summarylist__date">' + fmtDate(p.updatedAt || p.createdAt) + "</span></button>" +
              '<div class="summarylist__body">' + p.html + "</div></li>"
            );
          })
          .join("") +
        "</ul>"
      : '<p class="modal__empty">' + escapeHtml(t("subject.empty")) + "</p>";
    openModalHtml(subject.name + " — " + t("subject.list"), html);
  });

  modalBody.addEventListener("click", function (e) {
    var btn = e.target.closest(".summarylist__btn");
    if (btn) btn.parentElement.classList.toggle("open");
  });

  document.getElementById("csLinks").addEventListener("click", function (e) {
    var link = e.target.closest("a[data-cs]");
    if (!link) return;
    e.preventDefault();
    var item = content().csLinks[Number(link.dataset.cs)];
    if (item) openModal(item.name, item.detail);
  });

  document.getElementById("langs").addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-lang]");
    if (!btn) return;
    var name = btn.dataset.lang;
    var details = (content().langDetails || {})[name];
    if (details) openModal(name + " — " + t("guide"), details);
  });

  document.querySelector(".footer").addEventListener("click", function (e) {
    var link = e.target.closest("a[data-page]");
    if (!link) return;
    e.preventDefault();
    var page = (content().pages || {})[link.dataset.page];
    if (page) openModal(page.title, page.body);
  });

  /* ---------------- Metas ---------------- */
  var saved = JSON.parse(localStorage.getItem("dfs.tasks") || "null") || [true, true, true, false];
  var listEl = document.getElementById("checklist");
  var CIRC = 2 * Math.PI * 52;
  var fg = document.getElementById("donutFg");
  fg.style.strokeDasharray = CIRC;

  function renderProgress() {
    var tasks = content().tasks;
    var done = saved.filter(Boolean).length;
    var pct = tasks.length ? Math.round((done / tasks.length) * 100) : 0;
    if (done === 3) pct = 85;
    fg.style.strokeDashoffset = CIRC * (1 - pct / 100);
    document.getElementById("donutPct").textContent = pct + "%";
  }
  function renderTasks() {
    listEl.innerHTML = content()
      .tasks.map(function (task, i) {
        return (
          "<li><label><input type='checkbox' data-i='" + i + "'" + (saved[i] ? " checked" : "") +
          " /><span>" + escapeHtml(task) + "</span></label></li>"
        );
      })
      .join("");
    renderProgress();
  }
  listEl.addEventListener("change", function (e) {
    if (e.target.type !== "checkbox") return;
    saved[Number(e.target.dataset.i)] = e.target.checked;
    localStorage.setItem("dfs.tasks", JSON.stringify(saved));
    renderProgress();
  });

  /* ---------------- Publicações recentes ---------------- */
  function loadPosts() {
    try {
      return JSON.parse(localStorage.getItem("dfs.posts") || "[]");
    } catch (err) {
      return [];
    }
  }
  function excerpt(html, max) {
    var div = document.createElement("div");
    div.innerHTML = html || "";
    var text = (div.textContent || "").trim();
    var limit = max || 180;
    return text.length > limit ? text.slice(0, limit) + "…" : text;
  }
  function fmtDate(ts) {
    if (!ts) return "";
    try {
      return new Date(ts).toLocaleDateString(lang === "pt" ? "pt-BR" : lang);
    } catch (err) {
      return "";
    }
  }
  var recentEl = document.getElementById("recentPosts");
  var recentEmpty = document.getElementById("recentEmpty");
  function publishedPosts() {
    return loadPosts().filter(function (p) {
      return p.state === "published";
    });
  }
  function renderRecent() {
    var posts = publishedPosts();
    recentEmpty.classList.toggle("hidden", posts.length > 0);
    recentEl.innerHTML = posts
      .slice(0, 6)
      .map(function (p) {
        return (
          '<article class="postcard" data-post="' + escapeHtml(p.id) + '" role="button" tabindex="0">' +
          "<h3>" + escapeHtml(p.title) + "</h3>" +
          '<p class="postcard__meta">' + (p.subject ? escapeHtml(p.subject) + " · " : "") + fmtDate(p.updatedAt || p.createdAt) + "</p>" +
          "</article>"
        );
      })
      .join("");
  }
  recentEl.addEventListener("click", function (e) {
    var card = e.target.closest("article[data-post]");
    if (!card) return;
    var post = publishedPosts().filter(function (p) {
      return String(p.id) === card.dataset.post;
    })[0];
    if (post) openModalHtml(post.title, '<p class="postcard__meta">' + fmtDate(post.updatedAt || post.createdAt) + '</p><div class="modal__rich">' + post.html + "</div>");
  });
  window.addEventListener("storage", renderRecent);

  /* ---------------- Tópicos ---------------- */
  function renderTopics() {
    document.getElementById("topics").innerHTML = content()
      .topics.map(function (c) {
        return (
          '<div class="topics__col"><h3>' + escapeHtml(c.title) + "</h3>" +
          c.links
            .map(function (l) {
              return '<a href="#">' + escapeHtml(l) + "</a>";
            })
            .join("") +
          "</div>"
        );
      })
      .join("");
  }

  /* ---------------- Busca ---------------- */
  var form = document.getElementById("searchForm");
  var input = document.getElementById("searchInput");
  var resultsSection = document.getElementById("searchResults");
  var resultsList = document.getElementById("searchList");
  var resultsInfo = document.getElementById("searchInfo");
  var clearBtn = document.getElementById("searchClear");
  var query = "";

  function norm(str) {
    return String(str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function searchIndex() {
    var c = content();
    var items = [];
    c.subjects.forEach(function (s) {
      items.push({ group: t("col1.title"), title: s.name, text: s.tags + " — " + s.summary });
    });
    c.accordion.forEach(function (a) {
      items.push({ group: t("col2.title"), title: a.title, text: a.body });
    });
    c.csLinks.forEach(function (l) {
      items.push({ group: t("col2.title"), title: l.name, text: l.summary });
    });
    LANGS.forEach(function (l) {
      items.push({ group: t("col3.title"), title: l.name, text: l.name + " " + t("guide") });
    });
    c.topics.forEach(function (col) {
      col.links.forEach(function (l) {
        items.push({ group: t("topics.title"), title: l, text: col.title });
      });
    });
    c.tasks.forEach(function (task) {
      items.push({ group: t("goals.title"), title: task, text: "" });
    });
    publishedPosts().forEach(function (p) {
      items.push({ group: t("recent.title"), title: p.title, text: excerpt(p.html, 200) });
    });
    return items;
  }

  function renderSearch() {
    if (!query) {
      resultsSection.classList.add("hidden");
      resultsList.innerHTML = "";
      return;
    }
    var q = norm(query);
    var hits = searchIndex().filter(function (it) {
      return norm(it.title).indexOf(q) > -1 || norm(it.text).indexOf(q) > -1;
    });
    resultsSection.classList.remove("hidden");
    resultsInfo.textContent = hits.length
      ? hits.length + " " + t("search.count") + ' "' + query + '"'
      : t("search.empty") + ' "' + query + '"';
    resultsList.innerHTML = hits
      .map(function (h) {
        return (
          '<article class="result">' +
          '<span class="result__group">' + escapeHtml(h.group) + "</span>" +
          "<h3>" + escapeHtml(h.title) + "</h3>" +
          (h.text ? '<p class="result__text">' + escapeHtml(h.text) + "</p>" : "") +
          "</article>"
        );
      })
      .join("");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    query = input.value.trim();
    renderSearch();
    if (query) resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  input.addEventListener("input", function () {
    if (!input.value.trim()) {
      query = "";
      renderSearch();
    }
  });
  clearBtn.addEventListener("click", function () {
    input.value = "";
    query = "";
    renderSearch();
  });

  /* ---------------- Render geral ---------------- */
  function renderAll() {
    applyI18n();
    renderSubjects();
    renderAccordion();
    renderCsLinks();
    renderLangs();
    renderTasks();
    renderTopics();
    renderRecent();
    renderSearch();
    applyI18n();
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  renderAll();
})();
