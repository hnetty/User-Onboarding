import * as Yup from "yup";

const formSchema = Yup.object().shape({
    email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
    password: Yup
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .required("Password is Required"),
    terms: Yup
    .string
    .boolean(['true'], "Please agree to our Terms of service"),
    username: Yup
    .string()
    .min(3, "Usermame must be at least 3 characters long.")
    .required("Password is Required"),
})

export default formSchema