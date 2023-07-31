<h1> Maax Cypress Test </h1>

## Clone code from repository

- Decide which directory you want to put the code.
- Open Git Bash or Windows Command Prompt and go to the directory you chose by command:
   ```
   cd <path_to_directory>
   ```
  where **<path_to_directory>** could either be a relative path or an absolute path.

- Clone code by command:
   ```
   git clone <repo_link>
   ```
  Where **<repo_link>** is the link of the repo which you can get on github by clicking the clone button located on the left sidebar.

  For the [main](https://github.com/shwetamathur2110/maax_cypress_automation.git) branch the command we use is:
   ```
   git clone https://github.com/shwetamathur2110/maax_cypress_automation.git
   ``` 

## Framework setup

- Open the project on any IDE    

- Open the **Terminal** in the IDE


- Install all the necessary packages from the root folder by using the below command
   ```
   npm install
   ```
  Type the command above in the **Terminal**.

## Running Cypress test cases

- To run the testcases via the cypress runner use the below command. Then select E2E Testing and chrome browser. Select each file for execution.
  ```
   npx cypress open
  ```

- To run all the testcases directly use the command
  ```
   npm run cypress:run
  ```  

**NOTE** A mochawesome report will be generated when all the testcases via terminal will be executed. A sample reports and videos are already been pushed in the branch   

Report link: [Mochawesome-report](https://github.com/shwetamathur2110/maax_cypress_automation/blob/main/cypress/report/index.html)
Video link: [Cypress-Video](https://github.com/shwetamathur2110/maax_cypress_automation/tree/main/cypress/report/videos)