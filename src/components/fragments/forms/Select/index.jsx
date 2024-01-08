import { forwardRef } from 'react'

export const Select = forwardRef(({children, error , ...rest}, ref)=>{
    return(
        <select ref={ref} rest={rest} >
            {children}
        </select>
    )
})