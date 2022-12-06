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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://638ef4d34ddca317d7ea4b6b.mockapi.io/contact/contact"
        );
        setIsLoading(true);
        const data = await res.json();
        setContactList(data);
        setIsLoading(false);
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
    setIsLoading(true);

    const res = await fetch(
      "https://638ef4d34ddca317d7ea4b6b.mockapi.io/contact/contact",
      config
    );
    const result = await res.json();
    setNewData(result);
    clearFormData(data);
    setIsLoading(false);
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
    setIsLoading(true);
    const res = await fetch(
      `https://638ef4d34ddca317d7ea4b6b.mockapi.io/contact/contact/${editFormInput.id}`,
      config
    );
    const result = await res.json();
    setNewData(result);
    clearFormData(data);
    setIsEditing(false);
    setIsLoading(false);
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
    console.log(editFormInput);
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    const res = await fetch(
      `https://638ef4d34ddca317d7ea4b6b.mockapi.io/contact/contact/${id}`,
      {
        method: "DELETE",
      }
    );
    const result = await res.json();
    setNewData(result);
    setIsEditing(false);
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <ConatctInfo handleSubmit={handleSubmit} isEditing={isEditing} />
      {isLoading ? (
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>Loading ...</h1>
      ) : contactList.length > 0 ? (
        <Contacts
          contactList={contactList}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>No contact to show</h1>
      )}
    </>
  );
};

export default App;
