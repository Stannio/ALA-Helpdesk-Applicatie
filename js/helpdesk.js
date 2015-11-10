/**
 * Created by Stan de Horn on 10/11/2015.
 */

addEventListener("click", helpdesk);

function helpdesk(){

var naam;
prompt("Wat is de naam van de klant?");
document.write("<h1>Klant: </h1>" + naam)
prompt("Wat is de datum van vandaag?");
document.getElementById("datum").innerHTML = datum;
prompt("Wat is de modem van de klant?");
document.getElementById("modem").innerHTML = modem;
var klacht = confirm("Heeft u een klacht over ons product Internet?");
if (klacht == true) {
    klacht2 = "Klant meldt een probleem met internet";
} else {
    klacht3 = "You pressed Cancel!";
}
document.getElementById("klacht2").innerHTML = klacht2;
document.getElementById("klacht3").innerHTML = klacht3;
var nunl = confirm("Kunt u browsen naar www.nu.nl");
if (klacht == true) {
    nunl2 = "Browsen naar nu.nl lukt";
} else {
    nunl3 = "Browsen naar nu.nl lukt niet";
}
document.getElementById("nunl2").innerHTML = nunl2;
document.getElementById("nunl3").innerHTML = nunl3;
}