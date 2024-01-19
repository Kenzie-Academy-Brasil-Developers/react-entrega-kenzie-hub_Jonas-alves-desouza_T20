import { forwardRef } from 'react'

export const SelectLevelTech = forwardRef(({ label, errors, ...rest }, ref) => {
    return(
        <div>
            <label className='typoLabel label'>{label}</label>
            <div>
                <select 
                    className='typoInput register'
                    name='module' 
                    id='module'
                    ref={ref}
                    {...rest}
                >
                    <option value='iniciante'>
                        Iniciante
                    </option>
                    <option value='Intermediario'>
                        Intermediario
                    </option>
                    <option value='Avancado'>
                        Avancado
                    </option>
                </select>
                { errors ? <p className='alert'>{errors.message}</p> : null } 
            </div>
        </div>
    )
})
