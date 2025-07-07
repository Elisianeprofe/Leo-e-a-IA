const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Define the simplified story questions and their alternatives.
// This version leads to a single, linear ending.
const perguntas = [
    {
        enunciado: "Leo olhava para a tela do computador, um vácuo criativo em sua mente. O prazo para o projeto de história, sobre as civilizações antigas, se aproximava rapidamente. Ele precisava de algo impactante, algo que realmente se destacasse. Enquanto pesquisava, um anúncio pop-up chamou sua atenção: 'Artificium: Crie Imagens e Vídeos com IA em Segundos!'. O que Leo faz?",
        alternativas: [
            {

                texto: "A) Ignora o anúncio, preferindo focar na pesquisa tradicional.",
                afirmacao: "Leo decide focar no método de pesquisa tradicional."
            },
            {
                texto: "B) Clica no anúncio, mas decide que não é o momento para distrações.",
                afirmacao: "Leo considera a IA, mas mantém o foco na pesquisa tradicional."

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
                texto: "A) Apresentar o trabalho com base em sua pesquisa tradicional.",
                afirmacao: "Leo apresenta um trabalho bem pesquisado e original."
            },
            {
                texto: "B) Revisar os últimos detalhes e ensaiar a apresentação.",
                afirmacao: "Leo revisa e prepara-se cuidadosamente para a apresentação."
            }
        ]
    },
    {
        enunciado: "Leo decide que o Artificium seria uma ferramenta, não um substituto para seu próprio esforço. Ele usa a IA para visualizar conceitos complexos, como a construção de aquedutos romanos ou a vida diária em Atenas. As imagens e vídeos gerados o ajudam a compreender melhor os detalhes, e ele os usa como inspiração para suas próprias pesquisas e redação. Ele mergulha em livros e artigos, validando as informações e adicionando sua própria análise crítica. O trabalho se torna uma fusão perfeita de sua pesquisa aprofundada com os recursos visuais impressionantes da IA. No dia da apresentação, Leo não apenas mostra as imagens e vídeos incríveis, mas também explica com clareza o processo de criação de cada um e a pesquisa por trás deles.",
        alternativas: [
            {
                texto: "A) Obrigado, professora!",
                afirmacao: "Leo obteve sucesso através de seu próprio esforço e dedicação, tirando uma nota excelente."
            },
            {
                texto: "B) Perguntar sobre a nota e o feedback detalhado.",
                afirmacao: "Leo busca feedback para continuar aprimorando seu aprendizado."
            }
        ]
    },
    {
        enunciado: "Leo, seduzido pela facilidade do Artificium, começa a gerar uma avalanche de imagens e vídeos, colando-os diretamente em seu trabalho sem muito critério. Ele mal lê o conteúdo que a IA produz e não se aprofunda na pesquisa. O trabalho visualmente é deslumbrante, mas carece de coerência e substância. Quando a professora faz perguntas sobre detalhes específicos ou a lógica por trás de certas imagens, Leo gagueja, incapaz de justificar suas escolhas ou demonstrar conhecimento.",
        alternativas: [
            {
                texto: "Enfrentar as consequências de sua escolha.",
                afirmacao: "Leo é pego plagiando e enfrenta as consequências."
            }
        ]
    },
    {
        enunciado: "Leo decide que a IA é apenas uma distração e se concentra em métodos tradicionais. Ele vai à biblioteca, pesquisa em livros e artigos acadêmicos. Passa horas lendo, fazendo anotações detalhadas e organizando suas ideias. Ele cria um roteiro visual para seu projeto, desenhando à mão esboços de mapas e cenas históricas para ilustrar seus pontos. Ele se dedica a entender cada detalhe das civilizações antigas, buscando diferentes perspectivas e informações para enriquecer seu trabalho.",
        alternativas: [
            {
                texto: "Apresentar o trabalho com base em sua pesquisa tradicional.",
                afirmacao: "Leo tem sucesso com seu trabalho tradicionalmente feito."
            }
        ]
    }
];

// Initialize game state variables.
let atual = 0; // Current question index.
let perguntaAtual; // Object for the current question.
let historiaFinal = ""; // Stores the affirmation of the last selected option.

// Function to display the current question.
function mostraPergunta() {
    // Check if all questions have been displayed.
    if (atual >= perguntas.length) {
        mostraResultado(); // If so, display the final result.
        return; // Exit the function.
    }

    perguntaAtual = perguntas[atual]; // Get the current question object.
    caixaPerguntas.textContent = perguntaAtual.enunciado; // Display the question text.

    // Clear previous alternatives and display new ones.
    mostraAlternativas();
}

// Function to display the alternatives for the current question.
function mostraAlternativas() {
    // Clear the HTML content of the alternatives box to remove previous buttons.
    caixaAlternativas.innerHTML = "";

    // Iterate over the alternatives of the current question and create buttons.
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        // Add a class for styling (if you have it in your CSS).
        botaoAlternativa.classList.add("alternativa-botao");

        // Add a click event listener to call respostaSelecionada.
        // Pass the complete 'alternativa' object.
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

// Function called when an alternative is selected.
function respostaSelecionada(opcaoSelecionada) {
    // Access 'afirmacao' (singular) and store it.
    historiaFinal = opcaoSelecionada.afirmacao;

    // Advance to the next question (currently sequentially).
    atual++;
    // Display the next question.
    mostraPergunta();
}

// Function to display the final result.
function mostraResultado() {
    // Add a class for styling the final state (e.g., hiding game elements).
    caixaPrincipal.classList.add("fim-historia");
    caixaPerguntas.textContent = "A jornada de Leo chegou ao fim!";
    caixaAlternativas.innerHTML = ""; // Ensure no buttons are left at the end.
    caixaResultado.style.display = "block"; // Make the result box visible.
    textoResultado.textContent = historiaFinal; // Display the final affirmation as the result.
}

// Start the story when the script is loaded.
mostraPergunta();

