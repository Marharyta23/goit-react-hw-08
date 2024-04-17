import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operation";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import Layout from "../Layout/Layout";
import RestrictedRoute from "../RestrictedRoute";
import HomePage from "../../pages/HomePage/HomePage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";

// const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
// const RegisterPage = lazy(() =>
//   import("../../pages/RegisterPage/RegisterPage")
// );
// const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
// const ContactsPage = lazy(() =>
//   import("../../pages/ContactsPage/ContactsPage")
// );

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  });

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
}
