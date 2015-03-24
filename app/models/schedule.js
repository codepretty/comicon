import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  time: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.attr('string')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            title: "Girls of Buffy",
            description: "with Cordelia Chase and others",
            time: "11:30",
            location: "Room ABC"
        },
        {
            id: 2,
            title: "Panel with Patrick Rothfuss",
            description: "about black magic systems",
            time: "1:00",
            location: "Room CC"
        },
        {
            id: 3,
            title: "Badasses on Firefly",
            description: "more badass women",
            time: "4:30",
            location: "Room 666"
        }
    ]
});
