import React from "react";
import { Button } from "@progress/kendo-react-buttons";

const Contacts = ({ contactList, handleEdit, handleDelete }) => {
  return contactList.map((item) => (
    <div className="" key={item.id}>
      <h4>{item.name}</h4>
      <h5>{item.number}</h5>
      <div>
        <Button icon="edit" onClick={() => handleEdit(item)}></Button>
        <Button icon="delete" onClick={() => handleDelete(item.id)}></Button>
      </div>
    </div>
  ));
};

export default Contacts;
