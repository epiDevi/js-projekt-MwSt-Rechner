//* 1. Daten holen von input
//* 2. Output definieren
//* 3. checken was soll gerechnet werden
//* 4. checken wie viel Prozent soll gerechnet werden?
//* 5. rechnen und in output zeigen
//*




function rechnen(){
    // 1. Daten holen von input
    const rbtNettoBrutto= document.querySelector('input[name="netto-brutto"]:checked').value;
    const rbtProzent= document.querySelector('input[name="prozent"]:checked').value;
    const bruttobetrag= Number(document.querySelector("#pris").value);
    // 2. Output definieren
    const mWStbetrag= document.querySelector("#mehrwertsteuerbetrag");
    const endpreis= document.querySelector("#endpreis");
    // local variablen
    let mWSt, brutto;
    // 3. checken was soll gerechnet werden
    if (rbtNettoBrutto == "brutto"){
        //4. checken wie viel Prozent soll gerechnet werden?
        if (rbtProzent == "19"){
            mWSt= Number((bruttobetrag * 0.19).toFixed(2));
            brutto= (bruttobetrag + mWSt).toFixed(2);
            mWStbetrag.innerHTML= (`${mWSt} €`);
            endpreis.innerHTML= (`${brutto} €`);

        }
        else if (rbtProzent == "7"){
            mWSt= Number((bruttobetrag * 0.07).toFixed(2));
            brutto= (bruttobetrag + mWSt).toFixed(2);
            mWStbetrag.innerHTML= (`${mWSt} €`);
            endpreis.innerHTML= (`${brutto} €`);
        }

    } else if (rbtNettoBrutto == "netto") {
        console.log("Huhuuuuuuu");
        //4. checken wie viel Prozent soll gerechnet werden?
        if (rbtProzent == "19"){
            brutto= (bruttobetrag / 1.19).toFixed(2);
            mWSt= Number((bruttobetrag-brutto).toFixed(2));
            mWStbetrag.innerHTML= (`${mWSt} €`);
            endpreis.innerHTML= (`${brutto} €`);
        }
        else if (rbtProzent == "7"){
            brutto= (bruttobetrag /1.07).toFixed(2);
            mWSt= Number((bruttobetrag-brutto).toFixed(2));
            
            mWStbetrag.innerHTML= (`${mWSt} €`);
            endpreis.innerHTML= (`${brutto} €`);
        }
    }

    
}

function changetext(){
    const rbt= document.querySelector('input[name="netto-brutto"]:checked').value;
    const endpreisText=document.querySelector("#endpreisText");

    if (rbt == "brutto"){
        console.log("brutto");
        endpreisText.innerHTML="Bruttobetrag (Endpreis)";

    }else if (rbt == "netto"){
        console.log("netto");
        endpreisText.innerHTML="Nettobetrag";
    }
    
}