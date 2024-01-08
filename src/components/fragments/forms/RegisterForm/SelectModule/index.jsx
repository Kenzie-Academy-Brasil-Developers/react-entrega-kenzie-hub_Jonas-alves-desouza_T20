import { Select } from '../../..'

export const SelectModule = ({register}) => {
    return(
        <Select  
        name='module' 
        id='module' 
        {...register('course_module') } 
        >
            <option value='primeiro modulo'>primeiro modulo</option>
            <option value='segundo modulo'>segundo modulo</option>
            <option value='terceiro modulo'>terceiro modulo</option>
            <option value='quarto modulo'>quarto modulo</option>
            <option value='qauinto modulo'>qauinto modulo</option>
        </Select>
    )
}
