module.exports = {
  app: [
    {
      name: "conaug",
      script: "node server.js",
      watch: true,
      ignore_watch: ["asset"],
      env: {
          "PORT": 3000,
          "NODE_ENV": "development",
          "CLIENTID":"",
          "CLIENTSECRET":"",
          "REFRESH_TOKEN":"",
          "domain":"http://localhost:4200/",
          "SECRET":"conaug__lalit__conaug__zxcvbnm",
          "USER": "me",
          "DATABASE": "api",
          "DBPORT": "5432",
          "PASSWORD": "password"
      },
      env_production: {
          "PORT": 3000,
          "NODE_ENV": "production",
          "CLIENTID":"",
          "CLIENTSECRET":"",
          "REFRESH_TOKEN":"",
          "domain":"http://localhost:4200/",
          "SECRET":"conaug__lalit__conaug__zxcvbnm",
          "USER": "me",
          "DATABASE": "api",
          "DBPORT": "5432",
          "PASSWORD": "password"
      }
    }
  ]
}
