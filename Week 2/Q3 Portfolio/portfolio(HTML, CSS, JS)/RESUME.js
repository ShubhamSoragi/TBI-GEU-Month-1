
function displayPopup(contactType) {
    let message;
    if (contactType === 'email') {
        message = 'Email: soragi7083@gmail.com';
    } else if (contactType === 'phone') {
        message = 'Mobile: 8755686464';
    }
    alert(message);
}


document.addEventListener('DOMContentLoaded', function() {
    const emailElement = document.querySelector('.email');
    const phoneElement = document.querySelector('.phone');

    emailElement.addEventListener('click', function() {
        displayPopup('email');
    });

    phoneElement.addEventListener('click', function() {
        displayPopup('phone');
    });
});
