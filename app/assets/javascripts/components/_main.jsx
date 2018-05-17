class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {current_user: this.props.current_user};
  }

  handleClick() {
    console.log('this is:', this);
  }
  updateCurrentUser(user) {
      this.setState({
        current_user: user
      })      
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
        <div className="">            
            <Header current_user={this.state.current_user} />
            <Body 
                updateCurrentUser={this.updateCurrentUser} 
                current_user={this.state.current_user}  
                currentSong={this.props.currentSong}
                />
        </div>
    );
  }
}