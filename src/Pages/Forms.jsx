import React, { useEffect, useState, useLayoutEffect } from 'react';
import Typewriter from 'react-typewriter'; // Importez Typewriter
import AnnualRevenueSlider from '../component/annualRevenueSlider';
import { BsArrowUpSquare } from 'react-icons/bs';
import Logo from '../assets/img1.png';
import Card from '../component/cards';


const HomePage = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [presence, setPresence] = useState('');
  const [presence1, setPresence1] = useState('');
  const [investissement, setInvestissement] = useState('');
  const [showInputs, setShowInputs] = useState(false);
  const [numEmployees, setNumEmployees] = useState(0);

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

  const handlePresenceChange = (e) => {
    setPresence(e.target.value);
    setPresence1(e.target.value);

    if (e.target.value.toLowerCase() === 'oui') {
      setShowInputs(true);
    } else {
      setShowInputs(false);
    }
  };

  const handleNumEmployeesChange = (e) => {
    setNumEmployees(e.target.value);
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
            <BsArrowUpSquare style={{ fontSize: "3rem", color: "#000", padding: "10px", borderRadius: "50%", backgroundColor: "#fff", boxShadow: "0 0 10px #000" }} />
          </div>

          <div className="header">
            <img src={Logo} alt="logo" id="img1" className="header-img" />
            <h1 className="header-text title">
                Choisir la meilleur forme juridique<br />
                la plus adaptée à votre projet !
            
            </h1>

          </div>
          
          <div className="main-container  p-6 bg-white shadow-xl rounded-lg max-w-sm mx-auto text-center mt-10 mb-10 absolute inset-x-0 top-60
             hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
            ">
    <Typewriter
      typing={1}
      speed={500}
      onTypingDone={() => console.log('Typing done!')}
    >
      <h2>
        Vous souhaitez créer votre entreprise mais vous ne savez pas quelle
        forme juridique choisir? Grace à ce simulateur, vous saurez quelle
        forme juridique est la plus adaptée à votre activité, à votre
        situation personnelle et à vos besoins ! Petit bonus, possibilité
        d'avoir le budget prévisionnel de la forme juridique la mieux adaptée!
      </h2>
    </Typewriter>
  </div>



            <br />
            
            <Card />
            
          <div className="button-container" style={{ height: "50vh", overflowY: "auto" }}>
            <button className="button" onClick={handleClick}>
              Commencer la Simulation
            </button>
          </div>




          {showForm && (
            <div className="box">




              <br />
              <br />

              <div className="input-container ">
                <label htmlFor="name" className="input-label">Votre Activité</label>
                <select id="activity" name="activity" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }}>

                  <option value="artisan">ARTISAN</option>
                  <option value="commercant">COMMERCANT</option>
                  <option value="consultant">CONSULTANT</option>
                  <option value="liberal">LIBERAL</option>
                </select>

                <br />
                <br />
                <p>Votre Chiffre d'affaires annuel</p>
                <AnnualRevenueSlider />
                <br />
                <br />
                <label htmlFor="name" className="input-label">Avez-vous une location professionnelle? Si oui, pour quel montant annuel?</label>
                <input type="text" placeholder="Avez-vous une location professionnelle? Si oui, pour quel montant annuel?" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} />
                <br />
                <br />
                <label htmlFor="name" className="input-label">Présence de salarié</label>
                <select id="invertissement" name="investissement" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} onChange={handlePresenceChange} value={presence}>
                  <option value="">Selectionner</option>
                  <option value="oui">OUI</option>
                  <option value="non">NON</option>
                </select>
                <br />
                <br />
                {showInputs && (
                  <>
                    <label htmlFor="name" className="input-label">Indiquez le nombre de salarié</label>
                    <input type="number" placeholder="Indiquez le nombre de salarié" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} required onChange={handleNumEmployeesChange} value={presence1} />
                    <br />
                    <br />
                    {Array.from({ length: numEmployees }, (_, i) => (
                      <div key={`employee${i + 1}`}>
                        <label htmlFor={`employee${i + 1}`} className="input-label">
                          Salaire brut mensuel Salarié {i + 1}
                        </label>
                        <input
                          type="number"
                          id={`employee${i + 1}`}
                          name={`employee${i + 1}`}
                          placeholder={`Salaire brut mensuel Salarié ${i + 1}`}
                          style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }}
                          required

                        />
                      </div>
                    ))}
                    <br />
                    <br />
                  </>
                )}
                <label htmlFor="name" className="input-label">Votre rémunération net mensuel (ou retrait personnel mensuel)</label>
                <input type="number" placeholder="Votre rémunération net mensuel (ou retrait personnel mensuel)" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} required />
                <br />
                <br />
                <label htmlFor="name" className="input-label">Investissement : matériels Indiquez le montant</label>
                <input type="number" placeholder="Investissement : matériels Indiquez le montant" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} required />
                <br />
                <br />
                <label htmlFor="name" className="input-label">Investissement: véhicule</label>
                <select id="invertissement" name="investissement" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} onChange={(e) => setInvestissement(e.target.value)} value={investissement}>
                  <option value="">Selectionner</option>
                  <option value="oui">OUI</option>
                  <option value="non">NON</option>
                </select>
                {investissement === 'oui' && (
                  <>

                    <br />
                    <br />
                    <label htmlFor="name" className="input-label">Indiquez le nombre de Véhicule de tourisme (VP)</label>
                    <input type="text" placeholder="Indiquez le nombre de Véhicule de tourisme (VP)" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} required />
                    <br />
                    <br />
                    <label htmlFor="name" className="input-label">Indiquez le nombre de Véhicule utilitaire (VU)</label>
                    <input type="text" placeholder="Indiquez le nombre de Véhicule utilitaire (VU)" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} required />
                    <br />
                    <br />
                    <label htmlFor="name" className="input-label">Indiquez le prix du VP 1</label>
                    <input type="text" placeholder="Indiquez le prix du VP 1" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} required />
                    <br />
                    <br />
                    <label htmlFor="name" className="input-label">Indiquez le taux d'émission de CO2 VP 1</label>
                    <input type="text" placeholder="Indiquez le taux d'émission de CO2 VP 1" style={{ backgroundColor: 'rgba(75, 0, 130, 0.1)', height: '40px' }} required />
                  </>
                )}
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