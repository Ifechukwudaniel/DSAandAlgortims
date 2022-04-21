# Write your MySQL query statement below
select  user_id , Count(follower_id) as followers_count  from Followers 
group by user_id
Order by user_id