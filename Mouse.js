function Mouse(name){
    this.name = name;
    this.isDead = false;
}

Mouse.prototype.die = () => {
    this.isDead = true;
}

module.exports = Mouse;