import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import {Layout} from '../features/Layout/Layout';
import {Home} from '../pages/Home/Home';
import {Shcedule} from '../pages/Shcedule/Shcedule';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="shcedule" element={<Shcedule />} />
    </Route>,
  ),
);
