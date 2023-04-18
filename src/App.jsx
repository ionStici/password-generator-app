import './styles.scss';
import Markup from './Markup';

function App() {
    const copyText = () => {
        console.log('Copied');
    };

    return <Markup copyText={copyText} />;
}

export default App;
