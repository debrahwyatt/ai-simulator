import './App.css';
import './Classes/classes'
import { Animal, Food, Object } from './Classes/classes';
import { boardRnd, stdRnd } from './Functions/functions';


const App = () => {

  const place = (obj: Object) => {
    board[obj.location[0]][obj.location[1]].push(obj)
  }

  // Making the board, 
  const boardSize = 10
  const board: any[][] = []
  for(let i:number = 0; i < boardSize; i++) {
    board.push([] as any)
    for(let j:number = 0; j < boardSize; j++) {
      board[i].push([] as any)
    }
  }

  // Random Animal
  const animalsMax = 3;
  const animalsMin = 1;
  let animalCount = stdRnd(animalsMax, animalsMin)
  for(let i=0; i<animalCount; i++) place(new Animal(50, boardRnd(boardSize)))

  // Random Food 
  const foodMax = 2;
  const foodMin = 1;
  let foodCount = stdRnd(foodMax, foodMin)
  for(let i=0; i<foodCount; i++) place(new Food(100, boardRnd(boardSize)))

  let table_body = []
  for(let i=0; i<board.length; i++){
    const row = [];
    for(let j=0; j<board[0].length; j++){
      let space = board[i][j]
      let display = ""
      if(space.length > 0) {
        display = space[0].constructor.name
      }
      const cell = <td key={"cell"+i+j}>{display}</td>
      row.push(cell)
    }
    table_body.push(<tr key={"row"+i}>{row}</tr>)
  }

  let table = 
    <table>
      <tbody>
        {table_body}
      </tbody>
    </table>

  console.log(board)

  return (
    <div className="App">
      {table} 
    </div>
  );
}

export default App;
