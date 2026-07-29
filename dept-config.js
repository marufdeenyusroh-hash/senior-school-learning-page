/* dept-config.js
   Single source of truth for per-department data. Every templated page
   (login, dashboard, notes, past-questions, take-quiz, quiz picker, video)
   reads from this instead of hardcoding department-specific copy/links,
   which is what let the three old page-sets drift out of sync with each
   other (e.g. a stale nav bar pointing at the wrong department).
*/

const DEPARTMENTS = {
  science: {
    key: "science",
    label: "Science",
    emoji: "🧬",
    accent: "#4f46e5",
    accentHover: "#4338ca",
    heroTitle: "Level Up<br>Your Science Skills.",
    dashboardTagline: "Access your curated science materials and research study resources.",
    subjects: [
      { slug: "physics", label: "Physics", quizFile: "physics_question.json" },
      { slug: "math", label: "Mathematics", quizFile: "math.json" },
      { slug: "chemistry", label: "Chemistry", quizFile: "chemistry.json" },
      { slug: "biology", label: "Biology", quizFile: "Biology.json" },
      { slug: "english", label: "English", quizFile: "english.json" },
      { slug: "geography", label: "Geography", quizFile: "geograpy.json" },
      { slug: "civic", label: "Civic Education", quizFile: "civic education.json" },
      { slug: "agric", label: "Agricultural Science", quizFile: "agric.json" },
      { slug: "trade", label: "Trade (Tie & Dye)", quizFile: "Tie and Dye.json" },
      { slug: "computer", label: "Computer Science", quizFile: "computer.json" },
    ],
  },
  commercial: {
    key: "commercial",
    label: "Commercial",
    emoji: "💼",
    accent: "#059669",
    accentHover: "#047857",
    heroTitle: "Level Up<br>Your Commercial Skills.",
    dashboardTagline: "Access curated commerce, accounting, and business study resources.",
    subjects: [
      { slug: "commerce", label: "Commerce", quizFile: "commerce.json" },
      { slug: "accounting", label: "Financial Accounting", quizFile: "accounting.json" },
      { slug: "economics", label: "Economics", quizFile: "economics.json" },
      { slug: "math", label: "Mathematics", quizFile: "math.json" },
      { slug: "english", label: "English", quizFile: "english.json" },
      { slug: "civic", label: "Civic Education", quizFile: "civic education.json" },
      { slug: "marketing", label: "Marketing", quizFile: "marketing.json" },
      { slug: "agric", label: "Agricultural Science", quizFile: "agric.json" },
      { slug: "computer", label: "Computer Studies", quizFile: "computer.json" },
    ],
  },
  art: {
    key: "art",
    label: "Art",
    emoji: "🎨",
    accent: "#7c3aed",
    accentHover: "#6d28d9",
    heroTitle: "Level Up<br>Your Art Skills.",
    dashboardTagline: "Access curated literature, language, and humanities study resources.",
    subjects: [
      { slug: "government", label: "Government", quizFile: "government.json" },
      { slug: "literature", label: "Literature in English", quizFile: "Literature.json" },
      { slug: "yoruba", label: "Yoruba", quizFile: "yoruba.json" },
      { slug: "irs", label: "IRS", quizFile: "IRS.json" },
      { slug: "math", label: "Mathematics", quizFile: "math.json" },
      { slug: "english", label: "English", quizFile: "english.json" },
      { slug: "marketing", label: "Marketing", quizFile: "marketing.json" },
    ],
  },
};

const QUESTION_COUNT_OPTIONS = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
  180, 190, 200, 250, 300, 350, 400, 450, 500, 550, 600,
];

/** Reads & validates ?dept= from the URL. Returns null if missing/invalid. */
function getDept() {
  const raw = (new URLSearchParams(location.search).get("dept") || "").toLowerCase();
  return DEPARTMENTS[raw] ? raw : null;
}

function findSubject(deptKey, slug) {
  const dept = DEPARTMENTS[deptKey];
  if (!dept) return null;
  return dept.subjects.find((s) => s.slug === slug) || null;
}

/** Applies a department's branding to the current page (title, accent color, body attr). */
function applyDeptTheme(deptKey, pageLabel) {
  const dept = DEPARTMENTS[deptKey];
  if (!dept) return;
  document.title = `${dept.label} ${pageLabel}`;
  document.body.dataset.dept = deptKey;
  document.documentElement.style.setProperty("--accent", dept.accent);
  document.documentElement.style.setProperty("--accent-hover", dept.accentHover);
}
