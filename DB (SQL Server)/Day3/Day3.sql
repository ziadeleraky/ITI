use Company_SD

/* 1.Display the Department id, name and id and the name of its manager. */
select d.Dnum, d.Dname, "Full Name" = emp.fname + ' ' + emp.Lname
from Departments d inner join Employee emp
on emp.SSN = d.MGRSSN
  
/* 2.Display the name of the departments and the name of the projects under its control. */
select d.Dname, p.Pname
from Departments d inner join Project p
on d.Dnum = p.Dnum
order by d.Dname

/* 3.Display the full data about all the dependence associated with the name of the employee they depend on him/her. */
select [Full Name] = emp.fname + ' ' + emp.Lname, dep.*
from Employee emp inner join Dependent dep
on emp.SSN = dep.ESSN

/* 4.Display the Id, name and location of the projects in Cairo or Alex city. */
select p.Pname, p.Pnumber, p.Plocation, p.City
from Project p
where p.City in ('Cairo', 'Alex')

/* 5.Display the Projects full data of the projects with a name starts with "a" letter. */
select p.*
from Project p
where p.Pname like 'a%'

/* 6.display all the employees in department 30 whose salary from 1000 to 2000 LE monthly */
select *
from Employee
where Dno = 30 and salary between 1000 and 2000

/* 7.Retrieve the names of all employees in department 10 who works more than or equal10 hours per week on "AL Rabwah" project. */
select [Full Name] = emp.fname + ' ' + emp.Lname
from Project p inner join Works_for w
on p.Pnumber = w.Pno and w.Hours >= 10 and p.Dnum = 10 and p.Pname = 'AL Rabwah'
inner join Employee emp
on emp.SSN = w.ESSn

/* 8.Find the names of the employees who directly supervised with Kamel Mohamed. */
select emp.*
from Employee emp inner join Employee supv
on supv.SSN = emp.Superssn and supv.Fname = 'Kamel' and supv.Lname = 'Mohamed'

/* 9.Retrieve the names of all employees and the names of the projects they are working on, sorted by the project name. */
select [Full Name] = emp.fname + ' ' + emp.Lname, [Project Name] = p.Pname
from Employee emp inner join Project p
on emp.Dno = p.Dnum
order by p.Pname

--[Full Name] = emp.fname + ' ' + emp.Lname, [Project Name] = p.Pname
select [Full Name] = emp.fname + ' ' + emp.Lname, [Project Name] = p.Pname
from Departments d inner join Project p
on d.Dnum = p.Dnum
inner join Employee emp
on d.Dnum = emp.Dno

/* 10.For each project located in Cairo City , find the project number, the controlling department name ,the department manager last name ,address and birthdate. */
select p.Pname, d.Dname, mgr.Lname
from Project p inner join Departments d
on d.Dnum = p.Dnum and p.City = 'Cairo'
inner join Employee mgr
on d.MGRSSN = mgr.SSN

/* 11.Display All Data of the managers */
select mgr.*
from Employee mgr inner join Departments d
on d.MGRSSN = mgr.SSN

/* 12.	Display All Employees data and the data of their dependents even if they have no dependents */
select emp.*, dep.*
from Employee emp left outer join Dependent dep
on dep.ESSN = emp.SSN

/* 13.	Insert your personal data to the employee table as a new employee in department number 30, SSN = 102672, Superssn = 112233, salary=3000. */
insert into Employee (Dno, ssn,Superssn,Salary,Fname,Lname)
values (30,102672,112233,3000,'Ziad','Eleraky')

/* 14.Insert another employee with personal data your friend as new employee in department number 30, SSN = 102660, but don’t enter any value for salary or supervisor number to him. */
insert into Employee (Dno, ssn,Fname,Lname)
values (30,102660,'Ahmed','Mohamed')

/* 15.Upgrade your salary by 20 % of its last value. */
update Employee
set Salary*= 1.1
where Employee.Fname = 'Ziad'