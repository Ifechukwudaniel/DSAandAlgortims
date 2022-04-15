# Write your MySQL query statement below
Select name as  Customers  From  Customers
LEFT JOIN Orders ON  Customers.id = Orders.customerId
Where   Orders.customerId IS  NULL