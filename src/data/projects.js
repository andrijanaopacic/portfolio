export const projects = [
  {
    id: 1,
    title: "Car Sales Platform",
    category: "Full-Stack Development",
    tagline: "A software system for posting and managing car advertisements.",
    shortDescription: "This project is a software system for posting and managing car advertisements. The backend is developed with Spring Boot, while the frontend uses React. Users can add new listings, filter cars by brand, model, price, or fuel type, and view details of each ad.",
    fullDescription: {
      intro: "Car Sales Platform is a full-stack web application for posting, browsing, and managing car advertisements.",
      features: [
        "Browse and filter car listings by brand, model, price, and fuel type",
        "View detailed information for each vehicle",
        "Create, edit, and manage personal car ads",
        "Save favorite listings for later"
      ],
      outro: `The backend is implemented in Java using Spring Boot and follows a layered architecture (Controller, Service, Repository). Controllers expose REST endpoints and handle HTTP requests, services contain the core business logic and validation rules, while repositories are responsible for database access and persistence.

      Entities represent the database model, while DTOs and custom mappers are used to transfer data between layers and prevent direct exposure of entities to the API. The React frontend communicates with the backend through a RESTful API, enabling users to manage advertisements in a secure, structured, and scalable system.`
 },

    github: "https://github.com/andrijanaopacic/napredneJavaTehnologije",
    techStack: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
    image: "/njtSlika.png",
    implementation: [
      { 
        title: "Backend & Security", 
        desc: "Server-side logic is implemented in Java using Spring Boot. User authentication and authorization are handled with Spring Security and JWT. Account confirmation and password reset emails were tested using Mailtrap to ensure a safe development environment." 
      },
{ title: "Database", desc: "The application uses a MySQL relational database for storing data related to users, car ads, and vehicle details. Spring Data JPA is used to simplify database access, enabling efficient CRUD operations and automatic query generation." },
      { title: "API & Communication", desc: "A RESTful API connects the frontend and backend, allowing seamless data exchange. On the frontend, Axios is used to send HTTP requests and attach JWT tokens to authorized requests." }
    ],
    gallery: [
      { img: "/njtKorisnik.png", title: "Marketplace", desc: "This view allows users to easily search and browse available cars using multiple filters, such as price range, transmission type, fuel type, production year (min/max), and brand. Based on the selected criteria, matching vehicles are displayed as cards with an image and short summary. By opening a car’s details, users can view a mini modal with additional images and key information about the vehicle." },
      { img: "/njtAdmin.png", title: "Admin View", desc: "This view is designed for administrators to manage their own car listings. Admins can search through their ads, add new listings, edit existing ones, or delete ads when needed. This interface provides full control over personal advertisements, making it easy to keep listings up to date and well organized." },
      { img: "/njtSacuvani.png", title: "Saved Ads", desc: "Users can save ads they are interested in for later viewing. Saved listings are stored per user and remain available every time the user logs in. From the Saved Ads page, users can easily review their favorite cars and remove ads they no longer wish to keep." }
    ]
  },
  {
  id: 2,
  title: "Bike Rental System",
  category: "Client-Server Application",
  tagline: "A Java-based system for managing bike rentals, vendors, and customers.",
  shortDescription: "A client-server application for managing bike rentals, including vendor registration, rental tracking, and customer management. Users can add, search, update, and delete rentals, customers, bikes, locations, and duty schedules.",
  fullDescription: {
    intro: "Bike Rental System is a Java client-server application designed to manage bike rentals, vendors, and customers efficiently, providing secure client-server communication and persistent data storage.",
    features: [
      "Configure and review server connection (URL, username, password, port)",
      "Start and monitor server with multiple simultaneous clients",
      "Vendor login and registration with secure password handling",
      "Add, edit, and delete rentals, including tracking total amounts",
      "Search and manage customers by name, surname, or location"
    ],
    outro: `The system is implemented as a Java-based client-server application using socket communication and multithreading. Each client communicates with the server through serializable request and response objects that define the requested operation and its parameters, enabling a clear and extensible communication protocol.

    On the server side, a dedicated thread is created for every connected client, allowing multiple vendors to work concurrently. Client requests are processed through a centralized controller and a business logic layer, where each system operation is implemented as a separate class based on a template method approach. This ensures consistent validation, execution flow, and transaction handling across all operations.`

  },
  github: "https://github.com/andrijanaopacic/projektovanjeSoftvera",
  techStack: ["Java", "Java Swing", "Socket Programming", "MySQL"],
  image: "/bajs.jpg",
  implementation: [
    {
      "title": "Client-Server Architecture",
      "desc": "The application is designed as a client-server system using socket communication. The server handles multiple concurrent clients by creating a dedicated thread for each connection, allowing vendors to work simultaneously without interference. The client sends structured requests containing operation types and parameters, which the server processes through a centralized controller and business logic layer. Responses are then sent back to update the client interface."
    }
    ,
    {
      title: "Template Method Pattern (System Operations)",
      desc: "Business logic on the server is implemented using a template method pattern through an abstract generic operation class. Each concrete system operation defines its specific behavior while inheriting a standardized execution flow that includes validation, database access, and transaction control (commit/rollback)."
    },
    {
      "title": "Database & Repository Layer",
      "desc": "All entities—bikes, customers, vendors, rentals, locations, and duty schedules—are stored in a MySQL database. I implemented generic repository classes that handle CRUD operations, map ResultSet data to domain objects, and provide reusable methods for all entities. I also managed database connections, transactions (commit/rollback), and ensured data consistency across operations, integrating them seamlessly with the Template Method pattern in server-side business logic."
    }
,
    {
      title: "Client-Side MVC Structure",
      desc: "The client application is developed using Java Swing and follows an MVC-oriented structure. Swing forms are responsible only for presenting the user interface, while controllers handle user actions, input validation, and communication with the server. A central coordinator manages navigation between forms and controllers, providing a clear application flow and maintaining loose coupling between UI components and business logic."
    }
  ],

  gallery: [
  {
    img: "/pregledKonfifuracije.png",
    isCompact: true,
    title: "Server Configuration",
    desc: "This screen allows users to configure and review the server connection settings, including URL, username, password, and portThis screen allows users to configure and review the database connection settings for the server, including URL, username, password, and port. Users can create new configurations or review existing ones. Proper database configuration ensures the server can connect and store data reliably before starting the application.. Users can create new configurations or review existing ones. Proper configuration ensures that the server and client can communicate reliably, which is essential before starting the application."
  },
  {
    img: "/pokretanjeServera.png",
    isCompact: true,
    title: "Server Control Panel",
    desc: "This panel displays the status of the server and manages connected clients. Two tables show connected and disconnected users. As clients log in, they move to the connected list. Multiple clients can interact simultaneously, thanks to the use of threads and sockets, allowing real-time monitoring and management of all active sessions."
  },
  {
    img: "/prijavaNaSistem.png",
    isCompact: true,
    title: "Vendor Login & Registration",
    desc: "Vendors can register or log in using their username and password. The password field supports toggling to show or hide the entered value. Login credentials are sent to the server for validation, and error messages appear if the data is incorrect. Once authenticated, the vendor gains secure access to manage rentals and customers."
  },
  {
    img: "/iznajmljivanje.png",
    isCompact: true,
    title: "Rental Management",
    desc: "This screen allows vendors to add, edit, and delete individual rental items. The interface calculates the total rental amount dynamically as items are added. Data is only saved to the MySQL database when the vendor confirms the rental. If required information is missing or entered incorrectly, an error message is displayed, ensuring data integrity and preventing incomplete or invalid records from being stored."
  },
  {
    img: "/kupac.png",
    isCompact: true,
    title: "Customer Management",
    desc: "Users can search for customers by name, surname, or location. Search results populate a table with relevant entries. Selecting a customer opens a detailed view, where users can edit or delete the customer's information. All changes are sent to the server and reflected in the database, maintaining accurate and up-to-date records."
  }
]

  
},

{
    id: 3,
    title: "Makeup Course Platform",
    category: "Full-Stack Web Application",
    tagline: "A Next.js platform for browsing, purchasing, and managing makeup courses.",
    shortDescription: "A full-stack web application built with Next.js for buying and selling makeup courses. The platform supports three roles — client, educator, and admin — with Stripe payment integration, course management, sales analytics, and a full REST API documented with Swagger.",
    fullDescription: {
      intro: "Makeup Course Platform is a full-stack web application developed using Next.js as part of the Internet Technologies course. It enables clients to browse and purchase makeup courses, educators to manage their course offerings and track sales, and administrators to oversee users, courses, and platform analytics. The project was developed in collaboration with Tijana Milosavljević and Anđela Nikolić.",
      features: [
        "Role-based access control for clients, educators, and admins",
        "Course browsing, filtering, and purchasing with Stripe Checkout integration",
        "Client dashboard with purchased courses and order history",
        "Educator panel with course management, client overview, and sales reports",
        "Admin panel with user management, course approval, and platform-wide statistics",
        "JWT-based authentication with login, registration, and password reset via email",
        "Full REST API documented with Swagger / OpenAPI",
        "Dockerized application with PostgreSQL and Drizzle ORM",
        "Input sanitization, CSRF protection, and security middleware"
      ],
      outro: `The application is structured as a Next.js project using the App Router, with server-side rendering and API routes co-located within the same codebase. Data access is handled through Drizzle ORM with a PostgreSQL database, and Stripe is integrated for secure checkout and payment tracking.
 
      The backend includes middleware for JWT verification, CSRF token validation, and input sanitization. Nodemailer is used for email functionality (password reset, order confirmation), and Recharts powers the sales analytics dashboards. The project is fully containerized with Docker and includes a comprehensive test suite covering server actions, API endpoints, and UI components.`
    },
    github: "https://github.com/andrijanaopacic/internet-tehnologije-2025",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Stripe", "JWT", "Docker", "Swagger"],
    image: "/naslovnakursevisminke.png",
    implementation: [
      {
        title: "Authentication & Security",
        desc: "Authentication is implemented using JWT tokens stored in HTTP-only cookies. The system supports registration, login, logout, and password reset via email using Nodemailer. Security middleware handles JWT verification, CSRF token validation, and input sanitization to protect all API routes and server actions."
      },
      {
        title: "Role-Based Features",
        desc: "The platform supports three distinct roles. Clients can browse courses, add them to a cart, purchase via Stripe Checkout, and view their order history. Educators can manage their own courses, view which clients purchased them, and access monthly sales reports. Admins have full control over users, course listings, and can view platform-wide statistics and analytics powered by Recharts."
      },
      {
        title: "API, Database & DevOps",
        desc: "All backend logic is implemented as Next.js API routes and server actions, with a PostgreSQL database accessed through Drizzle ORM. The full REST API is documented using Swagger/OpenAPI. The application is containerized with Docker for consistent deployment environments, and a dedicated test suite covers API endpoints, business logic, and UI components."
      }
    ],
    gallery: [
      {
        img: "/kurskatalog.png",
        title: "Course Catalog",
        desc: "Clients can browse all available makeup courses with a clean card-based layout. Each card displays the course image, title, educator name, and price. A search bar allows filtering courses by name, and a buy button lets clients add a course to their cart directly from the catalog."
      },
      {
        img: "/dodavanjekurseva.png",
        title: "Course Creation",
        desc: "Educators can create new courses by filling in the course name, price, category, cover image, and a general description. The form also supports adding multiple video lessons, each with a title, duration, and uploaded video file, which are collected into a list before the full course is published."
      },
      {
        img: "/grafik.png",
        title: "Sales Analytics",
        desc: "Educators can track their sales performance through an interactive area chart showing the number of course purchases over time. The chart can be filtered by time period — such as the last 3 months — giving educators a clear visual overview of their revenue trends."
      },
      {
        img: "/administrator.jpg",
        title: "Swagger API Documentation",
        desc: "The full REST API is documented using Swagger UI, organized by role — Admin, Auth, and Educator. Each endpoint lists its HTTP method, route, and description. Protected routes are marked with a lock icon, indicating JWT authentication is required."
      }
    ]
  },



  {
    id: 4,
    title: "Fitness Tracker",
    category: "Desktop Application",
    tagline: "A C# desktop system for managing training plans and exercises.",
    shortDescription: " A multi-role desktop application developed in C# for managing personalized fitness programs. The system supports both trainers and clients through dedicated interfaces. Trainers can create, modify, and assign structured workout plans consisting of strength and cardio exercises, including detailed attributes such as intensity, duration, sets, and repetitions. Clients can view their assigned training programs and manage their personal profiles.",
    fullDescription: {
      intro: "Fitness Tracker is a multi-role desktop application developed in C# using Windows Forms. The system supports two separate user types — trainers and clients — each with their own dedicated application and interface tailored to their role.",
      features: [
        "Trainer registration, login, and profile management",
        "Creating and managing workout plans composed of strength and cardio exercises",
        "Assigning training plans to registered clients",
        "Client registration, login, and viewing assigned training plans",
        "Browsing workout details including intensity, number of sets and repetitions, as well as duration. "
      ],
      outro: `The application follows a layered architecture with a clear separation between the presentation, business logic, and data access layers. The domain model includes entities such as Trening (workout plan), StavkaTreninga (workout item), Vežba (exercise), Snaga (strength), Kardio (cardio), Praćenje (tracking), and Korisnik (user).
 
     Database access is handled through three Singleton broker classes (Broker, TrenerBroker, KlijentBroker), each maintaining a single shared connection instance. All database operations are performed exclusively through the stored procedures and functions exposed by the API schemas (api_trener, api_klijent, spec).`
    },
    github: "https://github.com/andrijanaopacic/TreninziProjekatPRP",
    techStack: ["C#", ".NET", "Windows Forms", "Microsoft SQL Server", "ADO.NET"],
    image: "/exercise.png",
    implementation: [
      {
        title: "DB ADT Architecture (impl / spec / api)",
        desc: "The database is designed using a DB ADT approach with three layers. The impl schema contains all internal objects - tables, triggers, functions, views, and stored procedures - and is private to the DB developer. The spec schema exposes a controlled public interface using synonyms that point to impl objects, hiding implementation details. On top of spec, two role-specific API schemas (api_trener and api_klijent) provide operations tailored to each user type."
      },
      {
        title: "Stored Procedure Versioning & Error Handling",
        desc: "Stored procedures were developed in three progressive versions: a basic version using RAISERROR with inline validation, a refactored version applying SRP (each procedure does one thing) and switching to THROW with dynamic procedure name resolution, and a production-ready version introducing a centralized error catalog (tblErrorCatalog), UPDLOCK hints to prevent race conditions, SET XACT_ABORT ON for automatic rollback, and @@ROWCOUNT verification after writes."
      },
      {
        title: "Triggers, Functions & Views",
        desc: "After triggers are implemented for audit logging - every insert, update, and delete on application tables is automatically recorded in a dedicated log table using the inserted and deleted pseudo-tables. Scalar and table-value functions handle reusable validation logic (e.g. checking if an email or username already exists), and views in both impl and spec schemas provide structured data access across layers."
      },
    ],
    gallery: [
      {
        img: "/trenermeni.png",
        title: "Trainer Dashboard",
        desc: "Trainers can log in, manage their profile, and access a full overview of their workout plans. The interface allows creating and editing training plans with detailed exercise configurations."
      },
      {
        img: "/klijentmeni.png",
        title: "Client View",
        desc: "Clients can view detailed information about their assigned training plans, including exercises and workout structure. They can also track their active training programs (i.e., which training plans they are currently following), as well as access and update their personal profile information."
      },
      {
        img: "/detaljitrening.png",
        title: "Workout Plan Details",
        desc: "Each workout plan contains a list of exercises with detailed information, including intensity, number of sets and repetitions, as well as duration. The detail view presents each exercise individually, highlighting the targeted muscle group and intensity level."
      }
    ]
  },
 
  {
    id: 5,
    title: "Race Registration System – Design Patterns",
    category: "Software Design Patterns",
    tagline: "A Java application showcasing 20 GoF design patterns applied to a race registration domain.",
    shortDescription: "A Java project implementing 20 GoF design patterns — creational, structural, and behavioral — each as a standalone module built around the same domain: a system for registering participants in races such as marathons and half-marathons.",
    fullDescription: {
      intro: "This project was developed as part of the Software Design Patterns course and demonstrates the practical application of 20 out of 23 Gang of Four (GoF) design patterns. Each pattern is implemented as a separate, self-contained Java module, all built around the same domain — a race registration system — making it easy to compare how different patterns address different design challenges within a consistent context.",
      features: [
        "Creational patterns: Abstract Factory, Factory Method, Builder, Prototype, Singleton",
        "Structural patterns: Facade, Composite, Decorator, Adapter, Bridge, Proxy, Flyweight",
        "Behavioral patterns: Observer, Template Method, Command, Iterator, Strategy, Mediator, Chain of Responsibility, Memento",
        "Each module is a self-contained Java application with its own UI and database connection",
        "Consistent domain model across all modules: race registrations with attributes such as registration ID, runner's ID, race type (5k, 10k, half-marathon, marathon), declared time, and date"
      ],
      outro: `All 20 pattern implementations share the same underlying domain — a system for processing race registrations — which supports core operations such as creating, editing, saving, and deleting registrations. Using the same domain across all modules makes it straightforward to observe how each pattern structures the solution differently to solve a specific design problem.

      The project was developed in Java using NetBeans IDE with a MySQL database. The UI is built with Java Swing, and the package structure of each module follows the organization prescribed by the respective pattern (e.g., AbstractFactory, ConcreteProduct, Builder, Director, Observer, Subject, Decorator, Command, Invoker, etc.).`
    },
    github: "https://github.com/andrijanaopacic/SoftverskiPaterni",
    techStack: ["Java", "Java Swing", "MySQL", "NetBeans", "GoF Patterns"],
    image: "/trkaslika.jpg",
    implementation: [
      {
        title: "Creational Patterns",
        desc: "Five creational patterns are implemented: Abstract Factory creates families of related UI panels and database brokers without specifying concrete classes; Factory Method delegates object creation to subclasses; Builder constructs complex registration objects step by step through a Director; Prototype clones existing registration objects; and Singleton ensures a single shared database connection instance across the application."
      },
      {
        title: "Structural Patterns",
        desc: "Seven structural patterns are demonstrated: Facade provides a simplified interface over the registration workflow; Composite models hierarchical structures of race categories; Decorator dynamically adds responsibilities to registration objects at runtime; Adapter integrates incompatible interfaces; Bridge decouples abstraction from implementation so both can vary independently; Proxy controls and mediates access to registration data; and Flyweight reduces memory usage by sharing common race data across many registration instances."
      },
      {
        title: "Behavioral Patterns",
        desc: "Eight behavioral patterns are covered: Observer notifies dependent components when race or registration state changes; Template Method defines a fixed registration workflow with steps that subclasses can override; Command encapsulates each registration action as an object, dispatched through an Invoker to a Receiver; Iterator provides a uniform way to traverse registration collections; Strategy allows switching between different algorithms at runtime; Mediator centralizes communication between loosely coupled components; Chain of Responsibility passes requests through a chain of handlers; and Memento captures and restores the state of a registration object."
      }
    ],
    gallery: [
      {
        img: "/abstractfactory.png",
        isCompact: true,
        title: "Abstract Factory Module",
        desc: "The Abstract Factory pattern creates families of related UI panels and database brokers without specifying their concrete classes, allowing the system to switch between different configurations seamlessly."
      },
      {
        img: "/observerpatern.png",
        title: "Observer Module",
        desc: "The Observer pattern enables automatic notification of registered participants when race details change. Concrete observers react to subject state changes, decoupling the race entity from its dependents."
      },
    ]
  },

  {

    id: 6,
    title: "FONklame 2024",
    category: "Event Marketing & Interactive Web",
    tagline: "An interactive website showcasing a film-themed event campaign.",
    shortDescription: "FONklame is a marketing festival with a 20-year tradition. The 2024 edition was dedicated to event marketing and my team and I developed an engaging, interactive website that evolved throughout the campaign.",
    fullDescription: {
    intro: "FONklame is a marketing festival with a 20-year tradition. The 2024 edition was dedicated to event marketing, and I participated as the IT Team Lead. My team and I were responsible for an entire day of the festival dedicated to our work and the movie we produced as part of the project. In addition, we developed a dedicated project page on our organization’s website to support and present the event digitally.",
    features: [
      "Developing the project portfolio page on our organization’s website using WordPress, with HTML, CSS, and JavaScript for interactive features",
      "Interactive elements included pop-up registration forms, a countdown timer for open applications, an animated envelope with confetti and an invitation letter, hidden panelists revealed on hover, and cards linking to previous projects",
      "Ensuring the website was fully responsive, as most visitors accessed the site from mobile devices"
    ],
    outro: "The goal of the project was to present our idea in a creative and interactive way. The website guided visitors through the entire project journey — from initial 'more information coming soon' visuals, through pop-up registration forms and countdown timers, to post-event content featuring project details and partners. Carefully designed interactive elements made the experience engaging and memorable, while supporting the overall identity and concept of the festival."
  },


    github: null,
    live: "https://www.fonovcentar.rs/portfolio/fonklame-2024/",
    techStack: ["WordPress", "HTML", "CSS", "JavaScript"],
    image: "/fonklameLogo.png",
    implementation: [
      { title: "CSS – Styling, Layout & Animations", desc: "CSS defines the visual identity of the project through custom colors, typography, and layout adjustments on top of WordPress. Animations such as the envelope opening and curtain reveal are implemented using transitions, transforms, and keyframes, while media queries ensure full responsiveness across screen sizes." },
      { title: "JavaScript – Interactivity & Logic", desc: "JavaScript dynamically controls component states (open/close) by toggling CSS classes, which then trigger coordinated CSS animations. User interactions such as clicks and hover events launch visual effects, including a confetti animation implemented via a dedicated library. Separate handlers were created for desktop and mobile to ensure consistent behavior across devices." }
    ],
    gallery: [
    {
      img: "/otvoriMe.png",
      
      title: "'Open Me' Envelope",
      desc: "An interactive envelope that, when clicked, triggers confetti animation and reveals the event invitation. This was used to creatively engage visitors."
    },
    {
      img: "/otovorenaKoverta.png",
      
      title: "Opened Envelope",
      desc: "After opening the envelope, users see an invitation along with animated confetti, providing a playful and engaging introduction to the event."
    },
    {
      img: "/panelisti.png",
      
      title: "Interactive Panelists",
      desc: "Panelists were initially hidden behind curtains. Hovering over them triggers an animation that reveals their photo and biography, creating an engaging and interactive presentation of the event speakers."
    },
    {
      img: "/ostaliProjekti.png",
      
      title: "Project Cards",
      desc: "Cards showcasing other projects of the organization. Each card links to a dedicated page, allowing visitors to explore past campaigns. The layout was designed for both desktop and mobile users."
    }
    ] 
  
  },
 

];