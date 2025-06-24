const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Leo olhava para a tela do computador, um vácuo criativo em sua mente. O prazo para o projeto de história, sobre as civilizações antigas, se aproximava rapidamente. Ele precisava de algo impactante, algo que realmente se destacasse. Enquanto pesquisava, um anúncio pop-up chamou sua atenção: 'Artificium: Crie Imagens e Vídeos com IA em Segundos!'. O que Leo faz?",
        alternativas: [
            {
                texto: "A) Ignora o anúncio, preferindo focar na pesquisa tradicional.",
                afirmacao: "Leo decide focar no método de pesquisa tradicional."
            }
            // Removed the AI option to simplify to a single path.
        ]
    },
    {
        enunciado: "Leo decide que a IA é apenas uma distração e se concentra em métodos tradicionais. Ele vai à biblioteca, pesquisa em livros e artigos acadêmicos. Passa horas lendo, fazendo anotações detalhadas e organizando suas ideias. Ele cria um roteiro visual para seu projeto, desenhando à mão esboços de mapas e cenas históricas para ilustrar seus pontos. Ele se dedica a entender cada detalhe das civilizações antigas, buscando diferentes perspectivas e informações para enriquecer seu trabalho.",
        alternativas: [
            {
                texto: "A) Apresentar o trabalho com base em sua pesquisa tradicional.",
                afirmacao: "Leo apresenta um trabalho bem pesquisado e original."
            }
        ]
    },
    {
        enunciado: "A apresentação de Leo, embora não tenha os visuais futuristas de uma IA, é sólida e bem pesquisada. Sua paixão pelo tema e o esforço que ele dedicou são evidentes em cada palavra e em cada ilustração que ele mesmo criou. A professora fica impressionada com a profundidade de seu conhecimento e a clareza de sua exposição.",
        alternativas: [
            {
                texto: "Obrigado, professora!",
                afirmacao: "Leo obteve sucesso através de seu próprio esforço e dedicação, tirando uma nota excelente."
            }
        ]
    }
];

let atual=0;
let perguntaAtual ;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent = "";
    mostraAlternativas();

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
          botaoAlternativa.addEventListener("click",  () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}


function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}