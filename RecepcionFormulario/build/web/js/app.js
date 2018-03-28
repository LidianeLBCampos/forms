window.onload = inicializar;
    var campoNombre;
    var camposGenero;
    
function inicializar() {
    campoNombre = document.getElementById('nombre');
    campoNombre.onfocus = function(){
        campoNombre.style.backgroundColor ='yellow';
    };
    campoNombre.onblur = function(){
        campoNombre.style.backgroundColor = 'white';
    };
    
    camposGenero=document.getElementsByName('genero');
    
    camposGenero[0].onclick = function(){
        document.getElementById('msj').style.display = 'none';
    };
    camposGenero[1].onclick = function(){
        document.getElementById('msj').style.display = 'none';
    };
    
    var infoLegal = document.getElementById('info');
    infoLegal.onclick = function(){
       var ventana = window.open("", "Información legal", "width=800, height=600");
        var contenido ="<pre>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.\n"+
        "Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor\n"+
        "(N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal\n"+
        "manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó\n"+
        "como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado\n"+
        "en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más\n"+
        "recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de\n"+
        "Lorem Ipsum.</pre>";

        ventana.document.write(contenido);
        ventana.document.write("<br><input type='button' onclick='self.close()' value='Cerrar'>");
    };
    function showLegalInfo(){
       var ventana = window.open("", "Información legal", "width=800, height=600");
        var contenido ="<pre>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.\n"+
        "Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor\n"+
        "(N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal\n"+
        "manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó\n"+
        "como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado\n"+
        "en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más\n"+
        "recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de\n"+
        "Lorem Ipsum.</pre>";

        ventana.document.write(contenido);
        ventana.document.write("<br><input type='button' onclick='self.close()' value='Cerrar'>");
    };
    setTimeout(showLegalInfo, 5000);
}
function validar(){
    for(var i=0; i < camposGenero.length;i++){
        if (camposGenero[i].checked ===  true)
            return true;
    }
    var msj = document.getElementById('msj');
    msj.innerHTML= "Seleccionar Genero";
    msj.style.display = 'block';
    return false;
}
