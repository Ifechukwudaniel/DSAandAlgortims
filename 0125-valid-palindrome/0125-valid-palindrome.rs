impl Solution {
    pub fn is_palindrome(s: String) -> bool {
       let str = s
        .to_lowercase()
        .chars()
        .filter(|x| x.is_alphanumeric())
        .collect::<String>();

        str.chars().rev().collect::<String>() == str
    }
}