import styled from 'styled-components'

export const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height:100%;
    wdith:100%;
    .body{
        margin-right: ${props=> props.showSideBar ? '15px': '265px'};
        height:100%;
        margin-top: 55px;
        @media only screen and (max-width: 1105px) {
            margin-left:3%;
        }
        @media screen and (max-width: 600px) {   
            margin-right:15px;   
          }
    }

  
`



