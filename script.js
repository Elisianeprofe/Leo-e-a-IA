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
                texto: "A) Clica no anúncio, curioso sobre o Artificium.",
                afirmacao: "Leo decide explorar a IA."
            },
            {
                texto: "B) Ignora o anúncio, preferindo focar na pesquisa tradicional.",
                afirmacao: "Leo decide não usar a IA."
            }
        ]
    },
    {
        enunciado: "Leo clica no anúncio e a interface do Artificium se abre. Era impressionante. Com apenas algumas palavras, a IA gerava imagens e pequenos vídeos com uma qualidade surpreendente. Ele começou a experimentar, inserindo termos como 'pirâmides do Egito' e 'templos gregos'. A tela ganhava vida com representações vívidas e precisas. Uma ideia começou a borbulhar em sua mente: usar o Artificium para criar os elementos visuais do seu projeto. Como Leo decide usar o Artificium?",
        alternativas: [
            {
                texto: "A) Decide usar a IA como uma ferramenta de aprendizado e desenvolvimento.",
                afirmacao: "Leo opta por usar a IA de forma ética e para aprendizado."
            },
            {
                texto: "B) Vê a IA como um atalho fácil para ter o trabalho pronto.",
                afirmacao: "Leo escolhe plagiar com a IA."
            }
        ]
    },
    {
        enunciado: "Leo decide que o Artificium seria uma ferramenta, não um substituto para seu próprio esforço. Ele usa a IA para visualizar conceitos complexos, como a construção de aquedutos romanos ou a vida diária em Atenas. As imagens e vídeos gerados o ajudam a compreender melhor os detalhes, e ele os usa como inspiração para suas próprias pesquisas e redação. Ele mergulha em livros e artigos, validando as informações e adicionando sua própria análise crítica. O trabalho se torna uma fusão perfeita de sua pesquisa aprofundada com os recursos visuais impressionantes da IA. No dia da apresentação, Leo não apenas mostra as imagens e vídeos incríveis, mas também explica com clareza o processo de criação de cada um e a pesquisa por trás deles.",
        alternativas: [
            {
                texto: " Finalizar o projeto com essa abordagem.",
                afirmacao: "Leo conclui o projeto com sucesso e aprendizado."
            },
            {
                texto: " Considerar uma apresentação sobre o uso ético da IA na escola.",
                afirmacao: "Leo é convidado a promover o uso ético da IA."
            }
        ]
    },
    {
        enunciado: "Leo, seduzido pela facilidade do Artificium, começa a gerar uma avalanche de imagens e vídeos, colando-os diretamente em seu trabalho sem muito critério. Ele mal lê o conteúdo que a IA produz e não se aprofunda na pesquisa. O trabalho visualmente é deslumbrante, mas carece de coerência e substância. Quando a professora faz perguntas sobre detalhes específicos ou a lógica por trás de certas imagens, Leo gagueja, incapaz de justificar suas escolhas ou demonstrar conhecimento.",
        alternativas: [
            {
                texto: " Enfrentar as consequências de sua escolha.",
                afirmacao: "Leo é pego plagiando e enfrenta as consequências."
            }
        ]
    },
    {
        enunciado: "Leo decide que a IA é apenas uma distração e se concentra em métodos tradicionais. Ele vai à biblioteca, pesquisa em livros e artigos acadêmicos. Passa horas lendo, fazendo anotações detalhadas e organizando suas ideias. Ele cria um roteiro visual para seu projeto, desenhando à mão esboços de mapas e cenas históricas para ilustrar seus pontos. Ele se dedica a entender cada detalhe das civilizações antigas, buscando diferentes perspectivas e informações para enriquecer seu trabalho.",
        alternativas: [
            {
                texto: " Apresentar o trabalho com base em sua pesquisa tradicional.",
                afirmacao: "Leo tem sucesso com seu trabalho tradicionalmente feito."
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
