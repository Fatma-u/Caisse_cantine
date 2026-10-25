let client="Awa";
let code_plat=3;
let quant="4";
let montant=4000;
let prix_uni=0;
let quantt=Number(quant);
if (code_plat>=1 && code_plat<=3 && quantt>0){
    switch ((code_plat)) {
        case 1:
            prix_uni=1500;
            console.log(`Le plat d'attiéké-poisson coûte ${prix_uni}FCFA`);
            break;
        case 2:
            prix_uni=2000;
            console.log(`Le plat de Riz-Poulet coûte ${prix_uni}FCFA`);
            break;
        case 3:
            prix_uni=1000;
            console.log(`Le plat d'Alloco-Oeuf coûte ${prix_uni}FCFA`);
            break;
        default:
            console.log(`Ce plat n'est pas encore disponible`);
    }
    function calculerTotal(prixUnitaire, quantite){
        let montantT=prixUnitaire*quantite;
        return montantT;
    }
    let Mm=calculerTotal(quantt,prix_uni);
    for(let i=1;i<=quantt;i++){
        console.log(`Bonjour!${client},pour la portion ${i} vous devez payer ${prix_uni}`);
    }
    console.log(`le total à payer est ${Mm}FCFA`)

    if(montant>Mm){
            let rest=montant-Mm;
            console.log(`Votre monnaie est ${rest}FCFA`);
        }
    else{
            let mt_manquant=(prix_uni*quantt)-montant;
            console.log(`Le montant est manquant de ${mt_manquant}FCFA`);

        }

}
else{
    console.log(`Choississez un code est valide entre 1 et 3 et une quantité strictement positive`)
}
