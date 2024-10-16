import { client } from "../openaiclient";
const fs = require("fs");
const path = require("path");

// Path to the users JSON file
const usersFilePath = path.join(__dirname, "../../data/users.json");

// Helper function to read user data from JSON
export function readUsers() {
    const data = fs.readFileSync(usersFilePath);
    return JSON.parse(data);
}

// Helper function to write user data to JSON
export function writeUsers(users) {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

// Get user by username
export function getUserByUsername(username) {
    const users = readUsers();
    return users.find((user) => user.username === username);
}

// Create a new user
export function createUser(username) {
    const users = readUsers();
    const newUser = {
        username: username,
        gems: 0,
        mascot_customizations: [],
        levels_completed: [],
    };
    users.push(newUser);
    writeUsers(users);
    return newUser;
}

// Update user gems
export function updateUserGems(username, gems) {
    const users = readUsers();
    const user = users.find((u) => u.username === username);
    if (user) {
        user.gems += gems;
        writeUsers(users);
    }
}

export function updateUserAvatar(username) {
    const users = readUsers();
    const user = users.find((u) => u.username === username);
    
    if (user) {
        user.mascot_customizations.push("avatar");
        writeUsers(users);
    }
}


