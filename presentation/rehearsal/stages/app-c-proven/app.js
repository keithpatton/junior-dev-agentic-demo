import { durable, downloadable } from "./data-boundaries.js";

const KEY = "apply-forward-v1",
  statuses = ["Wishlist", "Applied", "Screen", "Interview", "Offer"];
const seed = [
  {
    id: crypto.randomUUID(),
    company: "Miro Bay",
    role: "Graduate Software Engineer",
    status: "Interview",
    deadline: "2026-08-14",
    nextAction: "Outline a debugging story",
    notes: "Pairing interview.",
  },
  {
    id: crypto.randomUUID(),
    company: "Good Sort",
    role: "Junior Product Engineer",
    status: "Screen",
    deadline: "2026-08-17",
    nextAction: "Try the mobile product",
    notes: "Mission-led team.",
  },
  {
    id: crypto.randomUUID(),
    company: "Lumen Cargo",
    role: "Frontend Engineer",
    status: "Applied",
    deadline: "",
    nextAction: "Follow up with recruiter",
    notes: "Uses TypeScript.",
  },
];
let apps = load();
function load() {
  try {
    const x = JSON.parse(localStorage.getItem(KEY));
    return Array.isArray(x) ? x : seed;
  } catch {
    return seed;
  }
}
function persist() {
  localStorage.setItem(KEY, JSON.stringify(durable(apps)));
}
function h(s = "") {
  return s.replace(
    /[&<>'"]/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        c
      ],
  );
}
function chooseNext() {
  const weights = { Interview: 50, Screen: 35, Applied: 20, Wishlist: 5, Offer: 10 };
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return apps
    .filter((app) => app.nextAction)
    .map((app) => {
      const days = app.deadline ? Math.ceil((new Date(`${app.deadline}T12:00:00`) - today) / 86400000) : null;
      const urgency = days === null ? 0 : days <= 0 ? 40 : days <= 2 ? 30 : days <= 7 ? 15 : 0;
      return { ...app, score: weights[app.status] + urgency, reason: days === null ? `${app.status} stage; no deadline` : `${app.status} stage; due ${days <= 0 ? "now" : `in ${days} days`}` };
    })
    .sort((a, b) => b.score - a.score)[0];
}
function render() {
  document.querySelector("#summary").innerHTML = [
    "Applied",
    "Screen",
    "Interview",
    "Offer",
  ]
    .map(
      (s) =>
        `<div class="metric"><strong>${apps.filter((a) => a.status === s).length}</strong><span>${s}</span></div>`,
    )
    .join("");
  const pick = chooseNext();
  document.querySelector("#next").innerHTML = pick
    ? `<div><p class="overline">Next 30 minutes</p><div class="number">01</div></div><div><h2>${h(pick.nextAction)}</h2><p>${h(pick.company)} · ${h(pick.role)}</p></div><p class="why">Why this? ${h(pick.reason)}. Active stages and near deadlines rank first.</p>`
    : `<h2>Add a concrete next action to get a recommendation.</h2>`;
  document.querySelector("#empty").hidden = apps.length > 0;
  document.querySelector("#list").innerHTML = apps
    .map(
      (a) =>
        `<article class="row" data-id="${a.id}"><div><h3>${h(a.company)}</h3><p>${h(a.role)}</p></div><select aria-label="Status for ${h(a.company)}">${statuses.map((s) => `<option ${s === a.status ? "selected" : ""}>${s}</option>`).join("")}</select><div><span class="tag">${a.deadline || "Open"}</span><p><strong>${h(a.nextAction || "Choose an action")}</strong></p></div><button class="remove" aria-label="Delete ${h(a.company)}">×</button></article>`,
    )
    .join("");
}
document.querySelector("#add").onclick = () =>
  document.querySelector("#dialog").showModal();
document.querySelector("#cancel").onclick = () =>
  document.querySelector("#dialog").close();
document.querySelector("#form").onsubmit = (e) => {
  e.preventDefault();
  apps.unshift({
    id: crypto.randomUUID(),
    ...Object.fromEntries(new FormData(e.currentTarget)),
  });
  persist();
  render();
  e.currentTarget.reset();
  document.querySelector("#dialog").close();
};
document.querySelector("#list").onchange = (e) => {
  if (e.target.tagName !== "SELECT") return;
  apps.find((a) => a.id === e.target.closest("article").dataset.id).status =
    e.target.value;
  persist();
  render();
};
document.querySelector("#list").onclick = (e) => {
  if (!e.target.classList.contains("remove")) return;
  apps = apps.filter((a) => a.id !== e.target.closest("article").dataset.id);
  persist();
  render();
};
document.querySelector("#export").onclick = () => {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(downloadable(apps), null, 2)], { type: "application/json" }),
  );
  a.download = "apply-forward.json";
  a.click();
  URL.revokeObjectURL(a.href);
};
render();
