import React, { useState } from "react";

function Cookies() {
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  const handleAcceptCookies = () => {
    setAcceptedCookies(true);
  };

  const handleRejectCookies = () => {
    setAcceptedCookies(true);
  };

  return (
    <div className={`backdrop fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm ${acceptedCookies ? "hidden" : ""}`}>
      <div className="cookies-banner bg-white rounded-lg p-6 shadow-lg max-w-sm mx-auto text-center">
        <p className="text-gray-700">Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à utiliser notre site, vous acceptez notre utilisation des cookies.</p>
        <div className="mt-4 flex justify-between">
          <button className="bg-gray-800 text-white rounded-md py-2 px-4 hover:bg-gray-900 mr-2" onClick={handleAcceptCookies}>Accepter</button>
          <button className="bg-gray-200 text-gray-700 rounded-md py-2 px-4 hover:bg-gray-300" onClick={handleRejectCookies}>Refuser</button>
        </div>
      </div>
    </div>
  );
}

export default Cookies;
