const db = require('../database');

const getEmployee = async (req, res) => {
    try {
        const employees = await db.query(
            'SELECT * FROM users',(error,result) =>{
                if (!error){
                    res.json(result.rows)
                }
                else{
                    console.log(error)
                }
            }
        )  
    } catch (error) {
        return res.status(500).json({msg: 'Server Error'})
    }
}

const addEmployee = async (req, res) => {
    try {
        
        const user = req.body
        console.log(user)
        const insertQuery = `INSERT INTO users(id, firstname, lastname, email, address, salary) 
                       VALUES(${user.id}, '${user.firstname}', '${user.lastname}', '${user.email}', '${user.address}', ${user.salary})`

     const newUser = await db.query(
        insertQuery, (error, result) => {
            if (!error){
                res.status(201).json({msg: 'employee added sucessfully'})
            }
            else{
                console.log(error)
            }
        }
     )
    } catch (error) {
        return res.status(500).json({msg: 'Server Error'})
    }
}

const getEmployeeById = async (req, res) => {
    try {
        const employees = await db.query(
            `SELECT * FROM users WHERE id = ${req.params.id}`, (error, result) => {
                if (!error){
                    res.status(200).json(result.rows)
                }
                else{
                    console.log(error)
                }
            }
        )
        
    } catch (error) {
        return res.status(500).json({msg: 'Server Error'})
    }
}

const editEmployee = async (req, res) => {
    try {
        const user = req.body
        console.log(user)
        const updateQuery = `UPDATE users
                       SET firstname = '${user.firstname}',
                       lastname = '${user.lastname}',
                       address = '${user.address}',
                       email = '${user.email}',
                       salary = '${user.salary}'
                        WHERE id = ${req.params.id}`
        const updatedUser = await db.query(
        updateQuery, (error, result) => {
        if (!error){
              res.status(201).json({msg: 'employee updated sucessfully'})
            }
            else{
                console.log(error)
            }
        }
        )
        
    } catch (error) {
        return res.status(500).json({msg: 'Server Error'})
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const removeEmployee = await db.query(
            `DELETE  FROM users WHERE id = ${req.params.id}`, (error, result) => {
                if (!error){
                    res.status(200).json({msg: 'Employee deleted sucessfully'})
                }
                else {
                    console.log(error)
                }
            }
        )
        
        
    } catch (error) {
        return res.status(500).json({msg: 'Server Error'})
    }
}

module.exports = {
    getEmployee,
    addEmployee,
    getEmployeeById,
    editEmployee,
    deleteEmployee
  
}