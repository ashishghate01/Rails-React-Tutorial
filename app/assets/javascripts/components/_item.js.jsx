var Item = React.createClass({
	getInitialState(){
		return{editable: false}
	},
	handleEdit(){
		if(this.state.editable){
			var id = this.props.item.id;
			var name = this.refs.name.value;
			var description = this.refs.description.value;
			var item = {id: id, name: name, description: description};
			this.props.handleUpdate(item);
		}
		this.setState({editable: !this.state.editable})
	},
	render(){
		var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
		var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} /> : <h3>{this.props.item.description}</h3>;
		return(
			<div>
				{name}
				{description}
				<button onClick={this.props.handleDelete}>Delete</button>
				<button onClick={this.handleEdit}>Edit</button>
			</div>
		)
	}
});