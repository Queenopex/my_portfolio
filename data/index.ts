import { url } from "inspector";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I approach development with a focus on clarity and usability.I pay attention to how data flows through an application, how users interact with it, and how to keep the codebase clean and maintainable as it grows.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "I focus on building products that are functional, scalable, and actually useful to users.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a Services Marketplace that connects users with local makeup artists, focusing on role-based logic, structured data filtering, and user-focused flows to improve accessibility and trust.",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [

      {
      id: 1,
      title: "GlowNearMe (In Progress)",
      des: "Building a platform that helps users discover and connect with makeup artists nearby.Implementing role-based logic (client vs artist), structured data filtering, and user-focused flows to improve accessibility and trust.",
      img: "/glownearme.PNG",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/Queenopex/Glownearme",
    },

      {
      id: 2,
      title: "Car Rental UI",
      des: " Recreated pixel-perfect UI using atomic design for a car rental platform.",
      img: "/p5.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/Queenopex/Morent",
    },

     {
      id: 3,
      title: "Quick Dish",
      des: "Developed a food ordering application with cart functionality and dynamic UI updates.Structured the interface using reusable components and state management for scalability.",
      img: "/p6.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://quick-dish-theta.vercel.app/",
    },
    {
      id: 4,
      title: "A Random Quote Machine",
      des: "Built a responsive application that fetches and displays dynamic quotes using API integration.Implemented interactive features including real-time updates and tweet functionality, while maintaining a clean and intuitive user interface.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://opex-random-quote-machine.netlify.app/",
    },
    {
      id: 5,
      title: "A Markdown Previewer",
      des: "An interactive Markdown Previewer that converts GitHub-flavored Markdown to HTML in real-time for seamless editing and visualization.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://opex-markdown-previewer.netlify.app/",
    },
    {
      id: 6,
      title: "A Javascript Calculator",
      des: "A functional calculator website that performs real-time mathematical operations using formula logic, supporting precise calculations and seamless user input",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://calculator-by-opex.netlify.app/",
    },
    {
      id: 7,
      title: "A Drum Machine",
      des: "An interactive drum machine website with clickable and keyboard-triggered pads that play audio clips and display corresponding sound names in real time.",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://drum-machine-by-opex.netlify.app/",
    },
  
   
  ];
  
  export const testimonials = [
    {
  quote:
    "Working with Oluwapelumi was a great experience. She’s very intentional about her work and pays attention to details that many people overlook. Beyond just delivering, she takes the time to understand what you actually need and builds with that in mind. Her consistency and willingness to improve really stand out.",
  name: "Toyin Abdulsalam",
  title: "Director of Adelaide Coding School",
},
    {
  quote:
    "I really enjoyed working with Oluwapelumi. She’s reliable, easy to communicate with, and takes her work seriously. What stood out to me was how she approaches problems—she doesn’t just build, she thinks through what makes the most sense for the project. You can trust her to deliver something solid.",
  name: "Daniel",
  title: "CEO of Eronlanx Films",
},
    /*{
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },*/
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
{
  id: 1,
  title: "Frontend Engineer Intern - Varens Technology",
  desc: "Contributed to building responsive web interfaces using Next.js, focusing on improving usability and implementing interactive UI components.",
  className: "md:col-span-2",
  thumbnail: "/exp1.svg",
},
    {
  id: 2,
  title: "Frontend Engineer - Eonsfleet",
  desc: "Worked on subscription and billing features, implementing payment flows and handling API interactions while ensuring a smooth and reliable user experience.",
  className: "md:col-span-2",
  thumbnail: "/exp2.svg",
},
    
    {
  id: 3,
  title: "Frontend Developer - PetVot Technology",
  desc: "Built and improved frontend features for a web platform, focusing on responsive design, user experience, and translating product requirements into functional interfaces.",
  className: "md:col-span-2",
  thumbnail: "/exp3.svg",
},
   /* {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },*/
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      url: "https://github.com/Queenopex/",
    },
    {
      id: 2,
      img: "/twit.svg",
      url: "https://twitter.com/Queenopex",
    },
    {
      id: 3,
      img: "/link.svg",
      url: "https://www.linkedin.com/in/ogunbajo-oluwapelumi",
    },

  ];