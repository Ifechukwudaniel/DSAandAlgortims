# Write your MySQL query statement below
Select  product_id, "store1" as store, store1 as price from Products   where store1 is Not Null 
Union
select  product_id, "store2" as store, store2 as price from products where store2 is Not Null
Union 
Select   product_id, "store3" as store, store3 as price  from products where store3 is Not Null