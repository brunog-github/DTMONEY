import logo from '../../assets/logo.svg'
import { Container, Content } from './style'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="dtmoney"/>

                <button type='button'>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}