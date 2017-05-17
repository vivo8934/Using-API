var textarea = document.querySelector('.textarea');
var myBtn = document.querySelector('.btn');
var Output = document.querySelector('.output');
//alert($);

myBtn.addEventListener('click', function(){


  var url = "https://api.github.com/users/" + textarea.value+ "/repos";

  $.get(url)
    .then(function(result){

       var message = "Hi, " + textarea.value + " you have " + JSON.stringify(result) + " repos in GitHub!"
       Output.innerHTML = message;
   });
})
