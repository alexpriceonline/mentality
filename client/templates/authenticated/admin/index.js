Template.adminIndex.onCreated(function() {
  this.subscribe('patients', Meteor.userId());
});

Template.adminIndex.helpers({
  patients() {
    return Meteor.users.find({ 'profile.counsellor._id': Meteor.userId() });
  }
});