import { Component } from "react";
import Gallery from "./menuComponents/Gallery";
import Music from "./menuComponents/Music";
import Setting from "./menuComponents/Setting";
import Games from "./menuComponents/Games";

class ComponentRender extends Component{
    render(){
        const {selectedMenu} = this.props;
        if(selectedMenu == "gallery"){
           return  <Gallery/>
        }
        if(selectedMenu == "games"){
            return  <Games/>
         }
         if(selectedMenu == "music"){
            return  <Music/>
         }
         if(selectedMenu == "setting"){
            return  <Setting/>
         }
    }
}

export default ComponentRender;