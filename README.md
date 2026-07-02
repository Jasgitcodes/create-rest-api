# REST API Project

A simple Express-based REST API with CRUD endpoints for a task resource.

## Install dependencies

```bash
npm install
```

## Run the server

```bash
npm start
```

The server will start on http://localhost:3000.

## Endpoints

### GET /

Returns a welcome message.

Example response:

```json
{
  "message": "API is running"
}
```

### GET /data

Returns all tasks.

Example response:

```json
[
  {
    "id": 1,
    "title": "First task",
    "completed": false
  }
]
```

### POST /data

Creates a new task.

Example request:

```bash
curl -X POST http://localhost:3000/data \
  -H "Content-Type: application/json" \
  -d '{"title":"New task","completed":false}'
```

Example response:

```json
{
  "id": 4,
  "title": "New task",
  "completed": false
}
```

### GET /data/:id

Returns one task by ID.

### PUT /data/:id

Updates one task by ID.

### DELETE /data/:id

Deletes one task by ID.
