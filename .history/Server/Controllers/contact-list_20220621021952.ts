"use strict";
var __ = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessUpdatePage = exports.DisplayAddPage = exports.DisplayUpdatePage = exports.DisplayContactList = void 0;
const contacts_1 = __importDefault(require("../Models/contacts"));
const Util_1 = require("../Util");
function DisplayContactList(req, res, next) {
    contacts_1.default.find(function (err, contactsCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contact List', page: 'contact-list', business: contactsCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    }).sort({ Name: 1 });
}
exports.DisplayContactList = DisplayContactList;
function DisplayUpdatePage(req, res, next) {
    let id = req.params.id;
    contacts_1.default.findById(id, {}, {}, function (err, contactToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Update', page: 'update', business: contactToEdit, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayUpdatePage = DisplayUpdatePage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'update', business: '', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessUpdatePage(req, res, next) {
    let id = req.params.id;
    let updateContact = new contacts_1.default({
        "_id": id,
        "Name": req.body.contactName,
        "Number": req.body.contactNumber,
        "Email": req.body.contactEmail,
    });
    contacts_1.default.updateOne({ _id: id }, updateContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessUpdatePage = ProcessUpdatePage;
function ProcessAddPage(req, res, next) {
    let newContact = new contacts_1.default({
        "Name": req.body.contactName,
        "Number": req.body.contactNumber,
        "Email": req.body.contactEmail
    });
    contacts_1.default.create(newContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contacts_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contact-list.js.map