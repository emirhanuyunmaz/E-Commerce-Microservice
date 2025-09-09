'use client';
import { Provider } from 'react-redux';
import Navbar from '../fe/Navbar';
import Footer from '../fe/Footer';
import { store } from '@/store/store';
import { ToastContainer } from 'react-toastify';

export default function ProviderLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Navbar />
      {children}
      <Footer />
      <ToastContainer />
    </Provider>
  );
}
