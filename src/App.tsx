import './App.css';
import React, { Suspense } from 'react'
import './scss/app.scss';
import { Route, Routes, useParams } from'react-router-dom';
import { useDispatch } from 'react-redux';
import { Home } from './pages/Home.tsx';
import { MainLayout } from './scss/components/layouts/MainLayout.tsx';
import LoginPage from './scss/components/UserForms/LoginPage';
import RegisterPage from './scss/components/UserForms/RegisterPage';


const Cart = React.lazy(() => import('./pages/Cart').then((m) => ({ default: m.Cart})))
const ItemPage = React.lazy(() => import('./scss/components/ItemPage/ItemPage.tsx').then((m) => ({  default: m.ItemPage })))
const NotFound = React.lazy(() => import('./pages/NotFound.tsx').then((m) => ({ default: m.NotFound})))



function App() {
  const dispatch = useDispatch();
  const {id} = useParams();

  return (
    <Suspense fallback={<div>LOading...</div>}>
        <Routes>
          <Route path='/' element={<MainLayout />} >
            <Route path='' element={<Home />} />
            <Route path='register' element={<RegisterPage/>} />
            <Route path='login' element={<LoginPage/>} />
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
            <Route path="item/:id" element={<ItemPage />} />
            </Route>
        </Routes>
        </Suspense>
      
  );
}

export default App;
