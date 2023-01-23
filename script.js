function generaPrezzo() {
  var distanza = document.getElementById("distanza").value;
  var eta = document.getElementById("eta").value;
  
  if (eta <= 65 && eta >= 18) {
   var prezzo = distanza * 0.21;
  } else if (eta < 18) {
    var prezzo = (distanza * 0.21) - ((distanza * 0.21 * 20)/(100));
  } else {
    var prezzo = (distanza * 0.21) - ((distanza * 0.21 * 40)/(100));
  }

  document.getElementById("prezzo").innerHTML = "Il prezzo del biglietto &egrave; " + prezzo.toFixed(2) + " &euro;";
}