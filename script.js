
var form = document.querySelector('.reg-form');
var inputName = form.querySelector('.form_fname');
var inputSName = form.querySelector('.form_sname');
var inputNickName = form.querySelector('.form_nickname');
var inputEmail = form.querySelector('.form_email');

function setData(data) {

	name = data.name;
	surname = data.surname;
	nickname = data.nickname;
	email = data.email;

	inputName.value = name;
	inputSName.value = surname;
	inputNickName.value = nickname;
	inputEmail.value = email;

}

function getData() {
	fetch('./bd.json')
		.then(res => res.json())
		.then(res => setData(res));
}


function update(e) {
	e.preventDefault();

	var validEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

	if (validEmail.test(inputEmail.value)) {
		localStorage.setItem('user', JSON.stringify([inputName.value, 
		inputSName.value, inputEmail.value, 
		inputNickName.value]));

	} else {
		alert('Введите нормальную почту!!!')
	}

}

// var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
// var email = document.getElementById("txtEmail");

// if (regexEmail.test(email.value)) {
//     alert("It Okay")
// } else {
//     alert("Not Okay")

// }

var button = document.querySelector('#load');
var save = document.querySelector('#update');

button.addEventListener('click', getData);
save.addEventListener('click', update);


