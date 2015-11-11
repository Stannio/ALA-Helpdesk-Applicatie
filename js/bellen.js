/**
 * Created by Stan de Horn on 11/11/2015.
 */

function bellen(){

    //Klacht bellen confirm output to second panel

    klacht_bellen = confirm("Heeft u een klacht over ons product Bellen?");
        if (klacht_bellen == true) {
            klacht_bellen = "<i class='fa fa-warning'></i> Klant meld een probleem met bellen";
    }   else {
            klacht_bellen = "<i class='fa fa-check'> </i> Klant meld <strong>geen</strong> probleem met bellen";
    }
    var d = document.getElementsByClassName("klacht_bellen");
        d[0].innerHTML = klacht_bellen;

    //kiestoon confirm output second panel

    var kiestoon = confirm("Hoort u een kiestoon?");
        if (kiestoon == true) {
            kiestoon = "<i class='fa fa-check'> </i> Klant hoort een kiestoon";
    }   else {
            kiestoon = "<i class='fa fa-warning'> </i> De klant hoort <strong>geen</strong> kiestoon";
    }
    var e = document.getElementsByClassName("kiestoon");
        e[0].innerHTML = kiestoon;

    //mobiel bellen confirm output to second panel

    var mobiel = confirm("Kunt u uzelf bellen met bijvoorbeeld een mobiele telefoon?");
        if (mobiel == true) {
            mobiel = "<i class='fa fa-check'> </i> De klant kan zich zelf bellen met een mobiele telefoon";
    }   else {
            mobiel = "<i class='fa fa-warning'> </i> De klant kan zich zelf <strong>niet</strong> bellen met een mobiele telefoon";
    }
    var f = document.getElementsByClassName("mobiel");
        f[0].innerHTML = mobiel;

    //mobiel klacht confirm output to second panel

    var mobiel_klacht = confirm("Kunt u bellen met de mobiele telefoon?");
        if (mobiel_klacht == true) {
            mobiel_klacht = "<i class='fa fa-check'> </i> De klant kan bellen met de mobiele telefoon";
    }   else {
            mobiel_klacht = "<i class='fa fa-warning'> </i> De klant kan <strong>niet</strong> bellen met de mobiele telefoon";
    }
    var g = document.getElementsByClassName("mobiel_klacht");
        g[0].innerHTML = mobiel_klacht;
}