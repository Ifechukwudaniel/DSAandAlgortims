/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const hash = (str) => {
    const array = new Array(26)
    array.fill(0, 0, array.length)
    for (const letter of str) {
        array[letter.charCodeAt(0) - 97] += 1
    }
    return array.join('#')
}

var groupAnagrams = function(strs) {
    const lists = new Map()
    for (const str of strs) {
        const h = hash(str)
        if (lists.has(h)) {
            const list = lists.get(h)
            list.push(str)
        } else {
            lists.set(h, [str])
        }
    }
    const solution = []
    for (const val of lists.values()) {
        solution.push(val)
    }
    return solution
};