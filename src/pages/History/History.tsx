import { HistoryContainer, HistoryList, Status } from "./styles";

export function History(){
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa 1</td>
              <td>20 minutos</td>
              <td>há 20 minutos</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 2</td>
              <td>50 minutos</td>
              <td>há 2 dias</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 3</td>
              <td>20 minutos</td>
              <td>há 2 dias</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 4</td>
              <td>20 minutos</td>
              <td>há 2 dias</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr> 
            <tr>
              <td>Tarefa 5</td>
              <td>20 minutos</td>
              <td>há 2 dias</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}