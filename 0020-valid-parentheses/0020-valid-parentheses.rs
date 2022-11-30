
impl Solution {
    pub fn is_valid(s: String) -> bool {
        let map = std::collections::HashMap::from([('[', ']'), ('{', '}'), ('(', ')')]);
        let mut stack = Vec::new();

        for c in s.chars() {
            let item = map.get(&c);
            if item != None {
                stack.push(item.unwrap());
                continue;
            }
            let item = stack.pop().unwrap_or(&'*');
            if item != &c {
                return false;
            }
        }

        stack.len() == 0
    }
}