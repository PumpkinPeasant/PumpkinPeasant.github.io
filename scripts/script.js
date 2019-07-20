var form = document.getElementById("form-message");
var sent = document.getElementById("sent");
function valid(form){
   
    form.style.display = 'none';
    sent.style.display = 'grid';
};
$('form').submit(function () {
    return false;
});

