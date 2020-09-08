import React, { Component } from 'react'
import DesktopNavBar from './DesktopNavBarFalse.js'
import MobileNavBar from './MobileNavBarFalse.js'
import styled from 'styled-components'

const MyNavBar = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;

    overflow-x: hidden;

`

export default class NavBar extends Component {

    state = {
        displayMobileNavBar: true
    }

    componentDidMount = () => { 
        window.addEventListener('resize', this.checkAndHideMobileNavBar)
    }

    componentWillUnmount = () => {
        window.addEventListener('resize', this.checkAndHideMobileNavBar)
    }

    toggleMobileNavBar =() => {
        this.setState( prevState => {
            return { displayMobileNavBar: !prevState.displayMobileNavBar }
        })
    }

    checkAndHideMobileNavBar = () => {
        const screenwidth = window.innerWidth
        if(this.state.displayMobileNavBar && screenwidth > 768){
            this.setState({
                ...this.state,
                displayMobileNavBar: false
            })
        }
    }

    render() {
        return (
            <MyNavBar>
                <DesktopNavBar 
                    displayMobileNavBar = {this.state.displayMobileNavBar}
                    toggleMobileNavBar = {this.toggleMobileNavBar}/>
                <MobileNavBar displayMobileNavBar = {this.state.displayMobileNavBar} toggleMobileNavBar = {this.toggleMobileNavBar} />
                
            </MyNavBar>
        )
    }
}
