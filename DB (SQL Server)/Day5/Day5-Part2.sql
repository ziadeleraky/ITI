use AdventureWorks2012

/* 1. Display the SalesOrderID, ShipDate of the SalesOrderHeader table (Sales schema) to show SalesOrders 
that occurred within the period ‘7/28/2002’ and ‘7/29/2014’ */
select SalesOrderID, ShipDate
from Sales.SalesOrderHeader
where OrderDate between '7-28-2002' and '7-29-2014'

/* 2. Display only Products(Production schema) with a StandardCost below $110.00 (show ProductID, Name only) */
select *
from Production.Product
where StandardCost < 110

/* 3. Display ProductID, Name if its weight is unknown */
select ProductID
from Production.Product
where Weight is null

/* 4. Display all Products with a Silver, Black, or Red Color */
select *
from Production.Product
where Color in ('silver', 'black', 'red')

/* 5. Display any Product with a Name starting with the letter B */
select *
from Production.Product
where SUBSTRING(name,1,1) = 'b'

/* 6. Run the following Query
UPDATE Production.ProductDescription
SET Description = 'Chromoly steel_High of defects'
WHERE ProductDescriptionID = 3
Then write a query that displays any Product description with underscore
value in its description. */
UPDATE Production.ProductDescription
SET Description = 'Chromoly steel_High of defects'
WHERE ProductDescriptionID = 3

select *
from Production.ProductDescription
where Description like '%[_]%'

/* 7. Calculate sum of TotalDue for each OrderDate in Sales.SalesOrderHeader
table for the period between '7/1/2001' and '7/31/2014' */
select OrderDate,sum(TotalDue) as 'Total Due'
from Sales.SalesOrderHeader
where OrderDate between '7-01-2001' and '7-31-2014'
group by OrderDate

/* 8. Display the Employees HireDate (note no repeated values are allowed) */
select HireDate
from HumanResources.Employee
where HireDate is not null
group by HireDate

/* 9. Calculate the average of the unique ListPrices in the Product table */
select avg(distinct ListPrice)
from Production.Product

/* 10.Display the Product Name and its ListPrice within the values of 100 and 120
the list should has the following format "The [product name] is only! [List
price]" (the list will be sorted according to its ListPrice value) */
select Name as [Product Name], ListPrice as [List Price]
from Production.Product
where ListPrice between 100 and 120
order by ListPrice

/* 11.
a) Transfer the rowguid ,Name, SalesPersonID, Demographics from
Sales.Store table in a newly created table named [store_Archive]
Note: Check your database to see the new table and how many rows in it?
b) Try the previous query but without transferring the data? */

-- a
select rowguid, Name, SalesPersonID, Demographics into sales.[store_Archive]
from Sales.Store

-- b
select rowguid, Name, SalesPersonID, Demographics into sales.[store_Archivee]
from Sales.Store
where 5=10

/* 12.Using union statement, retrieve the today’s date in different styles using
convert or format funtion. */
select convert(varchar, getdate(), 101)
union all
select SYSDATETIMEOFFSET()
union all
select getdate()