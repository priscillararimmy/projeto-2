import React from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import { Button, TextField } from "@mui/material";

const validationSchema = yup.object().shape({email: yup
  .string('Enter your email')
  .email('Enter a valid email')
  .required('Email is required')});


export const FormGame = () => {

  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: '',
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
    
      
    
    )
}