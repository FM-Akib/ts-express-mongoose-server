# Advanced Project Setup with MongoDB, Mongoose, Express, and TypeScript 🚀

A complete starter template for building Node.js applications with Express, TypeScript, MongoDB, and essential development tools.

## Technologies Used
- Express.js
- TypeScript
- MongoDB with Mongoose
- ESLint & Prettier
- Development utilities (ts-node-dev)

## Quick Start

```bash
# Clone the repository (if using git)
git clone <repository-url>

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start development server
npm run start:dev
```

Let’s get started! 🛠️
Follow these steps to set up and run the project.
---

### 1. Initialize the Project

1. Create a new folder named `server-starter` and navigate into it.
   ```bash
   mkdir server-starter
   cd server-starter
   ```

2. Initialize the project:
   ```bash
   npm init -y
   ```
   This will create a `package.json` file.

---

### 2. Install Dependencies

Install the required dependencies:

```bash
npm install express mongoose cors dotenv
npm install typescript --save-dev
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

---

### 3. Configure TypeScript

1. Initialize TypeScript:
   ```bash
   npx tsc --init
   ```

2. Update the `tsconfig.json` file:
   ```json
   {
     "compilerOptions": {
       "outDir": "dist",
       "rootDir": "src",
       "target": "ES2020",
       "module": "CommonJS",
       "noImplicitAny": true
     },
     "include": ["src"],
     "exclude": ["node_modules"]
   }
   ```

---

### 4. Configure ESLint

1. Initialize ESLint:
   ```bash
   npx eslint --init
   ```

   Use these options:
   - To check syntax, find problems, and enforce code style
   - JavaScript modules (import/export)
   - None of these (frameworks)
   - Yes (using TypeScript)
   - Node
   - JSON

2. Update the `.eslintrc.json` file:
   ```json
   {
     "env": {
       "browser": true,
       "es2021": true,
       "node": true
     },
     "extends": [
       "eslint:recommended",
       "plugin:@typescript-eslint/recommended",
       "prettier"
     ],
     "parser": "@typescript-eslint/parser",
     "parserOptions": {
       "ecmaVersion": 12,
       "sourceType": "module"
     },
     "plugins": ["@typescript-eslint"],
     "rules": {
       "eqeqeq": "error",
       "no-unused-vars": "error",
       "prefer-const": ["error", { "ignoreReadBeforeAssign": true }]
     }
   }
   ```

3. Create an `.eslintignore` file:
   ```plaintext
   node_modules
   dist
   ```

---

### 5. Configure Prettier

1. Create a `.prettierrc.json` file:
   ```json
   {
     "semi": true,
     "singleQuote": true,
     "arrowParens": "avoid"
   }
   ```

2. Create a `.prettierignore` file:
   ```plaintext
   node_modules
   dist
   ```

3. Integrate Prettier with ESLint:
   ```bash
   npm install eslint-plugin-prettier eslint-config-prettier --save-dev
   ```

   Update `.eslintrc.json`:
   ```json
   {
     "extends": [
       "eslint:recommended",
       "plugin:@typescript-eslint/recommended",
       "prettier"
     ],
     "plugins": ["prettier"],
     "rules": {
       "prettier/prettier": "error"
     }
   }
   ```

---

### 6. Add Scripts to `package.json`

Update the `scripts` section:

```json
"scripts": {
  "lint": "eslint src --ext .ts",
  "lint:fix": "eslint src --ext .ts --fix",
  "prettier": "prettier --write \"src/**/*.+(js|ts|json)\"",
  "dev": "tsc --watch",
  "build": "tsc",
  "start:dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "start:prod": "node ./dist/server.js"
}
```

---

### 7. Run the Project

#### Compile TypeScript Code

```bash
npm run build
```

#### Run in Development Mode

```bash
npm run start:dev
```

#### Run in Production Mode

```bash
npm run start:prod
```

#### Lint Code

```bash
npm run lint
```

#### Format Code

```bash
npm run format
```

---

### Tools and References

- **Express**: [Documentation](https://expressjs.com/)
- **Mongoose**: [Documentation](https://mongoosejs.com/docs/index.html)
- **TypeScript**: [Documentation](https://www.typescriptlang.org/download)
- **ESLint**: [Documentation](https://eslint.org/)
- **Prettier**: [Documentation](https://prettier.io/)

---

Your server setup is complete with linting and formatting configured. Happy coding!

