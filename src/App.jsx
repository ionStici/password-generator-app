import './styles.scss';
import Markup from './Markup';

function App() {
    const copyText = () => {
        console.log('Copied');
    };

    const handleRangeChange = event => {
        document.getElementById('length').textContent = event.target.value;
    };

    return <Markup copyText={copyText} onChange={handleRangeChange} />;
}

export default App;
