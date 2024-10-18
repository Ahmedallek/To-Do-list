const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("listcontainer");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listcontainer.appendChild(li);

    // Ajout du bouton de suppression (span avec symbole X)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Symbole '×' pour supprimer la tâche
    li.appendChild(span);

    saveData(); // Sauvegarde des tâches après ajout
  }
  inputBox.value = ""; // Réinitialise la boîte d'entrée
}

// Écouteur d'événements sur toute la liste pour capturer les clics sur LI et SPAN
listcontainer.addEventListener("click", function (e) {
  // Clic sur un élément <li>
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked"); // Ajoute/enlève la classe "checked"
    saveData(); // Sauvegarde l'état de la tâche (complété ou non)
  }
  // Clic sur le <span> pour supprimer une tâche
  else if (e.target.tagName === "SPAN") {
    console.log(e.target.parentElement);
    
    e.target.parentElement.remove(); // Supprime l'élément parent <li>
    saveData(); // Sauvegarde après suppression
  }
}, false);

function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML); // Sauvegarde les données dans localStorage
}

function showTask() {
  listcontainer.innerHTML = localStorage.getItem("data"); // Récupère les données sauvegardées
  if (listcontainer.innerHTML === null) {
    listcontainer.innerHTML = ""; // Si aucune donnée, laisse vide
  }
}

// Affiche les tâches sauvegardées lors du chargement de la page
showTask();
