Main Folder: JobSeek
Instructions:

1.	In the terminal, run:
json-server --watch db.json --port 3000
2.	Install Angular Compiler:
npm install @angular/compiler --save-dev

Database Details (db.json):
1.	/users - For registered companies and registered job seekers.
2.	/vacancies - For posted vacancies.

On localhost:4200:
There is a main page with a welcoming message, where you can choose your role.
Once you select your role (Job Seeker or Company), you will see buttons for registration or login.
If you choose "Admin," you can only log in.

Admin Login Details:
Email: Admin@gmail.com
Password: Adminadmin987654321

After logging in, the Admin Panel allows you to manage registered companies and their posted vacancies.

For Companies:
If you select "Company Registration," you will be directed to the registration page.
After successful registration, you can access the Company Page to post vacancies.
Alternatively, if you choose "Log In," you will be redirected to the same Company Page.

For Job Seekers:
If you select "Seeker Registration," you will be directed to the registration page.
After successful registration, you can access the Seeker Page to view vacancies.
Alternatively, if you choose "Log In," you will be redirected to the same Seeker Page.

