
var FreqStack = function() {
    this.freqStack = [];
    this.freqMap = {};
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    this.freqMap[x] = this.freqMap[x] ? this.freqMap[x] + 1 : 1;
    const freq = this.freqMap[x];
    if (this.freqStack.length < freq) {
        this.freqStack.push([x]);
    } else {
        this.freqStack[freq-1].push(x);
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    const lastPart = this.freqStack[this.freqStack.length - 1];
    const result = lastPart.pop();
    if (lastPart.length === 0) {
        this.freqStack.pop();
    }
    this.freqMap[result] -= 1;
    return result;
};