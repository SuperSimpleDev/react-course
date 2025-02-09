### Version of `npx create-vite`
Here's the version of create-vite we're going to use to set up React:
```bash
6.2.0
```

Here's the full command to set up React:
```bash
npx create-vite@6.2.0
```

### Version of React
1. Open `package.json` inside the `chatbot-project` folder.
2. Look for the `dependencies` section.
```json
"dependencies": {
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
},
```
3. If your version of `react` and `react-dom` starts with `19` or higher, you have the correct version of React. You don't need to update React.

4. If your version starts with `18`, run this command to update React:
```bash
npm install react@19 react-dom@19 @types/react@19 @types/react-dom@19
```
