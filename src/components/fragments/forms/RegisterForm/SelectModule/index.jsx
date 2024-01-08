import { Select } from '../../..'

export const SelectModule = ({register, label}) => {
    return(
        <div>
            <label className='typoLabel label'>{label}</label>
            <div>
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
            </div>
        </div>
    )
}
