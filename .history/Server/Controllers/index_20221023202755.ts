import express from 'express';

import { UserDisplayName } from '../Util';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) });
}

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'About Me', page: 'about', displayName:  UserDisplayName(req) });
}

export function DisplayProjectsPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'Projects', page: 'projects', displayName: UserDisplayName(req)  });
}

export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'Services', page: 'services', displayName: UserDisplayName(req)  });
}

export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'Contact', page: 'contact', displayName: UserDisplayName(req)  });
}

export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{

  let newUser = new User
  ({

    username: req.body.username,
    emailAddress: req.body.emailAddress,
    displayName: req.body.FirstName + " " + req.body.LastName
  }); 
}

export function ProcessLogoutPage(req: Request, res: express.Response, next: express.NextFunction)