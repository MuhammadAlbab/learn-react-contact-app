import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions/";
import { addData } from "../api";
import { useHistory } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Alert,
} from "reactstrap";
import CustomModal from "../components/CustomModal";
import "../styles/addcontact.css";
const AddContact = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [number, setNumber] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [modal, setModal] = useState(false);
  const [stateReminder, setStateReminder] = useState({});
  const [alert, setAlert] = useState(false);
  const statOpt = [
    {
      option: "Keluarga",
      value: "keluarga",
    },
    {
      option: "Teman",
      value: "teman",
    },
    {
      option: "Asing",
      value: "asing",
    },
  ];

  const handleReminder = async (e) => {
    e.preventDefault();
    if (name === "" || status === "" || number === "" || keterangan === "") {
      setAlert(!alert);
      return;
    }
    const newContact = {
      id: Date.now(),
      name,
      number,
      status,
      keterangan,
    };
    setStateReminder(newContact);
    setModal(!modal);
  };

  const handleSubmit = async (contact) => {
    setAlert(!alert);
    dispatch(addContact(contact));
    await addData(contact);
    setName("");
    setStatus("");
    setNumber("");
    setKeterangan("");
    history.push("/contactlist");
  };

  return (
    <>
      {alert && <Alert color="danger">Peringatan: Isi Semua Field!</Alert>}
      <div className="title">Add New Contact</div>
      <Form onSubmit={handleReminder}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="nama">Nama</Label>
              <Input
                type="text"
                placeholder="Masukan Nama..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="status">Status</Label>
              <Input type="select" onChange={(e) => setStatus(e.target.value)}>
                <option value="">--- Pilih Satu ---</option>
                {statOpt.map((e, index) => {
                  return (
                    <option key={index} value={e.value}>
                      {e.option}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="nomor">Nomor</Label>
          <Input
            type="number"
            placeholder="Masukan Nomor..."
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="keterangan">Keterangan</Label>
          <Input
            type="textarea"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
          />
        </FormGroup>
        <div className="btn-wraper">
          <Button type="submit">Save</Button>
        </div>
      </Form>
      <CustomModal
        data={stateReminder}
        text={"Tambahkan"}
        modal={modal}
        onConfirm={() => handleSubmit(stateReminder)}
        onCancel={() => setModal(!modal)}
      />
    </>
  );
};

export default AddContact;
