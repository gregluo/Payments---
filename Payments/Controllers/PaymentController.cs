using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using static System.Net.Mime.MediaTypeNames;

namespace Payments.Controllers
{
    public class PaymentController : ApiController
    {
        // POST: api/Payment
        public void Post(dynamic value)
        {
            using (StreamWriter file =  new StreamWriter(AppDomain.CurrentDomain.BaseDirectory + @"\PaymentData.txt"))
            {
                file.WriteLine(value);
            }
        }

    }
}
