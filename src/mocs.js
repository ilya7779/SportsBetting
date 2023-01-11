import {Model, Server} from "miragejs";

const events = [
  {
    id: 1,
    status: "upcoming",
    team1: "Реал Мадрид",
    team2: "Манчестер Юнайтед",
    date: "11.01.2023 19:00",
    coefficients: { draw: 1.7, win1: 2.3, win2: 1.3 }
  },
  {
    id: 2,
    status: "running",
    team1: "Бавария",
    team2: "Барселона",
    date: "11.01.2023 19:00",
    coefficients: { draw: 1.7, win1: 2.3, win2: 1.3 }
  },
  {
    id: 3,
    status: "upcoming",
    team1: "Бавария",
    team2: "Барселона",
    date: "11.01.2023 19:00",
    coefficients: { draw: 1.7, win1: 2.3, win2: 1.3 }
  },
  {
    id: 4,
    status: "upcoming",
    team1: "Бавария",
    team2: "Барселона",
    date: "11.01.2023 19:00",
    coefficients: { draw: 1.7, win1: 2.3, win2: 1.3 }
  },
  {
    id: 5,
    status: "upcoming",
    team1: "Бавария",
    team2: "Барселона",
    date: "11.01.2023 19:00",
    coefficients: { draw: 1.7, win1: 2.3, win2: 1.3 }
  },
  {
    id: 6,
    status: "running",
    team1: "Бавария",
    team2: "Барселона",
    date: "11.01.2023 19:00",
    coefficients: { draw: 1.7, win1: 2.3, win2: 1.3 }
  },
  {
    id: 7,
    status: "upcoming",
    team1: "Бавария",
    team2: "Барселона",
    date: "11.01.2023 19:00",
    coefficients: { draw: 1.7, win1: 2.3, win2: 1.3 }
  },
  {
    id: 8,
    status: "running",
    team1: "Бавария",
    team2: "Барселона",
    date: "11.01.2023 19:00",
    coefficients: { draw: 1.7, win1: 2.3, win2: 1.3 }
  },
];

const server = {
  models: {
    event: Model
  },

  seeds(server) {
    events.forEach((event) => {
      server.create("event", event);
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/events", (schema) => {
      return schema.events.all();
    });

    this.get("/events/:id", (schema, request) => {
      const id = request.params.id;
      return schema.events.find(id);
    });
  }
};

new Server(server);