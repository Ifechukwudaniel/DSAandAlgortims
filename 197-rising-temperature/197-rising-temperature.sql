# Write your MySQL query statement below
Select DISTINCT a.id as "Id" from weather a ,weather b
where  DATEDIFF(a.recordDate, b.recordDate) = 1 And  a.temperature > b.temperature