var xhr= new XMLHttpRequest();
xhr.open('GET', "http://localhost:8080/FrasesSimpsoms/FrasesServlet?id="+ getRandomId(), true);
        xhr.onreadystatechange = mostrarFrase;
        xhr.send();
        
        function mostrarFrase() {
            if(xhr.readyState === 4){
            document.getElementById('frase').innerHTML = xhr.responseText;
        }
    }
    function getRandomId() {
        return (Math.round(Math.random()) * 10 + 1);
    }