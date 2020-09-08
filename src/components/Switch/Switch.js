// import React, {Component} from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import { purple } from '@material-ui/core/colors';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import Icon from '@material-ui/core/Icon';
// import './Switch.css'
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { Paper } from '@material-ui/core';

// const RiesgoSwitch = withStyles({
//   root: {
//     width: 42,
//     height: 26,
//     padding: 0,
//     margin: 'none'
//   },
//   switchBase: {
//     padding: 1,
//     '&$checked': {
//       transform: 'translateX(16px)',
//       color: theme.palette.common.white,
//       '& + $track': {
//         backgroundColor: '#52d869',
//         opacity: 1,
//         border: 'none',
//       },
//     },
//     '&$focusVisible $thumb': {
//       color: '#52d869',
//       border: '6px solid #fff',
//     },
//   },
//   thumb: {
//     width: 24,
//     height: 24,
//   },
//   track: {
//     borderRadius: 26 / 2,
//     border: `1px solid ${theme.palette.grey[400]}`,
//     backgroundColor: theme.palette.grey[50],
//     opacity: 1,
//     transition: theme.transitions.create(['background-color', 'border']),
//   },
//   checked: {},
//   focusVisible: {},
// })(Switch);

// class Switches extends Component{
//   constructor(props){
//     super(props)

//     this.state = {
//       checkedA: true,
//       checkedB: true
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleChange2 = this.handleChange2.bind(this)
//     this.sendData = this.sendData.bind(this)
//     this.sendData2 = this.sendData2.bind(this)
// }

//   async handleChange(event) {
//     await this.setState({ ...this.state, checkedA: event.target.checked });
//     await this.sendData()
//   };
//   async handleChange2(event) {
//     await this.setState({ ...this.state, checkedB: event.target.checked });
//     await this.sendData2()
//   };

//   async sendData(layerState) {
//     layerState = this.state.checkedA
//     await this.props.parentCallBack.Circle(layerState);
//     await console.log(layerState)
//     };

//     async sendData2(layerState) {
//       layerState = this.state.checkedB
//       await this.props.parentCallBack.Route(layerState);
//       await console.log("lo que manda data2:", layerState)
//       };
  
// render(){
//   return (
//     <Paper variant="outlined" square>
//       <FormGroup>
//         <div className="Cuidado">
//           <div><Icon className="Icon" style={{ color: '#f73378' }}>circle</Icon></div>
//           <p>Puntos de alto riesgo de contagio</p>
//           <FormControlLabel
//             control={<RiesgoSwitch checked={this.state.checkedA} onChange={this.handleChange} name="checkedA" />}
//           />
//         </div>
//         <div className="Cuidado">
//           <div><Icon className="Icon" style={{ color: '#00bcd4' }}>circle</Icon></div>
//           <p>Zonas a mantener a salvo</p>
//           <FormControlLabel
//             control={<RiesgoSwitch checked={this.state.checkedB} onChange={this.handleChange2} name="checkedB" className="CuidadoSwitch"/>}
//           />
//         </div>
//       </FormGroup>
//     </Paper>
//   );
// }
// }

// export default Switches