import { useState } from 'react';

export default function EducationForm() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    school: '',
    title: '',
    data: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
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
          name="data"
          placeholder="Data of Study"
          value={info.data}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
  } else {
    return (
      <div>
        <h2>Educational Experience</h2>
        <p>School: {info.school}</p>
        <p>Title: {info.title}</p>
        <p>Data: {info.data}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  }
}
