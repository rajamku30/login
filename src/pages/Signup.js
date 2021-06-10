import  {SyledTextInput, StyledFromArea, StyledFormButton, StyledLable, Avatar, StyledTitle, colors,ButtonGroup, ExtraText, TextLink, CopyrightText} from './../components/Styles';
import logo from './../assets/logo.png';

//Formik
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {TextInput} from './../components/FormLib';

//icons
import {FiMail, FiLock, FiUser,FiCalendar} from 'react-icons/fi';

//Loader
import Loader from 'react-loader-spinner';

//redux
import {connect} from 'react-redux';
import {signupUser} from './../auth/actions/userActions';
import {useHistory} from 'react-router-dom';

const Signup = (signupUser) => {
   const history = useHistory();
    return (
      <div>
          <StyledFromArea>
               <Avatar image={logo}/>
                 <StyledTitle color={colors.theme} size={30}>Membber Signup</StyledTitle>

                 <Formik
                   initialValues = {{
                     email: "",
                     password: "",
                     repeatPassword:"",
                     dateOfBirth:"",
                     name:""
                   }}
                   validationSchema = {
                     Yup.object({
                       email: Yup.string().email("Invalid email address")
                       .required("Required"),
                       password: Yup.string()
                       .min(8,"Password is too short")
                       .max(15,"Password is too long")
                       .required("Required"),
                       name:Yup.string().required("Required"),
                       dateOfBirth:Yup.date().required("Required"),
                       repeatPassword: Yup.string().required("Required")
                       .oneOf([Yup.ref("password")],"Passwords must match")
                     })
                   }
                   onSubmit = {(values,{setSubmitting, setFieldError}) => {
                     console.log(values);
                     signupUser(values, history, setFieldError, setSubmitting)
                   }}
                 >
                     {({isSubmitting}) => (
                        <Form>
                           <TextInput 
                              name="name"
                              type="text"
                              lable="Full name"
                              placeholder="Raja Ramasamy"
                              icon = {<FiUser/>}
                           />

                            <TextInput 
                              name="email"
                              type="text"
                              lable="Email Address"
                              placeholder="Test@gmail.com"
                              icon = {<FiMail/>}
                           />

                            <TextInput 
                              name="dateOfBirth"
                              type="date"
                              lable="Date of Birth"
                              icon = {<FiCalendar/>}
                           />


                           <TextInput 
                              name="password"
                              type="password"
                              lable="Password"
                              placeholder="********"
                              icon={<FiLock/>}
                           />

                            <TextInput 
                              name="repeatPassword"
                              type="password"
                              lable="Repeat Password"
                              placeholder="********"
                              icon={<FiLock/>}
                           />

                           <ButtonGroup>
                             {!isSubmitting && (
                             <StyledFormButton type="submit">Signup</StyledFormButton>
                             )}
                             {isSubmitting && (
                               <Loader
                                 type = "ThreeDots"
                                 color = { colors.theme}
                                 height={49}
                                 width={100}
                               />
                             )}
                           </ButtonGroup>
                        </Form>
                     )}
                 </Formik>
                 <ExtraText>
                     Already have an account? <TextLink to="/login">Login</TextLink>
                  </ExtraText>
          </StyledFromArea>
          <CopyrightText>
               All rights reserved &copy; 20221      
          </CopyrightText>
      </div>
    );
};

export default connect(null,{signupUser})(Signup);