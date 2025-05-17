import { useState } from 'react';

export default function ExperienceForm({ onSubmit }) {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    company: '',
    position: '',
    responsibilities: '',
    dateFrom: '',
    dateUntil: ''
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
        <h2>Practical Experience</h2>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={info.company}
          onChange={handleChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Position Title"
          value={info.position}
          onChange={handleChange}
        />
        <textarea
          name="responsibilities"
          placeholder="Main Responsibilities"
          value={info.responsibilities}
          onChange={handleChange}></textarea>
        <input
          type="date"
          name="dateFrom"
          placeholder="From"
          value={info.dateFrom}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dateUntil"
          placeholder="Until"
          value={info.dateUntil}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  } else {
    return (
      <div>
        <h2>Practical Experience</h2>
        <p>Company: {info.company}</p>
        <p>Position: {info.position}</p>
        <p>Responsibilities: {info.responsibilities}</p>
        <p>From: {info.dateFrom}</p>
        <p>Until: {info.dateUntil}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  }
}
