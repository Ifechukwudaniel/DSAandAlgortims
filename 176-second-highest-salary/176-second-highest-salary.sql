# Write your MySQL query statement below
Select 
    IFNULL((Select DISTINCT  salary   from  Employee order by  salary DESC Limit 1,1 ), Null)
    as  SecondHighestSalary