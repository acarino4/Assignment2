"use strict";
var __importDefault = (this && this.__importDefault) || function (mod: { __esModule: any; }) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessUpdatePage = exports.DisplayAddPage = exports.DisplayUpdatePage = exports.DisplayContactList = void 0;
const contacts_1 = __importDefault(require("../Models/contacts"));
const Util_1 = require("../Util");
function DisplayContactList(req: any, res: { end: (arg0: any) => void; render: (arg0: string, arg1: { title: string; page: string; business: any; displayName: any; }) => void; }, next: any) {
    contacts_1.default.find(function (err: any, contactsCollection: any) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contact List', page: 'contact-list', business: contactsCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    }).sort({ Name: 1 });
}
exports.DisplayContactList = DisplayContactList;
function DisplayUpdatePage(req: { params: { id: any; }; }, res: { end: (arg0: any) => void; render: (arg0: string, arg1: { title: string; page: string; business: any; displayName: any; }) => void; }, next: any) {
    let id = req.params.id;
    contacts_1.default.findById(id, {}, {}, function (err: any, contactToEdit: any) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Update', page: 'update', business: contactToEdit, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayUpdatePage = DisplayUpdatePage;
function DisplayAddPage(req: any, res: { render: (arg0: string, arg1: { title: string; page: string; business: string; displayName: any; }) => void; }, next: any) {
    res.render('index', { title: 'Add', page: 'update', business: '', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessUpdatePage(req: { params: { id: any; }; body: { contactName: any; contactNumber: any; contactEmail: any; }; }, res: { end: (arg0: any) => void; redirect: (arg0: string) => void; }, next: any) {
    let id = req.params.id;
    let updateContact = new contacts_1.default({
        "_id": id,
        "Name": req.body.contactName,
        "Number": req.body.contactNumber,
        "Email": req.body.contactEmail,
    });
    contacts_1.default.updateOne({ _id: id }, updateContact, function (err: any) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessUpdatePage = ProcessUpdatePage;
function ProcessAddPage(req: { body: { contactName: any; contactNumber: any; contactEmail: any; }; }, res: { end: (arg0: any) => void; redirect: (arg0: string) => void; }, next: any) {
    let newContact = new contacts_1.default({
        "Name": req.body.contactName,
        "Number": req.body.contactNumber,
        "Email": req.body.contactEmail
    });
    contacts_1.default.create(newContact, function (err: any) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req: { params: { id: any; }; }, res: { end: (arg0: any) => void; redirect: (arg0: string) => void; }, next: any) {
    let id = req.params.id;
    contacts_1.default.remove({ _id: id }, function (err: any) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contact-list.js.map