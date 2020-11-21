const validateForm = ({ name, code, email, password }: ISignUp): void => {
  const EMAIL_FORMAT = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!name) throw new Error('Nome obrigatório.');
  if (!code) throw new Error('Código obrigatório.');
  if (!email) throw new Error('E-mail obrigatório.');
  if (!email.match(EMAIL_FORMAT)) throw new Error('E-mail inválido.');
  if (password.length < 6)
    throw new Error('A senha deve conter no mínimo 6 dígitos.');
};

export default validateForm;
