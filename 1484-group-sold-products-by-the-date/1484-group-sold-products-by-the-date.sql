# Write your MySQL query statement below
Select sell_date , 
    Count(DISTINCT(product))  as num_sold ,
    Group_ConCat(DISTINCT  product ORDER By product ASC Separator ',' ) as products   
from Activities
Group By  sell_date 
Order By  sell_date  ASC