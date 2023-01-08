use Company_SD

/* 1. Display (Using Union Function)
a. The name and the gender of the dependence that's gender is Female and depending on Female Employee.
b. And the male dependence that depends on Male Employee.*/
select [Full Name] = emp.Fname + ' ' + emp.Lname, emp.Sex
from Dependent d inner join Employee emp
on d.ESSN = emp.SSN and emp.sex = 'M'
union
select [Full Name] = emp.Fname + ' ' + emp.Lname, emp.Sex
from Dependent d inner join Employee emp
on d.ESSN = emp.SSN and emp.sex = 'f'


/* 2.For each project, list the project name and the total hours per week (for all */
select p.Pname, w.Hours
from Project p inner join Works_for w
on p.Pnumber = w.Pno


/* 3.Display the data of the department which has the smallest employee ID over all employees' ID. */
select distinct d.* 
from Employee emp inner join Departments d
on d.MGRSSN = (select min(MGRSSN) from  Departments)


/* 4.For each department, retrieve the department name and the maximum, minimum and */
select d.Dname, min(e.Salary) as 'Min. Salary', max(e.Salary) as 'Max. Salary', avg(e.Salary) as 'Avg. Salary'
from Departments d, Employee e
where d.Dnum = e.Dno
group by d.Dname


/* 5.List the full name of all managers who have no dependents. */
select [Full Name] = e.Fname + ' ' + e.Lname
from employee e
where e.SSN not in (
	select e.SSN
	from Employee e 
	where e.SSN not in (select MGRSSN from Departments)
	)


/* 6.For each department-- if its average salary is less than the average salary of all employees
-- display its number, name and number of its employees. */
select d.Dnum, d.Dname, count(e.SSN) 'No.EMPS'
from Employee e, Departments d
where e.Dno = d.Dnum
group by d.Dnum, d.Dname
having avg(e.Salary) < (select avg(Salary) from Employee)


/*7.Retrieve a list of employees names and the projects names they are working on ordered by department number 
and within each department, ordered alphabetically by last name, first name.*/
select e.Fname, e.Lname ,p.Pname, d.Dnum
from Departments d, Project p, Employee e
where d.Dnum = p.Dnum and d.Dnum = e.Dno
order by d.Dnum, e.Lname, e.Fname


/*8.Try to get the max 2 salaries using subqueries*/
select max(salary) from Employee
union
select max(salary) from Employee
where salary not in (select max(salary) from Employee)


/*9.Get the full name of employees that is similar to any dependent name*/
select fullname = Fname + ' ' + Lname from Employee
intersect
select Dependent_name from Dependent


/*11.In the department table insert new department called "DEPT IT" , with id 100, employee with SSN = 112233 as a manager 
for this department. The start date for this manager is '1-11-2006'*/
insert into Departments(Dname, Dnum, MGRSSN, [MGRStart Date])
values('DEPT IT', 100, 112233, '1-11-2006')


/*12.Do what is required if you know that : Mrs.Noha Mohamed(SSN=968574) moved to be the manager of the new 
department (id = 100), and they give you(your SSN =102672) her position (Dept. 20 manager) 
a. First try to update her record in the department table
b. Update your record to be department 20 manager.
c. Update the data of employee number=102660 to be in your teamwork (he will be supervised by you) (your SSN =102672)
*/

-- a
update Employee
set Superssn = (select MGRSSN from Departments where Dnum = 10)
where Fname = 'noha'

-- b
update Employee
set Superssn = (select mgrssn from Departments where Dnum = 20)
where fname = 'ziad'

-- c
update Employee
set Superssn = 102672
where SSN = 102660


/*13.Unfortunately the company ended the contract with Mr. Kamel Mohamed (SSN=223344) so try to delete his data from 
your database in case you know that you will be temporarily in his position. 
Hint: (Check if Mr. Kamel has dependents, works as a department manager, supervises any employees or works in 
any projects and handle these cases).*/

update Dependent 
set ESSN = 102672
where ESSN = 223344
--
update Works_for
set ESSN = 102672
where ESSN = 223344
--
update Departments
set MGRSSN = 102672
where MGRSSN = 223344
--
delete Employee where ssn = 223344


/*14.Try to update all salaries of employees who work in Project ‘Al Rabwah’ by 30%*/
update Employee
set Salary *= 1.3
where Dno = (
				select d.Dnum
				from Project p inner join Departments d
				on p.Dnum = d.Dnum and p.Pname = 'Al Rabwah'
			)
