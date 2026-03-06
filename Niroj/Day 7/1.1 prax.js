// DATAS - use companyDB

db.employees.insertMany([
  {
    name: "Niroj",
    age: 25,
    department: "Engineering",
    salary: 60000,
    skills: ["Java", "MongoDB", "React"],
    performanceScore: 8
  },
  {
    name: "Amit",
    age: 30,
    department: "Engineering",
    salary: 80000,
    skills: ["Node", "MongoDB"],
    performanceScore: 9
  },
  {
    name: "Rahul",
    age: 28,
    department: "HR",
    salary: 40000,
    skills: ["Communication"],
    performanceScore: 7
  },
  {
    name: "Priya",
    age: 32,
    department: "Sales",
    salary: 70000,
    skills: ["Negotiation", "Excel"],
    performanceScore: 9
  },
  {
    name: "Sneha",
    age: 27,
    department: "Engineering",
    salary: 75000,
    skills: ["React", "Node"],
    performanceScore: 6
  }
])

db.projects.insertMany([
  {
    name: "Project A",
    department: "Engineering",
    budget: 200000
  },
  {
    name: "Project B",
    department: "HR",
    budget: 50000
  },
  {
    name: "Project C",
    department: "Sales",
    budget: 100000
  }
])



// 1.Find employees from Engineering department.


db.employees.aggregate([
    {$match:{
        department:"Engineering"
    }}
])


// 2. Show only name and salary.

db.employees.aggregate([
    {$match:{
        department: "Engineering"
    }},
    {
        $project:{
            name: 1,
            salary: 1,
            _id: 0
        }
    }
])

// 3. Find employees with salary > 70000.

db.employees.aggregate([
    {
        $group:{
            _id: "$department"
        }
    }
])

// 4. Sort employees by salary descending.

db.employees.aggregate([
  {
    $group:{
      _id: "$salary",
  },{
    $sort:{
      _id: "ASC"
  }
])

// 5. Show top 2 highest paid employees.


// 🔵 ADVANCED LEVEL

// Count employees per skill.

// Join employees with projects using department.

// Find department with highest total salary.

// Find employees whose performanceScore > 8.

// Add bonus field (10% salary) and show it.

// 🔴 PROFESSIONAL LEVEL

// Pagination query (page 1, 2 records per page)

// Salary range bucket (0-50k, 50k-75k, 75k-100k)

// Top performing employee in each department.

// Departments having more than 1 employee.

// Total project budget per department using $lookup.
