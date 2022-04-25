# Write your MySQL query statement below
Select name as  Customers  from Customers 
where id Not In  (Select customerId  from Orders )