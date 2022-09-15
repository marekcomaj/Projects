import fs from "fs"
import {Storage} from './storage'


let list = new Storage
list.load()


const args: string[] = process.argv.slice(2);

switch (args[0]) {
    case "-v": // print version
        console.log("1.0.0");
        break;
    case "-l": // Lists all the tasks
        list.toDos.forEach(function (todo, index) {
            console.log(`${index + 1} - ${todo.stringify()}` );
        })
        break;
    case "-a": // Adds a new task
        const addTask = args[1];
        list.add(addTask)
        list.save()
        break;
    case "-r": // Removes an task
        const del = args[1];
        list.delete(del)
        break;
    case "-c": // Completes an task
        const complete = args[1];
        list.toggleComplete(complete)
        list.save()
        break;
    case undefined:
        console.log(`Command Line Todo application \n`
            + `=============================\n`
            + `Command line arguments:\n`
            + `-l Lists all the tasks\n`
            + `-a Adds a new task\n`
            + `-r Removes an task\n`
            + `-c Completes an task`)
    default:
        console.error('Unsupported argument')
}
