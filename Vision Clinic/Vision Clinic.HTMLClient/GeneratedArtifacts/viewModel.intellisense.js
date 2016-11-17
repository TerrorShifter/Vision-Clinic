/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.BrowsePatients.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePatients
        },
        PatientList: {
            _$class: msls.ContentItem,
            _$name: "PatientList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePatients,
            data: lightSwitchApplication.BrowsePatients,
            value: lightSwitchApplication.BrowsePatients
        },
        Patients: {
            _$class: msls.ContentItem,
            _$name: "Patients",
            _$parentName: "PatientList",
            screen: lightSwitchApplication.BrowsePatients,
            data: lightSwitchApplication.BrowsePatients,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsePatients,
                _$entry: {
                    elementType: lightSwitchApplication.Patient
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Patients",
            screen: lightSwitchApplication.BrowsePatients,
            data: lightSwitchApplication.Patient,
            value: lightSwitchApplication.Patient
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowsePatients,
            data: lightSwitchApplication.Patient,
            value: String
        },
        PolicyNumber: {
            _$class: msls.ContentItem,
            _$name: "PolicyNumber",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowsePatients,
            data: lightSwitchApplication.Patient,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePatients
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsePatients, {
        /// <field>
        /// Called when a new BrowsePatients screen is created.
        /// <br/>created(msls.application.BrowsePatients screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePatients],
        /// <field>
        /// Called before changes on an active BrowsePatients screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePatients screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePatients],
        /// <field>
        /// Called after the PatientList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PatientList_postRender: [$element, function () { return new lightSwitchApplication.BrowsePatients().findContentItem("PatientList"); }],
        /// <field>
        /// Called after the Patients content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Patients_postRender: [$element, function () { return new lightSwitchApplication.BrowsePatients().findContentItem("Patients"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowsePatients().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowsePatients().findContentItem("Name"); }],
        /// <field>
        /// Called after the PolicyNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PolicyNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowsePatients().findContentItem("PolicyNumber"); }]
    });

    lightSwitchApplication.BrowseUpcomingAppointments.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseUpcomingAppointments
        },
        AppointmentList: {
            _$class: msls.ContentItem,
            _$name: "AppointmentList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseUpcomingAppointments,
            data: lightSwitchApplication.BrowseUpcomingAppointments,
            value: lightSwitchApplication.BrowseUpcomingAppointments
        },
        UpcomingAppointments: {
            _$class: msls.ContentItem,
            _$name: "UpcomingAppointments",
            _$parentName: "AppointmentList",
            screen: lightSwitchApplication.BrowseUpcomingAppointments,
            data: lightSwitchApplication.BrowseUpcomingAppointments,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseUpcomingAppointments,
                _$entry: {
                    elementType: lightSwitchApplication.Appointment
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "UpcomingAppointments",
            screen: lightSwitchApplication.BrowseUpcomingAppointments,
            data: lightSwitchApplication.Appointment,
            value: lightSwitchApplication.Appointment
        },
        AppointmentTime: {
            _$class: msls.ContentItem,
            _$name: "AppointmentTime",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUpcomingAppointments,
            data: lightSwitchApplication.Appointment,
            value: Date
        },
        AppointmentDate: {
            _$class: msls.ContentItem,
            _$name: "AppointmentDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUpcomingAppointments,
            data: lightSwitchApplication.Appointment,
            value: Date
        },
        AppointmentType: {
            _$class: msls.ContentItem,
            _$name: "AppointmentType",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUpcomingAppointments,
            data: lightSwitchApplication.Appointment,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseUpcomingAppointments
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseUpcomingAppointments, {
        /// <field>
        /// Called when a new BrowseUpcomingAppointments screen is created.
        /// <br/>created(msls.application.BrowseUpcomingAppointments screen)
        /// </field>
        created: [lightSwitchApplication.BrowseUpcomingAppointments],
        /// <field>
        /// Called before changes on an active BrowseUpcomingAppointments screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseUpcomingAppointments screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseUpcomingAppointments],
        /// <field>
        /// Called after the AppointmentList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AppointmentList_postRender: [$element, function () { return new lightSwitchApplication.BrowseUpcomingAppointments().findContentItem("AppointmentList"); }],
        /// <field>
        /// Called after the UpcomingAppointments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UpcomingAppointments_postRender: [$element, function () { return new lightSwitchApplication.BrowseUpcomingAppointments().findContentItem("UpcomingAppointments"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseUpcomingAppointments().findContentItem("rows"); }],
        /// <field>
        /// Called after the AppointmentTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AppointmentTime_postRender: [$element, function () { return new lightSwitchApplication.BrowseUpcomingAppointments().findContentItem("AppointmentTime"); }],
        /// <field>
        /// Called after the AppointmentDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AppointmentDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseUpcomingAppointments().findContentItem("AppointmentDate"); }],
        /// <field>
        /// Called after the AppointmentType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AppointmentType_postRender: [$element, function () { return new lightSwitchApplication.BrowseUpcomingAppointments().findContentItem("AppointmentType"); }]
    });

    lightSwitchApplication.ViewPatient.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewPatient
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewPatient,
            data: lightSwitchApplication.ViewPatient,
            value: lightSwitchApplication.ViewPatient
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewPatient,
            data: lightSwitchApplication.ViewPatient,
            value: lightSwitchApplication.Patient
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewPatient,
            data: lightSwitchApplication.Patient,
            value: lightSwitchApplication.Patient
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPatient,
            data: lightSwitchApplication.Patient,
            value: String
        },
        Street: {
            _$class: msls.ContentItem,
            _$name: "Street",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPatient,
            data: lightSwitchApplication.Patient,
            value: String
        },
        Street2: {
            _$class: msls.ContentItem,
            _$name: "Street2",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPatient,
            data: lightSwitchApplication.Patient,
            value: String
        },
        City: {
            _$class: msls.ContentItem,
            _$name: "City",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPatient,
            data: lightSwitchApplication.Patient,
            value: String
        },
        State: {
            _$class: msls.ContentItem,
            _$name: "State",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPatient,
            data: lightSwitchApplication.Patient,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewPatient,
            data: lightSwitchApplication.Patient,
            value: lightSwitchApplication.Patient
        },
        Zip: {
            _$class: msls.ContentItem,
            _$name: "Zip",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewPatient,
            data: lightSwitchApplication.Patient,
            value: String
        },
        PrimaryPhone: {
            _$class: msls.ContentItem,
            _$name: "PrimaryPhone",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewPatient,
            data: lightSwitchApplication.Patient,
            value: String
        },
        SecondaryPhone: {
            _$class: msls.ContentItem,
            _$name: "SecondaryPhone",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewPatient,
            data: lightSwitchApplication.Patient,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewPatient,
            data: lightSwitchApplication.Patient,
            value: String
        },
        PolicyNumber: {
            _$class: msls.ContentItem,
            _$name: "PolicyNumber",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewPatient,
            data: lightSwitchApplication.Patient,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewPatient
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewPatient, {
        /// <field>
        /// Called when a new ViewPatient screen is created.
        /// <br/>created(msls.application.ViewPatient screen)
        /// </field>
        created: [lightSwitchApplication.ViewPatient],
        /// <field>
        /// Called before changes on an active ViewPatient screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewPatient screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewPatient],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewPatient().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewPatient().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewPatient().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewPatient().findContentItem("Name"); }],
        /// <field>
        /// Called after the Street content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Street_postRender: [$element, function () { return new lightSwitchApplication.ViewPatient().findContentItem("Street"); }],
        /// <field>
        /// Called after the Street2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Street2_postRender: [$element, function () { return new lightSwitchApplication.ViewPatient().findContentItem("Street2"); }],
        /// <field>
        /// Called after the City content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        City_postRender: [$element, function () { return new lightSwitchApplication.ViewPatient().findContentItem("City"); }],
        /// <field>
        /// Called after the State content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        State_postRender: [$element, function () { return new lightSwitchApplication.ViewPatient().findContentItem("State"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewPatient().findContentItem("right"); }],
        /// <field>
        /// Called after the Zip content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Zip_postRender: [$element, function () { return new lightSwitchApplication.ViewPatient().findContentItem("Zip"); }],
        /// <field>
        /// Called after the PrimaryPhone content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PrimaryPhone_postRender: [$element, function () { return new lightSwitchApplication.ViewPatient().findContentItem("PrimaryPhone"); }],
        /// <field>
        /// Called after the SecondaryPhone content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SecondaryPhone_postRender: [$element, function () { return new lightSwitchApplication.ViewPatient().findContentItem("SecondaryPhone"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.ViewPatient().findContentItem("Email"); }],
        /// <field>
        /// Called after the PolicyNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PolicyNumber_postRender: [$element, function () { return new lightSwitchApplication.ViewPatient().findContentItem("PolicyNumber"); }]
    });

}(msls.application));