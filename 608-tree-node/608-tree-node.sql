# Write your MySQL query statement below
Select id, 'Root' as type from Tree
    where p_id IS NUll
Union 
Select id, 'Leaf' as type   from Tree
    where id  not in 
    (Select Distinct p_id from Tree where  p_id is Not Null) and  p_id is Not Null
Union
Select  id, 'Inner' as type  from Tree
    where p_id is Not Null and   id  in
    (Select p_id from Tree where  p_id is Not Null)