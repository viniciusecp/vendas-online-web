```console
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-simple-import-sort pre-commit prettier
```

```json
{ 
  "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
  "eslint.validate": [ "javascript" ]
}
```

Criar:
  - .eslintrc.js
  - .prettierrc.js

Remove do package.json:
```json
  "private": true,
  "type": "module",
```

Atentar a pasta .vscode criada.

Configura o pre-commit no package.json