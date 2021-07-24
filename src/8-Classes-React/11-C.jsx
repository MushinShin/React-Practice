// State change tell react with the setState propertie inherited from
// the component that the count is beeing changed.

handleIncrement = () => {
  this.setState({ count: this.state.count + 1 });
};
