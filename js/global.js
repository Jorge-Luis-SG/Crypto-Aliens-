let menuChange = () =>{
    document.getElementById('header').classList.toggle('change');
  
}
document.getElementById('hamburger-menu').onclick = () =>{
   menuChange();
}



//FIN GRAFICA


//BACK INVESTOR 
let img =  document.getElementById('perfil');
function hide(){
    arrow =  document.getElementById("arrow");
    document.getElementById('back-investor').classList.toggle('hide-container-all')
    img.classList.toggle("hide-perfil");
    }
document.getElementById("arrow").onclick = function(){
    hide();
}
//fin BACK INVESTOR 