# inicializar el proyecto
npm init -y
# instalar dependencias
npm install express #framework de desarollo en node
npm install kenx    #para configuracion de la base de datos
npm install objection  #para instalar el orm de node
npm install mysql2    #para instalar la odbc  de Mysql

# instalar una libreria para levantar el servidor
npm install --save-dev nodemon

# com siguiente paso procedemos a generar un archuvi js
npx knex init 
# crear migrasiones 
npx knex migrate:make create_table_customer
PS C:\Cloud> npx knex migrate:latest
npm run migrate
# revertir cambios  
npx knex migrate:rollback
# para correr el la terminal usar npm 