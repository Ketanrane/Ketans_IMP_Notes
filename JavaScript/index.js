function houseKeeper(name, yearOfExp, cleaningRepositories){
    this.name = name;
    this.yearOfExp = yearOfExp;
    this.cleaningRepositories = cleaningRepositories;
}

var houseKeeper1 = new houseKeeper("Tommy", 8 , ["Lobby","Bathroom"]);

console.log(houseKeeper1.cleaningRepositories);


