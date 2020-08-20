exports = (module.exports = {});
const Month = require('../../../../utils/getMonthNames.js');
let newDate = new Date();
let Day = newDate.getUTCDate();
let Year = newDate.getUTCFullYear();
let MonthOfNumber = newDate.getMonth();
/**
 * 
 */
exports.header = ()=> `
<table class="table_full editable-bg-color bg_color_e6e6e6 editable-bg-image" bgcolor="#e6e6e6" width="100%" align="center"  mc:repeatable="castellab" mc:variant="Header" cellspacing="0" cellpadding="0" border="0">
    <!-- header -->
    <tr>
        <td>
            <!-- container -->
            <table class="table1 editable-bg-color bg_color_303f9f" bgcolor="#FEE862" width="600" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                <!-- padding-top -->
                <tr><td height="25"></td></tr>
                <tr>
                    <td>
                        <!-- Inner container -->
                        <table class="table1" width="520" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                            <tr>
                                <td>
                                    <table width="50%" align="left" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td align="left">
                                                <a href="#" class="editable-img">
                                                    <img editable="true" mc:edit="image001" src="https://i.imgur.com/eTYQzHV.png" width="68" style="display:block; line-height:0; font-size:0; border:0;" border="0" alt="logo" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr><td height="22"></td></tr>
                                    </table>
                                </td>
                            </tr>
                            <tr><td height="60"></td></tr>
                            <tr>
                                <td align="center">
                                    <div class="editable-img">
                                        <img editable="true" mc:edit="image003" src="https://i.imgur.com/h2vkXgR.png"  style="display:block; line-height:0; font-size:0; border:0;" border="0" alt="" />
                                    </div>
                                </td>
                            </tr>

                            <!-- horizontal gap -->
                            <tr><td height="40"></td></tr>

                            <tr>
                                <td mc:edit="text001" align="center" class="text_color_ffffff" style="color: #212121; font-size: 30px; font-weight: 700; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                                    <div class="editable-text">
                                        <span class="text_container">
                                            <multiline>
                                                Detalle del Pedido
                                            </multiline>
                                        </span>
                                    </div>
                                </td>
                            </tr>

                            <!-- horizontal gap -->
                            <tr><td height="30"></td></tr>

                            <tr>
                                <td mc:edit="text002" align="center" class="text_color_ffffff" style="color: #212121	; font-size: 12px; font-weight: 300; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                                    <div class="editable-text">
                                        <span class="text_container">
                                            <multiline>
                                                ${Day} ${Month[MonthOfNumber]}, ${Year}
                                            </multiline>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <!-- padding-bottom -->
                <tr><td height="60"></td></tr>
            </table><!-- END container -->
        </td>
    </tr>
`
/**
 * 
 */
let InitInformation = `
<tr>
    <td>
        <!-- container -->
        <table class="table1 editable-bg-color bg_color_ffffff" bgcolor="#ffffff" width="600" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
            <!-- padding-top -->
            <tr><td height="60"></td></tr>

            <tr>
                <td>
                    <!-- inner container -->
                    <table class="table1" width="520" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
`
/**
 * 
 */
exports.userEmail = (Nombre = '',Apellidos = '')=>`
    ${InitInformation}                        
    <tr>
        <td mc:edit="text003" align="left" class="center_content text_color_282828" style="color: #282828; font-size: 18px; font-weight: 700; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
            <div class="editable-text">
                <span class="text_container">
                    <multiline>Hola ${Nombre} ${Apellidos} aquí está tu carrito.</multiline>
                </span>
            </div>
        </td>
    </tr>
    
    <!-- horizontal gap -->
    <tr><td height="10"></td></tr>

    <tr>
        <td mc:edit="text004" align="left" class="center_content text_color_282828" style="color: #282828; font-size: 14px;line-height: 2; font-weight: 500; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
            <div class="editable-text" style="line-height: 2;">
                <span class="text_container">
                    <multiline>
                    Aquí está un resumen de su reciente pedido hecho el ${Day} de ${Month[MonthOfNumber]} de ${Year}.
                    </multiline>
                </span>
            </div>
        </td>
        </tr>
        <!-- horizontal gap -->
        <tr><td height="50"></td></tr>
`
/**
 * 
 */
exports.adminEmail = (Nombre = '',Apellidos = '',Correo ='',phone = '',country = '',addresExt = '',addresInt = '',city = '',apartament = '',postalCode = '',informationPlus = '')=>`
    ${InitInformation}
    <tr>
        <td mc:edit="text003" align="left" class="center_content text_color_282828" style="color: #282828; font-size: 18px; font-weight: 700; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
            <div class="editable-text">
                <span class="text_container">
                    <multiline>${Nombre} ${Apellidos} hizo un pedido, aquí está su carrito.</multiline>
                </span>
            </div>
        </td>
    </tr>
    <!-- horizontal gap -->
    <tr><td height="10"></td></tr>
    <tr>
        <td mc:edit="text004" align="left" class="center_content text_color_282828" style="color: #282828; font-size: 14px;line-height: 2; font-weight: 500; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
            <div class="editable-text" style="line-height: 2;">
                <span class="text_container">
                    <multiline>
                        Aquí está un resumen del reciente pedido hecho el ${Day} de ${Month[MonthOfNumber]} de ${Year} por ${Nombre} ${Apellidos}.
                    </multiline>
                    <p>El correo del cliente: ${Correo}</p>
                    <p>El Telefono del cliente: ${phone}</p>
                    <p>El País del cliente: ${country}</p>
                    <p>Dirección del cliente: ${addresExt}</p>
                    <p> ${addresInt}</p>
                    <p>Ciudad: ${city}</p>
                    <p>Departamento: ${apartament}</p>
                    <p>Código postal: ${postalCode}</p>
                    <p>Información extra: ${informationPlus}</p>
                </span>
            </div>
        </td>
        </tr>
        <!-- horizontal gap -->
        <tr><td height="50"></td></tr>
`
/**
 * 
 */
let productImage = ()=>`
    <table class="table1-2" width="125" align="left" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center">
                <a href="#" style="border-style: none !important; display: block; border: 0 !important;" class="editable-img">
                    <img editable="true" mc:edit="image004" src="images/sq-icon-filled-box.png" style="display:block; line-height:0; font-size:0; border:0;" border="0" alt="" />
                </a>
            </td>
        </tr>
        <!-- margin-bottom -->
        <tr><td height="30"></td></tr>
    </table>
`
/**
 * 
 */
let productName = (name = '',size = '',color='')=>`
    <tr>
        <td mc:edit="text005" align="left" class="center_content text_color_282828" style="color: #282828; font-size: 14px; font-weight: 600; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
            <div class="editable-text">
                <span class="text_container">
                    <multiline>
                        ${name} : ${size} : ${color}
                    </multiline>
                </span>
            </div>
        </td>
    </tr>
`
/**
 * 
 */
let productInfo = (name,codigo,tipo,Capacidad)=>`
    <tr>
        <td mc:edit="text006" align="left" class="center_content text_color_b0b0b0" style="color: #b0b0b0; font-size: 14px;line-height: 2; font-weight: 300; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
            <div class="editable-text" style="line-height: 2;">
                <span class="text_container">
                    <multiline>
                        Nombre del producto: ${name}
                        Código del producto: ${codigo}
                        Material del producto: ${tipo}
                        Capacidad del producto: ${Capacidad} 
                    </multiline>
                </span>
            </div>
        </td>
    </tr>
`
/**
 * 
 */
let productData = {
    typeData : (nameData = '')=>`
        <td mc:edit="text007" align="left" class="center_content text_color_282828" style="color: #282828; font-size: 12px; font-weight: 600; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
            <div class="editable-text">
                <span class="text_container">
                    <multiline>${nameData}</multiline>
                </span>
            </div>
        </td>
    `,
    quantityData : (cuantity = '')=>`
        <td mc:edit="text010" align="left" class="center_content text_color_303f9f" style="color: #303f9f; font-size: 12px; font-weight: 400; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
            <div class="editable-text">
                <span class="text_container">
                    <multiline>${cuantity}</multiline>
                </span>
            </div>
        </td>
    `
}
/**
 * 
 */
exports.product = ({name,price,quantity,selectedProductSize,selectedProductColor,Codigo,Tipo,Capacidad} )=>`
    <tr>
        <td>
            <!-- column-1  -->
           <!-- END column-1 -->
                ${productImage()}
            <!-- vertical gap -->
            <table class="tablet_hide" width="40" align="left" border="0" cellspacing="0" cellpadding="0">
                <tr><td height="1"></td></tr>
            </table>

            <!-- column-2  -->
            <table class="table1-2" width="355" align="left" border="0" cellspacing="0" cellpadding="0">
                ${productName(name,selectedProductSize,selectedProductColor)}
                <!-- horizontal gap -->
                <tr><td height="5"></td></tr>
                ${productInfo(name,Codigo,Tipo,Capacidad)}
                <!-- horizontal gap -->
                <tr><td height="10"></td></tr>
                <tr>
                    <td>
                        <!-- sub-column-1  -->
                        <table class="table1-2" align="left" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                ${productData['typeData']('Precio')}

                                <td width="10"></td>
                                ${productData['typeData']('Cantidad')}

                                <td width="10"></td>
                                ${productData['typeData']('Subtotal')}
                                <td width="10"></td>
                                ${productData['typeData']('Código')}
                            </tr>
                            <tr><td height="5"></td></tr>
                            <tr>
                                ${productData['quantityData'](`S/${price}`)}

                                <td width="10"></td>
                                 ${productData['quantityData'](quantity)}

                                <td width="10"></td>
                                ${productData['quantityData'](`S/${price*quantity}`)}
                                <td width="10"></td>
                                ${productData['quantityData'](`${Codigo}`)}
                            </tr>
                            <!-- margin-bottom -->
                            <tr><td height="20"></td></tr>
                        </table><!-- END sub-column-1 -->

                        <!-- vertical gap -->
                        <table class="tablet_hide" width="40" align="left" border="0" cellspacing="0" cellpadding="0">
                            <tr><td height="1"></td></tr>
                        </table>
                    </td>
                </tr>
                <!-- margin-bottom -->
                <tr><td height="30"></td></tr>
            </table><!-- END column-2 -->
        </td>
    </tr>
`

let footer = {
    init: `
    <tr>
        <td>
            <!-- container -->
            <table class="table1" width="600" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                <!-- padding-top -->
                <tr><td height="40"></td></tr>

                <tr>
                    <td>
                        <!--  column-1 -->
                        <table class="table1-2" width="350" align="left" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td mc:edit="text032" align="left" class="center_content text_color_929292" style="color: #929292; font-size: 14px; line-height: 2; font-weight: 400; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                                    <div class="editable-text" style="line-height: 2;">
                                        <span class="text_container">
    `,
    end: `
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <!-- horizontal gap -->
                            <tr><td height="20"></td></tr>
                            <!-- horizontal gap -->
                            <tr><td height="10"></td></tr>
                            <!-- margin-bottom -->
                            <tr><td height="30"></td></tr>
                        </table><!-- END column-1 -->
                        <!-- vertical gap -->
                        <table class="tablet_hide" width="130" align="left" border="0" cellspacing="0" cellpadding="0">
                            <tr><td height="1"></td></tr>
                        </table>
                    </td>
                </tr>
                <!-- padding-bottom -->
                <tr><td height="70"></td></tr>
            </table><!-- END container -->
        </td>
    </tr>
</table>
    `
}
/**
 * 
 */
exports.footerUser = ()=>`
    ${footer['init']}
    <multiline>
        Esta recibiendo este email porque haz comprado en :<a href="https://www.fotoplus.pe" target="_blank"  style="color: #212121;text-decoration: none;"> fotoplus.pe</a>
    </multiline>
    ${footer['end']}
`
/**
 * 
 */
exports.footerAdm = (Nombre = '', Apellido = '')=>`
    ${footer['init']}
    <multiline>
        Esta recibiendo este email porque ${Nombre} ${Apellido} ha comprado en :<a href="https://www.fotoplus.pe" target="_blank"  style="color: #212121;text-decoration: none;"> fotoplus.pe</a>
    </multiline>
    ${footer['end']}
`
