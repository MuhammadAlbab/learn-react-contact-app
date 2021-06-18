import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, CardTitle, CardText, Row } from "reactstrap";
import { getData, deleteData } from "../api";
import { fetchData, deleteContact } from "../redux/actions";
import CustomModal from "../components/CustomModal";
import "../styles/contactlist.css";

const ContactList = () => {
  const [modal, setModal] = useState(false);
  const [stateReminder, setStateReminder] = useState({});
  const contactList = useSelector((state) => state.allContacts.contacts);
  let dispatch = useDispatch();
  useEffect(() => {
    const loadData = async () => {
      const response = await getData();
      dispatch(fetchData(response));
    };
    loadData();
  }, []);

  const handleDelete = async (contactId) => {
    await deleteData(contactId);
    dispatch(deleteContact(contactId));
    setModal(!modal);
  };

  const handleReminder = (contact) => {
    setModal(!modal);
    setStateReminder(contact);
  };

  return (
    <div className="card-wraper">
      {contactList
        ? contactList.map((contact) => {
            return (
              <Card body key={contact.id}>
                <CardTitle tag="h5">{contact.name}</CardTitle>
                <CardText>{contact.status}.</CardText>
                <CardText>{contact.number}.</CardText>
                <Row>
                  <Button className="mb-2" color="success">
                    Call Now
                  </Button>
                  <Button
                    color="danger"
                    onClick={() => handleReminder(contact)}
                  >
                    Delete
                  </Button>
                </Row>
              </Card>
            );
          })
        : "wait"}
      <CustomModal
        data={stateReminder}
        text={"Yakin ingin menghapus"}
        modal={modal}
        onConfirm={() => handleDelete(stateReminder.id)}
        onCancel={() => setModal(!modal)}
      />
    </div>
  );
};

export default ContactList;
