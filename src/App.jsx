import { Routes, Route } from 'react-router-dom';
import { CreateCoupon, CreatePromotion, Products } from './components';
import {
  Dashboard,
  Analytics,
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
  Rewards,
  ExcludeProducts,
  Promotions,
  FxRates,
} from './pages';
import MainLayout from './layout/MainLayout';
import CreateNotifications from './components/Notification/CreateNotifications';
import UserInAppMessages from './pages/Notifications/UserInAppMessages';
import Coupons from './pages/Coupons';

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
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
          <Route path="push-notifications" element={<PushNotifs />} />
          <Route path="in-app-messages" element={<PushMessages />} />
          <Route path="/notifications/push-notifications/create-notifications" element={<CreateNotifications />} />
          <Route path='/notifications/push-notifications/users-in-app-messages' element={<UserInAppMessages />} />
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
        <Route path='/reward-system' element={<Rewards />} />
        <Route path='/reward/exclude-product' element={<ExcludeProducts />} />
        <Route path="/payment-methods" element={<Payments />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/promotions">
          <Route index element={<Promotions />} />
          <Route path='/promotions/create-promotions' element={<CreatePromotion />} />
        </Route>
        <Route path="/fx-rates" element={<FxRates />} />
        <Route path='/coupons'>
          <Route index element={<Coupons />} />
          <Route path='/coupons/create-coupon' element={<CreateCoupon />} />
        </Route>
      </Routes>
    </MainLayout>
  );
}
