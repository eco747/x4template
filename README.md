# x4template

Basic template for a new X4 project.

## requirements

1. visual studio code
2. typescript compiler 
3. less compiler visual studio extension
4. typedoc if you want a documentation about your project
   npm install -g typedoc
5. terser to create production site
   npm install -g terser
6. serve the little http server
   npm install -g serve

## initialization

```sh
git clone https://github.com/eco747/x4template.git <your_folder_name>
cd <your_folder_name>
chmod +x ./scripts/init.sh
./scripts/init.sh
```

Now open your visual studio.

For the first run,
1. open src/main.less
2. open the run palette (Ctrl+Shift+P) and execute "compile LESS to CSS"

Now, when you want to work on your project,

1. build the project (Ctrl+Shift+B) and execute "npm run build" (this will start tsc in watch mode)
2. start the http server (Ctrl+Shift+B) and execute "npm run serve" (this will start the http server)  
   if this task is not present in the list, open a terminal and run 'npm run serve'
3. launch chrome (F5) and open developper tools (F12)

The main source is src/main.ts

## Documentation
- X4 repository is here: https://github.com/eco747/x4
- Demos are available here: https://github.com/eco747/x4demos
- generate documentation that will create a 'doc' folder
  ```
  npm run build_doc
  ```

## Production build
To build a production site, use mkprod, it will build a 'prod' folder
```
npm run mkprod
```



