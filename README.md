Install Node.js from below URL.
https://nodejs.org/en/download/

Open the commnad prompt in root directory.

Run the **"npm install"** command to install the dependencies.

Run the below command to run the tests in the open-mode.

**npx cypress open --env "BASEURL=APP_Url,EMAIL=User_Email,PASSWORD=User_Password"**

Run the below command to run the tests in the run-mode.

**npx cypress run --env "BASEURL=APP_Url,EMAIL=User_Email,PASSWORD=User_Password"**

**NOTE: If you have already specified BASEURL/EMAIL/PASSWORD in **cypress.env.json** file then you don't need to pass these with CLI command.**

Using **run** mode when test execution is completed then report file **"index.html"** is generated in the root directory of the project inside **"mochawesome-report"** folder.
