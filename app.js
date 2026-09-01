import { durable, downloadable } from "./data-boundaries.js";

const KEY = "apply-forward-v1";
const statuses = ["Wishlist", "Applied", "Screen", "Interview", "Offer"];
const seed = [
  {
    id: crypto.randomUUID(),
    company: "Miro Bay",
    role: "Graduate Software Engineer",
    status: "Interview",
    deadline: "2026-09-03",
    nextAction: "Outline a debugging story",
    notes: "Pairing interview.",
  },
  {
    id: crypto.randomUUID(),
    company: "Good Sort",
    role: "Junior Product Engineer",
    status: "Screen",
    deadline: "2026-09-06",
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

let applications = load();

function load() {
  try {
    const stored = JSON.parse(localStorage.getItem(KEY));
    return Array.isArray(stored) ? stored : seed;
  } catch {
    return seed;
  }
}

function persist() {
  localStorage.setItem(KEY, JSON.stringify(durable(applications)));
}

function escapeHtml(value = "") {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character],
  );
}

function chooseNext() {
  const stageWeights = {
    Interview: 50,
    Screen: 35,
    Applied: 20,
    Wishlist: 5,
    Offer: 10,
  };
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return applications
    .filter((application) => application.nextAction)
    .map((application) => {
      const days = application.deadline
        ? Math.ceil(
            (new Date(`${application.deadline}T12:00:00`) - today) / 86400000,
          )
        : null;
      const urgency =
        days === null ? 0 : days <= 0 ? 40 : days <= 2 ? 30 : days <= 7 ? 15 : 0;

      return {
        ...application,
        score: stageWeights[application.status] + urgency,
        reason:
          days === null
            ? `${application.status} stage; no deadline`
            : `${application.status} stage; due ${days <= 0 ? "now" : `in ${days} days`}`,
      };
    })
    .sort((left, right) => right.score - left.score)[0];
}

function render() {
  document.querySelector("#summary").innerHTML = [
    "Applied",
    "Screen",
    "Interview",
    "Offer",
  ]
    .map(
      (status) =>
        `<div class="metric"><strong>${applications.filter((application) => application.status === status).length}</strong><span>${status}</span></div>`,
    )
    .join("");

  const recommendation = chooseNext();
  document.querySelector("#next").innerHTML = recommendation
    ? `<div><p class="overline">Next 30 minutes</p><div class="number">01</div></div><div><h2>${escapeHtml(recommendation.nextAction)}</h2><p>${escapeHtml(recommendation.company)} · ${escapeHtml(recommendation.role)}</p></div><p class="why">Why this? ${escapeHtml(recommendation.reason)}. Active stages and near deadlines rank first.</p>`
    : `<h2>Add a concrete next action to get a recommendation.</h2>`;

  document.querySelector("#empty").hidden = applications.length > 0;
  document.querySelector("#list").innerHTML = applications
    .map(
      (application) =>
        `<article class="row" data-id="${application.id}"><div><h3>${escapeHtml(application.company)}</h3><p>${escapeHtml(application.role)}</p></div><select aria-label="Status for ${escapeHtml(application.company)}">${statuses.map((status) => `<option ${status === application.status ? "selected" : ""}>${status}</option>`).join("")}</select><div><span class="tag">${application.deadline || "Open"}</span><p><strong>${escapeHtml(application.nextAction || "Choose an action")}</strong></p></div><button class="remove" aria-label="Delete ${escapeHtml(application.company)}">×</button></article>`,
    )
    .join("");
}

document.querySelector("#add").onclick = () =>
  document.querySelector("#dialog").showModal();
document.querySelector("#cancel").onclick = () =>
  document.querySelector("#dialog").close();
document.querySelector("#form").onsubmit = (event) => {
  event.preventDefault();
  applications.unshift({
    id: crypto.randomUUID(),
    ...Object.fromEntries(new FormData(event.currentTarget)),
  });
  persist();
  render();
  event.currentTarget.reset();
  document.querySelector("#dialog").close();
};
document.querySelector("#list").onchange = (event) => {
  if (event.target.tagName !== "SELECT") return;
  applications.find(
    (application) => application.id === event.target.closest("article").dataset.id,
  ).status = event.target.value;
  persist();
  render();
};
document.querySelector("#list").onclick = (event) => {
  if (!event.target.classList.contains("remove")) return;
  applications = applications.filter(
    (application) => application.id !== event.target.closest("article").dataset.id,
  );
  persist();
  render();
};
document.querySelector("#export").onclick = () => {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(
    new Blob([JSON.stringify(downloadable(applications), null, 2)], {
      type: "application/json",
    }),
  );
  link.download = "apply-forward.json";
  link.click();
  URL.revokeObjectURL(link.href);
};

render();
