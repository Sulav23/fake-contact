import React from "react";
import { Button } from "@progress/kendo-react-buttons";

const Contacts = ({ contactList, handleEdit, handleDelete }) => {
  return contactList.map((item) => (
    <div
      key={item.id}
      style={{
        width: "80%",
        margin: "10px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "2px solid #333",
      }}
    >
      <h4>{item.name}</h4>
      <h5>{item.number}</h5>
      <div>
        <Button
          icon="edit"
          onClick={() => handleEdit(item)}
          style={{ margin: "0 10px" }}
        ></Button>
        <Button icon="delete" onClick={() => handleDelete(item.id)}></Button>
      </div>
    </div>
  ));
};

export default Contacts;
