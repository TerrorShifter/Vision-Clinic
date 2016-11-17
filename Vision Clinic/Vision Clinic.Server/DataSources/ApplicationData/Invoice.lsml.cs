using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;

namespace LightSwitchApplication
{
    public partial class Invoice
    {
        partial void Invoice_Created()
        {
            InvoiceDate = System.DateTime.Today;
            InvoiceDue = System.DateTime.Today.AddDays(30);
            ShipDate = System.DateTime.Today.AddDays(3);
        }

        partial void InvoiceDate_Changed()
        {
            InvoiceDue = InvoiceDate.AddDays(30);
                //If the Shipdate is earlier than the new InvoiceDate, update it
            if(ShipDate < InvoiceDate)
            {
                ShipDate = InvoiceDate.AddDays(2);
            }
        }

        protected decimal GetSubTotal()
        {
            return this.InvoiceDetails.Sum(i => i.SubTotal);
        }

        partial void Tax_Compute(ref decimal result)
        {
            // Set result to the desired field value
            result = GetSubTotal() * (decimal)0.095;
        }

        partial void Total_Compute(ref decimal result)
        {
            // Set result to the desired field value
            result = GetSubTotal() + Tax;
        }
    }
}