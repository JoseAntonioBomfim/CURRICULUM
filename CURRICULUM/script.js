function toggleTexto() {
    var formacao = document.getElementById("formacao");
    if (formacao.classList.contains("mostrar")) {
        formacao.classList.remove("mostrar");
    } else {
        formacao.classList.add("mostrar");
    }
}

function toggleTexto1() {
    var profissional = document.getElementById("profissional");
    if (profissional.classList.contains("mostrar")) {
        profissional.classList.remove("mostrar");
    } else {
        profissional.classList.add("mostrar");
    }
}
function toggleTextos2() {
    var cursos = document.getElementById("cursos");
    if (cursos.classList.contains("mostrar")) {
        cursos.classList.remove("mostrar");
    } else {
        cursos.classList.add("mostrar");
    }
}