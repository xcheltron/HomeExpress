import {getUser} from '../models/user.model.js'

export const signIn = async (req, res) => {
    try{
        const user = await getUser()
        console.log(user)
        res.json(user)
    } catch(err){
        res.status(404).json({Message: "Error"})
    }
}

