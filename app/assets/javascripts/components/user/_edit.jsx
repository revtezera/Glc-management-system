class Edit extends React.Component {

  render() {
    var nameField = (this.props.current_user && this.props.current_user.name) ? this.props.current_user.name : <div>No name</div>
    return (
      <div>
        <div>Welcome</div>      
        <div className="side-listing-container">        
          
          <div className="pull-left user-content-container">
            <div>
              {nameField}
            </div>
  
            <div>
              {this.props.current_user ? this.props.current_user.email : ""}
            </div>
  
          </div>
  
          <div className="pull-left user-pic-container">
            <i className="fa fa-user" />
          </div>
        </div>
          
      </div>    
    )
   }
}