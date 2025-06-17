import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({ to, children }) {
    const { navigate } = useNavigation();

    const classes = classNames('text-blue-500');

    const handleClick = (event) => {
        // If the user is holding down the metaKey or ctrlKey, then allow the browser to go through the normal navigation behavior and attempt to open up a new tab:
        if (event.metaKey || event.ctrlKey) {
            // Break statement
            return;
        }
        // Prevent normal broswer navigation behavior
        event.preventDefault();

        navigate(to);
    }
    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;