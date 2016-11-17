/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Appointment(entitySet) {
        /// <summary>
        /// Represents the Appointment entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this appointment.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this appointment.
        /// </field>
        /// <field name="AppointmentTime" type="Date">
        /// Gets or sets the appointmentTime for this appointment.
        /// </field>
        /// <field name="AppointmentDate" type="Date">
        /// Gets or sets the appointmentDate for this appointment.
        /// </field>
        /// <field name="AppointmentType" type="Number">
        /// Gets or sets the appointmentType for this appointment.
        /// </field>
        /// <field name="DoctorNotes" type="String">
        /// Gets or sets the doctorNotes for this appointment.
        /// </field>
        /// <field name="Patient" type="msls.application.Patient">
        /// Gets or sets the patient for this appointment.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this appointment.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this appointment.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this appointment.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this appointment.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this appointment.
        /// </field>
        /// <field name="details" type="msls.application.Appointment.Details">
        /// Gets the details for this appointment.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function InvoiceDetail(entitySet) {
        /// <summary>
        /// Represents the InvoiceDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this invoiceDetail.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this invoiceDetail.
        /// </field>
        /// <field name="Quantity" type="Number">
        /// Gets or sets the quantity for this invoiceDetail.
        /// </field>
        /// <field name="UnitPrice" type="String">
        /// Gets or sets the unitPrice for this invoiceDetail.
        /// </field>
        /// <field name="Invoice" type="msls.application.Invoice">
        /// Gets or sets the invoice for this invoiceDetail.
        /// </field>
        /// <field name="Product" type="Product">
        /// Gets or sets the product for this invoiceDetail.
        /// </field>
        /// <field name="Product_ProductID" type="Number">
        /// Gets or sets the product_ProductID for this invoiceDetail.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this invoiceDetail.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this invoiceDetail.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this invoiceDetail.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this invoiceDetail.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this invoiceDetail.
        /// </field>
        /// <field name="SubTotal" type="String">
        /// Gets or sets the subTotal for this invoiceDetail.
        /// </field>
        /// <field name="details" type="msls.application.InvoiceDetail.Details">
        /// Gets the details for this invoiceDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Invoice(entitySet) {
        /// <summary>
        /// Represents the Invoice entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this invoice.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this invoice.
        /// </field>
        /// <field name="InvoiceDate" type="Date">
        /// Gets or sets the invoiceDate for this invoice.
        /// </field>
        /// <field name="InvoiceDue" type="Date">
        /// Gets or sets the invoiceDue for this invoice.
        /// </field>
        /// <field name="InvoiceStatus" type="Number">
        /// Gets or sets the invoiceStatus for this invoice.
        /// </field>
        /// <field name="ShipDate" type="Date">
        /// Gets or sets the shipDate for this invoice.
        /// </field>
        /// <field name="Patient" type="msls.application.Patient">
        /// Gets or sets the patient for this invoice.
        /// </field>
        /// <field name="InvoiceDetails" type="msls.EntityCollection" elementType="msls.application.InvoiceDetail">
        /// Gets the invoiceDetails for this invoice.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this invoice.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this invoice.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this invoice.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this invoice.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this invoice.
        /// </field>
        /// <field name="Tax" type="String">
        /// Gets or sets the tax for this invoice.
        /// </field>
        /// <field name="Total" type="String">
        /// Gets or sets the total for this invoice.
        /// </field>
        /// <field name="details" type="msls.application.Invoice.Details">
        /// Gets the details for this invoice.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Patient(entitySet) {
        /// <summary>
        /// Represents the Patient entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this patient.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this patient.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this patient.
        /// </field>
        /// <field name="Street" type="String">
        /// Gets or sets the street for this patient.
        /// </field>
        /// <field name="Street2" type="String">
        /// Gets or sets the street2 for this patient.
        /// </field>
        /// <field name="City" type="String">
        /// Gets or sets the city for this patient.
        /// </field>
        /// <field name="State" type="String">
        /// Gets or sets the state for this patient.
        /// </field>
        /// <field name="Zip" type="String">
        /// Gets or sets the zip for this patient.
        /// </field>
        /// <field name="PrimaryPhone" type="String">
        /// Gets or sets the primaryPhone for this patient.
        /// </field>
        /// <field name="SecondaryPhone" type="String">
        /// Gets or sets the secondaryPhone for this patient.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this patient.
        /// </field>
        /// <field name="PolicyNumber" type="String">
        /// Gets or sets the policyNumber for this patient.
        /// </field>
        /// <field name="Invoices" type="msls.EntityCollection" elementType="msls.application.Invoice">
        /// Gets the invoices for this patient.
        /// </field>
        /// <field name="Appointments" type="msls.EntityCollection" elementType="msls.application.Appointment">
        /// Gets the appointments for this patient.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this patient.
        /// </field>
        /// <field name="details" type="msls.application.Patient.Details">
        /// Gets the details for this patient.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProductRebate(entitySet) {
        /// <summary>
        /// Represents the ProductRebate entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this productRebate.
        /// </param>
        /// <field name="ProductRebateID" type="Number">
        /// Gets or sets the productRebateID for this productRebate.
        /// </field>
        /// <field name="RebateStart" type="Date">
        /// Gets or sets the rebateStart for this productRebate.
        /// </field>
        /// <field name="RebateEnd" type="Date">
        /// Gets or sets the rebateEnd for this productRebate.
        /// </field>
        /// <field name="Rebate" type="String">
        /// Gets or sets the rebate for this productRebate.
        /// </field>
        /// <field name="Product" type="msls.application.Product">
        /// Gets or sets the product for this productRebate.
        /// </field>
        /// <field name="details" type="msls.application.ProductRebate.Details">
        /// Gets the details for this productRebate.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Product(entitySet) {
        /// <summary>
        /// Represents the Product entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this product.
        /// </param>
        /// <field name="ProductID" type="Number">
        /// Gets or sets the productID for this product.
        /// </field>
        /// <field name="ProductName" type="String">
        /// Gets or sets the productName for this product.
        /// </field>
        /// <field name="MSRP" type="String">
        /// Gets or sets the mSRP for this product.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this product.
        /// </field>
        /// <field name="ProductImage" type="String">
        /// Gets or sets the productImage for this product.
        /// </field>
        /// <field name="Category" type="String">
        /// Gets or sets the category for this product.
        /// </field>
        /// <field name="ProductRebates" type="msls.EntityCollection" elementType="msls.application.ProductRebate">
        /// Gets the productRebates for this product.
        /// </field>
        /// <field name="InvoiceDetails" type="msls.EntityCollection" elementType="msls.application.InvoiceDetail">
        /// Gets the invoiceDetails for this product.
        /// </field>
        /// <field name="CurrentPrice" type="String">
        /// Gets or sets the currentPrice for this product.
        /// </field>
        /// <field name="details" type="msls.application.Product.Details">
        /// Gets the details for this product.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Appointments" type="msls.EntitySet">
        /// Gets the Appointments entity set.
        /// </field>
        /// <field name="InvoiceDetails" type="msls.EntitySet">
        /// Gets the InvoiceDetails entity set.
        /// </field>
        /// <field name="Invoices" type="msls.EntitySet">
        /// Gets the Invoices entity set.
        /// </field>
        /// <field name="Patients" type="msls.EntitySet">
        /// Gets the Patients entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };

    function PrescriptionContoso(dataWorkspace) {
        /// <summary>
        /// Represents the PrescriptionContoso data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="ProductRebates" type="msls.EntitySet">
        /// Gets the ProductRebates entity set.
        /// </field>
        /// <field name="Products" type="msls.EntitySet">
        /// Gets the Products entity set.
        /// </field>
        /// <field name="details" type="msls.application.PrescriptionContoso.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="PrescriptionContoso" type="msls.application.PrescriptionContoso">
        /// Gets the PrescriptionContoso data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Appointment: $defineEntity(Appointment, [
            { name: "Id", type: Number },
            { name: "AppointmentTime", type: Date },
            { name: "AppointmentDate", type: Date },
            { name: "AppointmentType", type: Number },
            { name: "DoctorNotes", type: String },
            { name: "Patient", kind: "reference", type: Patient },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        InvoiceDetail: $defineEntity(InvoiceDetail, [
            { name: "Id", type: Number },
            { name: "Quantity", type: Number },
            { name: "UnitPrice", type: String },
            { name: "Invoice", kind: "reference", type: Invoice },
            { name: "Product", kind: "virtualReference", type: Product },
            { name: "Product_ProductID", type: Number },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array },
            { name: "SubTotal", type: String, isReadOnly: true }
        ]),

        Invoice: $defineEntity(Invoice, [
            { name: "Id", type: Number },
            { name: "InvoiceDate", type: Date },
            { name: "InvoiceDue", type: Date },
            { name: "InvoiceStatus", type: Number },
            { name: "ShipDate", type: Date },
            { name: "Patient", kind: "reference", type: Patient },
            { name: "InvoiceDetails", kind: "collection", elementType: InvoiceDetail },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array },
            { name: "Tax", type: String, isReadOnly: true },
            { name: "Total", type: String, isReadOnly: true }
        ]),

        Patient: $defineEntity(Patient, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "Street", type: String },
            { name: "Street2", type: String },
            { name: "City", type: String },
            { name: "State", type: String },
            { name: "Zip", type: String },
            { name: "PrimaryPhone", type: String },
            { name: "SecondaryPhone", type: String },
            { name: "Email", type: String },
            { name: "PolicyNumber", type: String },
            { name: "Invoices", kind: "collection", elementType: Invoice },
            { name: "Appointments", kind: "collection", elementType: Appointment },
            { name: "RowVersion", type: Array }
        ]),

        ProductRebate: $defineEntity(ProductRebate, [
            { name: "ProductRebateID", type: Number, isReadOnly: true },
            { name: "RebateStart", type: Date },
            { name: "RebateEnd", type: Date },
            { name: "Rebate", type: String },
            { name: "Product", kind: "reference", type: Product }
        ]),

        Product: $defineEntity(Product, [
            { name: "ProductID", type: Number, isReadOnly: true },
            { name: "ProductName", type: String },
            { name: "MSRP", type: String },
            { name: "Description", type: String },
            { name: "ProductImage", type: String },
            { name: "Category", type: String },
            { name: "ProductRebates", kind: "collection", elementType: ProductRebate },
            { name: "InvoiceDetails", kind: "virtualCollection", elementType: InvoiceDetail },
            { name: "CurrentPrice", type: String, isReadOnly: true }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Appointments", elementType: Appointment },
            { name: "InvoiceDetails", elementType: InvoiceDetail },
            { name: "Invoices", elementType: Invoice },
            { name: "Patients", elementType: Patient }
        ], [
            {
                name: "Appointments_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Appointments },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Appointments(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "UpcomingAppointments", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Appointments },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/UpcomingAppointments()",
                        {
                        });
                }
            },
            {
                name: "InvoiceDetails_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.InvoiceDetails },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/InvoiceDetails(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Invoices_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Invoices },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Invoices(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Patients_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Patients },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Patients(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        PrescriptionContoso: $defineDataService(PrescriptionContoso, lightSwitchApplication.rootUri + "/PrescriptionContoso.svc", [
            { name: "ProductRebates", elementType: ProductRebate },
            { name: "Products", elementType: Product }
        ], [
            {
                name: "ProductRebates_SingleOrDefault", value: function (ProductRebateID) {
                    return new $DataServiceQuery({ _entitySet: this.ProductRebates },
                        lightSwitchApplication.rootUri + "/PrescriptionContoso.svc" + "/ProductRebates(" + "ProductRebateID=" + $toODataString(ProductRebateID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Products_SingleOrDefault", value: function (ProductID) {
                    return new $DataServiceQuery({ _entitySet: this.Products },
                        lightSwitchApplication.rootUri + "/PrescriptionContoso.svc" + "/Products(" + "ProductID=" + $toODataString(ProductID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "RelatedProducts", value: function (Category) {
                    return new $DataServiceQuery({ _entitySet: this.Products },
                        lightSwitchApplication.rootUri + "/PrescriptionContoso.svc" + "/RelatedProducts()",
                        {
                            Category: $toODataString(Category, "String?")
                        });
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData },
            { name: "PrescriptionContoso", type: PrescriptionContoso }
        ])

    });

}(msls.application));
