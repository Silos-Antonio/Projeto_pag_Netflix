const container = document.querySelector('.container');
const LoginLink = document.querySelector('.SignInLink');
const CadastroLink = document.querySelector('.SignUpLink');

CadastroLink.addEventListener('click', () =>{
    container.classList.add('active');
})

LoginLink.addEventListener('click', () => {
    container.classList.remove('active');
})