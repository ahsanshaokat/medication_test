var React = require('react');

class MedicationData extends React.Component {
  render() {
    const divStyle = {
      fontSize: '20px',
      width: '100px'
    }
    return (
      <div style={divStyle}>{this.props.medicine}</div>
    )
  }
}

export default MedicationData