import express from 'express';
const router = express.Router();

import { DisplayContactList, DisplayUpdatePage, DisplayAddPage, ProcessAddPage, ProcessUpdatePage, ProcessDeletePage } from '../Controllers/contact-list';

import { AuthGuard } from '../Util';


router.get('/contact-list', AuthGuard, DisplayContactList);

//get route for displaying the update contact page
router.get('/add', AuthGuard, DisplayAddPage);

//displaying edit page
router.get('/update/:id', AuthGuard, DisplayUpdatePage);

//process add page
router.post('/add', AuthGuard, ProcessAddPage);

//process update page
router.post('/update/:id', AuthGuard, ProcessUpdatePage);

//process delete page
router.get("/delete/:id", AuthGuard, ProcessDeletePage);
export default router;