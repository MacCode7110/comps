import { useState, useEffect, createContext } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    // We immediately know which path the user is visiting:
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        // Handles moving back and forth between web addresses added using 'pushState'.
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };
    
    return (
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            
            {currentPath}
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };
export default NavigationContext;