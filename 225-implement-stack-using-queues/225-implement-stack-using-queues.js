var MyStack = function() {
    this.in = [];
    this.out = [];
};

MyStack.prototype.push = function(x) {
    const length = this.out.length;

    for (let i = 0; i < length; i++) {
        const next = this.out.pop();
        this.in.unshift(next);
    }

    this.out.unshift(x);

    for (let i = 0; i < length; i++) {
        const next = this.in.pop();
        this.out.unshift(next);
    }
};

MyStack.prototype.pop = function() {
    return this.out.pop();
};

MyStack.prototype.top = function() {
    return this.out[this.out.length - 1];
};

MyStack.prototype.empty = function() {
    return this.out.length === 0;
};