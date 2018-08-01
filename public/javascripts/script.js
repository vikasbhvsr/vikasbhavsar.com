 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyCpO7QDHOK3_eq4zmRsdY-22Ax5Moo5MN4",
     authDomain: "vikasbhavsar-contactform.firebaseapp.com",
     databaseURL: "https://vikasbhavsar-contactform.firebaseio.com",
     projectId: "vikasbhavsar-contactform",
     storageBucket: "vikasbhavsar-contactform.appspot.com",
     messagingSenderId: "680917922008"
 };
 firebase.initializeApp(config);

 // Reference messages collection
 var messagesRef = firebase.database().ref('messages');

 // Listen for form submit
 document.getElementById('contactForm').addEventListener('submit', submitForm);

 // Submit form
 function submitForm(e) {
     e.preventDefault();

     // Get values
     var company = getInputVal('company');
     var name = getInputVal('name');
     var email = getInputVal('email');
     var message = getInputVal('message');

     // Save message
     saveMessage(company, name, email, message);

     // Show alert
     document.querySelector('.alert').style.display = 'block';

     // Hide alert after 3 seconds
     setTimeout(function () {
         document.querySelector('.alert').style.display = 'none';
     }, 3000);

     // Clear form
     document.getElementById('contactForm').reset();
 }

 // Function to get get form values
 function getInputVal(id) {
     return document.getElementById(id).value;
 }

 // Save message to firebase
 function saveMessage(company, name, email, message) {
     var newMessageRef = messagesRef.push();
     newMessageRef.set({
         company: company,
         name: name,
         email: email,
         message: message
     });
 }


 // Animate on Scroll
 var animateHTML = function () {
     var elems,
         windowHeight;
     var init = function () {
         elems = document.getElementsByClassName('hidden');
         windowHeight = window.innerHeight;
         _addEventHandlers();
     }
     var _addEventHandlers = function () {
         window.addEventListener('scroll', _checkPosition);
         window.addEventListener('resize', init);
     }
     var _checkPosition = function () {
         for (var i = 0; i < elems.length; i++) {
             var posFromTop = elems[i].getBoundingClientRect().top;
             if (posFromTop - windowHeight <= 0) {
                 elems[i].className = elems[i].className.replace('hidden', 'fade-in-element');
             }
         }
     }
     return {
         init: init
     }
 }
 animateHTML().init()