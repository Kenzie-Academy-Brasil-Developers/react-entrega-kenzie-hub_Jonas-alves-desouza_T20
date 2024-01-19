import { forwardRef } from 'react'

export const SelectModule = forwardRef(({ label, errors, ...rest }, ref) => {
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
                    <option value='Primeiro modulo'>
                        Primeiro modulo
                    </option>
                    <option value='Segundo modulo'>
                        Segundo modulo
                    </option>
                    <option value='Terceiro modulo'>
                        Terceiro modulo
                    </option>
                    <option value='Quarto modulo'>
                        Quarto modulo
                    </option>
                    <option value='Quinto modulo'>
                        Quinto modulo
                    </option>
                    <option value='Sexto modulo'>
                        Sexto modulo
                    </option>
                    <option value='Oitavo modulo'>
                        Oitavo modulo
                    </option>
                    <option value='Nono modulo'>
                        Nono modulo
                    </option>
                    <option value='Decimo modulo'>
                        Decimo modulo
                    </option>
                </select>
                { errors ? <p className='alert'>{errors.message}</p> : null } 
            </div>
        </div>
    )
})
