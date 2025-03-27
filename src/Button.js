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

export default Button;