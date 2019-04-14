var template_params = {
   "user_email": "user_email_value",
   "contact_number": "contact_number_value",
   "contact": "contact_value"
}

var service_id = "default_service";
var template_id = "contact_form";
emailjs.send(service_id, template_id, template_params);
