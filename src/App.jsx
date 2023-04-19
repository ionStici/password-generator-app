import './styles.scss';
import Markup from './Markup';

function App() {
    // // // // // // // // // // // // // // // // // // // //

    const copyText = () => {
        const copyBtnEl = document.querySelector('.copy-btn');
        const copyTextEl = document.querySelector('.copied');
        const passwordText = document.querySelector('.password').textContent;

        navigator.clipboard.writeText(passwordText);
        copyBtnEl.classList.add('copy-active');
        copyTextEl.classList.remove('copied-hidden');

        setTimeout(() => {
            copyBtnEl.classList.remove('copy-active');
            copyTextEl.classList.add('copied-hidden');
        }, 2500);
    };

    // // // // // // // // // // // // // // // // // // // //

    const handleRangeChange = event => {
        const characterLength = event.target.value / 5;
        const levelTextEl = document.querySelector('.strength-box__level');
        const boxEl = document.querySelector('.strength-box__box');

        document
            .querySelector('.range-box')
            .style.setProperty(
                '--widget-current-size',
                `${event.target.value}%`
            );

        document.getElementById('length').textContent = characterLength;

        if (characterLength < 8) {
            levelTextEl.textContent = 'Too weak!';
            boxEl.classList.remove('rd', 'or', 'yel', 'gr');
            boxEl.classList.add('rd');
        }

        if (characterLength >= 8 && characterLength < 12) {
            levelTextEl.textContent = 'Weak';
            boxEl.classList.remove('rd', 'or', 'yel', 'gr');
            boxEl.classList.add('or');
        }

        if (characterLength >= 12 && characterLength < 16) {
            levelTextEl.textContent = 'Medium';
            boxEl.classList.remove('rd', 'or', 'yel', 'gr');
            boxEl.classList.add('yel');
        }

        if (characterLength >= 16 && characterLength <= 20) {
            levelTextEl.textContent = 'Strong';
            boxEl.classList.remove('rd', 'or', 'yel', 'gr');
            boxEl.classList.add('gr');
        }
    };

    // // // // // // // // // // // // // // // // // // // //

    const generatePassword = event => {
        const pwLength = document.querySelector('.range-widget').value / 5;
        const lis = document.querySelectorAll('.li');
        const passwordEl = document.querySelector('.password');

        // prettier-ignore
        const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        // prettier-ignore
        const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        // prettier-ignore
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        // prettier-ignore
        const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '[', ']', ';', ':', '"', '<', '>', '?', ',', '.', '/', '|', '`', '~', '-', '='];

        let allCharacter = [];

        lis.forEach(li => {
            const checked = li.querySelector('input').checked;
            const type = li.dataset.type;

            if (checked && type === 'uppercase')
                allCharacter = allCharacter.concat(uppercase);

            if (checked && type === 'lowercase') {
                allCharacter = allCharacter.concat(lowercase);
            }

            if (checked && type === 'numbers') {
                allCharacter = allCharacter.concat(numbers);
            }

            if (checked && type === 'symbols') {
                allCharacter = allCharacter.concat(symbols);
            }
        });

        let randomNum = Math.floor(Math.random() * allCharacter.length - 1);
        const set = new Set();

        if (!allCharacter[0]) return;

        while (set.size < pwLength) {
            set.add(randomNum);
            randomNum = Math.floor(Math.random() * allCharacter.length - 1);
            console.log(randomNum);
        }

        const uniqueNumbers = [...set];
        const password = uniqueNumbers.map(n => allCharacter[n]).join('');

        passwordEl.textContent = password;
        passwordEl.classList.remove('password-empty');
    };

    // // // // // // // // // // // // // // // // // // // //

    return (
        <Markup
            copyText={copyText}
            onChange={handleRangeChange}
            generate={generatePassword}
        />
    );
}

export default App;
