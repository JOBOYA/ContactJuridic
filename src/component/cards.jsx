import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Card = () => {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const cardRef4 = useRef(null);

  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(cardRef1.current, {
          scrollTrigger: {
              trigger: cardRef1.current,
              start: "top center",
              end: "bottom center",
              scrub: 1,
              toggleActions: "play none none reverse",
          },
          x: 100,
          opacity: 0,
          duration: 1,
      });
      gsap.from(cardRef2.current, {
          scrollTrigger: {
              trigger: cardRef2.current,
              start: "top center",
              end: "bottom center",
              scrub: 1,
              toggleActions: "play none none reverse",
          },
          x: -100,
          opacity: 0,
          duration: 1,
      });
      gsap.from(cardRef3.current, {
          scrollTrigger: {
              trigger: cardRef3.current,
              start: "top center",
              end: "bottom center",
              scrub: 1,
              toggleActions: "play none none reverse",
          },
          x: 100,
          opacity: 0,
          duration: 1,
      });
      gsap.from(cardRef4.current, {
          scrollTrigger: {
              trigger: cardRef4.current,
              start: "top center",
              end: "bottom center",
              scrub: 1,
              toggleActions: "play none none reverse",
          },
          x: -100,
          opacity: 0,
          duration: 1,
      });
  }, []);
    
    const cardStyle = {
        transform: "translateY(0px)",
        opacity: 1,
    };

    
    
    return (
        <div className="cards" >
        <div className="p-10 card__grid place-items-center  place-content-center min-h-screen">

            <div className="card--1 bg-white shadow-xl rounded-3xl max-w-xs pt-4 pb-8 px-4" ref={cardRef1} style={cardStyle}>
                <div className="w-full h-64">
                    <img class="w-full h-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Antelope Canyon" />
                </div>

                <div>
                    <h2 className="capitalize font-semibold text-xl mt-3 mb-2 text-gray-900">Micro entrepreneur</h2>
                    <p className="text-gray-400 flex justify-between items-center">Micro<span class="flex items-center"><svg class="w-5 h-5 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>5.0</span></p>
                </div>

            </div>
            <div className="card--2 flex items-center bg-white shadow-xl rounded-3xl w-80 p-4" ref={cardRef2} style={cardStyle}>
                <div className="w-20 h-20">
                    <img src="https://media.istockphoto.com/id/1219954365/fr/photo/ing%C3%A9nieur-r%C3%A9ussi-retenant-le-plan-et-regardant-loin.jpg?s=612x612&w=0&k=20&c=GxqHMgEtqG8S1xykrTpX1b0dpCLviPlFJKMsTaXbs-s=" alt="Elise Doe" className="rounded-2xl object-cover w-full h-full" />
                </div>
                <div className="ml-4">
                    <h2 className="text-lg text-gray-900 font-semibold capitalize">Entreprise Individuelle</h2>
                    <p className="text-gray-400 mt-1 mb-2">EI</p>
                    <ul className="flex">
                        <li>
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></li>
                        <li><svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></li>
                        <li><svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></li>
                        <li><svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></li>
                        <li><svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></li>
                    </ul>
                </div>
            </div>

            <div className="card--3 bg-white shadow-xl rounded-3xl max-w-xs pt-4 pb-8 px-4" ref={cardRef3} style={cardStyle}>
                <div className="w-full h-64">
                    <img class="w-full h-full object-cover rounded-2xl" src="https://media.istockphoto.com/id/878964506/fr/photo/jeune-femme-salari%C3%A9e-dans-latelier-de-charpentier.jpg?s=612x612&w=0&k=20&c=N3HOlCzJgyDaX7jhQe7MRzk7EjiSQU-PgRgIYbiuz0I=" alt="Galaxy Abstract Paint" />
                </div>

                <div>
                    <h2 className="capitalize font-semibold text-xl mt-3 mb-2 text-gray-900">Société À Responsabilité Limitée</h2>
                    <p className="text-gray-400 flex justify-between items-center">SAS<span class="flex items-center"><svg class="w-5 h-5 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>5.0</span></p>
                </div>

            </div>
            <div className="card--4 flex items-center bg-white shadow-xl rounded-3xl w-80 p-4" ref={cardRef4} style={cardStyle}>
                <div className="w-20 h-20">
                    <img src="https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbGN1bGF0cmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="John Doe" className="rounded-2xl object-cover w-full h-full" />
                </div>
                <div className="ml-4">
                    <h2 className="text-lg text-gray-900 font-semibold capitalize">Société par Action Simplifiés</h2>
                    <p className="text-gray-400 mt-1 mb-2">Artist</p>
                    <ul className="flex">
                        <li>
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></li>
                        <li><svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></li>
                        <li><svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></li>
                        <li><svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></li>
                        <li><svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></li>
                    </ul>
                </div>
            </div>
        </div>
</div>
    );
};






export default Card;
