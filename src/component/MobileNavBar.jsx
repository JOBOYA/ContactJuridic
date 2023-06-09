import React from 'react';
import classNames from 'classnames';
import { AiOutlineHome } from 'react-icons/ai';
import { GrNotes } from 'react-icons/gr';
import { BsCalendar3 } from 'react-icons/bs';

function MobileNavBar() {
  const neumorphismClass = classNames(
    'bg-white',
    'rounded',
    'p-2',
    'shadow',
    'transition-all',
    'duration-300',
    'ease-in-out'
  );

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 md:hidden bg-white rounded-t-3xl shadow-lg flex justify-around z-50">
      <a href="Accueil" className="focus:outline-none flex flex-col items-center">
        <div className={neumorphismClass}>
          <AiOutlineHome className="text-2xl" />
        </div>
        <span className="text-sm">Accueil</span>
      </a>
      <a href="Contact" className="focus:outline-none flex flex-col items-center">
        <div className={neumorphismClass}>
          <GrNotes className="text-2xl" />
        </div>
        <span className="text-sm">Contact</span>
      </a>
      <a href="Rdv" className="focus:outline-none flex flex-col items-center">
        <div className={neumorphismClass}>
          <BsCalendar3 className="text-2xl" />
        </div>
        <span className="text-sm">Rdv</span>
      </a>
    </div>
  );
}

export default MobileNavBar;
