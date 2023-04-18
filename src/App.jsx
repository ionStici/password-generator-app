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

        document
            .querySelector('.range-box')
            .style.setProperty(
                '--widget-current-size',
                `${event.target.value}%`
            );

        document.getElementById('length').textContent = characterLength;
    };

    // // // // // // // // // // // // // // // // // // // //

    const generatePassword = event => {};

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
