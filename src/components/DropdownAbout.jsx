import React, { useState } from 'react'
import "./DropdownAbout.scss"
import dataAbout from "../dataAbout.json";

console.log(dataAbout)

function DropdownAbout() {

    const [isContentVisible, setContentVisible] = useState(false);
    const visible = () =>{
        setContentVisible(!isContentVisible)
    }

  return (
    <div>
        <div className='mainAbout'>
            <article className='dropdown'>
                <div className='dropdownTitle'>
                    <h3>Fiabilité</h3>
                    <img src="src\assets\chevron-up-solid.svg" alt="dropdown" className={`chevron ${isContentVisible ? "rotate" : ""}`} onClick={visible}/>
                </div>
                { isContentVisible &&
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </p>
                }
            </article>
            <article className='dropdown'>
                <div className='dropdownTitle'>
                    <h3>Respect</h3>
                    <img src="src\assets\chevron-up-solid.svg" alt="dropdown" onClick={visible}/>
                </div>
                { isContentVisible &&
                    <p>
                        La bienveillance fait partie des valeurs fondatrice de Kase.
                        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platforme.
                    </p>
                }
            </article>
            <article className='dropdown'>
                <div className='dropdownTitle'>
                    <h3>Service</h3>
                    <img src="src\assets\chevron-up-solid.svg" alt="dropdown" onClick={visible}/>
                </div>
                { isContentVisible &&
                    <p>
                        La qualité du service est au coeur de notre engagement chez Kasa. 
                        Nous veillons à ce que chaque interaction, que ce soit avec nos hôte ou nos locataires, soit empreinte de respect et de bienveillance.
                    </p>
                }
            </article>
            
            <article className='dropdown'>
                <div className='dropdownTitle'>
                    <h3>Sécurité</h3>
                    <img src="src\assets\chevron-up-solid.svg" alt="dropdown" onClick={visible}/>
                </div>
                { isContentVisible &&
                    <p>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageur, chaque logement correspond aux critère de sécurité établis par nos services. 
                        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
                        Nous organisons également des ateliers sur la sécurité domestique pour les hôtes.
                    </p>
                }
            </article>
        </div>
    </div>
  )
}

export default DropdownAbout