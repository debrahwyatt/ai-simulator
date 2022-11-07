export class Object {
    location: number[];
   
    constructor(location: number[]) {
      this.location = location;
    }
   
    X() { return this.location[0]; }
    Y() { return this.location[1]; }
  }


  export class Food extends Object {
    value: number;

    constructor(val: number, loc: number[]) {
      super(loc);
      this.value = val;
    }
  }
  

  export class Animal extends Object {
      value: number;

      constructor(val: number, loc: number[]) {
        super(loc);
        this.value = val;
      }

      isInBounds(left: number[]) {
        return true
      }
      MoveLeft() {
        const left = [this.location[0], this.location[1]-1]
        if(this.isInBounds(left)) this.location = [this.location[0], this.location[1]-1]
      }
      // MoveRight() {
      //   this.location = [this.location[0], this.location[1]+1]
      // }
  }
   
  //////////////////////////////////////////////////