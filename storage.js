/* storage.js
   Centralized localStorage data layer for the EduPlatform site.
   No backend exists — this is the entire "database". Keys are namespaced
   and passwords are hashed (SHA-256 via crypto.subtle) so nothing sensitive
   is stored in plain text, even though localStorage itself is always
   readable by anyone with devtools access to the browser it's stored in.

   Requires a secure context (https://, or http://localhost) because
   crypto.subtle is unavailable otherwise.
*/

const NS = "eduplatform";

function userKey(dept, name) {
  return `${NS}:user:${dept}:${name.trim().toLowerCase()}`;
}

async function hashPassword(password) {
  const bytes = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Register a new user under a department. Returns {ok:true} or {ok:false, error}.
 */
async function registerUser(dept, { name, school, gender, password }) {
  if (!name || !school || !gender || !password) {
    return { ok: false, error: "Please complete all fields" };
  }
  const key = userKey(dept, name);
  if (localStorage.getItem(key)) {
    return { ok: false, error: "An account with this name already exists in this department" };
  }
  const passwordHash = await hashPassword(password);
  const record = { name: name.trim(), school, gender, department: dept, passwordHash };
  localStorage.setItem(key, JSON.stringify(record));
  return { ok: true };
}

/**
 * Attempt login. On success, stores the session and returns {ok:true, user}.
 */
async function loginUser(dept, name, password) {
  if (!name || !password) {
    return { ok: false, error: "Please fill out all fields" };
  }
  const key = userKey(dept, name);
  const stored = localStorage.getItem(key);
  if (!stored) {
    return { ok: false, error: "User profile not found. Verify spelling or complete registration." };
  }
  const record = JSON.parse(stored);
  const passwordHash = await hashPassword(password);
  if (passwordHash !== record.passwordHash) {
    return { ok: false, error: "Incorrect password" };
  }
  const session = {
    name: record.name,
    school: record.school,
    gender: record.gender,
    department: record.department,
  };
  localStorage.setItem(`${NS}:currentUser`, JSON.stringify(session));
  return { ok: true, user: session };
}

/**
 * Returns the current session user, or null if there is none, or if a
 * department was requested and doesn't match the session's department.
 */
function getCurrentUser(dept) {
  const stored = localStorage.getItem(`${NS}:currentUser`);
  if (!stored) return null;
  let user;
  try {
    user = JSON.parse(stored);
  } catch {
    return null;
  }
  if (dept && user.department !== dept) return null;
  return user;
}

function logout() {
  localStorage.removeItem(`${NS}:currentUser`);
}

/**
 * Guard for content pages. Redirects to login (preserving the current URL
 * as ?next=) if there's no valid session for `dept`. Returns the user, or
 * null (in which case a redirect has already been triggered — the caller
 * should stop executing).
 */
function requireLogin(dept, loginUrl = "login.html") {
  const user = getCurrentUser(dept);
  if (!user) {
    const next = encodeURIComponent(location.pathname.split("/").pop() + location.search);
    window.location.href = `${loginUrl}?dept=${encodeURIComponent(dept)}&next=${next}`;
    return null;
  }
  return user;
}
