import React from "react";
import { useNavigate } from "react-router-dom";
import AvatarCard from "../components/AvatarCard";
import HomeButton from "../components/Button";
const avatars = [
    { name: "Demi", image: require("../assets/avatar4.png") },
    { name: "Bantu", image: require("../assets/avatar5.png") },
    { name: "Mike", image: require("../assets/avatar6.png") }

];

const AvatarPage = () => {
    const navigate = useNavigate();

    const handleAvatarClick = (avatar) => {
        localStorage.setItem("selectedAvatar", JSON.stringify({ name: avatar.name }));
        navigate("/levels"); // Navigate to levels page after selecting avatar
    };

    return (
        <>
            <div className="container">
                <h1 className="sub-header">Choose Your Avatar</h1>
                <div className="avatar-container">
                    {avatars.map((avatar) => (
                        <AvatarCard
                            key={avatar.name}
                            name={avatar.name}
                            image={avatar.image}
                            onSelect={() => handleAvatarClick(avatar)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default AvatarPage;
