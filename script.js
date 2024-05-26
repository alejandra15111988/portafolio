let menuVisible = false;

//FUNCION QUE OCULTA O MUESTRA EL MENU
function mostrarOcultarMenu(){
    var nav = document.getElementById("nav");
    if(nav){
        if(menuVisible){
            nav.classList = "";
            menuVisible = false;
        } else {
            nav.classList = "responsive";
            menuVisible = true;
        }
    }
}

function seleccionar(){
    //OCULTO EL MENU UNA VEZ QUE SELECCIONO UNA OPCION
    var nav = document.getElementById("nav");
    if(nav){
        nav.classList = "";
        menuVisible = false;
    }
}

//FUNCCION QUE APLICA LAS ANIMACIONES DE LAS HABILIDADES
function efectoSkills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight- skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("HTML");
        habilidades[1].classList.add("CSS");
        habilidades[2].classList.add("javascript");
    }
}


//DETECTOEL SCROLLINGPARA APLICARLA ANIMACIONDE LA BARRA DE HABILIDADES
window.onscroll = function(){
    efectoSkills();
}







