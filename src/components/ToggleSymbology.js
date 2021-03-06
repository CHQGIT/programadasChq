import env from '../services/config';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Button, IconButton} from 'react-toolbox/lib/button';


const SymbologyImg = ({imagen}) => {
  return <div className="simbologia_container"><img src={imagen}></img></div>
}

//Componente que activa la simbologia.
class ToggleSymbology extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      img: env.CSSDIRECTORY+"images/symbology.png"
    }
  }

  runEffect(e){
    this.setState({img: ''});
    // get effect type from
     var selectedEffect = $( "#effectTypes" ).val();

     // Most effect types need no options passed by default
     var options = {};
     // some effects have required parameters
     if ( selectedEffect === "scale" ) {
       options = { percent: 50 };
     } else if ( selectedEffect === "size" ) {
       options = { to: { width: 200, height: 60 } };
     }

     // Run the effect
     $( "#effect" ).toggle( selectedEffect, options, 500 );

     if(e.currentTarget.id=="buttonToggler"){
       this.setState({img: env.CSSDIRECTORY+"images/symbology.png"})
     }
     if(e.currentTarget.id=="buttonToggler2"){
       this.setState({img: env.CSSDIRECTORY+"images/symbology2.png"})
     }

  }

  render(){
    var classN="toggler "+this.props.theClass;
    return (
      <div className={classN}>
        <div id="effect" className="ui-widget-content ui-corner-all">
           <SymbologyImg imagen={this.state.img}/>
        </div>

        <IconButton onClick={this.runEffect.bind(this)} id="buttonToggler" className="ui-state-default ui-corner-all" icon='power' accent />
        <IconButton onClick={this.runEffect.bind(this)} id="buttonToggler2" className="ui-state-default ui-corner-all" icon='time_to_leave' accent />

      </div>

    );
  }

}


export default ToggleSymbology;
