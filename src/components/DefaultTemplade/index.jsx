import { Header } from '../Header'

export const DefaultTemplade = ({children, userlogout}) => {
    return(
        <>
            <Header userlogout={userlogout}/>
            <main>
                {children}
            </main>
        </>
    )
} 