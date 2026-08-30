/* Área do Criador — HTML/CSS/JS puro */
(function () {
  "use strict";

  var I18N = {
    pt: {
      "creator.title": "Área do Criador - Autenticação Necessária",
      "creator.titleField": "Title Field",
      "creator.titlePh": "Digite o Título",
      "creator.password": "Password",
      "creator.submit": "Acessar Painel",
      "creator.hint": "Demonstração: use a senha estudo123",
      "creator.error": "Senha incorreta. Tente novamente.",
      "creator.back": "Voltar ao site",
      "practice.title": "Prática do Dia",
      "publish.title": "Formulário de Publicação",
      "publish.draft": "Rascunho",
      "publish.published": "Publicado",
      "publish.save": "Publicar",
      "publish.update": "Salvar alterações",
      "publish.cancel": "Cancelar edição",
      "publish.list": "Publicações",
      "publish.empty": "Nenhuma publicação ainda.",
      "publish.edit": "Editar",
      "publish.delete": "Eliminar",
      "publish.clearAll": "Eliminar tudo",
      "publish.confirm": "Eliminar esta publicação?",
      "publish.confirmAll": "Eliminar todas as publicações?"
    },
    en: {
      "creator.title": "Creator Area - Authentication Required",
      "creator.titleField": "Title Field",
      "creator.titlePh": "Enter the Title",
      "creator.password": "Password",
      "creator.submit": "Access Dashboard",
      "creator.hint": "Demo: use the password estudo123",
      "creator.error": "Wrong password. Try again.",
      "creator.back": "Back to site",
      "practice.title": "Practice of the Day",
      "publish.title": "Publishing Form",
      "publish.draft": "Draft",
      "publish.published": "Published",
      "publish.save": "Publish",
      "publish.update": "Save changes",
      "publish.cancel": "Cancel editing",
      "publish.list": "Posts",
      "publish.empty": "No posts yet.",
      "publish.edit": "Edit",
      "publish.delete": "Delete",
      "publish.clearAll": "Delete all",
      "publish.confirm": "Delete this post?",
      "publish.confirmAll": "Delete all posts?"
    },
    fr: {
      "creator.title": "Espace Créateur - Authentification Requise",
      "creator.titleField": "Title Field",
      "creator.titlePh": "Saisissez le titre",
      "creator.password": "Password",
      "creator.submit": "Accéder au tableau",
      "creator.hint": "Démo : utilisez le mot de passe estudo123",
      "creator.error": "Mot de passe incorrect. Réessayez.",
      "creator.back": "Retour au site",
      "practice.title": "Pratique du Jour",
      "publish.title": "Formulaire de Publication",
      "publish.draft": "Brouillon",
      "publish.published": "Publié",
      "publish.save": "Publier",
      "publish.update": "Enregistrer",
      "publish.cancel": "Annuler",
      "publish.list": "Publications",
      "publish.empty": "Aucune publication.",
      "publish.edit": "Modifier",
      "publish.delete": "Supprimer",
      "publish.clearAll": "Tout supprimer",
      "publish.confirm": "Supprimer cette publication ?",
      "publish.confirmAll": "Supprimer toutes les publications ?"
    }
  };

  var lang = localStorage.getItem("dfs.lang") || "pt";
  function t(k) {
    return (I18N[lang] && I18N[lang][k]) || I18N.pt[k] || k;
  }
  function applyI18n() {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---------- Autenticação (demo) ---------- */
  var loginEl = document.getElementById("creatorLogin");
  var panelEl = document.getElementById("creatorPanel");
  function setAuth(on) {
    loginEl.classList.toggle("hidden", on);
    panelEl.classList.toggle("hidden", !on);
  }
  setAuth(sessionStorage.getItem("dfs.auth") === "1");

  document.getElementById("creatorForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (document.getElementById("cPass").value === "estudo123") {
      sessionStorage.setItem("dfs.auth", "1");
      setAuth(true);
    } else {
      document.getElementById("creatorHint").textContent = t("creator.error");
    }
  });
  document.getElementById("logoutBtn").addEventListener("click", function () {
    sessionStorage.removeItem("dfs.auth");
    setAuth(false);
  });

  /* ---------- Código com realce ---------- */
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

  var KEYWORDS = /^(function|const|let|var|return|if|else|new|class|for|while|of|in)$/;
  function highlight(src) {
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

  /* ---------- Editor rico ---------- */
  var editor = document.getElementById("editor");
  document.getElementById("toolbar").addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-cmd]");
    if (!btn) return;
    editor.focus();
    document.execCommand(btn.dataset.cmd, false, btn.dataset.val || null);
  });

  /* ---------- CRUD de publicações ---------- */
  var postsEl = document.getElementById("posts");
  var emptyEl = document.getElementById("postsEmpty");
  var titleEl = document.getElementById("pTitle");
  var publishBtn = document.getElementById("publishBtn");
  var cancelBtn = document.getElementById("cancelBtn");
  var editingId = null;

  function loadPosts() {
    try {
      return JSON.parse(localStorage.getItem("dfs.posts") || "[]");
    } catch (err) {
      return [];
    }
  }
  function savePosts(posts) {
    localStorage.setItem("dfs.posts", JSON.stringify(posts));
  }
  function fmtDate(ts) {
    if (!ts) return "";
    try {
      return new Date(ts).toLocaleString(lang === "pt" ? "pt-BR" : lang);
    } catch (err) {
      return "";
    }
  }

  function renderPosts() {
    var posts = loadPosts();
    emptyEl.classList.toggle("hidden", posts.length > 0);
    postsEl.innerHTML = posts
      .map(function (p) {
        return (
          '<li data-id="' + p.id + '">' +
          '<div class="posts__row">' +
          "<strong>" + escapeHtml(p.title) + "</strong>" +
          '<span class="badge">' + t("publish." + p.state) + "</span>" +
          '<span class="posts__date">' + fmtDate(p.updatedAt || p.createdAt) + "</span>" +
          '<span class="posts__actions">' +
          '<button class="btn btn--ghost btn--sm" data-act="edit">' + t("publish.edit") + "</button>" +
          '<button class="btn btn--danger btn--sm" data-act="delete">' + t("publish.delete") + "</button>" +
          "</span></div>" +
          '<div class="posts__body">' + p.html + "</div></li>"
        );
      })
      .join("");
  }

  function resetForm() {
    editingId = null;
    titleEl.value = "";
    editor.innerHTML = "";
    document.querySelector("input[name='pstate'][value='draft']").checked = true;
    publishBtn.textContent = t("publish.save");
    cancelBtn.classList.add("hidden");
  }

  publishBtn.addEventListener("click", function () {
    var title = titleEl.value.trim();
    if (!title) {
      titleEl.focus();
      return;
    }
    var state = document.querySelector("input[name='pstate']:checked").value;
    var posts = loadPosts();
    if (editingId) {
      posts = posts.map(function (p) {
        return p.id === editingId
          ? { id: p.id, title: title, html: editor.innerHTML, state: state, createdAt: p.createdAt, updatedAt: Date.now() }
          : p;
      });
    } else {
      posts.unshift({
        id: String(Date.now()) + Math.random().toString(16).slice(2, 6),
        title: title,
        html: editor.innerHTML,
        state: state,
        createdAt: Date.now(),
        updatedAt: Date.now()
      });
    }
    savePosts(posts);
    resetForm();
    renderPosts();
  });

  cancelBtn.addEventListener("click", resetForm);

  postsEl.addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-act]");
    if (!btn) return;
    var id = btn.closest("li").dataset.id;
    var posts = loadPosts();
    if (btn.dataset.act === "delete") {
      if (!confirm(t("publish.confirm"))) return;
      savePosts(
        posts.filter(function (p) {
          return p.id !== id;
        })
      );
      if (editingId === id) resetForm();
      renderPosts();
      return;
    }
    var post = posts.filter(function (p) {
      return p.id === id;
    })[0];
    if (!post) return;
    editingId = id;
    titleEl.value = post.title;
    editor.innerHTML = post.html || "";
    document.querySelector("input[name='pstate'][value='" + post.state + "']").checked = true;
    publishBtn.textContent = t("publish.update");
    cancelBtn.classList.remove("hidden");
    titleEl.focus();
  });

  document.getElementById("clearAllBtn").addEventListener("click", function () {
    if (!confirm(t("publish.confirmAll"))) return;
    savePosts([]);
    resetForm();
    renderPosts();
  });

  applyI18n();
  resetForm();
  renderPosts();
})();
