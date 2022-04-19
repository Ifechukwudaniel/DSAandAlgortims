# Write your MySQL query statement below
Select name from SalesPerson 
where sales_id  Not In
    (Select sales_id from Orders o
    Left Join Company c On o.com_id = c.com_id
    where name ='Red')