import express from "express";
import {add, list, listlimit20, remove, sortbycreatat, update} from '../controllers/book.api'

const router = express.Router();

router.get('/',list)
router.get('/bookbylimit',listlimit20)
router.get('/bookcrateat',sortbycreatat)
router.post('/book/:id',update)
router.post('/book',add)
router.delete('/book/:id',remove)

export default router;