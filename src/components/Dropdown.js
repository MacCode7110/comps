import { useState } from 'react';

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        // Works just fine in the vast majority of scenarios:
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        // Close dropdown
        setIsOpen(false);
        // What option did the user click on?
        onChange(option);
    }

    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>;
    });

    // Basic conditional content assignment
    // let content = 'Select...'
    // if (selection) {
    //     content = selection.label;
    // }
    // More concise conditional content assignment
    // The question mark verifies whether or not the selection is defined


    return (

    // If selection is null, then it is not defined; the question mark will evaluate the selection to undefined. The boolean coercion (the OR logical operator triggers the boolean coercion) of undefined evalutes to falsy, and so the first truthy boolean coercion value ('Select...') is returned.
    // If the selection is not null, then it is defined; the question mark will evaluate the selection to the object, and the object is used to access the value of the label property. Boolean coercion evaluates the defined value of the label property to truthy, and the first truthy value (selection.label) is returned.
    <div>
        <div onClick={handleClick}>{value?.label || 'Select...'}</div>
        {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;