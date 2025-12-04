import {getUser, signUp} from '../models/user.model.js'
import { configuraciones } from '../Configurations.js';
import bcrypt from 'bcrypt';

const {SALT_ROUNDS} = configuraciones();

export const signIn = async (req, res) => {
    try{
        const user = await getUser()
        console.log(user)
        res.json(user)
    } catch(err){
        res.status(404).json({Message: "Error"})
    }
}

export const Register_user = async (req, res) =>{
    try {
        const {name, email, password, estado} = req.body;
        const password_hash = await bcrypt.hash(password, SALT_ROUNDS);
        
        const succesful = await signUp(name,email,password_hash, estado)
        console.log(succesful)
        res.json(succesful)
    } catch (error) {
        console.error(error)
        res.status(404).json({Message: error})
    }
}

