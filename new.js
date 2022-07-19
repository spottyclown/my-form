// function showError(errorElement, errorMessage){
//     document.querySelector("."+errorElement).classList.add("display-error");
//     document.querySelector("."+errorElement).innerHTML = errorMessage;
// }


// let form = document.forms['sign-up-form'];
// form.onsubmit = function(event){

//    function clearError(){
//        let errors = document.querySelectorAll(".error");
//        for(let error of errors){
//            error.classList.remove("display-error");
//        }
//    }
    
//     if(form.first_name.value === ""){
//         showError("firstname-error", "You have to enter your firstname")
//         return false;
//     }

//     if(form.last_name.value === ""){
//         showError("lastname-error", "You have to enter your lastname")
//         return false;
//     }


//     if(form.email.value === ""){
//         showError("email-error", "You have to enter your email")
//         return false;
//     }

//     if(form.area_code.value === ""){
//         showError(" areacode-error", "You have to enter your areacode")
//         return false;
//     }

//     if(form.phone.value === ""){
//         showError("phone-error", "You have to enter your phone-number")
//         return false;
//     }

//     if(form.subject.value === ""){
//         showError("subject-error", "You have to enter a subject")
//         return false;
//     }

//     if(form.message.value === ""){
//         showError("message-error", "You have to enter a valid message")
//         return false;
//     }

//     if(form.register-submition.value === ""){
//         showError("register-error", "You have to enter a valid register")
//         return false;
//     }


//     document.querySelector(".success").classList.add("display-success");
//     document.querySelector(".success").innerHTML = "Your registration was successful!!"
    
    





//     event.preventDefault();
// }


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}













// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});