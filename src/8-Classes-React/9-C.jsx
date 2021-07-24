// 1- Way

render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
}

// 2- way
renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
}