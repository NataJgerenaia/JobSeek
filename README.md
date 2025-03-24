[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ReTtYJWa)
# Vacancy website

You are building a job posting website. There are three types of users on the platform:  
1. Admins - managing the platform  
2. Companies posting vacancies  
3. Jobseekers searching and viewing vacancies  

The application should work in all major web browsers (chrome, safari, firefox, edge).  
Initially, there is a single admin user.  

Admins manage registered companies using the "company management" page. On the management page list of currently registered companies is displayed. Admin users can temporarily block the company and later reactivate it if required. Blocked company's vacancies are not visible to jobseekers on the vacancy listing page. All newly registered companies require initial approval by the admin, which is also done on this page.

A company employee can register his company on the platform using the company registration form.
The registration form for the company contains the following fields: company name, company tax id, employee email, employee name, and password.
After registering on the platform, the company employee can add, remove, or edit the company's vacancies using the vacancy management page.

The following information is required for adding a new vacancy: title, category (predefined list, dropdown, for example, information technologies), detailed description, publish date, and deadline date.
Company users can temporarily disable the vacancy and later enable it if required.

Jobseekers can register on the platform to search for and view vacancies from different companies. The following information is required for registration: name, last name, and email.
Jobseekers can search for vacancies from different companies using the vacancy search page. It should be possible to search vacancies by title (partial match), category (exact match), and company(typeahead dropdown). By clicking on vacancy in search results, the jobseeker navigates to the vacancy details page. The vacancy details page contains all information about the vacancy: title, category, description, publish date, and deadline date.

General notes:  
The landing page contains registration and sign-in page links for all types of users.  
The application should contain a header, footer, and navigation menu.  
The website header should display a name with greeting text and a signout button for an authenticated user.  
After signing in, the user is navigated to the home page, which has a dashboard with useful links and information.  
All lists containing potentially  more than ten items should use paging.  
All forms, except popups, should be linkable (bookmarkable).  
All descriptions may include formatted text and require a WYSIWYG editor.  
