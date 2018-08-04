function Queue() {
    this.queue = [];
}

Queue.prototype.enqueue = function(val) {
    this.queue.push(val);
}

Stack.prototype.dequeue = function() {
    return this.queue.shift();
}

Stack.prototype.length = function() {
    return this.queue.length;
}