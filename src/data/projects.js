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
  
}

];