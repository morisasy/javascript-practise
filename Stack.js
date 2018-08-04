function Stack() {
    this.stack = [];
}

Stack.prototype.push = function(val) {
    this.stack.push(val);
}

Stack.prototype.pop = function() {
    return this.stack.pop();
}

Stack.prototype.length = function() {
    return this.stack.length;
}
