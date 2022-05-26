/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b)
    }
    
    const stack = []
    const op = '/*-+'
    
    tokens.forEach(token => {
        if (op.includes(token)) {
            const b = stack.pop()
            const a = stack.pop()
            
            stack.push(operations[token](a, b))
        } else {
            stack.push(+token)
        }
    })
    return stack.pop()
};