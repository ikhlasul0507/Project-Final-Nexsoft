import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import moment from 'moment';
import { connect } from 'react-redux'
import swal from 'sweetalert';

const Nav = styled.div`
  background: #f20800;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  font-size:20px;
`;

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 2rem;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIconSh = styled(Link)`
  margin-right: 1rem;
  font-size: 2rem;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left:1rem;
  padding-right:1rem;
  text-decoration:none;
`;

const P = styled(Link)`
  margin-right: 1rem;
  font-size: 1rem;
  color:white;
  cursor: auto;
  text-decoration:none;
`;


const SidebarNav = styled.nav`
  background: #f20800;
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;

const logout = (props) => {
    swal({
        title: "Warning",
        text: "Are you sure you want to quit?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                props.logoutAction()
                props.history.push("/");
                swal({
                    title: "Good job!",
                    text: "Success for logout",
                    icon: "success",
                    button: "Ok",
                  });
            } else {
                //   swal("Your imaginary file is safe!");
            }
        });
}

const getDateWithMoment = () => {
    return moment().format('dddd, DD MMMM YYYY');
};


const Sidebar = (props) => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavIcon to='#'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                    <h4>
                        {
                            props.match.url === "/master-produk" ? "Master Product" :
                                props.match.url === "/add-monitoring" ? "Add Monitoring" :
                                    props.match.url === "/report-monitoring" ? "Report Monitoring" :
                                        props.match.path === "/detail-monitoring/:id" ? "Detail Monitoring" :
                                            props.match.url === "/monitoring-produk" && "Monitoring Produk"
                        }
                    </h4>
                    {/* {date.toLocaleDateString()} */}
                    {getDateWithMoment()} |
                    {" " + date.toLocaleTimeString()}

                    <NavIconSh to="#">
                        <P>{props.dataLogin.userData.username}</P>
                        <FaIcons.FaPowerOff onClick={() => {
                            logout(props)
                        }} />
                    </NavIconSh>
                </Nav>

                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to='#'>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />;
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};
const mapStateToProps = state => ({
    dataLogin: state.AReducer.userLogin
})

const mapDispatchToProps = dispatch => {
    return {
        logoutAction: () => dispatch({ type: "LOGOUT_SUCCESS" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);