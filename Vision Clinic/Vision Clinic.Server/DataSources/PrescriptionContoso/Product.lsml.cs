using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;

namespace LightSwitchApplication
{
    public partial class Product
    {
        partial void CurrentPrice_Compute(ref decimal result)
        {
            // Set result to the desired field value
            decimal rebates = default(decimal);

            foreach(var item in ProductRebates)
            {
                if(item.RebateStart <= System.DateTime.Today && item.RebateEnd >= System.DateTime.Today)
                {
                    rebates += item.Rebate.Value;
                }
            }

            result = this.MSRP - rebates;
        }
    }
}