import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    // Place the handleClick event handler outside of the mapping function everytime an external event handler function is needed.
    // This handleClick event handler is called manually because it is receiving an index as the first argument instead of an event object as the first argument.
    // Typically, the handleClick event handler receives an event object as the first argument. In this case, handleClick is not called manually.
    const handleClick = (nextIndex) => {
        console.log('STALE version of expandedIndex');

        setExpandedIndex((currentExpandedIndex) => {
            console.log('UP TO DATE version of expandedIndex');
            if (currentExpandedIndex === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        });
        
        if (expandedIndex === nextIndex) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(nextIndex);
        }
    };

    const renderedItems = items.map((item, index) => {
        // Set isExpanded to true if the index of the current item is equal to the expandedIndex, and set to false otherwise:
        const isExpanded = index === expandedIndex;

        // If isExpanded is false then content is false. If isExpanded is true and item.content is undefined then content is also undefined. If isExpanded is true and item.content is defined then content stores the div element containing the content of the item:
        // const content = isExpanded && <div>{item.content}</div>;

        const icon = <span className="text-2xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>;

        // Conditional rendering using the isExpanded field
        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}</div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;