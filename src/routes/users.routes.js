import {Router} from 'express'
import {signIn} from '../controllers/users.controller.js'

const router = Router()

router.get('/', signIn)

export default router
