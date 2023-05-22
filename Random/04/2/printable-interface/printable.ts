interface Printable {
    printAllFields(): void;
}

class Domino implements Printable {
    sideA: number;
    sideB: number;

    constructor(sideA: number, sideB: number) {
        this.sideA = sideA;
        this.sideB = sideB;
    }

    printAllFields(): void {
        console.log('Side A:', this.sideA, 'Side B', this.sideB);
    }
}

class ToDo implements Printable {
    task: string;
    priority: string;
    isDone: boolean;

    constructor(task: string, priority: string, isDone: boolean) {
        this.task = task;
        this.priority = priority;
        this.isDone = isDone;
    }

    printAllFields(): void {
        console.log('Task:', this.task, 'Priority:', this.priority, 'Done:', this.isDone);
    }
}

let dominoes: Domino[] =[new Domino(1, 6), new Domino(1, 2), new Domino(3, 4), new Domino(5, 6)];

let toDos: ToDo[] =[new ToDo('Buy milk', 'low', false), new ToDo('Send documents', 'high', false), new ToDo('Clean car', 'medium', true)];

for (let domino of dominoes) {
    domino.printAllFields();
  }
  
  for (let todo of toDos) {
    todo.printAllFields();
  }