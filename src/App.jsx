import { Routes, Route } from 'react-router-dom';
import { Products } from './components';
import {
  Users,
  AdminManagement,
  EditAdmin,
  DeleteAdmin,
  CreateAdmin,
  Orders,
  UserEdit,
  UserView,
  Blog,
  Payments,
  CreateBlog,
  GiftCards,
  Cms,
  ProductReviews,
  BlockchainIcons,
  Customers,
  AccountLimit,
  AccountDeletion,
  PushMessages,
  PushNotifs,
  Notifications,
} from './pages';
import MainLayout from './layout/MainLayout';

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/users">
          <Route index element={<Users />} />
          <Route path="admin-management">
            <Route index element={<AdminManagement />} />
            <Route path=":id/edit" element={<EditAdmin />} />
            <Route path=":id/delete" element={<DeleteAdmin />} />
            <Route path="create" element={<CreateAdmin />} />
          </Route>
          <Route path=":id/edit" element={<UserEdit />} />
          <Route path=":id/view" element={<UserView />} />
        </Route>
        <Route path="/customers">
          <Route index element={<Customers />} />
          <Route path="account_limit" element={<AccountLimit />} />
          <Route path="account_deletion" element={<AccountDeletion />} />
        </Route>
        <Route path="/notifications">
          <Route index element={<Notifications />} />
          <Route path="pushNotifications" element={<PushNotifs />} />
          <Route path="pushMessages" element={<PushMessages />} />
        </Route>
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog">
          <Route index element={<Blog />} />
          <Route path="create" element={<CreateBlog />} />
        </Route>
        <Route path="/cms">
          <Route index element={<Cms />} />
          <Route path="product-reviews" element={<ProductReviews />} />
          <Route path="blockchain-icons" element={<BlockchainIcons />} />
        </Route>
        <Route path="/payment-methods" element={<Payments />} />
        <Route path="/gift-cards" element={<GiftCards />} />
      </Routes>
    </MainLayout>
  );
}
