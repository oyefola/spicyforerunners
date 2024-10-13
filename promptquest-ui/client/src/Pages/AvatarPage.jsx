import React from 'react';
import AvatarCard from '../components/AvatarCard';

const avatars = [
    { name: "Demi", image: require("../assets/avatar1.png") },
    { name: "Bantu", image: require("../assets/avatar2.png") },
    { name: "Mike", image: require("../assets/avatar3.png") }

  ];

  const AvatarPage = ({ onAvatarSelect }) => {
    const handleAvatarClick = (avatar) => {
    //   localStorage.setItem('selectedAvatar', avatar);
      localStorage.setItem('selectedAvatar', JSON.stringify({ name: avatar.name}));

      onAvatarSelect(); 
    };
    return(

    
  <>
  <div className='container'>
  <h1 className='sub-header'>Choose Your Avatar</h1>
    <div className="avatar-container">
        {avatars.map((avatar) => (
        <AvatarCard
             key={avatar.name}
             name={avatar.name}
             image={avatar.image}
             onSelect={() => handleAvatarClick(avatar)}/>
        ))}
    </div>
  </div>
      </>
);}
export default AvatarPage;
