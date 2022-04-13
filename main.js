function GenerateDiv() {
    let div = document.getElementById("generateDiv");
    let force = document.getElementsByName("force");

    let forceChange = 0;
    for (var i in force) {
        if (force[i].checked) {
            forceChange = force[i].value;
        }
    }
    if (forceChange == 0) {
        return;
    }
    ClearDiv()
    div.innerHTML = `<br> <textarea class = "form-control" id = "password" rows = "7" cols = "10"readonly></textarea>
    <button class = "btn btn-primary botoes" type = 'button' onclick = "CopiarTexto()">
    <img width = "20" src = "./images/clipboard.svg" alt = "Ícone de cópia">Copiar</button>
    
    <button class = "btn btn-danger botoes" type = 'button' onclick = "ClearDiv()">
    <img width = "20" src = "./images/trash.svg" alt = "Ícone de limpar">Limpar</button>`;
}

function ClearDiv() {
    let div = document.getElementById("generateDiv");
    div.innerHTML = "";
}

function Generate() {
    let campo = document.getElementById("password");
    let force = document.getElementsByName("force");
    let forceChange = 0;
    let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', '<', '>', '?', '~', '`', '/'];
    for (var i in force) {
        if (force[i].checked) {
            forceChange = force[i].value;
        }
    }
    if (forceChange == 0) {
        return;
    }

    campo.innerHTML = '';
    for (let i = 0; i < document.getElementById("size").value; i++) {

        if (forceChange == 26) {
            campo.innerHTML += alfabeto[Math.floor(Math.random() * 26)];
        } else if (forceChange == 62) {
            campo.innerHTML += alfabeto[Math.floor(Math.random() * 62)];
        } else if (forceChange == 90) {
            campo.innerHTML += alfabeto[Math.floor(Math.random() * 90)];
        }
    }
}

function CopiarTexto() {
    let textoCopiado = document.getElementById("password");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

// Mostra o número de caracteres presentes na senha e gera automaticamente uma senha
var $range = document.getElementById("size"),
    $value = document.getElementById("span");

$range.addEventListener('input', function () {
    $value.textContent = this.value;
    Generate()
});



if (document.querySelector('input[name="force"]')) {
    document.querySelectorAll('input[name="force"]').forEach((elem) => {
        elem.addEventListener("change", function (event) {

            GenerateDiv()
            Generate()
        });
    });
}