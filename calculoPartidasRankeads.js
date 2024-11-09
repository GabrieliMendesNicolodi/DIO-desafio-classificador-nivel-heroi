let heroName = "Princess of Themyscira"
let level = "";
let victories = 10; //Number of victories
let defeats = 3; //Number of Defeats
let finalRate = 0;

function calcRate(victories, defeats){
    level = victories - defeats;
    if(level <= 10){
        finalRate = "Ferro"
    }else if(level >= 11 && level <= 20){
        finalRate = "Bronze"
    }else if(level >= 21 && level <= 50){
        finalRate = "Prata"
    }else if(level >= 51 && level <= 80){
        finalRate = "Ouro"
    }else if(level >= 81 && level <= 90){
        finalRate = "Diamante"
    }else if(level >= 91 && level <= 100){
        finalRate = "Lendário"
    }else if(level >= 101){
        finalRate = "Imortal"
    }
    arrayRate = [level, finalRate]
    return arrayRate;
}

console.log("O Herói tem saldo de "+calcRate(victories, defeats)[0]+" está no nível de "+calcRate(victories, defeats)[1]);