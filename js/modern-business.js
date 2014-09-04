// Activates the Carousel
$('.carousel').carousel({
  interval: 5000
})

// Activates Tooltips for Social Links
$('.tooltip-social').tooltip({
  selector: "a[data-toggle=tooltip]"
})


$( document ).ready(function() {
  $('#contact-us').click(function(e) {
          var subject = $( "input[name=company]" ).val();
          var body = "Hi,\n I would like to make an infographic about '" + subject + "'.\n" +
                     "Here is my infographic project description:" + "\n" + $("textarea[name=description]" ).val() + "\n";      
          if ( $("input[name=name]" ).val() ) {
            body += "\n" + $("input[name=name]" ).val();
          }
          var phone = $("input[name=phone]" ).val();
          if ( phone ) {
            body += "\n Phone: " + phone + "\n";
          }
          var address = 'i' + 'n' + 'f' + 'o' + '@' + 'metecol' + '.' + 'com';
          $(location).attr('href', 'mailto:' + address + '?subject='
                                   + encodeURIComponent(subject + " [Inquiry]")
                                   + "&body=" 
                                   + encodeURIComponent(body)
          );
          $('#infoModal').modal('hide');
          $('#do-contact').prop('disabled', false);
          //ga('send', 'event', 'contact-us', 'submit', 'contact submitted');
  });
  
  $(document).on("click", ".order-btn", function () {
       var prodType = $(this).data('prod-type');
       var f = $("textarea[name=description]");
       switch(prodType) {
         case "biphasic":
            f.val() || f.val( "I'm interested in purchasing BIPHASIC+ Monitor Defibrillator. Could you give me more info?");
            break;
         case "PDT":
            f.val() || f.val( "I'm interested in purchasing Pin Digital Thermograph PDT-1. Could you give me more info?");
            break;
         case "cardio":
            f.val() || f.val( "I'm interested in purchasing ECG Multi-Device Cardio+. Could you give me more info?");
            break;
       case "oracle":
            f.val() || f.val( "I'm interested in getting Oracle Portable ECG. Let me know when it will be available.");
            break;
         default:
            break;
       }
  });
});