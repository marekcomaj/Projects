class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;
  
    constructor(backgroundColor: string, text: string, textColor: string) {
      this.backgroundColor = backgroundColor;
      this.text = text;
      this.textColor = textColor;
    }
}

let PostOne = new PostIt('orange', 'Idea 1', 'blue');

let PostTwo = new PostIt('pink', 'Awesome', 'black');

let PostThree = new PostIt('yellow', 'Superb!', 'green');

console.log(PostTwo);