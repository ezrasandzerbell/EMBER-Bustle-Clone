import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  image: DS.attr(),
  text: DS.attr(),
  timestamp: DS.attr(),
  title: DS.attr()
});
