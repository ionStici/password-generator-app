import './styles.scss';
import Markup from './Markup';

function App() {
    // // // // // // // // // // // // // // // // // // // //

    const copyText = () => {
        console.log('Copied');
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
