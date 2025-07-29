**How I Choose file structure :**

```
    my-cv-app/
    ├── public/
    │   ├── index.html
    │   └── favicon.ico
    ├── src/
    │   ├── assets/
    │   │   ├── images/
    │   │   │   └── profile.jpg
    │   │   ├── fonts/
    │   │   └── styles/
    │   │       ├── _variables.scss  (atau .css)
    │   │       ├── global.scss
    │   │       └── mixins.scss
    │   ├── components/
    │   │   ├── Header/
    │   │   │   ├── Header.jsx
    │   │   │   └── Header.module.scss
    │   │   ├── Section/
    │   │   │   ├── Section.jsx
    │   │   │   └── Section.module.scss
    │   │   ├── ExperienceItem/
    │   │   │   ├── ExperienceItem.jsx
    │   │   │   └── ExperienceItem.module.scss
    │   │   ├── EducationItem/
    │   │   │   ├── EducationItem.jsx
    │   │   │   └── EducationItem.module.scss
    │   │   ├── SkillItem/
    │   │   │   ├── SkillItem.jsx
    │   │   │   └── SkillItem.module.scss
    │   │   └── Footer/
    │   │       ├── Footer.jsx
    │   │       └── Footer.module.scss
    │   ├── data/
    │   │   └── cvData.js  (atau .json)
    │   ├── hooks/
    │   │   └── useCvData.js
    │   ├── pages/
    │   │   └── Home.jsx
    │   ├── App.jsx
    │   ├── index.js
    │   └── reportWebVitals.js
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    └── README.md
``` 
