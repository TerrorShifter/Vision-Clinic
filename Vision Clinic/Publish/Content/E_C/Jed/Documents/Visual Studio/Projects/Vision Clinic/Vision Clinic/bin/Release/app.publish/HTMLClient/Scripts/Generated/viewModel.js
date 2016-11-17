/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function BrowsePatients(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsePatients screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Patients" type="msls.VisualCollection" elementType="msls.application.Patient">
        /// Gets the patients for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsePatients.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsePatients", parameters);
    }

    function ViewPatient(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewPatient screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Patient" type="msls.application.Patient">
        /// Gets or sets the patient for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewPatient.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewPatient", parameters);
    }

    function BrowseUpcomingAppointments(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseUpcomingAppointments screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="UpcomingAppointments" type="msls.VisualCollection" elementType="msls.application.Appointment">
        /// Gets the upcomingAppointments for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseUpcomingAppointments.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseUpcomingAppointments", parameters);
    }

    msls._addToNamespace("msls.application", {

        BrowsePatients: $defineScreen(BrowsePatients, [
            {
                name: "Patients", kind: "collection", elementType: lightSwitchApplication.Patient,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Patients;
                }
            }
        ], [
        ]),

        ViewPatient: $defineScreen(ViewPatient, [
            { name: "Patient", kind: "local", type: lightSwitchApplication.Patient }
        ], [
        ]),

        BrowseUpcomingAppointments: $defineScreen(BrowseUpcomingAppointments, [
            {
                name: "UpcomingAppointments", kind: "collection", elementType: lightSwitchApplication.Appointment,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.UpcomingAppointments();
                }
            }
        ], [
        ]),

        showBrowsePatients: $defineShowScreen(function showBrowsePatients(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsePatients screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsePatients", parameters, options);
        }),

        showViewPatient: $defineShowScreen(function showViewPatient(Patient, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewPatient screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewPatient", parameters, options);
        }),

        showBrowseUpcomingAppointments: $defineShowScreen(function showBrowseUpcomingAppointments(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseUpcomingAppointments screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseUpcomingAppointments", parameters, options);
        })

    });

}(msls.application));
