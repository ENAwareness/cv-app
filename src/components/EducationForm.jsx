import { useState } from 'react';

export default function EducationForm({ onSubmit }) {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    school: '',
    title: '',
    date: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
    onSubmit(info);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Educational Experience</h2>
        <input
          type="text"
          name="school"
          placeholder="School Name"
          value={info.school}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title of Study"
          value={info.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Date of Study"
          value={info.date}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  } else {
    return (
      <div>
        <h2>Educational Experience</h2>
        <p>School: {info.school}</p>
        <p>Title: {info.title}</p>
        <p>Date: {info.date}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  }
}
