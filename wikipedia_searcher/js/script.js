

document.getElementById("searchButton").addEventListener("click", search);
document.querySelector('body').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      search ();
    }
});


function search() {
  $(document).ready(function() {
    $('#content').empty();
    var searchTarget = $('input:text').val();
      if (searchTarget == "") {
      window.open("https://en.wikipedia.org/wiki/Special:Random");
    } else {
      $('div').removeClass('big-space').addClass('tiny-space');
      $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTarget+"&format=json&callback=?", function(data) {
        if ( "" == data[1] ) {
          $('#content').append("Didn't find anything!");
        } else {
          for (var i = 1; i < data[1].length; i++) {
            var newArticle = '<a href="' +data[3][i]+ '"><article><h2>' + data[1][i] + '</h2><p>' + data[2][i] + '</p></article></a>';
              $('#content').append(newArticle);
          }
        }
      });
    }
  });
}
