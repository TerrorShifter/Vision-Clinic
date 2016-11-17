/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Appointment, {
        /// <field>
        /// Called when a new appointment is created.
        /// <br/>created(msls.application.Appointment entity)
        /// </field>
        created: [lightSwitchApplication.Appointment]
    });

    msls._addEntryPoints(lightSwitchApplication.InvoiceDetail, {
        /// <field>
        /// Called when a new invoiceDetail is created.
        /// <br/>created(msls.application.InvoiceDetail entity)
        /// </field>
        created: [lightSwitchApplication.InvoiceDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.Invoice, {
        /// <field>
        /// Called when a new invoice is created.
        /// <br/>created(msls.application.Invoice entity)
        /// </field>
        created: [lightSwitchApplication.Invoice]
    });

    msls._addEntryPoints(lightSwitchApplication.Patient, {
        /// <field>
        /// Called when a new patient is created.
        /// <br/>created(msls.application.Patient entity)
        /// </field>
        created: [lightSwitchApplication.Patient]
    });

    msls._addEntryPoints(lightSwitchApplication.ProductRebate, {
        /// <field>
        /// Called when a new productRebate is created.
        /// <br/>created(msls.application.ProductRebate entity)
        /// </field>
        created: [lightSwitchApplication.ProductRebate]
    });

    msls._addEntryPoints(lightSwitchApplication.Product, {
        /// <field>
        /// Called when a new product is created.
        /// <br/>created(msls.application.Product entity)
        /// </field>
        created: [lightSwitchApplication.Product]
    });

}(msls.application));
