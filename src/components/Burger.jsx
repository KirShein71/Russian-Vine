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
            <div className="bm-item" onClick={() => this.closeMenu()}>Каталог</div>
            </Link>
            <Link to="fullevents">
            <div className="bm-item"  onClick={() => this.closeMenu()}>Мероприятия</div>
            </Link>
            <Link to="/contact">
            < div className="bm-item"onClick={() => this.closeMenu()}>Контакты</div>
            </Link>
            <Link to="/reviews">
            <div className="bm-item" onClick={() => this.closeMenu()}>Отзывы</div>
            </Link>
          </Menu>
          
        </div>
      )
    }
  }

  export default Burger;