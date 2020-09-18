# ReactJS-CRUD-Auth-With-AdonidJS

 ## Setup For AdonisJs(Backend Folder)
 
# if AdonisJs already installed in your machine to skip this step
```bash
npm i -g @adonisjs/cli
```
Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.
1) Create a DB in mysql which is name is todolist
2) Last step migrat 
```js
adonis migration:run
```
3) start server 
```js
adonis serve --dev
```
