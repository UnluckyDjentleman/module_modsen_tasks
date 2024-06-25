class Book{
    constructor(title, author, releaseYear){
        this.title=title
        this.author=author;
        this.releaseYear=releaseYear
    }

    print(){
        return "\""+this.title+"\" was written by "+this.author+" in "+this.releaseYear; 
    }
}

class EBook extends Book{
    constructor(title, author, releaseYear, cost){
        super(title, author, releaseYear);
        this.cost=cost
    }
    print(){
        return super.print()+". It costs "+this.cost+"$ in Abby\'s shop."
    }
}

console.log(new Book('A Road Ahead','Bill Gates', 1995).print());
console.log(new EBook('A Road Ahead','Bill Gates', 1995, 2000).print());