import { Outlet } from 'react-router-dom';
import { SelectedBookProvider } from '../../hooks';

const Sidebar = () => {
  return (
    <main className="main-content">
      <SelectedBookProvider>
        <Outlet />
      </SelectedBookProvider>
    </main>
  );
};

export default Sidebar;
