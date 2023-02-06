AOS.init();


const spans = document.querySelectorAll('.progress-bar span');

spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});
let menuIcon = document.getElementById("menuIcon")
menuIcon.onclick = function(){
menuIcon.classList.toggle("open-menu");
}
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var textError = document.getElementById('text-error');
var submitError = document.getElementById('submit-error');

function validateName(){
var name = document.getElementById('contact-name').value;

if(name.length == 0){
    nameError.innerHTML = 'Please provide a unique name.';
    return false;
}
if(name.length == 1){
    nameError.innerHTML = 'Please provide a unique name.';
    return false;
}
if(name.length == 2){
    nameError.innerHTML = 'Please provide a unique name.';
    return false;
}
nameError.innerHTML = '<i class="fas fa-check-circle i1"></i>';
return true;
}
function validateEmail(){
var email = document.getElementById('contact-email').value;

if(email.length == 0){
    emailError.innerHTML = 'Please provide a valid email.';
    return false;
}
if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = '<p class="email-err">Email not valid</p>';
    return false;
}
emailError.innerHTML = '<i class="fas fa-check-circle i1"></i>';
return true;
}

function validateSubject(){
var subject = document.getElementById('contact-subject').value;
var required = 10;
if(required > subject){
    subjectError.innerHTML = 'Please provide a unique subject.';
    return false;
}
if(subject == 1){
    subjectError.innerHTML = 'Please provide a unique subject.';
    return false;
}
subjectError.innerHTML = '<i class="fas fa-check-circle i2"></i>';
return true;
}

function validateText(){
var text = document.getElementById('contact-text').value;
var required = 30;
var left = required - text.length;

if(left > 0){
    textError.innerHTML = left + ' more characters required';
    return false;
}
textError.innerHTML = '<i class="i3 fas fa-check-circle"></i>';
return true;
}
function validateForm(){
if(!validateName() || !validateEmail() || !validateText()){
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fill all field appropriately.';
    setTimeout(function(){ submitError.style.display = 'none';}, 5000);
    return false;
}
}
function sendEmail(){
if(validateName() & validateEmail() & validateSubject() & validateText()){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "promcode01@gmail.com",
    Password : "03DADFC5E1DA74EC789D4D71F10431F80987",
    To : 'christophermaxwell20005@gmail.com',
    From : "promcode01@gmail.com",
    Subject : document.getElementById("contact-subject").value,
    Body : "Name: " + document.getElementById("contact-name").value
        + " <br> Email: " + document.getElementById("contact-email").value
        + " <br> Message: " + document.getElementById("contact-text").value
    }).then(
    message => popUp.classList.add("open-popup")
    );
    return true;
}
}
// Get the button:
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
