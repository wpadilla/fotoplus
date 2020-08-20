exports = (module.exports = {});
const nodemailer = require('nodemailer');
const Template = require('./templatesEmail/confirmationEmail/confirmOrder.js');
exports.sendEmail = ({name, lastname, country, addresExt, addresInt,city,apartament,postalCode,phone,email,informationPlus,items})=> new Promise((resolve,reject)=>{
    let configuration = {
        host: "mail.fotoplus.pe",
        port: 587,
        auth: {
            user: "tienda@fotoplus.pe",
            pass: "4353278"
            // pass: "4224579"
        },
        tls: {
            rejectUnauthorized: false
        }
    }
    
    let Transporter = nodemailer.createTransport(configuration);
    let htmlForUser = Template.header();
    let htmlForAdmin = Template.header();
    htmlForAdmin += Template.adminEmail(name, lastname,email,phone,country,addresExt,addresInt,city,apartament,postalCode,informationPlus);
    htmlForUser += Template.userEmail(name, lastname)
    for (let index = 0; index < items.length; index++) {
        htmlForAdmin += Template.product(items[index]);
        htmlForUser += Template.product(items[index]);
    }
    htmlForAdmin += Template.footerAdm(name, lastname);
    htmlForUser += Template.footerUser();
    let EmailOptionsUser = {
        from: 'tienda@fotoplus.pe',
        to: email,
        subject: 'Gracias por su pedido!',
        html: htmlForUser
    };
    let EmailOptionsAdm = {
        from: 'tienda@fotoplus.pe',
        to: 'tienda@fotoplus.pe',
        subject: 'Pedido Nuevo!',
        html: htmlForAdmin
    };
    Transporter.sendMail(EmailOptionsUser,(err,info)=>{
        if(err) reject(err);
        Transporter.sendMail(EmailOptionsAdm,(err,info)=>{
            if(err) reject(err);
            resolve(info);
        })
        resolve(info);
    })
})
