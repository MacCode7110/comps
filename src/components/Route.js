import useNavigation from '../hooks/use-navigation';

function Route({ path, children }) {
    const { currentPath } = useContext(NavigationContext);

    if (path === currentPath) {
        return children;
    }

    return null;
}

export default Route;