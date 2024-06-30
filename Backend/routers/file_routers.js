import express from 'express';
import { upload_file , downloadfile } from '../controllers/file_controller.js';
import upload from '../middlewares/uploader.js';


const routers = express.Router()

routers.post('/upload' , upload.single('file'), upload_file)
routers.get('/file/:fileId',downloadfile)

export default routers 