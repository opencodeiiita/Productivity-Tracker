## **Contribution:**

Please follow the below guidelines while contributing to the backend of this project:

Get Google Client ID and Google Client Secret by solving [Issue #13](https://github.com/opencodeiiita/Productivity-Tracker/issues/13) first

Add /backend/config/keys.js file in the following format :
`
module.exports = {
    google : {
        clientId : '***********',
        clientSecret : '***********'
    },
    session : {
        cookieKey : "somesecretsauce"
    }
}
`

In place of ***********, add Get Google Client ID and Google Client Secret obtained in the above step

Also make sure that mongoDB is installed and running PORT 27017

In this directory
1. Run the following command `npm install`.
2. Run the command `npm start`. The backend will be live on [localhost:5000](localhost:5000)
3. Do the work and commit changes with good commit messages.
4. Once you are confident in your work, create a pull request to the `main` branch of the upstream repository with proper descriptions explaining what you did and wait until we review it.
