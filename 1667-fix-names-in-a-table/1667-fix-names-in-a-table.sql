# Write your MySQL query statement below
SELECT user_id, Concat(UPPER(Left(name,1)), Lower(Substring(name,2,Length(name))))   as name
from Users  
Order By user_id 