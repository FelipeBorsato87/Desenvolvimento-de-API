import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM tarefas";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO tarefas(`titulo`, `descricao`, `status`, `data_criacao`) VALUES(?)";

  const values = [
    req.body.titulo,
    req.body.descricao,
    req.body.status,
    req.body.data_criacao,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE tarefas SET `titulo` = ?, `descricao` = ?, `status` = ?, `data_criacao` = ? WHERE `id` = ?";

  const values = [
    req.body.titulo,
    req.body.descricao,
    req.body.status,
    req.body.data_criacao,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Tarefas atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM tarefas WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Tarefas deletado com sucesso.");
  });
};