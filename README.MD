<h1>DTrack - Job Application Tracker</h1>
<p>Check out the deployed application: https://dtrack.website/</p>

<h2>Project Summary</h2>

DTrack is a web application designed to help job seekers track their job applications throughout the job search process. With DTrack, users can easily log and organize all of their job applications in one place, allowing them to stay on top of their progress and never miss an opportunity. 
DTrack features a user-friendly interface with a dashboard displaying a summary of job application progress, as well as detailed views for individual applications. Users can track application deadlines, submission dates, interview schedules, and other key information. Additionally, DTrack provides users with valuable insights into their job search, including statistics on the number of applications submitted, response rates, and other relevant metrics. 
With DTrack, users have a powerful tool to manage their job search, saving time and reducing stress. Whether a recent graduate or a student looking for internships, DTrack is the perfect solution to streamline the job search process and help users land their dream job.

<h2>Significance</h2>

DTrack is a web application that addresses a major pain point for job seekers. With so many job openings and applications to keep track of, it can be challenging to stay organized throughout the job search process. DTrack streamlines this process and provides users with a simple and effective tool for tracking and managing their job applications.
The significance of DTrack lies in its ability to reduce stress and save time for job seekers. By providing a central platform for tracking job applications, users can avoid the confusion and frustration that comes with managing multiple spreadsheets or paper documents. DTrack also provides users with valuable insights into their job search, allowing them to make data-driven decisions about where to focus their efforts and improve their chances of success.
In addition, DTrack promotes transparency and accountability in the job search process. Users can easily see which companies they have applied to and when making it easier to follow up and stay engaged with potential employers. This helps to build stronger relationships and ultimately leads to better job opportunities and career growth.
This application is complex and involves various challenging tasks such as establishing a connection with a remote database, executing web requests, managing entries and information within the application and designing an intuitive user interface. It is worth noting that a significant portion of the project scope is not directly related to the material taught in DePauw's computer science department but rather leverages knowledge gained through online courses.

<h2>Project Specifications</h2>
<h5>Functional Specifications:</h5>

1.	User Registration: Users can register for the DTrack application using a registration page. They will need to provide their name, email, password, and other personal details that will be stored in the MongoDB database.
2.	User Authentication: Users can log into the DTrack application using their email and password. Once authenticated, they have access to their dashboard where they can view and manage their job applications. DTrack has proper security measures in place to protect user data and prevent unauthorized access. User passwords will be hashed and stored securely. The authentication and authorization process will be implemented using JWT tokens. Only authorized users will be able to access the features of the application.
3.	Job Applications: Users can add and manage their job applications by providing relevant information such as job title, company name, application status, application date, and job type. The information is stored in the MongoDB database. There is pagination to improve performance, enhance user experience and reduce server load.
4.	Application Tracking: Users can track the status of their job applications, whether they have received an interview request, a rejection, or an offer. This information is stored in the database and is accessible to the user.
5.	Dashboard: Users have a personalized dashboard where they can view their job applications, including the application status and any relevant notes. The dashboard also displays a summary of their job application statistics, such as the number of applications submitted, interviews requested and offers received.
6.	Application Search: Users have access to a search feature where they can search for jobs that they applied to by providing relevant keywords. The search results are be displayed using an API between the front end (React) and the back end (Express) and will be fetched from the database client.
7.	Deployment: The application is deployed to a cloud-based service called "Render" and will be accessible to users from any location.

<h5>User Interface Specifications:</h5>

 DTrack user interface consists of a responsive and intuitive design that allows users to easily navigate and interact with the application. The UI is built using Bootstrap CSS and React.js to ensure a modern and efficient user experience.
Upon accessing the application, users are taken to a landing page, where they would be presented with register/login button. The registration page will feature input boxes for personal information, such as name and contact details. After logging in, the user is directed to the main dashboard, which consists of a header with the DTrack logo and a summary of their job application statistics. The header also show the name of the user that is logged in, and there is a logout button built into the header itself.
On the navigation bar / side bar, users have the following options: 
1)	Dashboard: Users can see a summary of their job application process here – Number of applications still in Process, Number of Rejections, and Number of Applications where an interview has been scheduled.
2)	All Records: This page is a lookup form to search for certain jobs with keywords.
3)	Add a Record: Users can add a new record/entry with fields like Position Title, Company Name, Status of Job Application, Job Location, etc.

<h2>Technical Details</h2>
DTrack is implemented as a full-stack web application using the MERN stack (MongoDB Atlas, Express.js, React, and Node.js). The application consists of two major components, the front end, and the back end.
The front end is developed using React.js, with a user-friendly interface that enables users to view and post classifieds, view contact information, and manage their own posts. The back end is implemented using Node.js and Express.js, providing a RESTful API for handling CRUD operations on the MongoDB database.
The MongoDB database is used to store job application entries posted by the users, including details such as title, description, category, and contact information. A formal database schema has been created to define the data structure, with relationships between entities modeled using Mongoose. 
To ensure the security of the application, user authentication and authorization are implemented, with sessions stored using the Express-session middleware. User passwords are be hashed and salted using bcrypt.js. 
The web application is hosted on a cloud-based platform called "Render", with automated deployments using a continuous integration and continuous deployment (CI/CD) pipeline. 

<h2>Deviations from the Original Proposal & Justifications</h2>
	
During the course of the project, I made several changes to the original proposal in response to a better understanding of the user needs and the technical feasibility. Here is a list of those changes:

1.	User Profile Page: I added a profile page to enhance the personalization of the user experience. This page stores basic user information such as name, email, phone number, and current position. This helps users customize their experience and allows the application to tailor the application's suggestions and tools to the individual user's needs.
2.	Demo Login: Recognizing the potential hesitation users might have in signing up for a new application, I implemented a demo login feature. This allows potential users to test the app without having to sign up first, providing a risk-free way for them to assess the application's utility.
3.	Data Visualization: I recognized that the ability to visualize job application progress could significantly enhance user understanding and decision-making. Therefore, I incorporated a bar chart and an area chart to present users' job application data in a visually engaging and insightful manner.
4.	Sorting and Filtering: To further increase the application's usability, I added a feature that allows users to sort and filter their searches. This feature gives users more control over how they view their data, enabling them to find specific applications, identify trends, and focus on particular aspects of their job search more efficiently.


