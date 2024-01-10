class superHero{
    constructor(name){
        this.name = name;
    }
    setName(name){
        this.name = name 
    }
    getName(){
        return this.name;
    }
}

module.exports = new superHero("Batman")
// we can also export only class instead of an instance
// module.exports = superHero