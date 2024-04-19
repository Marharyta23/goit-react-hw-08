import { Toaster } from "react-hot-toast";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegisterPage.module.css";
export default function RegisterPage() {
  return (
    <div className={css.all}>
      <DocumentTitle>Register page</DocumentTitle>
      <RegistrationForm />
      <Toaster />
    </div>
  );
}
