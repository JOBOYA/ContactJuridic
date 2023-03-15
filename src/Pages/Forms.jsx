import React, { useEffect, useState, useLayoutEffect } from 'react';
import Typewriter from 'react-typewriter'; // Importez Typewriter

import { BsArrowUpSquare } from 'react-icons/bs';
import Logo from '../assets/img1.png';


const HomePage = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);




  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleClick = () => {
    setShowForm(!showForm);
  };


  return (

    <>
      {isLoading ? (
        <div className="loader-container">
          <div className="loader" />
        </div>
      ) : (
        <>

<div
  onClick={scrollToTop}
  style={{
    display: showArrow ? "block" : "none",
    position: "fixed",
    bottom: "20px",
    opacity: "0.7",
    right: "15px",
    zIndex: "100",
    cursor: "pointer",
    top: "50%",
  }}
>
  <BsArrowUpSquare style={{ fontSize: "2rem", color: "#333" }} />
</div>

          <div className="header">
            <img src={Logo} alt="logo" id="img1" className="header-img" />
            <h1 className="header-text title">
              Choisir sa forme juridique <br />
              en 2 minutes!
            </h1>
          </div>
          <div
      className="main-container"
      style={{ minHeight: "70vh", overflowY: "auto" }}>


            <Typewriter
              typing={1}
              speed={500} // Augmentez ou diminuez cette valeur pour régler la vitesse de frappe
              onTypingDone={() => console.log('Typing done!')}
            >
              <h2>
                Vous souhaitez créer votre entreprise mais vous ne savez pas quelle
                forme juridique choisir? Grace à ce simulateur, vous saurez quelle
                forme juridique est la plus adaptée à votre activité, à votre
                situation personnelle et à vos besoins ! Petit bonus, possibilité
                d'avoir le budget prévisionnel de la forme juridique la mieux adapté
                pour les banques!
              </h2>
            </Typewriter>
           
          <br />
          <div className="button-container">
  <button className="button" onClick={handleClick}>
    Commencer la Simulation
  </button>
              </div>
              </div>

          {showForm && (
            <div className="box">




              <br />
              <br />

              <div className="input-container ">
                <label htmlFor="name" className="input-label">Votre Activité</label>
                <input type="text" placeholder="Activité" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} />
                <br />
                <br />
                <p>Votre Chiffre d'affaires annuel</p>
                <input type="text" placeholder="Chiffre d'affaires annuel" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} />
                <br />
                <br />
                <label htmlFor="name" className="input-label">Avez-vous une location professionnelle? Si oui, pour quel montant annuel?</label>
                <input type="text" placeholder="Avez-vous une location professionnelle? Si oui, pour quel montant annuel?" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} />
                <br />
                <br />
                <label htmlFor="name" className="input-label">Présence de salarié oui ou non</label>
                <input type="text" placeholder="Présence de salarié oui ou non" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} />
                <br />
                <br />
                <label htmlFor="name" className="input-label">Indiquez le nombre de salarié</label>
                <input type="text" placeholder="Indiquez le nombre de salarié" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} />
                <br />
                <br />
                <label htmlFor="name" className="input-label">Salaire brut mensuel Salarié 1</label>
                <input type="text" placeholder="Salaire brut mensuel Salarié 1" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} />
                <br />
                <br />
                <label htmlFor="name" className="input-label">Votre rémunération net mensuel (ou retrait personnel mensuel)</label>
                <input type="text" placeholder="Votre rémunération net mensuel (ou retrait personnel mensuel)" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} />
                <br />
                <br />
                <label htmlFor="name" className="input-label">Investissement : matériels Indiquez le montant</label>
                <input type="text" placeholder="Investissement : matériels Indiquez le montant" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} />
                <br />
                <br />
                <label htmlFor="name" className="input-label">Investissement: véhicule</label>
                <input type="text" placeholder="Investissement: véhicule" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} />
                <br />
                <br />
                <label htmlFor="name" className="input-label">Indiquez le nombre de Véhicule de tourisme (VP)</label>
                <input type="text" placeholder="Indiquez le nombre de Véhicule de tourisme (VP)" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} />
                <br />
                <br />
                <label htmlFor="name" className="input-label">Indiquez le nombre de Véhicule utilitaire (VU)</label>
                <input type="text" placeholder="Indiquez le nombre de Véhicule utilitaire (VU)" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} />
                <br />
                <br />
                <label htmlFor="name" className="input-label">Indiquez le prix du VP 1</label>
                <input type="text" placeholder="Indiquez le prix du VP 1" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} />
                <br />
                <br />
                <label htmlFor="name" className="input-label">Indiquez le taux d'émission de CO2 VP 1</label>
                <input type="text" placeholder="Indiquez le taux d'émission de CO2 VP 1" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} />
                <br />
                <br />
              </div>


            </div>
          )}
        </>
      )}
    </>
  );
};

export default HomePage;