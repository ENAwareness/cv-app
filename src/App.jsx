import { useState } from 'react';
import GeneralInfoForm from './components/GeneralInfoForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import Preview from './components/Preview';

import './styles/general.css';

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducation] = useState({});
  const [experienceInfo, setExperience] = useState({});

  return (
    <div className="app-container">
      <h1>CV Application</h1>
      <div className="container">
        <div className="form-section">
          <GeneralInfoForm onSubmit={setGeneralInfo} />
          <EducationForm onSubmit={setEducation} />
          <ExperienceForm onSubmit={setExperience} />
        </div>
        <Preview general={generalInfo} education={educationInfo} experience={experienceInfo} />
      </div>
    </div>
  );
}

export default App;
