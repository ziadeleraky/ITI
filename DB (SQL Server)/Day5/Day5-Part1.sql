use ITI

/* 1. Retrieve number of students who have a value in their age. */
select St_Id
from Student
where St_Age is not null

/* 2. Get all instructors Names without repetition */
select distinct Ins_Name 
from Instructor

/* 3. Display student with the following Format (use isNull function) - Student ID - Student Full Name - Department name */
select St_Id, [Full Name] = isnull(St_Fname, '') + ' ' + isnull(St_Lname, ''), isnull(Dept_Id, 0)
from Student

/* 4. Display instructor Name and Department Name
Note: display all the instructors if they are attached to a department or not */
select i.Ins_Name, d.Dept_Name
from Instructor i, Department d
where i.Dept_Id = d.Dept_Id

/* 5. Display student full name and the name of the course he is taking For only courses which have a grade */
select [Full Name] = St_Fname + ' ' + St_Lname, c.Crs_Name 
from Student s, Stud_Course sc, Course c
where s.St_Id = sc.St_Id and c.Crs_Id = sc.Crs_Id and sc.Grade is not null

select [Full Name] = St_Fname + ' ' + St_Lname, c.Crs_Name 
from Student s inner join Stud_Course sc
on s.St_Id = sc.St_Id and sc.Grade is not null
inner join Course c
on c.Crs_Id = sc.Crs_Id

/* 6. Display number of courses for each topic name */
select t.Top_Name, count(t.Top_Name) as 'No. Courses'
from Course c, Topic t
where c.Top_Id = t.Top_Id
group by t.Top_Name

/* 7. Display max and min salary for instructors */
select max(Salary) 'Max. Salary', min(Salary) 'Min. Salary'
from Instructor

/* 8. Display instructors who have salaries less than the average salary of all instructors. */
select Ins_Name, Salary
from Instructor
where Salary > (select avg(salary) from Instructor)

/* 9. Display the Department name that contains the instructor who receives the minimum salary. */
select Dept_Name
from Department
where Dept_Id = (
					select Dept_Id 
					from Instructor
					where Salary = (select min(Salary) from Instructor)
				)

/* 10. Select max two salaries in instructor table. */
select top(2) salary
from Instructor
order by salary desc

/* 11. Select instructor name and his salary but if there is no salary display instructor bonus keyword. 
“use coalesce Function” */
select Ins_Name, coalesce(Salary, 00)
from Instructor

/* 12.Select Average Salary for instructors */
select avg(salary) from Instructor


/* 13.Select Student first name and the data of his supervisor */
select st.St_Fname as 'First Name', st.*
from Student st, Student supv
where supv.St_Id = st.St_super


/* 14.Write a query to select the highest two salaries in Each Department for instructors who have salaries. 
“using one of Ranking Functions” */
select *
from ( 
		select Ins_Id,Salary, ROW_NUMBER() over(partition by dept_id order by ins_id desc) as RN 
		from Instructor 
		where salary is not null
	 ) as newTable
where RN <= 2


/* 15. Write a query to select a random student from each department. “using one of Ranking Functions” */
select St_Fname, Dept_Id
from (
		select *, ROW_NUMBER() over(partition by dept_id order by newid() desc) as RN
		from Student
		where Dept_Id is not null
		
	 ) as newTable
where rn = 1
