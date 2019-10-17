class Sharpie {
    constructor(color, width) {
        this.color = color;
        this.width = width;
        this.inkAmount = 100;
    }

    use() {
        this.inkAmount--;
    }
}

// examples
s = new Sharpie('black', '10');
s.use();
console.log(s.inkAmount);