/* partials.js
   Loads shared HTML fragments (nav/footer) at runtime via fetch(), so the
   same markup doesn't have to be hand-copied into every page. Requires the
   site to be served over http(s):// — fetch() of a local file is blocked
   by browsers' CORS policy under a file:// origin. (The quiz pages already
   require a real origin today, to fetch the JSON question banks — this
   just extends that same requirement to more pages.)

   Scripts inside a fragment inserted via innerHTML do NOT execute, so all
   behavior here (active-link highlighting, logout wiring) is done in JS
   after the fragment loads, not inside the fragment itself.
*/

async function includeHTML(selector, url) {
  const target = document.querySelector(selector);
  if (!target) return;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url}: ${res.status}`);
    target.innerHTML = await res.text();
  } catch (e) {
    console.warn("partial load failed:", url, e);
  }
}

/** Loads the top-level site nav + footer (home/subjects/quiz picker pages). */
async function loadSiteChrome() {
  await Promise.all([
    includeHTML("#site-nav", "nav.html"),
    includeHTML("#site-footer", "footer.html"),
  ]);
}

/** Loads the in-app department nav bar and wires up its links + logout. */
async function loadDeptNav(dept, activePage) {
  await includeHTML("#dept-nav", "dept-nav.html");
  const nav = document.querySelector(".dept-nav");
  if (!nav) return;

  const info = typeof DEPARTMENTS !== "undefined" ? DEPARTMENTS[dept] : null;
  const brandEl = nav.querySelector("#deptBrand");
  if (brandEl) brandEl.textContent = info ? `${info.emoji} ${info.label} Hub` : "EduPortal";

  nav.querySelectorAll("a[data-page]").forEach((a) => {
    const page = a.dataset.page;
    a.href = `${page}.html?dept=${encodeURIComponent(dept)}`;
    if (page === activePage) a.classList.add("active");
  });

  const logoutLink = nav.querySelector("#logoutLink");
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeof logout === "function") logout();
      window.location.href = `login.html?dept=${encodeURIComponent(dept)}`;
    });
  }
}
