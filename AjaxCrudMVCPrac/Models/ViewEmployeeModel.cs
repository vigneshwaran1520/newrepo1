using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AjaxCrudMVC.Models
{
    public class ViewEmployeeModel
    {
      public int EmployeeID { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Action { get; set; }


    }
}