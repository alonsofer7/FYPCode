$(function() {
  $('#name').keyup(function() {
    $('#greeting').text($('#name').val());
    console.log($('tab.url  ').val());
    // console.log(tab.url);
  });
});
