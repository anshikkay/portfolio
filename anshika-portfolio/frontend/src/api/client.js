const API_BASE = '/api';

async function getJSON(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error(`Request failed: ${path}`);
  return res.json();
}

async function postJSON(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

export function getProfile() { return getJSON('/profile'); }
export function getExperience() { return getJSON('/experience'); }
export function getProjects() { return getJSON('/projects'); }
export function getAchievements() { return getJSON('/achievements'); }
export function getEducation() { return getJSON('/education'); }
export function sendContactMessage(payload) { return postJSON('/contact', payload); }
