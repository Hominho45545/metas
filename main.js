
const botões = document. querySelectorAll(".botao");
const textos = document. querySelectorAll(".aba-conteudo");

for(let j = 0; j < botoes.length; j++){
    botoes[j].onclick = function(){
        for(let i = 0; i < botoes.length; i++){
            botoes[i].classList.remove("ativo");
            botoes[i].classList.remove("ativo");
        }
    }
   
    botoes[i].classList.add("ativo");
    botoes[i].classList.add("ativo");

}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date ("0000-00-00T00:00:00");
const tempoObjetivo2 = new Date ("0000-00-00T00:00:00");
const tempoObjetivo3 = new Date ("0000-00-00T00:00:00");
const tempoObjetivo4 = new Date ("0000-00-00T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calcularTempo(tempoObjetivo){
    let tempoAtual = new Date ();
    let tempoFinal = tempoObjetvio - tempoAtual;
}
