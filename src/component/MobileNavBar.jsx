import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { GrNotes } from 'react-icons/gr';
import { BsCalendar3 } from 'react-icons/bs';

function MobileNavBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full p-4 md:hidden bg-white rounded-t-lg shadow-lg flex justify-around items-center">
      <a href="Accueil" className="focus:outline-none flex flex-col items-center">
        <AiOutlineHome className="text-2xl" />
        <span className="text-sm">Accueil</span>
      </a>
      <a href="Contact" className="focus:outline-none flex flex-col items-center">
        <GrNotes className="text-2xl" />
        <span className="text-sm">Contact</span>
      </a>
      <a href="Rdv" className="focus:outline-none flex flex-col items-center">
        <BsCalendar3 className="text-2xl" />
        <span className="text-sm">Rdv</span>
      </a>
    </div>
  );
}

export default MobileNavBar;

