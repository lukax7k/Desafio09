let listAlunos = [
  {nome: "Pedro", notaUm: 7, notaDois: 8},
  {nome: "Marcos", notaUm: 5, notaDois: 7},
  {nome: "Julia", notaUm: 4, notaDois: 9},
  {nome: "Mariana", notaUm: 9, notaDois: 10}
]

function calcMedia(position){
  return (listAlunos[position].notaUm + listAlunos[position].notaDois) /2
}

for(index = 0; index < 4; index++){
let media = calcMedia(index)
if(media >= 7){
  alert(`A média do(a) aluno(a) ${listAlunos[index].nome} é de: ${media}
Parabéns ${listAlunos[index].nome}, você passou no concurso!`)}
else{
  alert(`A média do(a) aluno(a) ${listAlunos[index].nome} é de: ${media}
Que pena ${listAlunos[index].nome}, boa sorte na próxima.`)
}
}