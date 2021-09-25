const meuBody = document.getElementsByTagName('body')[0]
const rolarUmdado = document.getElementById('umDado')
const rolardados = document.getElementById('doisDados')


rolarUmdado.addEventListener('click', rolar_um_dado)
rolardados.addEventListener('click', rolar_dois_dados)


function numeros_Alet() {
    const umdado = Math.floor(Math.random() * (7 - 1) + 1)
    return umdado
} numeros_Alet()




function rolar_um_dado() {

    let jogadas = []
    let soma = 0
    let results = []

    for (let i = 0; i < 1000; i++) {
        jogadas.push(numeros_Alet())
    }

    for (let i = 1; i <= 6; i++) {
        const line = document.createElement('div')
        meuBody.appendChild(line)
        soma = 0
        for (let j = 0; j < jogadas.length; j++) {
            if (i == jogadas[j]) {
                soma++
            }

        }
        line.innerText = i + ':' + soma
        line.style.backgroundColor = 'lightgray'
        line.style.width = `${soma}px`
        line.style.margin = '10px'
        line.style.border = '2px solid black'
        results.push(i + ':' + soma)
    }


    console.log(results)


}



function rolar_dois_dados() {

    let jogadas = []
    let soma = 0
    let results = []

    for (let i = 0; i < 1000; i++) {
        jogadas.push(numeros_Alet() + numeros_Alet())

    }

    for (let i = 2; i <= 12; i++) {
        const line = document.createElement('div')
        meuBody.appendChild(line)
        soma = 0

    for (let j = 0; j < jogadas.length; j++) {
        if (i == jogadas[j]) {
            soma++
        }

    }
    line.innerText = i + ':' + soma
    line.style.backgroundColor = 'lightgray'
    line.style.width = `${soma}px`
    line.style.margin = '10px'
    line.style.border = '2px solid black'
    results.push(i + ':' + soma)
}



console.log(jogadas)
}









function rolar_dois_dados_1k() {

    let listadeJogadas = []
    let jogadas = 0


    for (let i = 0; i < 1000; i++) {
        const line = document.createElement('div')
        meuBody.appendChild(line)
        jogadas += 1
        let resultado = (numeros_Alet() + numeros_Alet())
        listadeJogadas.push(
            line.innerText = jogadas + ":" + resultado)
        line.style.backgroundColor = 'lightgray'
        line.style.width = `${resultado}%`
        line.style.margin = '10px'
        line.style.border = '2px solid black'
    }
    console.log(listadeJogadas)
}










