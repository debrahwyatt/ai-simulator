export const CreateNode = (input: [], output: []) => {
    let node = {
        "value": 0,
        "capacity": 0,
        "input_list": input,
        "output_list": output
    }
    return node
  }

  export const stdRnd = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1 ) + min)
  }

  export const boardRnd = (boardSize: number) => {
    return [stdRnd(boardSize-1, 0), stdRnd(boardSize-1, 0)]
  }


