# Write your MySQL query statement below
Select  date_id,make_name, 
count( DISTINCT  lead_id) as unique_leads , count(DISTINCT  partner_id) as unique_partners  
from DailySales
Group By date_id,make_name