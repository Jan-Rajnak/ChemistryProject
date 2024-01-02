const quizQuestions = [
    {
        question: "Látky, ktoré vstupujú do chemickej reakcie, sa nazývajú __________.",
        options: ["A. Reaktanty", "B. Produkty", "C. Katalyzátory", "D. Nič z vyššie uvedeného"],
        correctAnswer: "A",
        numberOfChoices: 4,
    },
    {
        question: "Látky, ktoré sú výsledkom chemickej reakcie, sa nazývajú __________.",
        options: ["A. Reaktanty", "B. Produkty", "C. Katalyzátory", "D. Nič z vyššie uvedeného"],
        correctAnswer: "B",
        numberOfChoices: 4,
    },
    {
        question: "Látka, ktorá sa používa na urýchlenie chemickej reakcie, ale nepoužíva sa ako súčasť reakcie, sa nazýva __________.",
        options: ["A. Reaktant", "B. Produkt", "C. Katalyzátor", "D. Nič z vyššie uvedeného"],
        correctAnswer: "C",
        numberOfChoices: 4,
    },
    {
        question: "Po chemickej reakcii sú vlastnosti produktov __________.",
        options: ["A. Rovnaké ako vlastnosti reaktantov", "B. Odlišné od vlastností reaktantov", "C. Kombinácia vlastností reaktantov", "D. Nič z vyššie uvedeného"],
        correctAnswer: "B",
        numberOfChoices: 4,
    },
    {
        question: "Zrazenina je _______________.",
        options: ["A. Plyn", "B. Kvapalina", "C. Hrubá hmota", "D. Nič z vyššie uvedeného"],
        correctAnswer: "C",
        numberOfChoices: 4,
    },
    {
        question: "Časť atómu zapojená do chemickej väzby je ____________.",
        options: ["A. Jadro", "B. Valenčné elektróny", "C. Protóny", "D. Nič z vyššie uvedeného"],
        correctAnswer: "B",
        numberOfChoices: 4,
    },
    {
        question: "Atóm sa považuje za ____________, keď je počet protónov a elektrónov rovnaký.",
        options: ["A. Pozitívne", "B. Negatívne", "C. Neutrálne", "D. Nič z vyššie uvedeného"],
        correctAnswer: "C",
        numberOfChoices: 4,
    },
    {
        question: "Chemická reakcia, pri ktorej sa uvoľňuje energia, sa nazýva:",
        options: ["A. Endotermické", "B. Exotermická", "C. Kombinačná reakcia", "D. Vytesňovacia reakcia"],
        correctAnswer: "B",
        numberOfChoices: 4,
    },
    {
        question: "Chemická reakcia, pri ktorej sa absorbuje energia, sa nazýva _________.",
        options: ["A. Endotermické", "B. Exotermická", "C. Vytesňovacia reakcia", "D. Rozkladná reakcia"],
        correctAnswer: "A",
        numberOfChoices: 4,
    },
    {
        question: "Väzba, kde sa prenášajú elektróny, sa nazýva _____________.",
        options: ["A. Kovalentná väzba", "B. Iónová väzba", "C. Prevodový dlhopis", "D. Nič z vyššie uvedeného"],
        correctAnswer: "B",
        numberOfChoices: 4,
    },
    {
        question: "Väzba, ktorá sa vyskytuje medzi kovmi a nekovmi, sa nazýva _______________.",
        options: ["A. Iónová väzba", "B. Kovalentná väzba", "C. Kovová väzba", "D. Nič z vyššie uvedeného"],
        correctAnswer: "A",
        numberOfChoices: 4,
    },
    {
        question: "Väzba, ktorá sa vyskytuje medzi nekovmi a nekovmi, sa nazýva ___________.",
        options: ["A. Iónová väzba", "B. Kovalentná väzba", "C. Nekovová väzba", "D. Nič z vyššie uvedeného"],
        correctAnswer: "B",
        numberOfChoices: 4,
    },
    {
        question: "Väzba, kde sú elektróny zdieľané, sa nazýva ____________.",
        options: ["A. Iónová väzba", "B. Kovalentná väzba", "C. Zdieľaný dlhopis", "D. Nič z vyššie uvedeného"],
        correctAnswer: "B",
        numberOfChoices: 4,
    },
    {
        question: "Zaraďte nasledujúci jav medzi fyzikálne alebo chemické zmeny: Roztrhnutie kusu papiera na 100 kúskov.",
        options: ["A. Fyzikálna zmena", "B. Chemická zmena"],
        correctAnswer: "A",
        numberOfChoices: 2,
    },
    {
        question: "Zaraďte nasledujúci jav medzi fyzikálne alebo chemické zmeny: Pálenie kúska papiera.",
        options: ["A. Fyzikálna zmena", "B. Chemická zmena"],
        correctAnswer: "B",
        numberOfChoices: 2,
    },
    {
        question: "Zaraďte nasledujúci jav medzi fyzikálne alebo chemické zmeny: Dochádza k reakcii a produkty sú iné ako na začiatku.",
        options: ["A. Fyzikálna zmena", "B. Chemická zmena"],
        correctAnswer: "B",
        numberOfChoices: 2,
    },
    {
        question: "Zaraďte nasledujúci jav medzi fyzikálne alebo chemické zmeny: Zatĺkanie klinca do kusu dreva.",
        options: ["A. Fyzikálna zmena", "B. Chemická zmena"],
        correctAnswer: "A",
        numberOfChoices: 2,
    },
    {
        question: "Zaraďte nasledujúci jav medzi fyzikálne alebo chemické zmeny: Nechajte klinec zhrdzavieť.",
        options: ["A. Fyzikálna zmena", "B. Chemická zmena"],
        correctAnswer: "B",
        numberOfChoices: 2,
    },
    {
        question: "Zaraďte nasledujúci jav medzi fyzikálne alebo chemické zmeny: Zmiešajte dve číre kvapaliny a zmenia sa na biely zákal.",
        options: ["A. Fyzikálna zmena", "B. Chemická zmena"],
        correctAnswer: "B",
        numberOfChoices: 2,
    },
    {
        question: "Zaraďte nasledujúci jav medzi fyzikálne alebo chemické zmeny: Ak spojíte žltú a modrú kvapalinu, stanú sa zelenými.",
        options: ["A. Fyzikálna zmena", "B. Chemická zmena"],
        correctAnswer: "B",
        numberOfChoices: 2,
    },
    {
        question: "Zaraďte nasledujúci jav medzi fyzikálne alebo chemické zmeny: Rozkrojenie jablka na polovicu.",
        options: ["A. Fyzikálna zmena", "B. Chemická zmena"],
        correctAnswer: "A",
        numberOfChoices: 2,
    },
    {
        question: "Zaraďte nasledujúci jav medzi fyzikálne alebo chemické zmeny: Ak necháte rozkrojené jablko odstáť, zhnedne.",
        options: ["A. Fyzikálna zmena", "B. Chemická zmena"],
        correctAnswer: "B",
        numberOfChoices: 2,
    },
    {
        question: "Zaraďte nasledujúci jav medzi fyzikálne alebo chemické zmeny: Tvorba plynových bublín.",
        options: ["A. Fyzikálna zmena", "B. Chemická zmena"],
        correctAnswer: "B",
        numberOfChoices: 2,
    },
];
let shuffledQuestions;


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let selectedButtons = [];
let selectedAnswers = [];

function handleButtonClick(event) {
    const clickedButton = event.target;
    const optionsList = clickedButton.closest('.options-list');

    // Remove 'selected' class from previously selected buttons in the same optionsList
    selectedButtons.forEach((button) => {
        if (button.closest('.options-list') === optionsList) {
            button.classList.remove('selected');
            button.style = "padding: 10px;\n" +
                "    margin: 5px;\n" +
                "    cursor: pointer;\n" +
                "    background-color: #101318;\n" +
                "    color: white;\n" +
                "    border: white solid 2px;"
        }
    });

    // Add 'selected' class to the clicked button
    clickedButton.classList.add('selected');
    clickedButton.style = " background-color: #101318;\n" +
        "    color: blue;\n" +
        "    border: blue solid 2px;"

    // Update the array of selected buttons
    selectedButtons = [...document.querySelectorAll('.selected')];

    selectedAnswers = selectedButtons.map(button => button.textContent.charAt(0));
}


let rightAnswersInOrder = "";

function generateTest() {
    let numberOfQuestions = document.getElementById('numberOfQuestions').value;
    let shuffledQuestions = [...quizQuestions];
    shuffleArray(shuffledQuestions);

    let quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = ""; // Clear previous content


    for (let i = 0; i < numberOfQuestions; i++) {
        let question = shuffledQuestions[i];

        // Create question container
        let questionContainer = document.createElement('div');
        questionContainer.className = 'questionContainer';

        // Create question element
        let questionElement = document.createElement('p');
        questionElement.textContent = question.question;

        // Create options container
        let optionsContainer = document.createElement('div');
        optionsContainer.className = 'answers-container';

        // Create options list
        let optionsList = document.createElement('div');
        optionsList.className = 'options-list';
        optionsList.id = `optionsList${i + 1}`;

        // Add options buttons
        question.options.forEach((choice, index) => {
            let button = document.createElement('button');
            button.textContent = choice;
            button.onclick = (event) => handleButtonClick(event, question.correctAnswer);
            optionsList.appendChild(button);
        });

        optionsContainer.appendChild(optionsList);

        // Append elements to the question container
        questionContainer.appendChild(questionElement);
        questionContainer.appendChild(optionsContainer);

        // Append the question container to the quiz container
        quizContainer.appendChild(questionContainer);

        rightAnswersInOrder = rightAnswersInOrder + question.correctAnswer;
    }

    console.log(rightAnswersInOrder);

}

// Initial generation on page load
generateTest();

function evaluateTest() {
    if (selectedButtons) {
        console.log(selectedAnswers);
    } else {
        console.log('No button selected yet.');
    }

    for (let i = 0; i < selectedButtons.length; i++) {
        if (selectedButtons[i].textContent.charAt(0) === rightAnswersInOrder.charAt(i)) {
            selectedButtons[i].style = "background-color : green"
        } else {
            selectedButtons[i].style = "padding: 10px;\n" +
                "    margin: 5px;\n" +
                "    cursor: pointer;\n" +
                "    background-color: red;\n" +
                "    color: white;\n" +
                "    border: white solid 2px;"
        }
    }

}