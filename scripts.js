function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        myFunction(this);
    }
    xhttp.open("GET", "EquipoComputo.xml");
    xhttp.send();
}
function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("eq");
    let table="<tr><th>Equipo</th><th>Graficos</th><th>Ram</th><th>Procesador</th><th>Colores</th></tr>";
    for (let i = 0; i <x.length; i++) {
        table += "<tr><td>" +
        x[i].getElementsByTagName("Equipo")[0].childNodes[0].nodeValue +
        "</td><td>"+
        x[i].getElementsByTagName("Procesador")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("Ram")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("Graficos")[0].childNodes[0].nodeValue +
        "</td></tr>" +
        x[i].getElementsByTagName("Colores")[0].childNodes[0].nodeValue +
        "</td><td>"
        table += "<td>";
        const b = x[i].getElementsByTagName("Colores");
        var maxLength=0;
        for(let y = 0; y < b[0].getElementsByTagName("Color").length; y++){
            maxLength=y;
        }
        for(let y = 0; y <b[0].getElementsByTagName("Color").length; y++){
            if(y==maxLength){
                table += b[0].getElementsByTagName("Color")[y].childNodes[0].nodeValue;

            }else{
                table += b[0].getElementsByTagName("Color")[y].childNodes[0].nodeValue + ",";
            }
        }
        
        table += "</td>";
    }
    document.getElementById("demo").innerHTML = table;
}