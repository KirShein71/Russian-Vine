import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";




class Burger extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        menuOpen: false
      }
    }
  
   
    handleStateChange (state) {
      this.setState({menuOpen: state.isOpen})  
    }
    
   
    closeMenu () {
      this.setState({menuOpen: false})
    }
  
   
    toggleMenu () {
      this.setState(state => ({menuOpen: !state.menuOpen}))
    }
  
    render () {
      return (
        <div className="burger">
          <Menu 
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
          >
            <Link to="/catalog">
            <a onClick={() => this.closeMenu()}>Каталог</a>
            </Link>
            <Link to="fullevents">
            <a onClick={() => this.closeMenu()}>Мероприятия</a>
            </Link>
            <Link to="/contact">
            <a onClick={() => this.closeMenu()}>Контакты</a>
            </Link>
            <Link to="/reviews">
            <a onClick={() => this.closeMenu()}>Отзывы</a>
            </Link>
          </Menu>
          
        </div>
      )
    }
  }

  export default Burger;