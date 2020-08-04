import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
        <img src="https://avatars1.githubusercontent.com/u/62895999?s=460&u=90819b38224622bceb1b6f55d1bde2dae94d469f&v=4" alt="Vinicius Santos"/>
        <div>
            <strong>Vinicius Santos</strong>
            <span>Fotografia</span>
        </div>
    </header>

    <p>
        Entusiasta das melhores fotografias do mundo!
        <br /><br /> 
        Apaixonado por cada clique em lugares totalmente exoticos, mais de 200.000 fotos ja foram para seu site.
    </p>

    <footer>
        <p>
            Preco/Hora
            <strong>R$40,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="WhatsApp"/>
            Entrar em contato.
        </button>
    </footer>
</article>
  );
}

export default TeacherItem;