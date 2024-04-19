import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "../LoginPage/LoginPage.module.css";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <div className={css.all}>
      <DocumentTitle>Home Page</DocumentTitle>
      <h1>
        {isLoggedIn
          ? `Welcome, ${user.name}! 
          Open Contacts page to see your contacts.`
          : "Log in if you have an account or register if you don`t."}
      </h1>
    </div>
  );
}
