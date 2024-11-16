import { Component, createRef } from "react";

class TouchPad extends Component{
    constructor(props){
        super(props);
        this.circleRef = createRef();
        this.state={
            isDragging:false
        }
    }

    calculateAngle(x, y, centerX, centerY) {
        const dx = x - centerX;
        const dy = y - centerY;
        let angle = Math.atan2(dy, dx) * (180 / Math.PI); // Convert to degrees
        if (angle < 0) angle += 360; // Keep angles positive
        return angle;
      }
    handlePointerDown=() =>{
        console.log('handlePointerDown');
        this.setState({
            isDragging:true
        });
    }

    handlePointerMove=(e) =>{
        console.log('handlePointerMove');
        if(!this.state.isDragging || this.props.menus.length == 0){
            return;
        }
        const rect = this.circleRef.current.getBoundingClientRect();
        
        const centerX = rect.left+rect.width/2;
        const centerY = rect.top+rect.height/2;
        const angle = this.calculateAngle(e.clientX,e.clientY,centerX,centerY);
        const segment = 360/this.props.menus.length;

        let selectedMenu = this.props.menus[Math.floor(angle/segment)];
       this.props.handleSelectedMenu(selectedMenu);

    }

    handlePointerUp =() =>{
        console.log('handlePointerUp');
        this.setState({
            isDragging:false
        });
    }

    render(){
        return (
          <>
           <div className="touchpad"
                ref={this.circleRef}
                onPointerDown={this.handlePointerDown}
                onPointerMove={this.handlePointerMove}
                onPointerUp={this.handlePointerUp}
            
            >
                <div className="touchpad-small" onClick={() =>{
                    this.setState({
                        isDragging:false
                    });
                    //this.props.handleIsComponenetRender(true);
                    this.props.handleIsComponenetRender();
                }}>
                    CLICK
                </div>

            </div>
          </>
           

        )
    }
}

export default TouchPad;