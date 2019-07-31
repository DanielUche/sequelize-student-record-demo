const models = require('./models');

models.teacher
  .findOne({
    where: {
      id: 1,
    },
  })
  .then(res => {
    console.log(res);
  });
