export const validationUserData=(values)=>{
    let errors={};

    if (values.name.trim()==""){
        errors.name="username is required";
    }else if (values.name.trim()<3){
        errors.name="username must be at least 3 characters";
    }
    if (values.email.trim()==""){
        errors.email="email is required";
    }else if (values.email.trim()<9){
        errors.email="email must be at least 9 characters";
    }
    if (values.password.trim()==""){
        errors.password="password is required";
    }else if (values.password.trim()<3){
        errors.password="password must be at least 3 characters";
    }
    return errors;
}
