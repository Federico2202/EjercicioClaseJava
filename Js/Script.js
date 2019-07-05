   
function Añadir(){
    var micajadetexto=document.getElementById("lista");
    var ul = document.getElementById("lista2");

    var li = document.createElement("li");
    var textoli = document.createTextNode(micajadetexto.value);

    li.appendChild(textoli);
    ul.appendChild(li);

}

