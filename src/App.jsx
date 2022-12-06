import React, { useEffect, useState } from "react";
import "@progress/kendo-theme-bootstrap/dist/all.css";
import Navbar from "./Navbar";
import ConatctInfo from "./ConatctInfo";
import Contacts from "./Contacts";

const App = () => {
  const [contactList, setContactList] = useState([]);
  const [newData, setNewData] = useState("");
  const [editFormInput, setEditFormInput] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://638ef4d34ddca317d7ea4b6b.mockapi.io/contact/contact"
        );
        const data = await res.json();
        setContactList(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [newData]);

  const clearFormData = (data) => {
    data.name = "";
    data.number = "";
  };

  const postData = async (data) => {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(
      "https://638ef4d34ddca317d7ea4b6b.mockapi.io/contact/contact",
      config
    );
    const result = await res.json();
    setNewData(result);

    clearFormData(data);
  };

  const editData = async (data) => {
    const config = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const res = await fetch(
      `https://638ef4d34ddca317d7ea4b6b.mockapi.io/contact/contact/${editFormInput.id}`,
      config
    );
    const result = await res.json();

    setNewData(result);
    clearFormData(data);
    setIsEditing(false);
  };

  const handleSubmit = (data) => {
    if (!isEditing) {
      postData(data);
    } else {
      editData(data);
    }
  };

  const handleEdit = (item) => {
    setEditFormInput(item);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    const res = await fetch(
      `https://638ef4d34ddca317d7ea4b6b.mockapi.io/contact/contact/${id}`,
      {
        method: "DELETE",
      }
    );
    const result = await res.json();

    setNewData(result);
  };

  return (
    <>
      <Navbar />
      <ConatctInfo
        handleSubmit={handleSubmit}
        isEditing={isEditing}
        editFormInput={editFormInput}
      />
      {contactList.length > 0 ? (
        <Contacts
          contactList={contactList}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <h1>No contact to show</h1>
      )}
    </>
  );
};

export default App;
