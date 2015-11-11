/**
 * Created by Stan de Horn on 11/11/2015.
 */
function televisie(){

    //Klacht televisie confirm output to third panel

    klacht_televisie = confirm("Heeft u een klacht over ons product Televisie?");
        if (klacht_televisie == true) {
            klacht_televisie = "<i class='fa fa-warning'></i> Klant meld een probleem met televisie";
    }   else {
            klacht_televisie = "<i class='fa fa-check'> </i> Klant meld <strong>geen</strong> probleem met televisie";
    }
    var d = document.getElementsByClassName("klacht_televisie");
        d[0].innerHTML = klacht_televisie;

    //Aantal televisie's prompt output to third panel

    var a = document.getElementsByClassName("num_tv");
        a[0].innerHTML = num_tv = prompt("Aantal televisie toestellen?") + "<i class='fa fa-check'> </i>";

    //splitter confirm output second panel

    var splitter = confirm("Is de splitter goed aangesloten?");
        if (splitter == true) {
            splitter = "<i class='fa fa-check'> </i> De splitter is goed aangesloten";
    }   else {
            splitter = "<i class='fa fa-warning'> </i> De splitter is <strong>niet</strong> goed aangesloten";
    }
    var e = document.getElementsByClassName("splitter");
        e[0].innerHTML = splitter;

    //settopbox confirm output to second panel

    var settopbox = confirm("Is uw settopbox goed aagesloten?");
        if (settopbox == true) {
            settopbox = "<i class='fa fa-check'> </i> De settopbox is goed aan gesloten";
    }   else {
            settopbox = "<i class='fa fa-warning'> </i> De settopbox is <strong>niet</strong> goed aangesloten";
    }
    var f = document.getElementsByClassName("settopbox");
        f[0].innerHTML = settopbox;

    //mobiel klacht confirm output to second panel

    var zenders = confirm("Worden de zenders gevonden?");
        if (zenders == true) {
            zenders = "<i class='fa fa-check'> </i> De zenders worden gevonden";
    }   else {
            zenders = "<i class='fa fa-warning'> </i> De zenders worden <strong>niet</strong> gevonden";
    }
    var g = document.getElementsByClassName("zenders");
        g[0].innerHTML = zenders;
}