
import {StyledTitle,StyledSubTitle, Avatar, StyledButton, ButtonGroup, StyledFromArea, colors} from './../components/Styles';

//logo
import logo from './../assets/logo.png';

//redux
import {connect} from 'react-redux';
import {logoutUser} from './../auth/actions/userActions';
import { useHistory } from 'react-router-dom';

const Dashboard = ({logoutUser, user}) => {
     const history = useHistory();
    return (
        <div>
            <div style={{
                position: "absolute",
                top:0,
                left:0,
                backgroundColor: "transparent",
                width:"100%",
                padding:"15px",
                display: "flex",
                justifyContent: "flex-start"

            }}>
                <Avatar image={logo}/>
            </div>

            <StyledFromArea bg={colors.dart2}>
                <StyledTitle size={65}>Welcome, {user.name}</StyledTitle>
                <ButtonGroup>
                 <StyledButton to="#" onClick={() => logoutUser(history)}>Log out</StyledButton>
                </ButtonGroup>
            </StyledFromArea>
            
            
        </div>
    );
}

const mapStateToProps = ({session}) => ({
    user: session.user

});

export default  connect(mapStateToProps,{logoutUser})(Dashboard);