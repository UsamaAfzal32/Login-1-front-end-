import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import pic from './lap4.jpg'
import pics from './lapp7.png'
import SignSchma from "./SignSchma";

const initialValues={
  FirstName:'',
  LastName:'',
  Email:'',
  Password:'',
  ConfirmPassword:''

}

export function End() {

  const {values,errors,handleChange,handleSubmit}=useFormik(
    {
               initialValues:initialValues,
               validationSchema:SignSchma,
               onSubmit:(values,action)=>{
              console.log(values)
               action.resetForm()

               }
                   

    }


    ) 

   

  return (
    <form onSubmit={handleSubmit}>
    <Box sx={{
      height: '100vh',
      width: '100%',
      backgroundImage: `url(${pic})`,
      backgroundSize: 'cover',
      display:'flex',
       flexDirection:'column',
       alignItems:'center',
       justifyContent:'center'}}>
      
      <Card sx={{
        height: '75vh',
        width: '50%',
        backgroundImage: `url(${pics})`,
        backgroundSize: 'cover',
        display:'flex',
       flexDirection:'column',
       alignItems:'center',
       justifyContent:'space-evenly'

      }}>
        <Typography variant="h4"color={'white'}>Create Account SignUp</Typography>  
        <TextField value={values.FirstName} name='FirstName' helperText={errors.FirstName} onChange={handleChange}  color='success' label='FirstName'> </TextField>
        <TextField value={values.LastName} name="LastName" helperText={errors.LastName} onChange={handleChange} color='success' label='LastName'></TextField>
        <TextField value={values.Email} name="Email" helperText={errors.Email} onChange={handleChange} color='success' label='Email'></TextField>
        <TextField value={values.Password} name="Password" helperText={errors.Password} onChange={handleChange}  color='success' label='Password'></TextField>
        <TextField  value={values.ConfirmPassword} name="ConfirmPassword" helperText={errors.ConfirmPassword} onChange={handleChange} color='success' label='Confirm Password'></TextField>
        <Button  type="submit" sx={{ backgroundColor: '#0E9882' }} variant="contained">SignUp</Button> 

      </Card>
     
    </Box>
    </form>
  )
}