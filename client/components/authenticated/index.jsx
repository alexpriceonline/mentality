Index = React.createClass({
	userIndex() {
		if (Meteor.user().profile.isAdmin) {
			return <AdminIndex />;
		} else {
			return <PatientIndex />;
		}
	},
	render() {
		return (
			<div>
				{this.userIndex()}
			</div>
		);
	}
});
