// import { randomUUID } from "node:crypto"; -> otra opcion de generar ids
import express from "express";
import { require } from "./utils.js";

const users = require("./users.json");

const app = express();

let idCount = users.length;

// Middleware para parsear el body a json
app.use(express.json());

// Home de la API
app.get("/", (req, res) => {
  res.send("<h1>API REST de usuarios</h1>");
});

// Obtener todos los usuarios
app.get("/users", (req, res) => {
  // Si no hay usuarios
  if (users.length === 0) {
    return res.status(404).json({ error: "No hay usuarios" });
  }
  // Si hay usuarios
  return res.json(users);
});

// Obtener un usuario por su id
app.get("/users/:id", (req, res) => {
  // Obtener el id
  const id = parseInt(req.params.id);
  // Buscar el usuario con el mismo id que llaga por parametro con el metodo find
  const user = users.find((user) => user.id === id);
  // Si no hay usuario
  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }
  // Si hay usuario
  return res.json(user);
});

// Crear un usuario
app.post("/users", (req, res) => {
  if (!req.body.name || !req.body.email) {
    return res.status(400).json({ error: "Error en la peticion" });
  }
  const user = req.body;
  user.id = ++idCount;
  users.push(user);
  return res.status(201).json(user);
});

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});