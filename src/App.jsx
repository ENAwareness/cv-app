import { useState } from 'react';
import GeneralInfoForm from './components/GeneralInfoForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import Preview from './components/Preview';

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducation] = useState({});
  const [experienceInfo, setExperience] = useState({});

  return (
    <div>
      <h1>CV Application</h1>
      <GeneralInfoForm onSubmit={setGeneralInfo} />
      <EducationForm onSubmit={setEducation} />
      <ExperienceForm onSubmit={setExperience} />
      <Preview general={generalInfo} education={educationInfo} experience={experienceInfo} />
    </div>
  );
}

export default App;
