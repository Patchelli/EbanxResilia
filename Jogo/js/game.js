let perguntas = [{
        idPeergunta: 1,
        pergunta: 'Para declarar uma variavel local usa-se "var" antes do nome da variavel, essa afirmação está correta?',
        respostaCerta: "sim",
        peso: 2,
        tipo: "Tech",
        difficulty: "Fácil"
    },
    {
        idPeergunta: 2,
        pergunta: 'Sobre a utilização de formulários na linguagem HTML, quais dos atributos abaixo foram introduzidos no HTML5? \n a -autofocus, placeholder e disabled. \n b -  autofocus, placeholder e required. \n c - autofocus, readonly e required.',
        respostaCerta: "b",
        peso: 2,
        tipo: "Tech",
        difficulty: "Fácil"
    },
    {
        idPeergunta: 3,
        pergunta: 'Considere as expressões em javascript a seguir: \n var a1=true && true;\n var a2=true && false;\n var a3=false && true;\n var o1=true||true;\n var o2=false||true;\n var n2 = !false;\n var n3 = !"Gato";\n informe a alternativa: \n a - true, false, false, true, true, true, false. \n b -  false, false, true, true, false, true, false. \n c - true, true, true, true, false, false, true.\n d - false, false, true, true, true, false, false.  ',
        respostaCerta: "a",
        peso: 2,
        tipo: "Soft",
        difficulty: "normal"
    },
    {
        idPeergunta: 4,
        pergunta: '',
        respostaCerta: "sim",
        peso: 2,
        tipo: "Soft",
        difficulty: "hard"
    }
]

const maxQuestions = 10; // máximo de questões
var numberQuestion = new Array(maxQuestions);
var questions = new Array();

//Gerar Array com numero de questões
function createNumberQuestion() {
    for (let i = 0; i < numberQuestion.length; i++) {
        numberQuestion[i] = i + 1;
    }
    return numberQuestion
}
// Prencher o array com as questões
function createQuestion(list) {

    for (var i = 0; i <= numberQuestion.length; i++) {
        questions.push(Math.round(Math.random() * 3));
    }
    return questions;

}

var result = createQuestion(createNumberQuestion());

//percorrer o array Result e printar cada pergunta na tela
var contador = 0;
for (var i = 0; i < maxQuestions; i++) {
    var reposta = prompt(perguntas[result[i]].pergunta);
    if (reposta == perguntas[result[i]].respostaCerta) {
       contador+= peso;
    }else{
        if(perguntas[result[i]].difficulty = "easy"){
            contador -= 3*perguntas[result[i]].peso;
        }else{
            
        }
    }
}





// console.log(createQuestion((createNumberQuestion())));