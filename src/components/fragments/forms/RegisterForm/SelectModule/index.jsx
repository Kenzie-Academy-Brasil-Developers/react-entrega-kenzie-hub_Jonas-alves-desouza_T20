export const SelectModule = ({register, label}) => {
    return(
        <div>
            <label className='typoLabel label'>{label}</label>
            <div>
                <select 
                    className='typoInput register'
                    name='module' 
                    id='module' 
                {...register('course_module') } 
                >
                    <option value='primeiro  módulo'>primeiro  módulo</option>
                    <option value='segundo  módulo'>segundo  módulo</option>
                    <option value='terceiro  módulo'>terceiro  módulo</option>
                    <option value='quarto  módulo'>quarto  módulo</option>
                    <option value='qauinto  módulo'>qauinto  módulo</option>
                </select>
            </div>
        </div>
    )
}
