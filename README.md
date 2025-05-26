
**Cloud-Based Doctor Appointment Booking System (SAFE)**

![Logo](public/relogo.png)

  
   
   This project is a cloud-based web application built using Azure that enables users to register, log in, book doctor appointments, and view their scheduled appointments via a personalized profile. The system provides a user-friendly interface and secure access, offering features such as real-time appointment availability and booking confirmations.

🔗 [Backend Repository — Visit the backend codebase here](https://github.com/tamilr12/doctor-appointment-booking-system-backend)



🧩**Features**


      User registration and login with secure authentication.
      Real-time doctor appointment availability.
      Booking confirmation and scheduling system.
      Personalized profile with appointment history.

 
 **Tech Stack**
  Category      | Technology                                  |
|---------------|---------------------------------------------|
| Frontend      | React with Vite, JavaScript, Tailwind CSS   |
| Backend       | Node.js, Express.js                         |
| Database      | MongoDB Atlas (cloud-hosted NoSQL DB)       |
| Cloud Hosting | Azure (App Service, MongoDB in Cosmos DB)   |
| Dev Tools     | ESLint, Babel/SWC, Git, VS Code             |


**Related Repositories**


- **Frontend Repository** (this repo): Handles the user interface built with React.
- **[Backend Repository](https://github.com/tamilr12/doctor-appointment-booking-system-backend)**: RESTful API built with Node.js and Express.

 **Live Demo**

You can access the live deployed version of the app here:

🔗 [Live Deployment — Visit the live app here](https://happy-desert-052551f10.6.azurestaticapps.net/)













📊**UML Diagrams**

Use case Diagram 

Depicts the interactions between users (patients, doctors, admin) and the system. It highlights functionalities like login, appointment booking, viewing schedules, and managing profiles.
 ![Use Case Diagram](./use%20diagram.jpg)

  Class Diagram


   Shows the system’s data model structure, including classes like User, Doctor, Appointment, and PatientProfile, along with their attributes and relationships.


  ![Class Diagram](./class%20diagram.jpg)


  Sequence Diagram


 Illustrates the flow of operations during key user interactions, such as the appointment booking process—showing step-by-step communication between frontend, 
  backend, and database.

![Sequence Diagram](./sequence%20diagram.jpg)

 Component Diagram
  
  
  Displays the high-level software components (like frontend, backend, and database) and how they interact within the system, aiding in modular development.

 ![Component Diagram](./component%20diagram.jpg)



Activity Diagram
  
  
  Demonstrates the workflow of specific operations like the user registration or appointment scheduling process, including decision points and actions.


![Activity Diagram](./Activity%20diagram.jpg)


Architecture Diagram


🏗️**Microservices Architecture**

Microservices is an architectural style where an application is divided into small, independent services. Each service handles a specific business function and communicates with others via APIs.


✅**Key Characteristics of Microservices**




Independently Deployable: Services can be deployed, updated, or scaled independently.
Loosely Coupled: Each service operates independently with minimal dependencies.
Technology Agnostic: Each service can use different languages, databases, or frameworks.
Domain-Driven: Each service is built around a specific business domain (e.g., user, appointment).



Why Microservices for a Doctor Appointment Booking System?




A doctor appointment system needs to handle diverse functionalities such as:
User registration/login
Booking and rescheduling appointments
Notifications and reminders
Feedback and ratings
Doctor availability management



In a monolithic architecture, all this logic would live in one codebase, making it:



❌ Hard to maintain
❌ Risky to update (one bug can crash the whole app)
❌ Difficult to scale specific features


With microservices, each feature is:



✔️ Built independently
✔️ Scaled as needed
✔️ Deployed without affecting others

Microservices in the Doctor Appointment Booking System



| Microservice             | Responsibility                                |
| ------------------------ | --------------------------------------------- |
| **User Service**         | Signup, login, profile management             |
| **Appointment Service**  | Booking, canceling, rescheduling appointments |
| **Doctor Service**       | Doctor registration, availability, schedules  |
| **Feedback Service**     | Patient feedback and doctor ratings           |
| **Auth Service**         | JWT/session-based authentication              |
| **API Gateway**          | Routes requests to appropriate services       |



  ![Architecture Diagram](./Microservices%20architecture%20diagram.jpg)


  💼 **Business Model**
 
 
  
The Doctor Appointment Booking System is designed to streamline the process of scheduling medical appointments while providing value to both patients and healthcare professionals. Below is the detailed Business Model Canvas outlining the strategic components of the platform.

 **Key Partners**

Clinics: Collaborate with clinics to onboard doctors and medical services.
Hosting Providers: Ensure reliable uptime and scalability for the application.

**Key Activities**


Appointment Booking: Allow patients to view availability and book appointments.
Schedule Management: Enable doctors to manage their availability in real-time.
Profile & Feedback System: Maintain professional profiles and patient feedback to enhance trust.

**Value Proposition**

For Patients: A hassle-free way to find and book medical appointments online.
For Doctors: Efficient schedule management and improved patient reach.

**Channels**
Website: The main platform for interaction, appointment management, and communication.

**Customer Segments**

Patients: Individuals looking to book medical appointments.
Doctors: Healthcare professionals offering consultations and medical services.

 **Customer Relationships**
 Feedback System: Encourages transparency and continuous improvement.

 **Cost Structure**
Hosting & Infrastructure: Cloud servers, storage, and bandwidth.

Development: Costs related to engineering, maintenance, and feature enhancements.

**Revenue Streams**
Free or Subscription Plans for Doctors: Freemium model with advanced features in paid plans.

Advertisements or Commissions: Revenue from promotions or a percentage per booking.



![Business Model](./Bussiness%20Model%20diagram.jpg)


🔁**SOLID Principles Applied**
We follow the SOLID design principles to ensure modularity, scalability, and maintainability in our Doctor Appointment Booking System.

**S – Single Responsibility Principle**
Each module or class handles a single responsibility.

 AppointmentService is solely responsible for appointment-related operations.

**O – Open/Closed Principle**
The system is designed to be open for extension but closed for modification.

You can add new appointment features like recurring appointments or payment integration without changing existing appointment booking logic.

**L – Liskov Substitution Principl**e
Subclasses or implementations can replace their parent types without altering the system behavior.

 DoctorUser and PatientUser can replace a base User class wherever it's expected.

**I – Interface Segregation Principle**
Interfaces are tailored to specific needs to prevent bloated designs.

IBookAppointment and IManageSchedule interfaces ensure that each user type (doctor/patient) only implements the relevant operations.

**D – Dependency Inversion Principle**
High-level modules depend on abstractions rather than concrete implementations.

 Controllers use IAppointmentRepository interfaces instead of being tightly coupled to specific databases like MongoAppointmentRepo.





