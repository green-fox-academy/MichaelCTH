var car = {
  model: 'Benz',
  color: 'black',
  year: 1886,
  doors: 0,
  historical: true,
};

const {
  model,
  color,
  year,
  doors,
  historical,
} = car;

var computer = {
  type: 'PC',
  monitor: {
    color: 'black',
    size: '16\"',
    HDMI: true,
    VGA: true,
  },
  tower: {
    color: 'grey',
    CPU: 4.7,
    memory: 16,
    SSD: 128,
  },
};

const {
  type,
  monitor: {
    color: monitorColor,
    size,
    HDMI,
    VGA,
  },
  tower: {
    color: towerColor,
    CPI,
    memory,
    SSD,
  },
} = computer;
