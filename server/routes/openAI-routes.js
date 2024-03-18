import {openAIStart} from './controllers/openAiController.js'
import express from 'express'

const router = express.Router()

router.use('/openAIStart', openAIStart)


export default router;