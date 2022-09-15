import fs from "fs"


export class Storage {

    toDos: Todo[] = [];


    load() {
        let text: string = fs.readFileSync("./databank.txt", "utf-8");
        let lines: string[] = text.split('\n');


        lines.forEach((line) => {
            let todo = new Todo()
            todo.parse(line)
            this.toDos.push(todo)
        })
    }

    save() {
        let lines: string[] = [];
        this.toDos.forEach((todo) => {
            let line: string = todo.stringify();
            lines.push(line);
        })
        
        let text: string = lines.join('\n');
        fs.writeFileSync("./databank.txt", text, 'utf-8');
    }

    toggleComplete(index: any){
        this.toDos[index].completed = !this.toDos[index].completed;
    }

    add(title: string){
        let todo = new Todo()
        todo.title = title;
        this.toDos.push(todo);
    }

    delete(index: any){
        let fileContent: string = fs.readFileSync("./databank.txt", 'utf-8');
        let line: string[] = fileContent.split('\n')
        line.splice(index, 1);
    
        let text = line.join('\n');
        fs.writeFileSync("./databank.txt", text);
    }
}



class Todo {
    completed: boolean = false;
    title: string = '';

    parse(line: string) {
        if (line[1] === 'x') {
            this.completed = true;
        } else {
            this.completed = false;
        }

        this.title = line.slice(4)
    }

    stringify() {
        if (this.completed === true) {
            return `[x] ${this.title}`
        } else {
            return `[ ] ${this.title}`
        }
    }
}

