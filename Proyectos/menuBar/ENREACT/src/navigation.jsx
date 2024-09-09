import { useState } from 'react';
import './styles.css';

const Navigation = () => {
  // Estado inicial para mantener el índice del elemento activo
  const [activeIndex, setActiveIndex] = useState(0); // El primer ítem (Home) está activo por defecto
  const [isOpen, setIsOpen] = useState(false);

  // Maneja la activación de elementos del menú usando el índice del atributo data-index
  const handleNavClick = (index) => {
    setActiveIndex(index);
  };

  // Maneja la activación del menú toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Lista de ítems del menú
  const navItems = [
    { text: 'Home', iconName: 'home-outline' },
    { text: 'Usuario', iconName: 'person-outline' },
    { text: 'Chat', iconName: 'chatbox-outline' },
    { text: 'Photos', iconName: 'images-outline' },
    { text: 'Settings', iconName: 'settings-outline' },
  ];

  return (
    <header className={`header ${isOpen ? 'open' : ''}`}>
      <div className="menuToggle" onClick = {toggleMenu}></div>
      <nav className="nav">
        <ul className="main-nav">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`main-nav__item ${activeIndex === index ? 'active' : ''}`}
              data-index={index}
              onClick={() => handleNavClick(index)}
            >
              <a className="main-nav__link" href="#">
                <span className="icon">
                  <ion-icon name={item.iconName}></ion-icon>
                </span>
                <span className="text">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

 //  // Estado para manejar qué botón está activo
  //  const [activeIndex, setActiveIndex] = useState(0);
  //  const [isOpen, setIsOpen] = useState(false);
 
  //  // Maneja la activación de elementos del menú
  //  const handleNavClick = (index) => {
  //    setActiveIndex(index);
  //  };
 
  //  // Maneja la activación del menú toggle
  //  const toggleMenu = () => {
  //    setIsOpen(!isOpen);
  //  };
 
  //  return (
  //    <header className={`header ${isOpen ? 'open' : ''}`}>
  //      <div className="menuToggle" onClick={toggleMenu}></div>
  //      <nav className="nav">
  //        <ul className="main-nav">
  //          {['Home', 'Usuario', 'Chat', 'Photos', 'Settings'].map((text, index) => (
  //            <li
  //              key={index}
  //              className={`main-nav__item ${activeIndex === index ? 'active' : ''}`}
  //              onClick={() => handleNavClick(index)}
  //            >
  //              <a className="main-nav__link" href="#">
  //                <span className="icon">
  //                  <ion-icon name={`${text.toLowerCase()}-outline`}></ion-icon>
  //                </span>
  //                <span className="text">{text}</span>
  //              </a>
  //            </li>
  //          ))}
  //        </ul>
  //      </nav>
  //    </header>
  //  );
   

 export default Navigation