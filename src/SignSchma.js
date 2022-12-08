import React from 'react'
import * as Yup from 'yup'


const SignSchma = () => {
  return (
    Yup.object({
        FirstName:Yup.string().required('Enter a Name').min(2,"Minimium decler 2").max(16,"Maximum Decler 16 "),
        LastName:Yup.string().required("Enter a name").min(2,"Minimium decler 2").max(16,"Maximum Decler 16 "),
        Email:Yup.string().required('Enter a Email').email('invalid Email'),
        Password:Yup.string().required('password enter').min(4,"minimum decler 4 ").max(20,'maxmim decler 20'),
        ConfirmPassword:Yup.string().required('ConfrimPassword').oneOf([Yup.ref("Password"), null],"Password not match")
    } 
    )
    
  )
}

export default SignSchma