let wartosc_skibidi = 0;
let upg1 = 0;
let upg2 = 0
//let upgpas = false;

const skibidi_toilet = new Image(220, 391);
skibidi_toilet.src = "skibidi.png";

function skibidowanie(){
    wartosc_skibidi = wartosc_skibidi + upg1 + upg2 + 1;
    document.getElementById("licznik_skibidi").innerHTML = "ilosc skibidi: " + wartosc_skibidi;
}

function upgrade1(){
    if(upg1 == 0){
        if (wartosc_skibidi >= 50){
            wartosc_skibidi = wartosc_skibidi - 50;
            upg1 = 1;
            document.getElementById("licznik_skibidi").innerHTML = "ilosc skibidi: " + wartosc_skibidi;
            document.getElementById("info1").innerHTML =  "ilosc skibidi na klikniecie: 2" ; 
            document.getElementById("upg1but").innerHTML = "ZAKUPIONE";
        }else{
            document.getElementById("upg1but").innerHTML = "nie stac cie na to!";
            sleep(2000).then(() => { document.getElementById("upg1but").innerHTML = "2 skibidi toilet (koszt 50)"; });
    }
    }
}

function upgrade2(){
    if(upg2 == 0){
        if (wartosc_skibidi >= 125){
            wartosc_skibidi = wartosc_skibidi - 125;
            upg2 = 3;
            document.getElementById("licznik_skibidi").innerHTML = "ilosc skibidi: " + wartosc_skibidi;
            document.getElementById("info1").innerHTML =  "ilosc skibidi na klikniecie: " + (1+upg1+upg2) ; 
            document.getElementById("upg2but").innerHTML = "ZAKUPIONE";
        }else{
            document.getElementById("upg2but").innerHTML = "nie stac cie na to!";
            sleep(2000).then(() => { document.getElementById("upg2but").innerHTML = "co dwie glowy to nie jedna (koszt 125)"; });
    }
    }
}

/*function pasywny_dochod_upgrade(){
    if(upgpas == false){
        if(wartosc_skibidi >= 10){
            wartosc_skibidi = wartosc_skibidi - 10;
            upgpas = true;
            document.getElementById("licznik_skibidi").innerHTML = "ilosc skibidi: " + wartosc_skibidi;
            document.getElementById("pasdochbut").innerHTML = "ZAKUPIONE";
        }else{
            document.getElementById("pasdochbut").innerHTML = "nie stac cie na to!";
            sleep(2000).then(() => { document.getElementById("pasdochbut").innerHTML = "pasywny skibidi (koszt 120)"; });
    }
    }
}*/


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}