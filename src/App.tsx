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


  console.log(board)
  let table2 = <div></div>

  let table = 
    <table>
      {table2}
    </table>

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* {table} */}
        </div>
      </header>
    </div>
  );
}

export default App;
