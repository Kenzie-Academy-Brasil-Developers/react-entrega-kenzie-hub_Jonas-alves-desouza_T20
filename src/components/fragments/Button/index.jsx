import { forwardRef } from 'react'

export const Button = forwardRef(({children, ...rest }, ref) => {
    return(
        <div>
            <button ref={ref} {...rest}>
                {children}
            </button>
        </div>
    )
})