import { DefaultTemplade } from '../../components/DefaultTemplade'

export const UserPage = ({user, userlogout}) => {
    return(
        <>
            <DefaultTemplade userlogout={userlogout}>
                <div>
                    <div>
                        <h2>Ola, {user?.name}</h2>
                        <p>{user?.course_module}</p>
                    </div>
                    <div>
                        <h3>Que pena! Estamos em desenvolvimento :(</h3>
                        <p>Nossa aplicacao esta em desenvolvimento, em breve teremos novidades</p>
                    </div>
                </div>
            </DefaultTemplade>
        </>
    )
}