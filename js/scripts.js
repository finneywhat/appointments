$(document).ready(function(){
  $("#guitarScheduler").submit(function(event){
    var userName = $("input#userName").val();
    var apptDescrip = $("input#apptDescrip").val();
    var date = $("input#date").val();
    var time = $("input#time").val();

    $(".userName").text(userName);
    $(".apptDescrip").text(apptDescrip);
    $(".date").text(date);
    $(".time").text(time);

    $("#hiddenConfirm").show()
    event.preventDefault();
  });
});
