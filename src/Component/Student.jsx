import React,{useState} from 'react'
import {Button,TextField,Box,IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { color } from '@mui/system';
let studentDetails = {
  name:'',
  age:'',
  course:'',
  batch:''
}
const Student = () => {
  const [store, setStore] = useState(studentDetails);
  const [dataList, setDataList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [hide, setHide] = useState(false);
  const changeHandler = (e) => {
    const value = e.target.value
    setStore(store =>({...store,[e.target.name] : value}))    
    }   
const addData = () =>{
  if(edit){
    const updatedDataList = dataList.map((row)=>row.id === store.id ? store : row );
    setDataList(updatedDataList);
    setEdit(false);
    setStore(studentDetails);
    setHide(!hide);
  }
  else{
  let listItems = dataList;
  const item = {
    id:dataList.length,
    ...store
  }
  listItems = [...dataList,item];  
  setDataList(listItems);
  clearData();
  setHide(!hide);
}
}
const clearData = () =>{
  setStore(studentDetails);
}
const deleteRow = (id) =>{
const filtered = dataList.filter(item=>item.id !== id);
console.log(filtered);
setDataList(filtered);
}
const editRow = (row) =>{
  setStore(row);
  setEdit(true);
  setHide(!hide);
}
  return (
    <>
    {hide ? null : <> <div className='studentDetails'>
      <h1 className='sd'>Students Details</h1>
      <Button variant="contained" onClick={()=>{setHide(!hide)}} startIcon={<AddIcon/>} style={{color:'black'}}>Add new student</Button>
    </div>
    <Box>
    <table className='table'> 
 
      {dataList && dataList.map((row,i)=>
        <tr>
        <td>{row.name}</td>
        <td>{row.age}</td>
        <td>{row.course}</td>
        <td>{row.batch}</td>
        <td>
        <IconButton>
        <EditIcon style={{color:'blue'}} onClick={()=>{editRow(row)}}/>
        </IconButton>
        <IconButton>
        <DeleteIcon  style={{color:'red'}} onClick={()=>{deleteRow(row.id)}}/>
        </IconButton>
        </td>
      </tr>
      )}
    </table>
    </Box></>}
    {hide ? <Box >
    <Box className='grid'>
      <h2>Add student</h2>
      <br />
      <label>Name : </label>
      <TextField name='name' value={store.name} onChange={changeHandler} label='Name'color='secondary'/>
      <br /><br />
      <label> Age : </label>
      <TextField name='age' value={store.age} onChange={changeHandler} label='Age'color='secondary'/>
      <br /><br />
      <label >Course :</label>
      <TextField name='course' value={store.course} onChange={changeHandler} label='Course'color='secondary'/>
      <br /><br />
      <label>Batch :</label>
      <TextField name='batch' value={store.batch} onChange={changeHandler} label='Batch'color='secondary'/>
    </Box>
    <Box sx={{mt:-7,ml:70}}>
      <Button  sx={{mr:3}}size='large' onClick={addData} color='warning' variant='contained'>{edit ? 'Update' : 'submit'}</Button>
      <Button sx={{ml:7}}size='large' onClick={clearData} color='primary' variant='contained'>Cancel</Button>
    </Box>
    </Box>
    : null}
    </>
  )
}

export default Student;