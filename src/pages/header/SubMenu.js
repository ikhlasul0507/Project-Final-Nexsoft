import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux'
const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 20px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    color:white
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #632ce4;
    cursor: pointer;
    color:white
  }
`;

const SubMenu = ({item}, props) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </SidebarLink>
            {subnav &&
            item.subNav.map((item, index) => {
                return (
                  // (props.dataForm) ? 
                  //           alert("Yakin !")
                  //       :   
                    <DropdownLink to={item.path}  key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                  
                );
            })}
        </>
    );
};
const mapStateToProps = state => ({
    dataLogin: state.AReducer.userLogin,
    dataForm: state.AReducer.isFormActive
})

const mapDispatchToProps = dispatch => {
    return {
        logoutAction: () => dispatch({ type: "LOGOUT_SUCCESS" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubMenu);
  