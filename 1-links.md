Links mentioned in each lesson of the React Course:

## Lesson 1
- Google Chrome installation instructions: https://github.com/SuperSimpleDev/installation-instructions/blob/main/google-chrome.md
- VSCode (Visual Studio Code) installation instructions: https://github.com/SuperSimpleDev/installation-instructions/blob/main/vscode.md
<br><br>
- JavaScript Full course: https://youtu.be/EerdGm-ehJQ
- HTML CSS Full course: https://youtu.be/G3e-cpL7ofc
<br><br>
- Starting code: https://supersimple.dev/react-basics
- External library example: https://unpkg.com/supersimpledev/external-library.js

## Lesson 2
- Chatbot project: https://supersimple.dev/projects/chatbot
<br><br>
- HTML CSS Full course: https://youtu.be/G3e-cpL7ofc
- JavaScript Full course: https://youtu.be/EerdGm-ehJQ
<br><br>
- Product images for the exercises:<br>
https://supersimple.dev/images/cotton-socks.png<br>
https://supersimple.dev/images/tennis-balls.png<br>
https://supersimple.dev/images/plain-t-shirt.png

## Lesson 3
- Chatbot external library: https://unpkg.com/supersimpledev/chatbot.js

## Lesson 4
- HTML CSS Full course: https://youtu.be/G3e-cpL7ofc

## Lesson 5
### How to Install NodeJS
Install the latest version of NodeJS:<br>
https://github.com/SuperSimpleDev/installation-instructions/blob/main/nodejs.md

**Note:** this course works with NodeJS version 20 or higher.<br>
To check your version of NodeJS, run the command `node -v` in your command line.<br>
If the version is lower than 20, you'll need to re-install a higher version of NodeJS.

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
**Note:** If you used npx create-vite `6.2.0` or higher, you have the correct version of
React and you can skip this step.

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

## Lesson 6
### Version of `npx create-vite`
[Click here](#version-of-npx-create-vite) to get the correct version of `npx-vite` to use.

### Install Git
[Click here](https://github.com/SuperSimpleDev/installation-instructions/blob/main/git.md) for instructions on installing Git.

### Starting code for Ecommerce Project
[Click here](https://github.com/SuperSimpleDev/ecommerce-project) to download the starting code.

### Version of `react-router`
Here's the version of react-router we use:
```bash
7.1.5
```

Here's the full command to install react-router:
```bash
npm install react-router@7.1.5
```

### `react-router` documentation
https://reactrouter.com/7.1.5/start/library/routing

## Lesson 7
Ecommerce Backend: https://github.com/supersimpledev/ecommerce-backend-ai

Ecommerce Backend Documentation: https://github.com/SuperSimpleDev/ecommerce-backend-ai/blob/main/documentation.md

Create the Ecommerce Backend with AI: https://youtu.be/vBprybSmJs8

### Version of `axios`
Here's the version of axios we use:
```bash
1.8.4
```

Here's the full command to install axios:
```bash
npm install axios@1.8.4
```

### Version of `dayjs`
Here's the version of dayjs we use:
```bash
1.11.13
```

Here's the full command to install dayjs:
```bash
npm install dayjs@1.11.13
```

## Lesson 8
Ecommerce Backend Documentation: https://github.com/SuperSimpleDev/ecommerce-backend-ai/blob/main/documentation.md

## Lesson 9
### Version of `vitest`
Here's the version of vitest we use:
```bash
3.1.2
```

Here's the full command to install vitest:
```bash
npm install --save-dev vitest@3.1.2
```

### Install Packages for Integration Tests
```bash
npm install --save-dev @testing-library/react@16.3.0 @testing-library/jest-dom@6.6.3 @testing-library/user-event@14.6.1 jsdom@26.1.0
```

### vitest.config.js Code
```js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.js',
  }
});
```

### setupTests.js Code
```js
import '@testing-library/jest-dom';
```

## Lesson 10
Ecommerce Backend (Updated): https://github.com/supersimpledev/ecommerce-backend-ai

Link to AWS: https://aws.amazon.com

AWS Free Tier: https://aws.amazon.com/free

[AWS Troubleshooting Guide](2-troubleshooting.md#lesson-10)

Backend Overview: https://youtu.be/XBu54nfzxAQ

Put an HTML Website on the Internet: https://youtu.be/p1QU3kLFPdg

Namecheap: https://namecheap.pxf.io/jeDGga <br>
(This is an affiliate link. If you buy a domain using this link, part of your purchase will support SuperSimpleDev. Thank you!)

## Lesson 11
Updates in React 19: https://react.dev/blog/2024/12/05/react-19

### Set Up React Compiler
1. Make sure the command line is running in `ecommerce-project` (you may need to `cd ecommerce-project`).
Install the React Compiler npm package:
```bash
npm install --save-dev babel-plugin-react-compiler@rc
```

2. Copy this react config:
```js
react({
  babel: {
    plugins: [['babel-plugin-react-compiler', { target: '19' }]],
  },
})
```

3. Update the react config in `vite.config.js`:
```js
export default defineConfig({
  /* Replace the default react config:
  plugins: [react()]
  */

  // With the react config you copied above, like this:
  plugins: [react({
    babel: {
      plugins: [['babel-plugin-react-compiler', { target: '19' }]],
    },
  })],

  ...
})
```

### Check if React Compiler is Working
1. Start the backend using `npm run dev`.
2. Start the frontend using `npm run dev`.
3. Install the [React DevTools Chrome extension](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).
4. In your project (open the URL provided by Vite in the browser), open the Console, and open the "Components" tab.
5. If there's a badge beside the components called "Memo ✨" the React Compiler is working.

### Version of `npx create-vite`
Here's the version of create-vite we're going to use to set up TypeScript React:
```bash
6.5.0
```

Here's the full command to set up TypeScript React:
```bash
npx create-vite@6.5.0
```

### Other Links
Create GitHub account for GitHub Copilot: https://github.com
