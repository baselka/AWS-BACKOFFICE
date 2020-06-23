import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { LayoutWrapper,} from './style'


class Layout extends React.PureComponent {
    constructor(props){
        super(props)
        this.state ={
            showSideBar: false
        }
    }
    navClicked = () =>{
        this.setState({showSideBar: !this.state.showSideBar})
    }
    render() {
        const { showSideBar } = this.state
        const { page } = this.props
        const isLoginPage = page === 'login'
        return (
            <LayoutWrapper showSideBar={showSideBar && !isLoginPage}>
                <Header isLoginPage={isLoginPage} navClicked={this.navClicked} />
                <Sidebar showSideBar={showSideBar && !isLoginPage}/>
                <div className='body'>
                   {this.props.children}
                </div>
            
            </LayoutWrapper>
        )
    }
}

export default Layout