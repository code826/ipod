import { Component } from "react";
import Gallery from "./menuComponents/Gallery";
import Games from "./menuComponents/Games";
import Default from "./Default";
import TouchPad from "./TouchPad";
import ComponentRender from "./ComponentRender";

class App extends Component{
  constructor(){
    super();
    this.state = {
      menus:[
        "games",
        "gallery",
        "music",
        "setting"
      ],
      selectedMenu:null,
      isComponentRender:false
    }
  }
  handleSelectedMenu = (menu) =>{
    this.setState({
      selectedMenu:menu
    });
  }
  handleIsComponenetRender = (val) =>{
    console.log('val',val);
    this.setState({
      isComponentRender:val == undefined ? !this.state.isComponentRender:val
    });
  }
  

  render(){
    const {menus} =this.state;
    if(!menus || menus.length == 0){
      return (
        <Default/>
      )
    }
    return (
     <>
     <div  id="touchpad-div">
     {this.state.isComponentRender ? <ComponentRender selectedMenu = {this.state.selectedMenu}/>:   (
     
     <div className="menu-list">
         {menus.map((item) =>{
             return (
                 <div key={item} className={this.state.selectedMenu == item?"selected menu":"menu"}>
                     <span >{item}</span>
                 </div>
             )
         })}
     </div>

)
}
<TouchPad menus = {this.state.menus} handleSelectedMenu={this.handleSelectedMenu} handleIsComponenetRender = {this.handleIsComponenetRender} />


     </div>
    
     </>
    )
  }
}

export default App;