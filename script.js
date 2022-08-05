const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkInputs();
});

function checkInputs () {
    const emailAddress = document.querySelector('input').value;
    if(emailAddress === '') {
        setErrorFor('The email address is mandatory');
    }else if (!checkedEmail(emailAddress)){
        setErrorFor('Please provide a valid email address');
    }else{
        setSuccessFor(emailAddress);
    }
}

function checkedEmail(emailAddress) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailAddress
    );
}

function setSuccessFor (emailAddress) {
    const input = document.querySelector('input');
    const small = document.querySelector('small');
    input.classList.remove('error');
    small.classList.remove('error');
    small.innerText = emailAddress + ' subscribed!';
    small.classList.add('success');
    input.value = '';
}

function setErrorFor (message) {
    const input = document.querySelector('input');
    const small = document.querySelector('small');
    input.className = 'error';
    small.innerText = message;
    small.className = 'error';
}