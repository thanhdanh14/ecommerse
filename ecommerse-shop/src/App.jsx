import HookForm from '@components/Form/form';
import HomePage from '@components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SideBarProvider } from '@components/contexts/SideBarContext';
import Sidebar from '@/Sidebar/Sidebar';

function App() {
    return (
        <SideBarProvider>
            <Sidebar />
            <BrowserRouter>
                <Suspense fallback={<div>...Loading</div>}>
                    <Routes>
                        {routers.map((item, index) => (
                            <Route
                                path={item.path}
                                element={<item.componet />}
                                key={index}
                            />
                        ))}
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </SideBarProvider>
    );
}

export default App;
