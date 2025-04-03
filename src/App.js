import Accordion from './components/Accordion';

function App() {
    const items = [
        {
            label: 'React',
            content: 'Use it!'
        },
        {
            label: 'JavaScript',
            content: 'Use it!'
        },
        {
            label: 'CSS',
            content: 'Use it!'
        }
    ]
    return <Accordion items={items}/>;
}

export default App;