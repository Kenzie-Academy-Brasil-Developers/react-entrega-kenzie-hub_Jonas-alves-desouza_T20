import { useContext } from "react"
import { UserContext } from "../../../providers"
import { Button } from "../Button"
import { TechCard } from "./TechCard"

export const ListTechology = ({ setIsOpen }) => {
    const { user } = useContext(UserContext)

    return(
        <div>
            <div>
                <h3 className='title'>Tecnologias</h3>
                <Button onClick={ () => setIsOpen(true)} className='typoButton smallerLetter center button smaller'>+</Button>
            </div> 
            <div>
                <ul>
                    {
                        user.techs.map(tech => (
                            <TechCard 
                            key={tech.id} 
                            tech={tech}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}