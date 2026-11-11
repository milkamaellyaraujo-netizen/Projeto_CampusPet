const form = document.getElementById("reportForm");

const reportList = document.getElementById("reportList");

const STORAGE_KEY = "campusPetReports";

function carregarRegistros() {

    const registros = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
    );

    reportList.innerHTML = "";

    registros.forEach(registro => {

        const div = document.createElement("div");
        div.className = "report";

        const titulo = document.createElement("h3");
        titulo.textContent = registro.animal;

        const local = document.createElement("p");
        local.textContent = "Local: " + registro.place;

        const situacao = document.createElement("p");
        situacao.textContent = "Situação: " + registro.situation;

        const descricao = document.createElement("p");
        descricao.textContent = registro.details;

        div.append(titulo, local, situacao, descricao);

        reportList.appendChild(div);

    });
}

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const registro = {
        animal: document.getElementById("animal").value,
        situation: document.getElementById("situation").value,
        place: document.getElementById("place").value,
        when: document.getElementById("when").value,
        details: document.getElementById("details").value
    };

    const registros = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
    );

    registros.push(registro);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(registros)
    );

    form.reset();

    carregarRegistros();

    alert("Registro realizado com sucesso!");

});

carregarRegistros();
