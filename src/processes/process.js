

var processes = {
  CleverDripper: {
    name: 'Clever Dripper',
    steps: [
      {
        key: 1,
        description:'20 second bloom with 75 to 100 g water at 205 deg f',
        time: 20
      },
      {
        key: 2,
        description:'stir 5 times over the next 15 seconds',
        time: 15
      },
      {
        key: 3,
        description:'complete pour to a total of 365g, stir 5x and cover',
        time: 85
      },
      {
        key: 4,
        description:'drop at 2:00 aiming for a total brew time of 3:30',
        time: 90
      },
      {
        key: 5,
        description:'Clean up and savor a delicious brew',
        time: 0
      }
    ]
  },
  FrenchPress: {
    name: 'French Press',
    steps: [
      {
        key: 1,
        description:'preheat the press by rinsing with hot water',
        time: 0
      },
      {
        key: 2,
        description:'discard the hot water and add 38g coarsely ground coffee',
        time: 15
      },
      {
        key: 3,
        description:'pour 600g water at 205 deg f',
        time: 60
      },
      {
        key: 4,
        description:'break the Crust formed on top & gently stir 2x',
        time: 15
      },
      {
        key: 5,
        description:'Cover with lid and steep for 2:30',
        time: 150
      },
      {
        key: 6,
        description:'Skim Grounds off the surface with a spoon',
        time: 15
      },
      {
        key: 6,
        description:'Push down plunger with steady, even pressure',
        time: 15
      },
      {
        key: 6,
        description:'Immediatly pour all coffee into mugs and enjoy',
        time: 0
      }
    ]
  },

};


export default processes;
