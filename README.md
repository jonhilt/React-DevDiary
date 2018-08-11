# React-DevDiary

## Quick start

Open up a terminal (e.g. in VS Code, or the command line in windows explorer).

Spin up the API.

``` powershell
.\backend
```

Spin up the react app.

```powershell
.\frontend
```

The front-end currently accesses the API via a hardcoded url (found in MyUsers.tsx).

``` javascript
const result = await fetch('https://localhost:5001/api/user');
```

You may need to access the api (defaults to https://localhost:5000) in your browser and add a security exception to permit requests to that url even though it doesn't have a valid certificate (just for testing locally).
