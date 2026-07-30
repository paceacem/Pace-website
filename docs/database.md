# Future Database Schema Notes

> Note: Currently using local static JSON (`data/*.json`).

## Planned Collections / Tables

### Members
```json
{
  "id": "number",
  "name": "string",
  "role": "string",
  "category": "executive | member",
  "photo": "string",
  "department": "string"
}
```

### Events
```json
{
  "id": "string",
  "title": "string",
  "date": "string",
  "location": "string",
  "category": "string",
  "status": "string",
  "description": "string",
  "isPlaceholder": "boolean"
}
```

### Projects
```json
{
  "id": "string",
  "title": "string",
  "category": "string",
  "status": "string",
  "description": "string",
  "techStack": ["array of strings"]
}
```
