import { useState } from 'react';

export default function GeneralInfoForm() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  }

  function handlesubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  if (isEditing) {
    return (
      <form onSubmit={handlesubmit}>
        <h2>General Information</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={info.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={info.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={info.phone}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  } else {
    return (
      <div>
        <h2>General Information</h2>
        <p>Name: {info.name}</p>
        <p>Email: {info.email}</p>
        <p>Phone: {info.phone}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  }
}
