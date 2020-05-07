const Dog = require('./Dog');
const Cat = require('./Cat');
const Mouse = require('./Mouse');

var cat = new Cat();
var mouse = new Mouse('jerry');
var dog = new Dog();

cat.eat(mouse);
try{
    cat.eat(dog);
}catch{
    console.log('Error while cat eating a dog');
}
console.log(cat);
