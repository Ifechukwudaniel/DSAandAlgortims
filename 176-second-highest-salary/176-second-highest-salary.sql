# Write your MySQL query statement below
Select 
    (Select DISTINCT  salary   from  Employee order by  salary DESC Limit 1,1 )
    as  SecondHighestSalary