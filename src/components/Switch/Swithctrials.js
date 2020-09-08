import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Switch.css'

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: '0px',
    margin: '0px',
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

class CustomizedSwitches extends Component {
  constructor(props){
        super(props)
    
        this.state = {
          checkedA: true,
          checkedB: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.sendData = this.sendData.bind(this)
        this.sendData2 = this.sendData2.bind(this)
    }
    
      async handleChange(event) {
        await this.setState({ ...this.state, checkedA: event.target.checked });
        await this.sendData()
      };
      async handleChange2(event) {
        await this.setState({ ...this.state, checkedB: event.target.checked });
        await this.sendData2()
      };
    
      async sendData(layerState) {
        layerState = this.state.checkedA
        await this.props.parentCallBack.Red(layerState);
        await console.log("lo que manda data:", layerState)
        };
    
        async sendData2(layerState) {
          layerState = this.state.checkedB
          await this.props.parentCallBack.Green(layerState);
          await console.log("lo que manda data2:", layerState)
          };
render(){
  return (
    <div className="SwitchContainer"> 
      <FormGroup>
        <div className="Line">
            <Icon className="Icon" style={{ color: '#ff5630' }}>circle</Icon>
            <p className="Text">Zonas de alto riesgo de contagio</p>
            <FormControlLabel style={{ margin: '0px', padding: '0px', paddingLeft: '5px'}}
                control={<IOSSwitch checked={this.state.checkedA} onChange={(event) => this.handleChange(event)} name="checkedA" className="Btn" style={{ margin: '0px' }}/>}
            />
        </div> 
          <div className="Line">
            <Icon className="Icon" style={{ color: '#00b8d9' }}>circle</Icon>
            <p className="Text">Zonas a mantener a salvo</p>
            <FormControlLabel style={{ margin: '0px', padding: '0px', paddingLeft: '48px'}}
                control={<IOSSwitch checked={this.state.checkedB} onChange={(event) => this.handleChange2(event)} name="checkedB" className="Btn" />}
            />
          </div>
      </FormGroup>
        
    </div>
  );
}
}

export default CustomizedSwitches