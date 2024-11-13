// Import packages
const db = require('../config/db');

// Create functions with CRUD operations

exports.createTodo = async(req,res) => {
    //Fetch data
    const{title} = req.body;
    console.log('Request Body:', req.body);

    try{
        //Create a new todo
       await db.execute ('INSERT INTO todo  (tittle) VALUES (?)',[title]);
       const newTodoId = result[0].insertId;
        res.status(201).json(
            {
                id:newTodoId,
                title,
                // completed:false,
                message: 'Todo created successfully'
            });
    }catch(error){
    console.error('Error creating Todo',error)
    res.status(500).json({message:'Error creating todo'});
    }
};
exports.getAllTodo = async (req, res) => {
    const { title } = req.body || {}; // This might not be necessary

    try {
    
        const [rows] = await db.execute('SELECT * FROM todo');
        
        res.status(200).json({
            message: 'Todos retrieved successfully',
            data: rows,
        });
    } catch (error) {
        console.error('Error retrieving todos:', error);
        res.status(500).json({ message: 'Error retrieving todos' });
    }
};

exports.getTodoById = async (req,res) =>{
    //Fetch data
    const{id} = req.params;
    try{
        const [rows] = await db.execute('SELECT * FROM todo  WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: `Todo with id ${id} not found` });
        }

        res.status(200).json({
            message:`Todo with id ${id} retrieved successfully`,
            data:rows[0],
        })

    }catch(error){
        console.error('Error retrieving todo:', error);
        res.status(500).json({message:'Error retrieving Todo'})

    }
}

// exports.updateTodo = async(req,res) =>{
//     //Fetch data

// }

exports.deleteTodo = async(req,res) =>{
  //Fetch data
  const{id} = req.params;
  try{
 const[rows] = await db.execute('DELETE FROM todo WHERE id = ?', [id]);
 if(rows.length === 0){
    return res.status(404).json({message:`Todo with id ${id} not found`});
 }
 res.status(200).json({
    message:`Todo with id ${id} deleted successfully`
})
  }catch(error){
  res.status(500).json({message:'Error deleting todo'})
  }
}
