const meuBody = document.getElementsByTagName('body')[0]
const rolarUmdado = document.getElementById('umDado')
const rolardados = document.getElementById('doisDados')


rolarUmdado.addEventListener('click',rolar1k)
rolardados.addEventListener('click', rolar_dois_dados_1k)


function numeros_Alet(){
    const umdado =Math.floor(Math.random() * (7 - 1) + 1)
    return umdado
}numeros_Alet()


function rolar1k(){
    
    let listadeJogadas = []
    let jogadas = 0

    for(let i = 0; i<1000;i++){
        const line = document.createElement('div')
        meuBody.appendChild(line)
        jogadas += 1
        let resultado = numeros_Alet()
        listadeJogadas.push(
        line.innerText=jogadas +":" + resultado) 
        line.style.backgroundColor = 'lightgray'
        line.style.width = `${resultado}%` 
        line.style.margin = '10px'
        line.style.border = '2px solid black'   
     
    }
    console.log(listadeJogadas)    
}


function rolar_dois_dados_1k(){
    
    let listadeJogadas = []
    let jogadas = 0
    

    for(let i = 0; i<1000;i++){
        const line = document.createElement('div')
        meuBody.appendChild(line)
        jogadas += 1
        let resultado = (numeros_Alet()+numeros_Alet())
        listadeJogadas.push(
        line.innerText=jogadas +":" + resultado) 
        line.style.backgroundColor = 'lightgray'
        line.style.width = `${resultado}%` 
        line.style.margin = '10px'
        line.style.border = '2px solid black'
    }
    console.log(listadeJogadas)    
}


   







