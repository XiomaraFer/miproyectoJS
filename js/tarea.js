let datosfijo=0.20;
let datosclaro=0.40;
let datosmovistar=0.60;
let datosentel=1.00;

let cualoperador=prompt(`Escribe¿A que operador llamaste?\na.Fijo\nb.Claro\nc.Movistar\nd.Entel`);
let minutos=parseInt(prompt(`¿Cuantos minutos duro la llamada?`));

let presiofijo=parseFloat(minutos*datosfijo);
let presioclaro=parseFloat(minutos*datosclaro);
let presiomovistar=parseFloat(minutos*datosmovistar);
let presioentel=parseFloat(minutos*datosentel);

if(cualoperador=="fijo"){
    document.write(`El costo de la llamada por ${minutos} minutos a Fijo es S/ ${presiofijo}`);
}else if(cualoperador=="claro"){
    document.write(`El costo de la llamada por ${minutos} minutos en Claro es S/ ${presioclaro}`);
}else if(cualoperador=="movistar"){
   document.write(`El costo de la llamada por ${minutos} minutos en Movistar es S/ ${presiomovistar}`);
}else if(cualoperador=="entel"){
    document.write(`El costo de la llamada por ${minutos}minutos en Entel es S/ ${presioentel}`);
}else {
    alert("No se identifico la operadora")
}