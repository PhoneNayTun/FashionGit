let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');  
}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Payment
function submitForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expMonth = document.getElementById('expMonth').value;
    const expYear = document.getElementById('expYear').value;
    const cvv = document.getElementById('cvv').value;

    if (
      !fullName ||
      !email ||
      !address ||
      !city ||
      state === 'Choose State..' ||
      !zipCode ||
      !cardNumber ||
      !expMonth ||
      expYear === 'Choose Year..' ||
      !cvv
    ) {
      alert('Please fill all the input fields.');
    } else {
      alert('Thank you for your purchase!');
      document.getElementById('fullName').value = '';
      document.getElementById('email').value = '';
      document.getElementById('address').value = '';
      document.getElementById('city').value = '';
      document.getElementById('state').value = 'Choose State..';
      document.getElementById('zipCode').value = '';
      document.getElementById('cardNumber').value = '';
      document.getElementById('expMonth').value = '';
      document.getElementById('expYear').value = 'Choose Year..';
      document.getElementById('cvv').value = '';
    }
  }

  document.getElementById('submitButton').addEventListener('click', function (event) {
    event.preventDefault(); 
    submitForm();
  });






