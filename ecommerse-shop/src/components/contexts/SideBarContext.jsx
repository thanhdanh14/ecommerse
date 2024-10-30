import { createContext, useState } from 'react';

export const ContextSideBar = createContext();
export const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentMenu, setContentMenu] = useState('');
    return (
        <ContextSideBar.Provider
            value={{ isOpen, setIsOpen, contentMenu, setContentMenu }}
        >
            {children}
        </ContextSideBar.Provider>
    );
};
