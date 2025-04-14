import { useState } from 'react';

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const renderedItems = items.map((item, index) => {
        // Set isExpanded to true if the index of the current item is equal to the expandedIndex, and set to false otherwise:
        const isExpanded = index === expandedIndex;

        // If isExpanded is false then content is false. If isExpanded is true and item.content is undefined then content is also undefined. If isExpanded is true and item.content is defined then content stores the div element containing the content of the item:
        // const content = isExpanded && <div>{item.content}</div>;

        // Conditional rendering using the isExpanded field
        return (
            <div key={item.id}>
                <div onClick={() => setExpandedIndex(index)}>{item.label}</div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });

    return <div>{renderedItems}</div>;
}

export default Accordion;