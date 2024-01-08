import { Button } from "../fragments"

export const Header = ({userlogout}) => {
    return(
        <header>
            <div>
                <h1>Logo aqui...</h1>
                <Button onClick={userlogout} >
                    Sair
                </Button>
            </div>
        </header>
    )
}