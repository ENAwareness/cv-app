import '../styles/preview.css';

export default function Preview({ general, education, experience }) {
  return (
    <div className="preview">
      <h2>CV Preview</h2>

      <section className="general-preview">
        <h3>General Information</h3>
        <p>
          <strong>Name:</strong> {general.name}
        </p>
        <p>
          <strong>Email:</strong> {general.email}
        </p>
        <p>
          <strong>Phone:</strong> {general.phone}
        </p>
      </section>

      <section className="education-preview">
        <h3>Education</h3>
        <p>
          <strong>School:</strong> {education.school}
        </p>
        <p>
          <strong>Title of Study:</strong> {education.title}
        </p>
        <p>
          <strong>Date:</strong> {education.date}
        </p>
      </section>

      <section className="experience-preview">
        <h3>Experience</h3>
        <p>
          <strong>Company:</strong> {experience.company}
        </p>
        <p>
          <strong>Position:</strong> {experience.position}
        </p>
        <p>
          <strong>Main Responsibilities:</strong> {experience.responsibilities}
        </p>
        <p>
          <strong>From:</strong> {experience.dateFrom}
        </p>
        <p>
          <strong>Until:</strong> {experience.dateUntil}
        </p>
      </section>
    </div>
  );
}
