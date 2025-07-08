// Get references to the main HTML elements.
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Define the story questions and their alternatives with branching logic.
// Each key is a unique scene ID.
const perguntas = {
    "inicio": {
        enunciado: "Leo olhava para a tela do computador, um vácuo criativo em sua mente. O prazo para o projeto de história, sobre as civilizações antigas, se aproximava rapidamente. Ele precisava de algo impactante, algo que realmente se destacasse. Enquanto pesquisava, um anúncio pop-up chamou sua atenção: 'Artificium: Crie Imagens e Vídeos com IA em Segundos!'. O que Leo faz?",
        alternativas: [
            {
                texto: "A) Clica no anúncio, curioso sobre o Artificium.",
                afirmacao: "Leo decide explorar a IA.",
                proximoId: "ia_curiosa"
            },
            {
                texto: "B) Ignora o anúncio, preferindo focar na pesquisa tradicional.",
                afirmacao: "Leo decide não usar a IA.",
                proximoId: "pesquisa_tradicional"
            }
        ]
    },
    "ia_curiosa": {
        enunciado: "Leo clica no anúncio e a interface do Artificium se abre. Era impressionante. Com apenas algumas palavras, a IA gerava imagens e pequenos vídeos com uma qualidade surpreendente. Ele começou a experimentar, inserindo termos como 'pirâmides do Egito' e 'templos gregos'. A tela ganhava vida com representações vívidas e precisas. Uma ideia começou a borbulhar em sua mente: usar o Artificium para criar os elementos visuais do seu projeto. Como Leo decide usar o Artificium?",
        alternativas: [
            {
                texto: "A) Decide usar a IA como uma ferramenta de aprendizado e desenvolvimento.",
                afirmacao: "Leo opta por usar a IA de forma ética e para aprendizado.",
                proximoId: "ia_etico"
            },
            {
                texto: "B) Vê a IA como um atalho fácil para ter o trabalho pronto.",
                afirmacao: "Leo escolhe plagiar com a IA.",
                proximoId: "ia_plagio"
            }
        ]
    },
    "ia_etico": {
        enunciado: "Leo decide que o Artificium seria uma ferramenta, não um substituto para seu próprio esforço. Ele usa a IA para visualizar conceitos complexos, como a construção de aquedutos romanos ou a vida diária em Atenas. As imagens e vídeos gerados o ajudam a compreender melhor os detalhes, e ele os usa como inspiração para suas próprias pesquisas e redação. Ele mergulha em livros e artigos, validando as informações e adicionando sua própria análise crítica. O trabalho se torna uma fusão perfeita de sua pesquisa aprofundada com os recursos visuais impressionantes da IA. No dia da apresentação, Leo não apenas mostra as imagens e vídeos incríveis, mas também explica com clareza o processo de criação de cada um e a pesquisa por trás deles.",
        alternativas: [
            {
                texto: "A) Finalizar o projeto com essa abordagem.",
                afirmacao: "Leo conclui o projeto com sucesso e aprendizado.",
                proximoId: "final_a"
            },
            {
                texto: "B) Considerar uma apresentação sobre o uso ético da IA na escola.",
                afirmacao: "Leo é convidado a promover o uso ético da IA.",
                proximoId: "rota_extra_etica"
            }
        ]
    },
    "ia_plagio": {
        enunciado: "Leo, seduzido pela facilidade do Artificium, começa a gerar uma avalanche de imagens e vídeos, colando-os diretamente em seu trabalho sem muito critério. Ele mal lê o conteúdo que a IA produz e não se aprofunda na pesquisa. O trabalho visualmente é deslumbrante, mas carece de coerência e substância. Quando a professora faz perguntas sobre detalhes específicos ou a lógica por trás de certas imagens, Leo gagueja, incapaz de justificar suas escolhas ou demonstrar conhecimento.",
        alternativas: [
            {
                texto: "A) Enfrentar as consequências de sua escolha.",
                afirmacao: "Leo é pego plagiando e enfrenta as consequências.",
                proximoId: "final_b"
            }
        ]
    },
    "pesquisa_tradicional": {
        enunciado: "Leo decide que a IA é apenas uma distração e se concentra em métodos tradicionais. Ele vai à biblioteca, pesquisa em livros e artigos acadêmicos. Passa horas lendo, fazendo anotações detalhadas e organizando suas ideias. Ele cria um roteiro visual para seu projeto, desenhando à mão esboços de mapas e cenas históricas para ilustrar seus pontos. Ele se dedica a entender cada detalhe das civilizações antigas, buscando diferentes perspectivas e informações para enriquecer seu trabalho.",
        alternativas: [
            {
                texto: "A) Apresentar o trabalho com base em sua pesquisa tradicional.",
                afirmacao: "Leo tem sucesso com seu trabalho tradicionalmente feito.",
                proximoId: "final_c"
            }
        ]
    },
    "rota_extra_etica": {
        enunciado: "Após a aula, a professora, intrigada com a inovação de Leo, o chama para conversar. Ela está impressionada com o uso ético e criativo da IA, mas também levanta a questão da autoria e do reconhecimento das ferramentas digitais. Ela propõe a Leo que ele participe de uma apresentação para outros alunos, explicando como ele usou a IA de forma responsável e como ela pode ser uma aliada no aprendizado, desde que não substitua o pensamento crítico e a pesquisa original. Leo, animado, aceita o desafio.",
        alternativas: [
            {
                texto: "A) Aceitar o desafio de se tornar um defensor da ética digital.",
                afirmacao: "Leo se torna um defensor do uso ético da tecnologia.",
                proximoId: "final_d"
            },
            {
                texto: "B) Agradecer, mas preferir focar em seus estudos.",
                afirmacao: "Leo opta por focar em seus estudos pessoais após o sucesso.",
                proximoId: "final_a_sem_extra"
            }
        ]
    },
    // Finais - sem alternativas, apenas texto
    "final_a": {
        enunciado: "A apresentação de Leo é um sucesso retumbante. Sua paixão pelo assunto, combinada com o uso inteligente da tecnologia, cativa a todos. A professora elogia não apenas a qualidade do material visual, mas, principalmente, a profundidade de sua pesquisa e a forma como ele demonstrou o domínio do conteúdo. Ele tirou 100!",
        alternativas: []
    },
    "final_a_sem_extra": {
        enunciado: "A apresentação de Leo é um sucesso retumbante. Sua paixão pelo assunto, combinada com o uso inteligente da tecnologia, cativa a todos. A professora elogia não apenas a qualidade do material visual, mas, principalmente, a profundidade de sua pesquisa e a forma como ele demonstrou o domínio do conteúdo. Ele tirou 100! Leo decide focar em seus estudos pessoais após este grande sucesso.",
        alternativas: []
    },
    "final_b": {
        enunciado: "A apresentação de Leo é um desastre. A professora, percebendo a falta de profundidade e a desconexão entre as imagens e o texto, questiona a originalidade do trabalho. Leo não consegue responder às perguntas básicas sobre o material que 'produziu'. Fica claro que ele plagiou a inteligência artificial sem entender o conteúdo. Ele recebe uma nota muito baixa e a professora o adverte sobre as consequências do plágio.",
        alternativas: []
    },
    "final_c": {
        enunciado: "A apresentação de Leo, embora não tenha os visuais futuristas de uma IA, é sólida e bem pesquisada. Sua paixão pelo tema e o esforço que ele dedicou são evidentes em cada palavra e em cada ilustração que ele mesmo criou. A professora fica impressionada com a profundidade de seu conhecimento e a clareza de sua exposição. Ele recebe uma nota excelente, reconhecendo o valor de sua dedicação e pesquisa genuína.",
        alternativas: []
    },
    "final_d": {
        enunciado: "Leo se torna um defensor do uso ético da tecnologia. Sua apresentação sobre 'IA como Ferramenta de Aprendizado' é um sucesso, inspirando outros alunos a explorar as novas ferramentas digitais com responsabilidade. Ele aprende que a tecnologia é poderosa, mas que o verdadeiro conhecimento vem da curiosidade, do esforço e da capacidade de integrar novas informações com o próprio raciocínio.",
        alternativas: []
    }
};

// Initialize game state variables.
// 'atual' now stores the ID of the current scene.
let atual = "inicio";
let perguntaAtual;
let historiaFinal = ""; // Stores the accumulated affirmations.

// Function to display the current question/scene.
function mostraPergunta(sceneId) {
    perguntaAtual = perguntas[sceneId]; // Get the scene object by its ID.

    // If the scene doesn't exist or is a final scene (no alternatives), show the result.
    if (!perguntaAtual || perguntaAtual.alternativas.length === 0) {
        mostraResultado();
        return;
    }

    caixaPerguntas.textContent = perguntaAtual.enunciado; // Display the scene's text.
    mostraAlternativas(); // Display the alternatives for the current scene.
}

// Function to display the alternatives for the current question/scene.
function mostraAlternativas() {
    // Clear the HTML content of the alternatives box to remove previous buttons.
    caixaAlternativas.innerHTML = "";

    // Iterate over the alternatives of the current scene and create buttons.
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
    // Accumulate the affirmation to build the final story summary.
    historiaFinal += opcaoSelecionada.afirmacao + " ";

    // Update 'atual' to the ID of the next scene based on the selected option.
    atual = opcaoSelecionada.proximoId;

    // Display the next scene.
    mostraPergunta(atual);
}

// Function to display the final result.
function mostraResultado() {
    // Hide the main question/alternatives area.
    caixaPerguntas.textContent = "Fim da História!";
    caixaAlternativas.innerHTML = "";
    caixaPrincipal.classList.add("fim-historia"); // Add class for final styling.

    // Show the result box and display the accumulated story.
    caixaResultado.style.display = "block";
    textoResultado.textContent = "Sua jornada com Leo terminou assim: " + historiaFinal + " Lembre-se: A inteligência artificial é uma ferramenta poderosa. Use-a com consciência e responsabilidade para construir um futuro melhor.";

    // You can add more complex logic here to determine a specific ending message
    // based on the 'historiaFinal' content, if desired.
}

// Start the story by showing the initial scene when the script is loaded.
mostraPergunta(atual);
