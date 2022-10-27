"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const contact_list_1 = require("../Controllers/contact-list");
const Util_1 = require("../Util");
router.get('/contact-list', Util_1.AuthGuard, contact_list_1.DisplayContactList);
router.get('/add', Util_1.AuthGuard, contact_list_1.DisplayAddPage);
router.get('/update/:id', Util_1.AuthGuard, contact_list_1.DisplayUpdatePage);
router.post('/add', Util_1.AuthGuard, contact_list_1.ProcessAddPage);
router.post('/update/:id', Util_1.AuthGuard, contact_list_1.ProcessUpdatePage);
router.get("/delete/:id", Util_1.AuthGuard, contact_list_1.ProcessDeletePage);
exports.default = router;
//# sourceMappingURL=bcontacts.js.map