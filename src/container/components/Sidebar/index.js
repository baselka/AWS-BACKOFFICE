import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {colors} from '../../../styles/colors'
const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: ${colors.maroonOak90};
    height:95%;
    margin-top: 55px;
    width: 250px;
  
    position: fixed;
    box-sizing: border-box;
    border-right: 1px solid #dcddde;
    padding-top: 20px;
    transition: width 1s;
    overflow: hidden;
    right:0;
    a{
        text-decoration: none;
        color: #000;
        height: 50px;
        margin-left: 5%;

    }
    .selected{
        background: white;
        color: rgb(222, 63, 117);
        float:right;
        
    }
    
    ${props => !props.showSideBar ? 
        `
            width: 250px;
           
         
            ` 
        : ` 
            width:0;
     
           
            `};

  @media screen and (max-width: 600px) {   
    width:0;   
  }

`

const Button = styled.div`
    display: flex;
    width: 80%;
    padding: 10px; 
    border-radius: 5px;
    margin: 3px;
    justify-content: flex-end;
    font-weight: 700;

`


class Sidebar extends React.PureComponent {
        constructor(props) {
            super(props)
            this.state = {
                sideBarList:[
                    {name : 'الرئيسية', icon:'faHome', link:'home'},
                ]
            }
        }
    render() {
        const { sideBarList } = this.state
        const { showSideBar } = this.props
        return (
            <SidebarWrapper showSideBar={showSideBar} className='SideBar'>
               {sideBarList.map((item,i)=>{
                   return(
                       <NavLink to={`/${item.link}`} activeClassName="selected">
                          <Button>{item.name}</Button>
                       </NavLink>
                
                   )
               })}
            </SidebarWrapper>
        )
    }
}


export default (Sidebar);