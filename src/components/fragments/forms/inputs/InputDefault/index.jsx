import { forwardRef } from 'react'

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
    return(

        <div>
            <label className='typoLabel' >{label}</label>

            <div>
                <input {...rest} ref={ref}/>
            </div>

            { error ? <p className='alert'>{error.message}</p> : null }        
        </div>
    )
})