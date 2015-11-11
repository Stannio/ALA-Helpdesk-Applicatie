/**
 * Created by Stan de Horn on 11/11/2015.
 */

function klantinfo(){

    //get client info onclick

    var a = document.getElementsByClassName("klant_naam");
        a[0].innerHTML = naam = prompt("Wat is de klantsnaam?") + "<i class='fa fa-check'> </i>";
        a[1].innerHTML = naam;
        a[2].innerHTML = naam;


    var datum = new Date();
    var year = datum.getFullYear();
    var dag = datum.getDate();
    var month = datum.getMonth() + 1;
    var datumhtml = (dag + "/" + month + "/" + year);
    var b = document.getElementsByClassName("datumhtml");
        b[0].innerHTML = datumhtml + "<i class='fa fa-check'> </i>";
        b[1].innerHTML = datumhtml + "<i class='fa fa-check'> </i>";
        b[2].innerHTML = datumhtml + "<i class='fa fa-check'> </i>";
}