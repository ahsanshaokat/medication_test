var React = require('react');

 class BGLPlanComponent extends React.Component {
  render() {
    const divStyle = {
      fontSize: '20px',
      width: '100px'
    }
    return (
      <div style={divStyle}>{this.props.patientId}</div>
    )
  }
}

export default BGLPlanComponent;