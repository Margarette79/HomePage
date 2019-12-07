
function myFunction() {
  var txt;
  if (confirm("BUY YOUR TICKET!")) {
    txt = "Bellow choose the date and place";
  } else {
    txt = "";
  }
  document.getElementById("demo").innerHTML = txt;
}


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


$( document ).ready(function (){
    var $btns = $('.btn').click(function(){
      if(this.id == 'all') {
        $('#basket > div').show();
      } else {
        var $el = $('.' + this.id).show();
        $('#basket > div').not($el).hide();
      }
        $btns.removeClass('active');
        $(this).addClass('active');
    })
})
