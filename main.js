let inputNomeContato = document.getElementById('nomeContato')
let inputNumeroContato = document.getElementById('numeroContato')
let inputBotao = document.getElementById('botaoAdd')
let form = document.getElementById('form-contatos')
let tb = document.getElementById('tbody-contatos')
let numeros = []
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionar()
})

function adicionar() {
    if (numeros.includes(Number(inputNumeroContato.value))) {
        alert('Esse número já está na sua agenda!')
    }
    else if(inputNumeroContato.value.length <= 9 || inputNumeroContato.value.length >= 12){
        alert('Digite Um Numero De Telefone Valido!')

    }else{
    numeros.push(Number(inputNumeroContato.value))
    let NumeroContatos = document.getElementById('NumeroTotalContatos')
    
    const novaLinha = document.createElement('tr')

    const celulaNome = document.createElement('td')
    const celulaNumero = document.createElement('td')

    celulaNome.innerHTML = inputNomeContato.value
    celulaNumero.innerHTML = inputNumeroContato.value

    novaLinha.appendChild(celulaNome)
    novaLinha.appendChild(celulaNumero)

    tb.appendChild(novaLinha)

    NumeroContatos.innerHTML = `${numeros.length}`

    inputNumeroContato.value = ''
    inputNomeContato.value = ''
}
}