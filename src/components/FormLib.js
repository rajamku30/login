import {useState} from 'react';
import {useField} from 'formik';
import { StyledTextInput, StyledLable, StyledIcon, ErrorMsg} from './Styles';

//icons
import {FiEyeOff, FiEye} from 'react-icons/fi';

export const TextInput =  ({icon, ...props}) => {
   const [field,meta] = useField(props);
   const [show,setShow] = useState(false);

   return(
        <div style={{position:"relative"}}>
            <StyledLable htmlFor={props.name}>
                {props.lable}
            </StyledLable>

            { props.type !== 'password' && (
                <StyledTextInput
                    inValid={meta.touched && meta.error}
                    {...field}
                    {...props}
            />)
            }

            {props.type === 'password' && (
                <StyledTextInput
                    inValid={meta.touched && meta.error}
                    {...field}
                    {...props}
                    type={show ? "text" : "password"}
             />
            )}

            <StyledIcon>
                {icon}
            </StyledIcon>

            {
                props.type === "password" &&
                <StyledIcon onClick={() => setShow(!show)} right>
                   { show && <FiEye/>}
                    { !show && <FiEyeOff/>}
                </StyledIcon>
            }


            {meta.touched && meta.error ? (
               <ErrorMsg>{meta.error}</ErrorMsg>
            ): null}

        </div>
   );
};