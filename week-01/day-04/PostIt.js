class PostIt {
    constructor(backgroundColor, text, textColor) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

module.expoerts = PostIt;

// examples 
p1 = new PostIt('orange', 'Idea 1', 'blue');
p2 = new PostIt('pink', 'Awesome', 'black');
p3 = new PostIt('yellow', 'Superb!', 'green');

console.log(p1);
console.log(p2);
console.log(p3);