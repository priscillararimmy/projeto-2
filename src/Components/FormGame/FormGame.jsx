import React from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import { Button, TextField } from "@mui/material";

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required')
});


export const FormGame = () => {

  
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

    return (

      <formik>
        <TextField 
        required 
        id="filled-basic" 
        color="secondary" 
        label="Nome" 
        fullWidth 
        variant="filled" />

        <p></p>

        <TextField 
        required 
        id="outlined-basic" 
        color="secondary" 
        label="Email" 
        fullWidth 
        variant="outlined" />

         <p></p>

         <TextField 
        id="outlined-basic" 
        color="secondary" 
        label="Comentários" 
        fullWidth 
        multiline
        rows={4}
        variant="outlined" />

        <p></p>

        <Button 
        color="secondary" 
        variant="contained" 
        type="submit">Enviar</Button>

        <p></p>
        <p></p>
      </formik>
    //   <Box
    //   component="form"
    //   sx={{
    //     '& > :not(style)': { m: 1, width: '25ch' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    //   <TextField id="filled-basic" color="secondary" label="Nome" variant="filled" />
    //   <TextField required id="outlined-basic" color="secondary" label="Email" variant="outlined" />
    //   <Button color="primary" variant="contained" fullWidth type="submit">
    //       Submit
    //     </Button>
    // </Box>
      
    
    )
}