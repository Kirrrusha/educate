const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const db = require('./data/db.json');

server.use(middlewares);
server.use(jsonServer.bodyParser);

const clientError = require('./schemes/clientError');

server.get('/statuses', (req, res) => {
  const result = [
    {
      id: "GATE_BINDING",
      name: 'Привязка ворот'
    },
    {
      id: "VERIFICATION",
      name: 'Проверка документов'
    },
    {
      id: "TSD_TASK_CREATION",
      name: 'Создание задания ТСД'
    },
    {
      id: "IN_QUEUE",
      name: 'В очереди'
    },
    {
      id: "UNLOADING",
      name: 'Разгрузка'
    },
    {
      id: "RECEPTION",
      name: 'Приёмка'
    },
    {
      id: "CONFIRMATION",
      name: 'На утверждении'
    },
    {
      id: "RECEPTION",
      name: 'Отклонена'
    },
    {
      id: "RECEPTION",
      name: 'Утвердждена'
    }
  ];

  res.json(result)
})

server.listen(3030, function () {
  console.log('\x1b[33m%s\x1b[0m', 'JSON Server is running!');
});
