function mostrarLogin() {
  clearMessages();
  document.getElementById('cadastroBox').classList.add('hidden');
  document.getElementById('loginBox').classList.remove('hidden');
}

function mostrarCadastro() {
  clearMessages();
  document.getElementById('loginBox').classList.add('hidden');
  document.getElementById('cadastroBox').classList.remove('hidden');
}

function clearMessages() {
  const cadastroError = document.getElementById('cadastroError');
  const cadastroSuccess = document.getElementById('cadastroSuccess');
  const loginError = document.getElementById('loginError');
  cadastroError.textContent = '';
  cadastroSuccess.textContent = '';
  loginError.textContent = '';
  cadastroError.classList.add('hidden');
  cadastroSuccess.classList.add('hidden');
  loginError.classList.add('hidden');
}

function cadastrar() {
  clearMessages();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('emailCadastro').value.trim();
  const senha = document.getElementById('senhaCadastro').value;
  const dataNascimento = document.getElementById('dataNascimento').value;

  const cadastroError = document.getElementById('cadastroError');
  const cadastroSuccess = document.getElementById('cadastroSuccess');


  if (!nome || !email || !senha || !dataNascimento) {
    cadastroError.textContent = 'Por favor, preencha todos os campos.';
    cadastroError.classList.remove('hidden');
    return;
  }


  const dataNascimentoObj = new Date(dataNascimento);
  const dataLimite = new Date('2012-12-31');
  if (isNaN(dataNascimentoObj.getTime())) {
    cadastroError.textContent = 'Data de nascimento inválida.';
    cadastroError.classList.remove('hidden');
    return;
  }
  if (dataNascimentoObj > dataLimite) {
    cadastroError.textContent = 'A data de nascimento deve ser anterior a 2013.';
    cadastroError.classList.remove('hidden');
    return;
  }


  let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
  const existeEmail = usuarios.some(u => u.email.toLowerCase() === email.toLowerCase());
  if (existeEmail) {
    cadastroError.textContent = 'Este e-mail já está cadastrado.';
    cadastroError.classList.remove('hidden');
    return;
  }


  usuarios.push({
    nome: nome,
    email: email,
    senha: senha,
    dataNascimento: dataNascimento
  });
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  cadastroSuccess.textContent = 'Cadastro realizado com sucesso! Agora você pode fazer login.';
  cadastroSuccess.classList.remove('hidden');


  document.getElementById('cadastroForm').reset();


  setTimeout(() => {
    mostrarLogin();
  }, 1500);
}

function logar() {
  clearMessages();
  const email = document.getElementById('emailLogin').value.trim();
  const senha = document.getElementById('senhaLogin').value;

  const loginError = document.getElementById('loginError');

  if (!email || !senha) {
    loginError.textContent = 'Por favor, preencha os campos de e-mail e senha.';
    loginError.classList.remove('hidden');
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');


  const usuario = usuarios.find(u => u.email.toLowerCase() === email.toLowerCase() && u.senha === senha);

  if (!usuario) {
    loginError.textContent = 'E-mail ou senha incorretos.';
    loginError.classList.remove('hidden');
    return;
  }


  window.location.href = 'templates/home.html';
}


window.onload = function() {
  const dataNascimentoInput = document.getElementById('dataNascimento');
  const dataMaxima = new Date('2012-12-31').toISOString().split('T')[0];
  dataNascimentoInput.setAttribute('max', dataMaxima);
};
