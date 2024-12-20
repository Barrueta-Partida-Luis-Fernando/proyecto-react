import React from 'react';

function Contact() {
  return (
    <div className="common-background">
      <h1>Contáctanos</h1>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea name="message" required></textarea>
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact; 