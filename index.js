let nomeUsuario = "Livia"
let nivelExperiencia = 1506
let xp 

switch(true){
    case nivelExperiencia <= 1000:
        xp = "Ferro"
                break
    case nivelExperiencia >= 1001 && nivelExperiencia <= 2000:
        xp = "Bronze"
        break
    case nivelExperiencia >= 2001 && nivelExperiencia <= 5000:
        xp = "Prata"
        break
    case nivelExperiencia >= 5001 && nivelExperiencia <= 7000:
        xp = "Ouro"
        break
    case nivelExperiencia >= 7001 && nivelExperiencia <= 8000:
        xp = "Platina"
        break
    case nivelExperiencia >= 8001 && nivelExperiencia <= 9000:
        xp = "Ascedente"
        break
    case nivelExperiencia >= 9001 && nivelExperiencia <= 1000:
        xp = "Imortal"
        break
    default:
        "Radiante"
}


console.log("O Herói de nome "+ nomeUsuario+ " está no nível "+ xp)