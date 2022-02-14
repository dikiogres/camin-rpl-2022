import fs from "fs";
import {v4 as uuidv4} from 'uuid';

const getUserData = () => {
    const jsonData = fs.readFileSync('./db/products.json');
    return JSON.parse(jsonData)    
}

const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data, null, 2);
    fs.writeFileSync('./db/products.json', stringifyData)
}
//let usersData = [];
let usersData = getUserData();

export const getAllUsers = (req, res) => {
    res.status(200).send(usersData);
}

export const createUser = (req, res) => {

    const user = req.body;

    //const userWithId = { ... userData, id: uuidv4()};

    if (user.firstName == null || user.lastName == null || user.age == null ) {
        return res.status(401).send({error: true, msg: 'User data missing'})
    }

    usersData.push({ ... user, id: uuidv4()})
    saveUserData(usersData);

    res.status(200).send(`User with the username ${user.firstName} added to database!`)
}

export const getUser = (req, res)=>{
    const { id } = req.params;

    const foundUser = usersData.find((user)=>user.id === id);

    res.status(200).send(foundUser)
}

export const deleteUser = (req, res)=>{
    const { id } = req.params;

    usersData = usersData.filter((user)=>  user.id !== id);
    saveUserData(usersData);

    res.status(200).send(`User with the id ${id} deleted from the database.`);
}

export const updateUser = (req, res)=> {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = usersData.find((user)=> user.id === id);

    if (firstName) user.firstName = firstName;
    else if(lastName) user.lastName = lastName;
    else if(age) user.age = age;

    saveUserData(usersData);

    res.status(200).send(`User with the id ${id} has been updated`);

}

