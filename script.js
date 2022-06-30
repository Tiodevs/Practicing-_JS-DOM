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


/*
function addnNewCasa() {
  const number = document.createElement("p");
  number.innerText = casa.numeroValue;
  document.body.appendChild(number);

  const bairro = document.createElement("p");
  bairro.innerText = casa.bairroValue;
  document.body.appendChild(bairro);

  const cidade = document.createElement("p");
  cidade.innerText = casa.cidadeValue;
  document.body.appendChild(cidade);

  const area = document.createElement("p");
  area.innerText = casa.areaValue;
  document.body.appendChild(area);
}
*/