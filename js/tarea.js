let datofijo=0.20;
let datoclaro=0.40;
let datomovistar=0.60;
let datoentel=1.00;

let cualoperador=prompt(`Escribe¿A que operador llamaste?\n*fijo\n*claro\n*movistar\n*entel`);
let minutos=parseInt(prompt(`¿Cuantos minutos duro la llamada?`));

let costofijo=parseFloat(minutos*datofijo);
let costoclaro=parseFloat(minutos*datoclaro);
let costomovistar=parseFloat(minutos*datomovistar);
let costoentel=parseFloat(minutos*datoentel);

if(cualoperador=="fijo"){
    document.write(`El costo de la llamada por ${minutos} minutos a Fijo es S/ ${costofijo}`);
}else if(cualoperador=="claro"){
    document.write(`El costo de la llamada por ${minutos} minutos en Claro es S/ ${costoclaro}`);
}else if(cualoperador=="movistar"){
   document.write(`El costo de la llamada por ${minutos} minutos en Movistar es S/ ${costomovistar}`);
}else if(cualoperador=="entel"){
    document.write(`El costo de la llamada por ${minutos}minutos en Entel es S/ ${costoentel}`);
}else {
    alert("No se identifico la operadora")
}