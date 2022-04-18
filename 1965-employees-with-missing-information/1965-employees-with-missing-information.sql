# Write your MySQL query statement below
Select employee_id from  Employees where employee_id Not In  ( select employee_id from Salaries)
Union 
Select  employee_id from  Salaries where employee_id Not In (select employee_id from  Employees )
Order By  employee_id ASC