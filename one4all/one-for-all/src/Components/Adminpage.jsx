import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar';

function Adminpage() {
    const [employee, setemployee] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/findadmin"
        );
        setemployee(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  const handleremove=(id)=>{
    axios.delete(`http://localhost:4000/removeadmin/${id}`).then(()=>{
        setemployee(employee.filter((employee) => employee._id !== id))
    })
  }

  return (
    <div>
        <Adminnavbar/>
        <div style={{display:"flex",flexWrap:"wrap",marginTop:"100px"}}>
        {employee.map((obj)=>
           <Card sx={{ maxWidth: 345,marginTop:"25px",marginLeft:"10px",width:"500px" }}>
           <CardActionArea>
             
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                 {obj.name}
               </Typography>
               <Typography gutterBottom variant="h5" component="div">
                 Email:{obj.email}
               </Typography>
               <Typography gutterBottom variant="h5" component="div">
                JobCategory: {obj.jobCategory}
               </Typography>
               <Typography gutterBottom variant="h5" component="div">
                 Experience:{obj.experience}
               </Typography>
               <Typography gutterBottom variant="h5" component="div">
                 Address:{obj.address}
               </Typography>
               
             </CardContent>
           </CardActionArea>
           <CardActions>
             <Button size="small" color="primary"onClick={() => handleremove(obj._id)}>
               Remove
             </Button>
           </CardActions>
         </Card>
     
       

        )}
        </div>
    </div>
  )
}

export default Adminpage