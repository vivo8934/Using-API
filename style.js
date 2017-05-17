var textarea = document.querySelector('.textarea');
var myBtn = document.querySelector('.btn');
var Output = document.querySelector('.output');
//alert($);

myBtn.addEventListener('click', function(){

  var url = "https://api.github.com/users/" + textarea.value;

  $.get(url)
  .then(function(result){
Output.innerHTML =result;

  })
})
