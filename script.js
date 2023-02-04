let msg_01 = ' '
let msg_02 = ' '

let num_01 =  Number(prompt("Entra com o número 01: "))
let num_02 =  Number(prompt("Entra com o número 02: "))

if((num_01 + num_02) % 2 === 0){
    msg_01 = `A soma dos dois números é par: ${num_01 + num_02}`
}else{
    msg_01 = `A soma dos dois números é ímpar: ${num_01 + num_02}`
}

if(num_01 === num_02){
    msg_02 = `Os dois números são iguais`
}else{
    msg_02 = `Os dois números são diferentes`
}

alert(`
    Entrada 01: ${num_01}
    Entrada 02: ${num_02}

    ${num_01} + ${num_02} = ${num_01 + num_02}
    ${num_01} - ${num_02} = ${num_01 - num_02}
    ${num_01} * ${num_02} = ${num_01 * num_02}
    ${num_01} / ${num_02} = ${(num_01 / num_02).toFixed(2)}
    ${num_01} % ${num_02} = ${num_01 % num_02}

    ${msg_01}
    ${msg_02}
`)