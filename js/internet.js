/**
 * Created by Stan de Horn on 11/11/2015.
 */
function internet(){

    //Modem confirm output to second panel

    var c = document.getElementsByClassName("modem");
        c[0].innerHTML = modem = prompt("Wat is de modem van de klant?") + "<i class='fa fa-check'> </i>";

    //Klacht confirm output to first panel

    klacht = confirm("Heeft u een klacht over ons product Internet?");
        if (klacht == true) {
            klacht = "<i class='fa fa-warning'></i> Klant meldt een probleem met internet";
    }   else {
            klacht = "<i class='fa fa-check'> </i> Klant meld <strong>geen</strong> probleem met internet";
    }
    var d = document.getElementsByClassName("klacht");
        d[0].innerHTML = klacht;

    //nu.nl navigeren confirm

    var nu_nl = confirm("Kunt u browsen naar www.nu.nl");
        if (nu_nl == true) {
            nu_nl = "<i class='fa fa-check'> </i>Browsen naar nu.nl lukt";
    }   else {
            nu_nl = "<i class='fa fa-warning'> </i> Browsen naar nu.nl lukt <strong>niet</strong>";
    }
    var e = document.getElementsByClassName("nu_nl");
        e[0].innerHTML = nu_nl;

    //nu.nl reload test output to first panel

    var nu_nl_reload = confirm("Reageert de pagina snel na het indrukken van F5");
        if (nu_nl_reload == true) {
            nu_nl_reload = "<i class='fa fa-check'> </i>De pagina reageert snel als F5 wordt ingedrukt";
    }   else {
            nu_nl_reload = "<i class='fa fa-warning'> </i> De pagina reageert <strong>niet of langzaam</strong> als F5 ingedrukt wordt";
    }
    var f = document.getElementsByClassName("nu_nl_reload");
        f[0].innerHTML = nu_nl_reload;

}