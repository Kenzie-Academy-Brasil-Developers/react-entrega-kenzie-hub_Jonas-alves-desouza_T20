import { useContext, useState } from "react"
import { Button } from "../../Button"
import { TechnologyContext } from "../../../../providers"
import { EditTechModal } from "../../modals/EditTechModal"

export const TechCard = ({ tech }) => {
    const [ isOpen, setIsOpen ] = useState(false)
    const { setEditTech, techDelete } = useContext(TechnologyContext)

    return(
        <li>
            <div>
                <h4 className="title" >{tech.title}</h4>
                <p className="paragraph light">{tech.status}</p>
                <div>
                    <Button 
                        className="paragraph light"
                        onClick={()=> {

                            setIsOpen(true)
                            return setEditTech(tech)
                        }}
                    >
                        Editar
                    </Button>
                    <Button 
                        className="paragraph light"
                        onClick={() => techDelete(tech.id)}
                    >
                        Deletar
                    </Button>
                </div>
            </div>
            {
                isOpen ? <EditTechModal  
                    setIsOpen={setIsOpen}
                /> : null
            }
        </li>
    )
}