import React, { useState } from "react";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid grey",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitButton: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [firstName, setFirstName] = useState("Coder");
  const [lastName, setLastName] = useState("Byte");
  const [phone, setPhone] = useState("8885559999");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { firstName, lastName, phone };
    addEntryToPhoneBook(newEntry);
    setFirstName("");
    setLastName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstName"
        name="userFirstName"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastName"
        name="userLastName"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <input
        style={style.form.submitButton}
        className="submitButton"
        value="Add User"
        type="submit"
      />
    </form>
  );
}

function InformationTable({ phoneBook }) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {phoneBook.map((entry, index) => (
          <tr key={index}>
            <td style={style.tableCell}>{entry.firstName}</td>
            <td style={style.tableCell}>{entry.lastName}</td>
            <td style={style.tableCell}>{entry.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Application() {
  const [phoneBook, setPhoneBook] = useState([]);

  const addEntry = (entry) => {
    setPhoneBook([...phoneBook, entry]);
    const sortedPhoneBook = [...phoneBook, entry].sort((a, b) =>
      a.lastName.localeCompare(b.lastName)
    );
    setPhoneBook(sortedPhoneBook);
  };

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntry} />
      <InformationTable phoneBook={phoneBook} />
    </section>
  );
}

export default Application;
