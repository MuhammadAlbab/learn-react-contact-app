import Home from "../views/Home";
import AddContact from "../views/AddContact";
import ContactList from "../views/ContactList";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/addcontact",
    exact: true,
    component: AddContact,
  },
  {
    path: "/contactlist",
    exact: true,
    component: ContactList,
  },
];

export default routes;
