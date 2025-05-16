import { useState } from 'react';

export default function ExperienceForm() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    company: '',
    position: '',
    responsibilities: '',
    dataFrom: '',
    dataUntil: ''
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
          type="data"
          name="dataFrom"
          placeholder="From"
          value={info.dataFrom}
          onChange={handleChange}
        />
        <input
          type="data"
          name="dataUntil"
          placeholder="Until"
          value={info.dataUntil}
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
        <p>From: {info.dataFrom}</p>
        <p>Until: {info.dataUntil}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  }
}
