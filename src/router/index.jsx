import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductListPage, ProductDetailPage, ProductFormPage } from '../pages';
import { MainLayout } from '../components/layout';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/products/new" element={<ProductFormPage />} />
          <Route path="/products/:id/edit" element={<ProductFormPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
