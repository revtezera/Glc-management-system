class Body extends React.Component {
  render () {
  	console.log(this.props)
  	const { current_user} = this.props;
  	console.log(current_user)
    return (
      <div>
        <div>Email: {current_user["email"]}</div>
        <div>Created at: {current_user["created_at"]}</div>
        <User current_user={this.props.current_user} updateCurrentUser={this.updateCurrentUser} />
      </div>
    );
  }
}