
    $(document).ready(function() {
      //Buy your tickets here.


      console.log($('#tickets1').css('color'));
      $('#tickets1').click(function() {
        if ($('#tickets1').css('color') == "rgb(255, 255, 255)") {
          console.log("loco");
          $('#tickets1').css('background-color', '#000');
        } else {
          $('#tickets1').css('color', "rgb(254, 254, 254)");
        }
      })
