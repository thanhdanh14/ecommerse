import { createContext, useState } from 'react';

export const ContextSideBar = createContext();
export const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <ContextSideBar.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </ContextSideBar.Provider>
    );
};
