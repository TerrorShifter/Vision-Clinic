using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;

namespace LightSwitchApplication
{
    public partial class InvoiceDetail
    {
        partial void Product_Changed()
        {
            UnitPrice = Product.CurrentPrice;
            Quantity = 1;
        }

        partial void SubTotal_Compute(ref decimal result)
        {
            // Set result to the desired field value
            result = Quantity * UnitPrice;
        }
    }
}