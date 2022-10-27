import express from 'express';
import { CallbackError } from 'mongoose';

import Contact from '../Models/contacts';
import { UserDisplayName } from '../Util';

export function DisplayContactList(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    Contact.find(function(err, contactsCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Business Contact List', page: 'contact-list', business: contactsCollection, displayName: UserDisplayName(req)});
    }).sort({Name:1});
}

// Get route for displaying the update contact page
export function DisplayUpdatePage(req: express.Request, res: express.Response, next: express.NextFunction): void
{    
    let id = req.params.id;
    Contact.findById(id, {},{}, function(err, contactToEdit){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Update', page: 'update', business: contactToEdit, displayName: UserDisplayName(req)});
    })   
        
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{    
    res.render('index', {title: 'Add', page: 'update', business: '', displayName: UserDisplayName(req)});
        
}

export function ProcessUpdatePage(req: express.Request, res: express.Response, next: express.NextFunction): void
{    
    let id = req.params.id;
    //instantiate a new contact to edit
    let updateContact = new Contact({
        "_id": id,
        "Name": req.body.contactName,
        "Number": req.body.contactNumber,
        "Email": req.body.contactEmail,
    });

    //update the info in the database
    Contact.updateOne({_id: id}, updateContact, function(err: ErrorCallback){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    })                 
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{    
    //instantiate a new contact to add
    let newContact = new Contact({
        "Name": req.body.contactName,
        "Number": req.body.contactNumber,
        "Email": req.body.contactEmail
    });

    //insert the new contact object into the database
    Contact.create(newContact, function(err: CallbackError){
        if(err){
            console.error(err);
            res.end(err);
        }
        //refresh the contact list
        res.redirect('/contact-list');
    })
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void
{    
    let id = req.params.id;
    
    //pass the id to the database and delete the contact
    Contact.remove({_id: id}, function(err: CallbackError){
        if(err){
            console.error(err);
            res.end(err);
        }

        //delete successful
        res.redirect('/contact-list');
    })
}