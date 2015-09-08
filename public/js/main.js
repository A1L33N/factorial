$(document).ready(function() {
  $('form#factorial').submit(function(event){
    var number = parseInt($('input#number').val());

    var result = factorial(number);

    $('.number').text(number);
    $('.result').text(result);

    $('#result').show();
    event.preventDefault();


  });

});
