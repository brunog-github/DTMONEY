import { Container } from "./style";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className='deposity'>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/08/21</td>
                    </tr>

                    <tr>
                        <td>Luz</td>
                        <td className='withdraw'>-R$1562,54</td>
                        <td>Gastos</td>
                        <td>15/08/21</td>
                    </tr>

                    <tr>
                        <td>Cartão</td>
                        <td className='withdraw'>-R$5481,00</td>
                        <td>Gastos</td>
                        <td>20/08/21</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}