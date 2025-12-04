import {Router} from 'express'
import {signIn, Register_user} from '../controllers/users.controller.js'

const router = Router()

router.get('/', signIn)
router.post('/', Register_user)

export default router
