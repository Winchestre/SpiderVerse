import Header from "./Header"
import Sidebar from "./Sidebar"

import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <div className="ml-auto w-[calc(100%-280px)]">
                <Header />
                <main className="mt-[88px]">
                    {children}
                </main>
            </div>
        </>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout