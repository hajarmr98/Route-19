import React, { Component } from 'react'
import DesktopNavBar from './DesktopNavBar'
import MobileNavBar from './MobileNavBar'
import styled from 'styled-components'
import { MenuContextProvider } from '../../contexts/ToggleMenu.js'

const MyNavBar = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
`

export default class NavBar extends Component {
    constructor(props){
        super(props)
            this.state = {
                displayMobileNavBar: false
            }
}

    componentDidMount = () => { 
        window.addEventListener('resize', this.checkAndHideMobileNavBar)
    }

    componentWillUnmount = () => {
        window.addEventListener('resize', this.checkAndHideMobileNavBar)
    }

    toggleMobileNavBar =() => {
        this.setState( prevState => {
            console.log(this.state.displayMobileNavBar)
            if(this.props.mode != 10){
                return { displayMobileNavBar: !prevState.displayMobileNavBar }
            }
        })
    }

    checkAndHideMobileNavBar = () => {
        const screenwidth = window.innerWidth
        if(this.state.displayMobileNavBar && screenwidth > 768){
            this.setState({
                ...this.state,
                displayMobileNavBar: true
            })
            
        }
    }

    render() {
        return (
            <MyNavBar>
                <DesktopNavBar 
                    displayMobileNavBar = {this.state.displayMobileNavBar}
                    toggleMobileNavBar = {this.toggleMobileNavBar}
                    mode ={this.props.mode}/>
                <MenuContextProvider value={{ displayMovileNavBar: this.state.displayMobileNavBar,
                    toggleHandler: this.toggleMobileNavBar, mode: this.props.mode}}>
                <MobileNavBar displayMobileNavBar = {this.state.displayMobileNavBar} toggleMobileNavBar = {this.toggleMobileNavBar} mode={this.props.mode}/>
                </MenuContextProvider>
            </MyNavBar>
        )
    }
}
