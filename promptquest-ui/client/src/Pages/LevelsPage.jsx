// import React from 'react';
// import LevelCard from '../components/LevelCard';

// const LevelsPage = () => {
//   const selectedAvatar = localStorage.getItem('selectedAvatar');

//   const levels = [{
//     level: 'Level 1',
//     description: `Help ${selectedAvatar.name} build an assistant robot`,
//     image: require("../assets/level1.jpeg"),
//     status:'unlocked'
//   },
//   {
//     level: 'Level 1',
//     description: `Help ${selectedAvatar.name} build an assistant robot`,
//     image: require("../assets/level1.jpeg"),
//     status:'locked'
//   },
//   {
//     level: 'Level 1',
//     description: `Help ${selectedAvatar.name} build an assistant robot`,
//     image: require("../assets/level1.jpeg"),
//     status:'locked'
//   },
  

// ]

//   return (
//     <div className = "container">
//       <h1 className="sub-header">Levels</h1>
//       <h2 className="text-lg">Complete levels to unlock new adventures</h2>
//       <div className="avatar-container">
//       {levels.map((level) =>(
//         <LevelCard
//           level={level.level}
//           description={level.description}
//           image={level.image}
//           unlocked={level.status}
//           onSelect={() => console.log('Level selected')} // Replace with navigation to Level Page
//         />
       

//       ))}
//        </div>
//        </div>

// );}

// export default LevelsPage;


import React from 'react';
import LevelCard from '../components/LevelCard';

const LevelsPage = () => {
    const selectedAvatar = JSON.parse(localStorage.getItem('selectedAvatar')) || { name: 'DefaultName' };

//   const selectedAvatar = JSON.parse(localStorage.getItem('selectedAvatar'));

  const levels = [
    {
      level: 'Level 1',
      description: `Help ${selectedAvatar.name} build an assistant robot!`,
      image: require("../assets/level1.jpeg"),
      status: 'unlocked',
    },
    {
      level: 'Level 2',
      description: `Assist ${selectedAvatar.name} in programming a smart fridge!`,
      image: require("../assets/level2.jpeg"),
      status: 'locked',
    },
    {
      level: 'Level 3',
      description: `Team up with ${selectedAvatar.name} to create a fun AI game!`,
      image: require("../assets/level3.jpeg"),
      status: 'locked',
    },
  ];

  return (
    <div className="levels-container">
      <h1 className="levels-header">Levels</h1>
      <h2 className="levels-subheader">Complete levels to unlock new adventures</h2>
      <div className="avatar-container">
        {levels.map((level) => (
          <LevelCard
            key={level.level}
            level={level.level}
            description={level.description}
            image={level.image}
            unlocked={level.status === 'unlocked'}
            onSelect={() => console.log('Level selected')} // Replace with navigation to Level Page
          />
        ))}
      </div>
    </div>
  );
};

export default LevelsPage;
