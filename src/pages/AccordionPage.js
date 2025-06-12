import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: 'l2kj5',
            label: 'React',
            content: 'Use it!'
        },
        {
            id: 'lk2j35lkj',
            label: 'JavaScript',
            content: 'Use it!'
        },
        {
            id: 'l1kj2i0g',
            label: 'CSS',
            content: 'Use it!'
        }
    ]
    return <Accordion items={items}/>;
}

export default AccordionPage;