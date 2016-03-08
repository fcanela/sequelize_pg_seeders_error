# How to reproduce this error?
* Copy config.json.example into config.json and fill it with valid connection data for a Postgres database.
* Migrate and try to populate with seeds. You have two options:

    * `npm start` will do both task for you
    * `./node_modules/.bin/sequelize db:migrate`
    
## Step 1: Migration (nothing interesting here)

The migration runs successfully.    
```
Sequelize [Node: 5.5.0, CLI: 2.3.1, ORM: 3.19.3]

Loaded configuration file "config.json".
Using environment "test".
Using gulpfile ~/workspace/tmp/bugenv/node_modules/sequelize-cli/lib/gulpfile.js
Starting 'db:migrate'...
Finished 'db:migrate' after 80 ms
== 20160302033657-create-table-activies: migrating =======
== 20160302033657-create-table-activies: migrated (0.238s)


> bugenv@1.0.0 seed /home/fcanela/workspace/tmp/bugenv
> sequelize db:seed:all
```
## Step 2: Seeders

Performing the seed task raises the following error:

```
Sequelize [Node: 5.5.0, CLI: 2.3.1, ORM: 3.19.3]

Loaded configuration file "config.json".
Using environment "test".
Using gulpfile ~/workspace/tmp/bugenv/node_modules/sequelize-cli/lib/gulpfile.js
Starting 'db:seed:all'...
Finished 'db:seed:all' after 73 ms
== 20160303020038-unnamed-seeder: migrating =======
Seed file failed with error: null value in column "id" violates not-null constraint
```