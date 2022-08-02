# Aprendendo a usar o DOM
Estou começando o estudo de DOM e events com JS puro

``` Javascript
let casa = {
  numero: function numeroSave(element) {
    this.numeroValue = element.value
  },

  bairro: function bairroSave(element) {
    this.bairroValue = element.value   
  },

  cidade: function cidadeSave(element) {
    this.cidadeValue = element.value
  },

  area: function areaSave(element) {
    this.areaValue = element.value
  }
}

function salvarCasa(){
  let novaCasa = document.createElement("li")
  novaCasa.innerText = casa.areaValue + "m², número " + casa.numeroValue + " (" + casa.bairroValue + " - " + casa.cidadeValue + ") "

  let removerBotao = document.createElement("button")
  removerBotao.type = "button"
  removerBotao.innerText = "Remover"
  removerBotao.setAttribute("onclick", "removerCasa(this)")
  removerBotao.setAttribute("class", "teste")

  novaCasa.appendChild(removerBotao)

  document.getElementById("lisataCasa").appendChild(novaCasa)
}

function removerCasa(button) {
  let liToRemover = button.parentNode
  document.getElementById("lisataCasa").removeChild(liToRemover)
}
```
