import {Outlet} from 'react-router-dom';
import {Footer} from './Footer/Footer';
import {Main} from './Main';

export const Layout = () => (
  <div>
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </div>
);
