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
    // if (primary && secondary) {
    //     throw new Error('only one of ')
    // }
    // Underlying element
    return <button>{children}</button>;
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