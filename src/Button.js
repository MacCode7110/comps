import className from 'classnames';
import PropTypes from 'prop-types';

// Wrapper component
function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded, 
}) {
    // Logic that COULD be used to determine the className string for styling the button element:
    // let baseClassName = "px-3 py-1.5 border"
    // if(primary) {
    //     baseClassName+="border-blue-500 bg-blue-500 text-white"
    // } else if(secondary) {
    //     baseClassName+="border-blue-500 bg-blue-500 text-white"
    // }
    // Better solution:
    const classes = className('px-3', 'py-1.5', 'border', {
        // If the value primary is truthy, then the string key is added to the string that is constructed:
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
    });
    // Underlying element
    return <button className={classes}>{children}</button>;
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        // Number(false) returns 0 and Number(true) returns 1
        const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!warning)
        + Number(!!success)
        + Number(!!danger);

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be true');
        }
    },
};

export default Button;