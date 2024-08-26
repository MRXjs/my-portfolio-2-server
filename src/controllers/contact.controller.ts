require('dotenv').config();

import { NextFunction, Request, Response } from 'express';
import sendMail from '../utils/sendMail';

export const test = (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Hello World... 🌍</h1>');
};

export const contact = async (req: Request, res: Response, next: NextFunction) => {
    // const html = await ejs.renderFile(path.join(__dirname, '../ejsTemplate/contact.ejs'), req.body);

    try {
        await sendMail({
            email: process.env.SMTP_MAIL || 'sureshmadawa763@gmail.com',
            subject: 'New Contact Message',
            template: 'contact.ejs',
            data: req.body,
        });

        res.status(201).json({
            success: true,
            message: 'Your message has been sent',
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            error: error,
        });
    }
};
