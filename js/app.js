const API = "http://localhost:5000/api/tutorials";

const catalog = document.getElementById("catalog");
const tutorial = document.getElementById("tutorial");

async function loadTutorials() {
  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error("API unreachable");
    return await res.json();
  } catch (e) {
    return fetch("data/tutorials.json").then(r => r.json());
  }
}

function showCatalog(data) {
  catalog.innerHTML = "<h2>Choose Origami</h2>";

  data.forEach(t => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${t.steps[0]}" />
      <h3>${t.title}</h3>
      <p>${t.difficulty}</p>
    `;

    div.onclick = () => showTutorial(t);
    catalog.appendChild(div);
  });
}

function showTutorial(t) {
  tutorial.classList.remove("hidden");

  tutorial.innerHTML = `
    <button onclick="tutorial.classList.add('hidden')">← Back</button>
    <h2>${t.title}</h2>
    <p>${t.difficulty}</p>

    <div class="steps">
      ${t.steps
        .map((s, i) => 
          `<div class="step">
             <b>Step ${i + 1}</b>
             <img src="${s}" />
           </div>`
        )
        .join("")}
    </div>
  `;
}

loadTutorials().then(showCatalog);
