import React from 'react';

function Login() {
  return (
    <div className="common-background">
      <h1>Iniciar sesión</h1>
    <div className="form-container">
      <form>
        <label>
          Usuario:
        </label>
        <div className="input-container">
          <input type="text" name="username" required />
        </div>
        <label>
          Contraseña:
        </label>
        <div className="input-container">
          <input type="password" name="password" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
    </div>
  );
}

export default Login; 