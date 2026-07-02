import express from "express";

const router = express.Router();
const items = [
  { id: 1, title: "First task", completed: false },
  { id: 2, title: "Second task", completed: true },
  { id: 3, title: "Third task", completed: false },
];

let nextId = items.length + 1;

router.get("/", (req, res) => {
  res.json(items);
});

router.post("/", (req, res) => {
  const { title, completed = false } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({ error: "Title is required" });
  }

  const newItem = { id: nextId++, title, completed };
  items.push(newItem);

  return res.status(201).json(newItem);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = items.find((entry) => entry.id === id);

  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  return res.json(item);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = items.find((entry) => entry.id === id);

  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  const { title, completed } = req.body;
  if (title !== undefined) item.title = title;
  if (completed !== undefined) item.completed = completed;

  return res.json(item);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = items.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  items.splice(index, 1);
  return res.status(204).send();
});

export default router;
