import imageOne from "../assets/images/chooseus1.jpg";
import imageTwo from "../assets/images/chooseus2.jpg";
import imageThree from "../assets/images/chooseus3.jpg";
import imageFour from "../assets/images/chooseus4.jpg";
import customdevelopment from "../assets/images/png/cutomedevelopment.png";
import mobiledevelopment from "../assets/images/png/mobile-development.png";
import webdevelopment from "../assets/images/png/webdevelopment.png";
import artificila from "../assets/images/png/artificial-intelligence.png";
import cloudcomputing from "../assets/images/png/cloudcomputing.png";
import cybersecurity from "../assets/images/png/cybersecurity.png";
import uxdesign from "../assets/images/png/ux-design.png";
import ecommerce from "../assets/images/png/landingecommerce.png";
import socila from "../assets/images/png/landingsocial.png";
import landing from "../assets/images/png/landing.png";
import custom from "../assets/images/png/landingcustome.png";
import ios from "../assets/images/png/landingios.png";
import android from "../assets/images/png/landingandroin.png";
import flutter from "../assets/images/png/landingflutter.png";
import hybrid from "../assets/images/png/landingcloud.png";
import portfoliwebone from "../assets/images/portfolio/1-min.webp";
import portfoliwebtwo from "../assets/images/portfolio/2-min.webp";
import portfoliwebthree from "../assets/images/portfolio/3-min.webp";
import portfoliwebfour from "../assets/images/portfolio/4-min.webp";
import portfoliwebfive from "../assets/images/portfolio/5-min.webp";
import portfoliwebseven from "../assets/images/portfolio/6-min.webp";
import portfoliappone from "../assets/images/portfolio/1-appmin.webp";
import portfoliapptwo from "../assets/images/portfolio/2-appmin.webp";
import portfoliappthree from "../assets/images/portfolio/3-appmin.webp";
import portfoliappfour from "../assets/images/portfolio/4-appmin.webp";
import portfolisppsfive from "../assets/images/portfolio/5-appmin.webp";
import { FaLightbulb, FaUsers, FaStar, FaHandsHelping } from "react-icons/fa";

//sevice image
import app from "../assets/serviceImages/app.jpg";
import appicon from "../assets/serviceImages/app.png";
import uiux from "../assets/serviceImages/uiux.jpg";
import uiuxicon from "../assets/serviceImages/uiux.png";
import web from "../assets/serviceImages/web.jpg";
import webicon from "../assets/serviceImages/web.png";
import cloud from "../assets/serviceImages/cloud.jpg";
import cloudicon from "../assets/serviceImages/cloud.png";
import migration from "../assets/serviceImages/migration.jpg";
import migrationicon from "../assets/serviceImages/migration.png";
import ai from "../assets/serviceImages/ai.jpg";
import aiicon from "../assets/serviceImages/ai.png";

const baseUrl = process.env.PUBLIC_URL;

export const portfolioDataApp = [
  {
    name: "Partex",
    description:
      "We developed the Partex app to streamline logistics operations, ensuring efficient tracking and management of packages. With real-time updates and a user-friendly interface, Partex enhances both operational efficiency and user satisfaction.",
    image: portfoliappone,
  },
  {
    name: "Find A Driver",
    description:
      "Driver is a comprehensive driver management platform that simplifies fleet operations, driver scheduling, and route optimization. The app is designed to maximize productivity and provide seamless navigation features.",
    image: portfoliapptwo,
  },
  // {
  //   name: "Glowsy",
  //   description:
  //     "Glowsy is a beauty and wellness app offering personalized beauty care recommendations and virtual consultations. Our team developed this app to provide an engaging, user-centered experience with tailored beauty solutions.",
  //   image: portfoliappthree,
  // },
  {
    name: "Artisan Express",
    description:
      "Artisan Express connects skilled artisans with clients, offering a platform for job booking, ratings, and secure payments. The app enhances user trust and accessibility, creating a dynamic marketplace for craft and trade services.",
    image: portfoliappfour,
  },
  {
    name: "House of Deliverance",
    description:
      "House of Deliverance is a wellness app designed to provide mental health resources, guided meditation, and daily motivational content. The app fosters a supportive community and offers tools for users to improve mental well-being.",
    image: portfolisppsfive,
  },
];

export const portfolioDataWeb = [
  {
    name: "FE Finance",
    description:
      "We collaborated with FE Finance to create a user-friendly platform that offers tailored financial solutions, allowing users to access resources and manage their finances effectively. The site features a responsive design and an intuitive interface to enhance user engagement.",
    image: portfoliwebone,
    link: "https://www.fe-finance.de",
  },
  {
    name: "OCXEE",
    description:
      "For OCXEE, we developed a global platform that supports students in their international study journey. The website offers a variety of services, from accommodation assistance to banking, providing a seamless experience tailored to users' specific needs.",
    image: portfoliwebtwo,
    link: "https://www.ocxee.com",
  },
  {
    name: "Leaderbridge",
    description:
      "Leaderbridge connects leaders and professionals across industries, fostering collaboration and knowledge sharing. Our team crafted a dynamic platform that emphasizes seamless networking and user experience.",
    image: portfoliwebthree,
    link: "https://www.leaderbridge.com",
  },
  {
    name: "Gigzio",
    description:
      "Gigzio is a job search platform we helped bring to life, designed to connect job seekers with employers efficiently. With a focus on user-centered design, the platform simplifies the job search process and enhances accessibility across devices.",
    image: portfoliwebfour,
    link: "http://www.gigzio.com",
  },

  {
    name: "FE Group",
    description:
      "FE Group's platform offers comprehensive solutions in finance and consultancy. We developed a robust website that reflects the company’s professional approach, enhancing client interaction and support.",
    image: portfoliwebfive,
    link: "https://www.fe.group",
  },
  {
    name: "VTalks",
    description:
      "VTalks provides a platform for virtual talks and webinars. We created a highly responsive website to support interactive sessions, allowing users to join, share, and engage with industry experts worldwide.",
    image: portfoliwebseven,
    link: "https://www.vtalkz.com",
  },
];

export function publicUrlFor(path) {
  return baseUrl + "/assets/" + path;
}

export const companyDetails = {
  name: "MANYAA TECH SOLUTIONS",
  number: "+91 XXXXXXXXXX",
  address: "company address",
  // website: "MANYAA TECH SOLUTIONS.com",
  email: "abs@example.com",
};

export function loadScript(src, fromPublic) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");

    script.src =
      fromPublic === undefined || fromPublic == null || fromPublic
        ? publicUrlFor(src)
        : src;

    script.addEventListener("load", function () {
      resolve();
    });
    script.addEventListener("error", function (e) {
      reject(e);
    });
    document.body.appendChild(script);
    document.body.removeChild(script);
  });
}

export const ourServices = [
  {
    image: customdevelopment,
    heading: " Custom Software Development",
    shortDescription:
      " At MANYAA TECH SOLUTIONS Technologies, we specialize in custom software development that transforms businesses by driving efficiency and enhancing competitiveness. Our tailored solutions meet your unique challenges and goals, ensuring alignment with your operational needs. With a dedicated team focused on understanding your workflows, we create solutions suited to your business objectives.",
    description:
      "At MANYAA TECH SOLUTIONS Technologies, we believe that the right software can transform your business, drive efficiency, and elevate your competitive edge. Our custom software development services are meticulously designed to address the unique challenges and goals of your organization, providing solutions that align perfectly with your operational needs.Unlock the power of tailored technology with our custom software development services. Every business is unique, and so are its challenges and aspirations. Our dedicated team of experts takes the time to understand your specific requirements, industry nuances, and operational workflows. By engaging in detailed discussions and thorough analysis, we gain insights that inform the design and development process, ensuring the final product is perfectly suited to your objectives.",
  },
  {
    image: mobiledevelopment,
    heading: "Mobile App Development",
    shortDescription:
      "In today’s mobile world, connecting with customers is                         key. Our mobile app development focuses on                          high-performance apps with seamless user experiences.                          We prioritize intuitive design, robust functionality,                          and engaging interfaces to exceed expectations.                          Whether expanding your reach or boosting engagement,                          our solutions make a lasting impact while improving                          productivity and performance.",
    description:
      "In today's mobile-driven world, connecting with your customers is essential. Our mobile app development services focus on creating high-performance applications that provide seamless user experiences across various platforms. We prioritize intuitive design, robust functionality, and engaging interfaces to ensure your app not only meets but exceeds user expectations. Whether you're looking to extend your business reach or enhance customer engagement, our mobile solutions are designed to make a lasting impact. We emphasise the consumer's experience initially, ensure that the apps we develop not solely retain users intrigued but also streamline workflows and maximise performance. Each application we develop is a potent tool intended to improve productivity and foster greater engagement, encouraging your company to thrive in a world that is getting more and more mobile-focused.",
  },
  {
    image: webdevelopment,
    heading: "Web Development",
    shortDescription:
      "Your website is the digital face of your business. At                         MANYAA TECH SOLUTIONS, we specialize in creating dynamic,                         responsive websites that drive digital transformation.                         Our team uses the latest technologies to build                         user-friendly, high-performance sites that convert                         visitors into loyal customers. From e-commerce to                         corporate platforms, we offer full-stack web                         development services, ensuring secure, scalable, and                         reliable applications across all platforms.",
    description:
      "Your website is the digital face of your business. At MANYAA TECH SOLUTIONS, we specialize in crafting dynamic and responsive websites that drive digital transformation. Our web development team employs the latest technologies and best practices to create user-friendly designs optimized for performance, speed, and scalability. From e-commerce platforms to corporate sites, we build websites that not only attract visitors but also convert them into loyal customers, ensuring a strong online presence for your brand. We provide full-stack web development services, that involve back-end infrastructure and front-end user interfaces. Our area of expertise is developing safe, scalable, and reliable online application that work flawlessly across all platforms.",
  },
  {
    image: artificila,
    heading: "Artificial Intelligence & Machine Learning Solutions",
    shortDescription:
      "Harness AI and machine learning to automate processes,                         analyze data, and provide insights for informed                         decisions. Our solutions enhance efficiency,                         personalize experiences, and predict trends, keeping                         you ahead in a competitive digital landscape. From                         machine learning models to AI chatbots, we help you                         automate, improve experiences, and make smarter,                         data-driven decisions.",
    description:
      "Harness the transformative power of AI and machine learning with our advanced solutions. We develop intelligent systems that automate processes, analyze data, and provide actionable insights to help you make informed, data-driven decisions. Our AI solutions empower your organization to enhance operational efficiency, personalize customer experiences, and predict market trends, ensuring you stay ahead of the competition in a fast-paced digital landscape. From developing machine learning models to creating AI-powered chatbots, we help you automate processes, enhance customer experiences, and gain deeper insights into your operations. Let AI take your business to the next level with smarter, data-driven decisions.",
  },
  {
    image: cloudcomputing,
    heading: " Cloud Computing & Cloud Migration Services",
    shortDescription:
      "  In today’s digital landscape, adapting quickly is key to success. At MANYAA TECH SOLUTIONS Technologies, we provide cloud computing services that offer flexibility, scalability, and cost-effectiveness to help your business thrive. Our solutions allow you to focus on growth and innovation, with seamless cloud migration, IT optimization, and enhanced collaboration.",
    description:
      " In today's digital landscape, the ability to adapt quickly to changing business needs is crucial for success. At MANYAA TECH SOLUTIONS Technologies, we offer comprehensive cloud computing services designed to empower your organization with the flexibility, scalability, and cost-effectiveness required to thrive. Our cloud solutions are not just a service—they're a strategic advantage that enables your business to focus on growth and innovation. Embrace the future of IT with our comprehensive cloud computing services. We offer scalable cloud infrastructure solutions that adapt to your business needs, allowing for enhanced flexibility and cost-effectiveness. Our expert team guides you through the entire cloud migration process, ensuring a smooth transition with minimal disruption. By leveraging cloud technologies, we help you optimize your IT environment, improve collaboration, and drive innovation.",
  },
  {
    image: cybersecurity,
    heading: "Cybersecurity Services",
    shortDescription:
      "  In today's digital age, safeguarding your data is essential. Our cybersecurity solutions protect your systems and sensitive information with advanced security measures, including firewalls, intrusion detection, and secure VPNs. With 24/7 threat monitoring and encryption, we detect and respond to breaches swiftly, minimizing downtime and ensuring compliance with security protocols.",
    description:
      " In an age of increasing cyber threats, protecting your data is paramount. Our robust cybersecurity solutions are designed to safeguard your systems, networks, and sensitive information from potential attacks. We implement industry best practices and advanced security measures to ensure compliance and protect your business from risks. With our proactive approach to cybersecurity, you can focus on your core operations, knowing that your digital assets are secure. We implement advanced network security measures, including firewall management, intrusion detection, and secure VPNs, to protect against unauthorized access and data breaches while optimizing performance. With our 24/7 threat monitoring services, we provide real-time surveillance of your systems, swiftly detecting anomalies and responding to potential breaches to minimize downtime and data loss. Data security is paramount, and we use advanced encryption techniques to safeguard sensitive information both in transit and at rest, ensuring compliance with the latest security protocols.",
  },
  {
    image: uxdesign,
    heading: "UX/UI Design",
    shortDescription:
      " Create engaging experiences with our expert UX/UI                          design services. We prioritize intuitive, visually                       appealing designs that enhance usability and drive                         conversions. By understanding your audience’s                         behaviors and needs, we tailor designs to ensure                         satisfaction and meet expectations. Through user                         research and testing, we deliver seamless interactions                         with your brand.",
    description:
      "Create engaging user experiences with our expert UX/UI design services. We understand that a well-designed interface is crucial for user satisfaction and engagement. Our team focuses on developing intuitive and visually appealing designs that enhance usability and drive conversions. By gathering insights into your target audience's behaviors, preferences, and pain points, we create user personas that guide our design decisions. This ensures that our designs are not just visually appealing but also tailored to meet the specific needs and expectations of your users. By conducting thorough user research and testing, we ensure that every design decision aligns with your users’ needs and expectations, resulting in a seamless interaction with your brand.",
  },
];

export const whyChooseUs = {
  mainHeading: `At ${companyDetails.name}, we understand that choosing the right technology partner is crucial for your business's success. Here’s why we stand out in a crowded marketplace`,
  details: [
    {
      id: 1,
      iamge: imageOne,
      heading: "Tailored Solutions",
      description:
        "We know that every business is different, which is why we take the time to develop solutions that are perfectly suited to your unique requirements. Our personalized approach ensures that our strategies align with your vision and deliver real, measurable results.",
    },
    {
      id: 2,

      iamge: imageTwo,
      heading: "Proven Results",
      description:
        "Our team has a track record of success. Over the years, we’ve helped numerous businesses—from startups to large enterprises—achieve their goals by providing innovative and effective digital solutions. Our portfolio reflects our dedication to quality and our ability to deliver on time and within budget.",
    },
    {
      id: 3,
      iamge: imageThree,
      heading: "End-to-End Service",
      description:
        "We offer a full range of services to ensure that every aspect of your digital strategy is covered. From the initial concept to final deployment and ongoing support, we handle every step of the process, making your digital transformation seamless and efficient.",
    },
    {
      id: 4,
      iamge: imageFour,
      heading: "Expert Team",
      description:
        "Our team consists of talented professionals with diverse skill sets, from developers and designers to cloud experts and AI specialists. We invest in our team’s growth to ensure that we have the expertise necessary to tackle any challenge and deliver top-tier solutions.",
    },
  ],
};

export const ourlandingServices = {
  webServices: [
    {
      image: ecommerce,
      heading: "E-commerce Websites",
      shortDescription:
        "Empowering your online business with custom e-commerce websites. Our solutions enhance user experience, optimize conversions, and support scalable growth.",
      description:
        "At MANYAA TECH SOLUTIONS Technologies, we specialize in building custom e-commerce websites that not only meet your business needs but also create seamless shopping experiences. Our solutions are designed to enhance customer engagement, streamline operations, and drive revenue growth. Whether you're launching a new online store or looking to upgrade an existing platform, our team crafts e-commerce websites tailored to your specific goals. We ensure that your site is user-friendly, mobile-responsive, and optimized for performance to help your business thrive in the digital marketplace.",
    },
    {
      image: socila,
      heading: "Social Media Websites",
      shortDescription:
        "Empowering your brand with custom social media websites. Our solutions enhance user interaction, foster community engagement, and drive growth.",
      description:
        "At MANYAA TECH SOLUTIONS Technologies, we specialize in creating custom social media websites that foster meaningful connections and vibrant communities. Our solutions are designed to enhance user experience, promote content sharing, and optimize interactions. Whether you're building a platform for social networking, content creation, or community engagement, our team crafts social media websites tailored to your unique needs. We ensure that your site is scalable, user-friendly, and optimized for performance, helping you build a strong online presence and create lasting connections.",
    },
    {
      image: landing,
      heading: "Landing Websites",
      shortDescription:
        "Empowering your brand with custom social media websites. Our solutions enhance user interaction, foster community engagement, and drive growth.",
      description:
        "At MANYAA TECH SOLUTIONS Technologies, we specialize in creating custom social media websites that foster meaningful connections and vibrant communities. Our solutions are designed to enhance user experience, promote content sharing, and optimize interactions. Whether you're building a platform for social networking, content creation, or community engagement, our team crafts social media websites tailored to your unique needs. We ensure that your site is scalable, user-friendly, and optimized for performance, helping you build a strong online presence and create lasting connections.",
    },
    {
      image: custom,
      heading: "Custom Websites",
      shortDescription:
        "Empowering your brand with custom websites. Our solutions are designed to reflect your unique identity, boost engagement, and drive long-term success.",
      description:
        "At MANYAA TECH SOLUTIONS Technologies, we specialize in creating custom websites that are tailored to meet the specific needs of your business. Whether you need a simple informational site or a complex platform with advanced functionality, our team designs solutions that align perfectly with your goals. We focus on delivering an intuitive user experience, seamless navigation, and mobile optimization, ensuring that your website stands out and performs exceptionally across all devices. Partner with us to build a website that not only enhances your online presence but also drives measurable results.",
    },
  ],
  appServices: [
    {
      image: ios,
      heading: "iOS Development",
      shortDescription:
        "Build and optimize custom iOS apps to deliver seamless user experiences, enhance performance, and drive engagement on Apple devices.",
      description:
        "At MANYAA TECH SOLUTIONS Technologies, we specialize in creating custom iOS apps tailored to your business needs. Whether you're developing a new app or optimizing an existing one, our solutions are designed to provide exceptional performance, intuitive interfaces, and seamless integration with Apple’s ecosystem. We focus on crafting apps that engage users, streamline processes, and deliver measurable results. Our team ensures that your app is user-friendly, scalable, and optimized for performance across all iOS devices, helping you achieve success in the competitive mobile market.",
    },
    {
      image: android,
      heading: "Android App Development",
      shortDescription:
        "Create powerful and intuitive Android applications that offer smooth performance, engaging user experiences, and drive business growth.",
      description:
        "At MANYAA TECH SOLUTIONS Technologies, we specialize in developing custom Android apps tailored to meet your business goals. Our apps are designed to provide a seamless user experience, intuitive interfaces, and high-performance functionality. Whether you need a consumer-facing app or an enterprise solution, our team focuses on delivering mobile apps that offer value to your users and align with your business objectives. We ensure that your app is scalable, secure, and optimized for the best performance on Android devices.",
    },
    {
      image: flutter,
      heading: "Flutter App Development",
      shortDescription:
        "Develop cross-platform mobile apps using Flutter, ensuring consistent performance, rich user experiences, and rapid deployment.",
      description:
        "At MANYAA TECH SOLUTIONS Technologies, we specialize in Flutter app development to create high-quality, cross-platform mobile applications that work seamlessly on both iOS and Android devices. Our team leverages Flutter's powerful features to build fast, responsive, and visually appealing apps that provide an exceptional user experience. Whether you're launching a new app or need to enhance an existing one, we ensure your app is scalable, easy to maintain, and optimized for performance across platforms.",
    },
    {
      image: hybrid,
      heading: "Hybrid App Development",
      shortDescription:
        "Build cost-effective hybrid mobile apps that deliver native-like performance on both iOS and Android, with quicker time-to-market.",
      description:
        "At MANYAA TECH SOLUTIONS Technologies, we offer hybrid app development services that combine the best of both web and native apps to provide high-quality, cost-effective solutions. Our hybrid apps are designed to run seamlessly across iOS and Android devices, offering native-like performance and user experience. Whether you need a simple informational app or a feature-rich application, our team ensures fast development, seamless integration, and optimized performance, all while keeping costs down and reducing time-to-market.",
    },
  ],
};

export const services = [
  {
    id: 1,
    image: app,
    icon: appicon,
    heading: "Mobile App Development",
    description:
      "Transform your business with a mobile app that offers exceptional value to your customers. From planning to launch, our team works closely with you to build secure, scalable, and innovative apps for iOS, Android, and cross-platform solutions. We use cutting-edge technology to create apps that engage users and enhance your brand’s presence.",
    paragraph:
      "In a world where mobile is key, having a strong app presence is essential. We develop custom mobile apps designed to deliver value to your customers while aligning with your business objectives. Whether you're targeting iOS or Android users, our team creates powerful, user-friendly apps that offer top-notch performance, security, and scalability.",
    services: [
      {
        title: "Tailored Mobile Solutions",
        details:
          "Custom-built apps designed to meet your unique business needs.",
      },
      {
        title: "Cross-Platform Development",
        details:
          "Reach a broader audience with apps that perform seamlessly across various devices.",
      },
      {
        title: "Ongoing Support & Maintenance",
        details:
          "We provide continuous support to ensure your app stays up-to-date and functions smoothly.",
      },
    ],
    offerings: [
      {
        title: "Custom App Development",
        desc: "We craft apps tailored to meet your business needs, whether for customer engagement or internal use.",
      },
      {
        title: "Cross-Platform Solutions",
        desc: "Maximize your reach with apps designed to run seamlessly across both iOS and Android platforms.",
      },
      {
        title: "Ongoing Support",
        desc: "We don’t just stop at launch—we offer continuous maintenance and updates to ensure your app stays relevant and high-performing.",
      },
    ],
    whyChooseUs: [
      {
        title:
          "Experience with both native and cross-platform mobile development.",
        desc: "We offer expertise in developing for both platforms, ensuring a broad reach.",
      },
      {
        title: "Focus on delivering secure, high-performance applications.",
        desc: "Security and performance are our top priorities to keep your app running smoothly.",
      },
      {
        title:
          "Full-service development, from planning to post-launch support.",
        desc: "We handle all stages of development, ensuring long-term success.",
      },
    ],
  },
  {
    id: 2,
    image: uiux,
    icon: uiuxicon,
    heading: "UI/UX Design",
    description:
      "The user experience is at the core of every successful digital product. Our UI/UX design team focuses on creating visually appealing and intuitive interfaces that make interacting with your product a seamless and delightful experience. We combine creativity with data-driven design to ensure your website or app not only looks great but also provides the best user experience.",
    paragraph:
      "The user experience is paramount to any digital product’s success. Our design team focuses on creating intuitive, engaging, and visually appealing interfaces that ensure users enjoy every interaction with your brand. By combining creative design with user-centered principles, we help you stand out with an exceptional user experience.",

    services: [
      {
        title: "User Research & Personas",
        details:
          "In-depth research to understand your audience and guide the design process.",
      },
      {
        title: "Wireframes & Prototypes",
        details:
          "We develop interactive prototypes that allow us to test and refine ideas quickly.",
      },
      {
        title: "Usability Testing",
        details:
          "We ensure your design meets user needs and expectations through extensive testing.",
      },
    ],
    offerings: [
      {
        title: "User Research",
        desc: "We dive deep into understanding your audience’s behavior and preferences to inform design decisions.",
      },
      {
        title: "Prototyping & Wireframing",
        desc: "We build interactive wireframes and prototypes that help visualize the user journey before development begins.",
      },
      {
        title: "Usability Testing",
        desc: "We rigorously test our designs with real users to ensure they are intuitive and provide a seamless experience.",
      },
    ],
    whyChooseUs: [
      {
        title:
          "Tailored designs that reflect your brand’s personality and meet user needs.",
        desc: "We focus on designs that speak to your target audience while staying true to your brand.",
      },
      {
        title:
          "Collaboration with you every step of the way to ensure alignment with your vision.",
        desc: "We ensure that your feedback is incorporated at every phase of the design process.",
      },
      {
        title: "Continuous optimization of designs based on user feedback.",
        desc: "We keep refining our designs based on user input to guarantee the best experience.",
      },
    ],
  },
  {
    id: 3,
    image: web,
    icon: webicon,
    heading: "Web Development",
    description:
      "Your website is often the first impression potential customers have of your brand. Let’s make sure it’s a great one. Our expert web development team builds fast, secure, and responsive websites that are optimized for both performance and user experience. Whether you need an eCommerce platform, a business site, or a custom web application, we use the latest technologies to create websites that deliver results.",
    paragraph:
      "A robust website is more than just a digital storefront; it’s an essential tool that drives your business. Whether you need an eCommerce site, a custom web application, or a simple portfolio, our development team is here to bring your online presence to life. We create websites that are fast, secure, and optimized for performance across devices.",

    services: [
      {
        title: "Responsive Design",
        details:
          "Your site will look amazing and work perfectly on any device, from desktops to smartphones.",
      },
      {
        title: "Custom Solutions",
        details:
          "We build websites tailored to your business, ensuring it stands out from the competition.",
      },
      {
        title: "Content Management Systems",
        details:
          "We offer easy-to-manage CMS platforms like WordPress, Drupal, or custom-built systems for seamless updates.",
      },
    ],
    offerings: [
      {
        title: "Responsive Web Design",
        desc: "We design websites that are mobile-friendly and adapt seamlessly to any screen size, from phones to desktops.",
      },
      {
        title: "Custom Development",
        desc: "From CMS platforms to complex web applications, we build solutions that cater specifically to your business needs.",
      },
      {
        title: "Performance & SEO Optimization",
        desc: "We ensure that your website loads quickly, is easy to find on search engines, and provides a smooth user experience.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expertise in both front-end and back-end development.",
        desc: "We have the skills to deliver both beautiful and functional websites.",
      },
      {
        title: "Focus on high-performance, SEO-friendly websites.",
        desc: "Your site will perform well, load quickly, and rank higher in search results.",
      },
      {
        title:
          "Ongoing maintenance and optimization to keep your website at its best.",
        desc: "We ensure that your website remains up-to-date and optimized.",
      },
    ],
  },
  {
    id: 4,
    image: cloud,
    icon: cloudicon,
    heading: "Cloud Computing",
    description:
      "Adaptability and scalability are crucial in today’s digital-first world. Our cloud computing services help businesses optimize their infrastructure, reduce costs, and stay agile. Whether you are considering a cloud migration or need assistance with cloud-based solutions, we’ve got the expertise to make your transition smooth and successful.",
    paragraph:
      "The cloud is transforming the way businesses operate, providing scalable, secure, and cost-effective solutions. We help businesses move to the cloud, optimizing infrastructure and enhancing collaboration while cutting costs. Whether you're looking for cloud strategy, migration, or ongoing management, our team ensures your business operates efficiently in the cloud.",

    services: [
      {
        title: "Cloud Strategy & Consulting",
        details:
          "We help you develop a tailored cloud strategy to meet your specific goals.",
      },
      {
        title: "Infrastructure as a Service (IaaS)",
        details:
          "Scale your business infrastructure effortlessly while minimizing costs.",
      },
      {
        title: "Cloud Security",
        details:
          "Protect your data with robust security measures in the cloud, ensuring peace of mind.",
      },
    ],
    offerings: [
      {
        title: "Cloud Strategy",
        desc: "We work with you to design a cloud strategy that fits your goals and business model.",
      },
      {
        title: "Cloud Architecture",
        desc: "Our team builds scalable, secure cloud infrastructure to support your business growth.",
      },
      {
        title: "Cloud Security",
        desc: "We prioritize the security of your data, implementing the best practices to ensure your information is protected.",
      },
    ],
    whyChooseUs: [
      {
        title:
          "Deep knowledge of cloud platforms like AWS, Azure, and Google Cloud.",
        desc: "We are experts in the leading cloud platforms, ensuring the best solutions for your needs.",
      },
      {
        title: "Scalable solutions that grow with your business.",
        desc: "Our cloud infrastructure adapts as your business expands.",
      },
      {
        title: "Security and compliance as top priorities.",
        desc: "We implement robust security measures to protect your data and ensure compliance.",
      },
    ],
  },
  {
    id: 5,
    image: migration,
    icon: migrationicon,
    heading: "Cloud Migration",
    description:
      "Migrating to the cloud can streamline your business operations, enhance collaboration, and optimize IT costs. Our team specializes in helping organizations move their infrastructure to the cloud securely and efficiently. We ensure that your data and applications transition seamlessly with minimal disruption.",
    paragraph:
      "Migrating to the cloud offers countless benefits, including scalability, flexibility, and cost savings. Our cloud migration services help businesses move their infrastructure, data, and applications to the cloud smoothly and securely. We ensure minimal disruption during the migration process, so your business can continue to operate effectively throughout the transition.",

    services: [
      {
        title: "Cloud Readiness Assessment",
        details:
          "We conduct a thorough analysis to determine the best approach for migration.",
      },
      {
        title: "Smooth Transition",
        details:
          "We manage every step of the migration process to ensure zero downtime and secure data handling.",
      },
      {
        title: "Post-Migration Support",
        details:
          "Once the migration is complete, we continue to support you, ensuring that you get the most out of your new cloud infrastructure.",
      },
    ],
    offerings: [
      {
        title: "Cloud Assessment",
        desc: "We begin by assessing your current infrastructure to determine the best migration strategy.",
      },
      {
        title: "Seamless Migration",
        desc: "We manage every step of the migration process, ensuring a smooth and efficient transition to the cloud with minimal downtime.",
      },
      {
        title: "Post-Migration Support",
        desc: "After migration, we provide ongoing monitoring, optimization, and support to ensure that your cloud environment continues to perform at its best.",
      },
    ],
    whyChooseUs: [
      {
        title:
          "Experience with major cloud platforms like AWS, Azure, and Google Cloud.",
        desc: "We bring vast experience in the leading cloud platforms.",
      },
      {
        title:
          "A structured, secure, and efficient approach to cloud migration.",
        desc: "We ensure a smooth transition with minimal risk.",
      },
      {
        title:
          "Continuous support to optimize your cloud environment and maximize its potential.",
        desc: "Our support extends beyond migration to optimize your cloud infrastructure.",
      },
    ],
  },
  {
    id: 6,
    image: ai,
    icon: aiicon,

    heading: "Artificial Intelligence",
    description:
      "AI has the potential to reshape industries, and we’re here to help you unlock its power. Whether you're looking to introduce machine learning, automate business processes, or enhance customer interactions with AI, we offer tailored solutions that make your business smarter, more efficient, and more competitive.",
    paragraph:
      "Artificial Intelligence (AI) is revolutionizing the way businesses make decisions, automate processes, and engage with customers. Our AI services enable you to harness the power of machine learning, predictive analytics, and natural language processing (NLP) to improve efficiency, reduce costs, and create smarter business strategies.",

    services: [
      {
        title: "Machine Learning & Data Insights",
        details:
          "Harness the power of data to improve decision-making and predict trends.",
      },
      {
        title: "AI Chatbots & Assistants",
        details:
          "Enhance customer support with intelligent virtual assistants that provide real-time responses.",
      },
      {
        title: "Predictive Analytics",
        details:
          "Leverage AI to analyze data and forecast outcomes that help drive business strategies.",
      },
    ],
    offerings: [
      {
        title: "Machine Learning",
        desc: "We develop custom machine learning models to analyze data and predict outcomes, helping you make informed decisions.",
      },
      {
        title: "Natural Language Processing (NLP)",
        desc: "We use NLP to automate tasks like chatbots, sentiment analysis, and text generation to enhance customer experience.",
      },
      {
        title: "AI Integration",
        desc: "We seamlessly integrate AI solutions into your existing systems to automate processes and improve performance.",
      },
    ],
    whyChooseUs: [
      {
        title:
          "Expertise in machine learning, NLP, and deep learning technologies.",
        desc: "We bring advanced technologies to solve your complex business challenges.",
      },
      {
        title:
          "Custom AI solutions designed to meet your specific business challenges.",
        desc: "We develop AI strategies tailored to your goals.",
      },
      {
        title:
          "Proven results in delivering AI-driven improvements in efficiency and productivity.",
        desc: "Our AI solutions drive measurable business improvements.",
      },
    ],
  },
];

export const ourValues = [
  {
    id: 1,
    title: "Innovation",
    description:
      "Innovation is the heart of everything we do. We're not just about keeping up with technology; we're about staying ahead of it. By continually exploring the latest trends and tools, we deliver forward-thinking solutions that keep our clients on the cutting edge of their industries.",
    icon: <FaLightbulb />,
  },
  {
    id: 2,
    title: "Collaboration",
    description:
      "We believe that the best results come from working together. Whether it's within our team or with you as a client, collaboration is key. By maintaining open, transparent communication, we ensure that every project aligns with your vision and objectives.",
    icon: <FaUsers />,
  },
  {
    id: 3,
    title: "Commitment to Excellence",
    description:
      "We don't settle for anything less than the best. Every project we undertake is executed with a focus on quality, from the initial concept to the final product. Our team’s meticulous attention to detail ensures that we deliver solutions that not only meet but exceed expectations.",
    icon: <FaStar />,
  },
  {
    id: 4,
    title: "Client-Centric Approach",
    description:
      "Our success is measured by the success of our clients. We're dedicated to providing exceptional support and guidance every step of the way, from strategy development to post-launch maintenance. Your goals drive our process, and we’re committed to helping you achieve them.",
    icon: <FaHandsHelping />,
  },
];

export const clientTestimonials = [
  {
    id: 1,
    title: "A True Partner in Our Mobile Journey",
    name: "John Miller",
    position: "CEO of XYZ Corp",
    description:
      "Collaborating with MANYAA TECH SOLUTIONS to develop our mobile app was a fantastic experience. From the first brainstorming session to the app launch, the team took the time to understand our business needs and delivered a product that truly met them. The app has been a hit with our customers—easy to use, fast, and secure. They continue to provide excellent post-launch support, ensuring everything runs smoothly and staying on top of updates. We couldn’t be happier with the result!",
  },
  {
    id: 2,
    title: "A Smooth Development Process with Outstanding Results",
    name: "Sarah Jones",
    position: "Marketing Director at ABC Ltd.",
    description:
      "Launching our mobile app was a critical project for our business, and MANYAA TECH SOLUTIONS made the whole process seamless. They delivered a beautifully designed, fully functional app that has already made a significant impact. The user feedback has been overwhelmingly positive, and we’ve seen increased engagement thanks to the thoughtful design and intuitive interface. Their communication throughout the entire process was excellent, and we are so glad we chose to work with them.",
  },

  {
    id: 3,
    title: "Transforming Our User Experience",
    name: "Mark Stevens",
    position: "Head of Product at TechSolutions",
    description:
      "Working with the design team at MANYAA TECH SOLUTIONS has been a game-changer for us. They completely redesigned our user interface, improving usability while giving our platform a sleek, modern look. The results speak for themselves—the user engagement has increased, and customers now find it much easier to navigate our site. The team’s ability to understand user pain points and deliver intuitive solutions has really set them apart. We’re thrilled with the outcome!",
  },
  {
    id: 4,
    title: "Exceptional Design That Enhances User Interaction",
    name: "Rachel Adams",
    position: "Chief Product Officer at FinTech Innovations",
    description:
      "User experience is everything, especially in our industry, and MANYAA TECH SOLUTIONS truly delivered. They worked closely with us to create a design that not only looks great but also makes the user journey smoother. The new interface has led to better customer retention and overall satisfaction. Their team’s commitment to understanding our business and users has resulted in a product that resonates deeply with our audience. I’d highly recommend them to any company looking to elevate their user experience.",
  },

  {
    id: 5,
    title: "A Website That Reflects Our Brand Perfectly",
    name: "David Clark",
    position: "Founder of Retail360",
    description:
      "MANYAA TECH SOLUTIONS helped us create a website that truly represents who we are as a brand. The team’s attention to detail during both the design and development phases was remarkable. The final product is sleek, easy to navigate, and user-friendly. Since the website went live, we’ve seen a marked increase in both traffic and conversions, which is a direct result of the fantastic work they did. We are excited about the future with this platform!",
  },
  {
    id: 6,
    title: "Professional and Expert Web Development",
    name: "Linda Gonzalez",
    position: "CEO of GreenEarth Ventures",
    description:
      "From start to finish, the team at MANYAA TECH SOLUTIONS provided nothing but professionalism. They built us a customized website that’s not only visually appealing but also incredibly functional. Our team found the platform easy to manage, and the back-end functionality is spot on. Their ability to deliver on time and within budget was impressive, and we are more than happy with how the website has performed for us. If you're looking for top-tier web development, look no further.",
  },

  {
    id: 7,
    title: "Empowering Our Business with the Cloud",
    name: "Michael Roberts",
    position: "IT Director at Global Enterprises",
    description:
      "Making the leap to the cloud was a big decision for us, and MANYAA TECH SOLUTIONS made it easy. They helped us evaluate our needs, select the right cloud solution, and transition our operations seamlessly. Our cloud infrastructure is now more secure, flexible, and scalable, which has dramatically improved our business efficiency. The team’s expertise in cloud computing gave us confidence throughout the process, and the results have been outstanding.",
  },
  {
    id: 8,
    title: "The Right Cloud Solution for Our Growth",
    name: "Jessica Wright",
    position: "CTO at InnovateTech",
    description:
      "From day one, MANYAA TECH SOLUTIONS took the time to understand our company’s goals and challenges. Their team recommended and implemented a cloud solution that perfectly fit our needs, helping us increase collaboration and reduce IT overhead. We’ve experienced significant cost savings, and the ability to scale our infrastructure as we grow has been a huge advantage. Their ongoing support ensures that we are always optimizing our cloud environment.",
  },

  {
    id: 9,
    title: "AI Solutions That Drive Real Change",
    name: "James Parker",
    position: "CEO of FutureTech Solutions",
    description:
      "AI is a crucial part of our strategy, and MANYAA TECH SOLUTIONS has been instrumental in helping us integrate AI into our operations. They developed a machine learning solution that allows us to make smarter decisions based on data, improving efficiency across the board. Their team is extremely knowledgeable, and they took the time to ensure the AI models were perfectly aligned with our business needs. We’ve seen noticeable improvements in our processes, and the impact has been significant.",
  },
  {
    id: 10,
    title: "Unlocking New Possibilities with AI",
    name: "Emma Richards",
    position: "Director of Operations at Data Insights Inc.",
    description:
      "Introducing AI into our business was a strategic move, and MANYAA TECH SOLUTIONS made sure we got it right. They created a tailored AI solution that automates key processes, saving us time and reducing costs. Additionally, the predictive analytics tools they developed have provided us with valuable insights that are helping us make more informed decisions. Their expertise in AI has been invaluable, and we’ve already seen great results.",
  },

  {
    id: 11,
    title: "Seamless Cloud Migration with Zero Hassle",
    name: "William Harris",
    position: "IT Manager at TechForward",
    description:
      "Our move to the cloud was a major undertaking, but MANYAA TECH SOLUTIONS made it remarkably smooth. They worked with us to assess our infrastructure and came up with a well-structured migration plan that ensured minimal downtime. The team handled everything from data migration to security setup, and we’re now operating in a more flexible, secure, and cost-efficient cloud environment. Their professionalism and attention to detail made the entire process stress-free.",
  },
  {
    id: 12,
    title: "Effortless Transition to the Cloud",
    name: "Samantha Lee",
    position: "COO of HealthCare Solutions",
    description:
      "Choosing MANYAA TECH SOLUTIONS for our cloud migration was the best decision we made. They helped us move all our critical data and applications to the cloud quickly and without disruption. Their clear communication and expertise made the process much easier than we anticipated. Since the migration, we’ve seen improved efficiency, scalability, and better collaboration among teams. Their ongoing support ensures that our cloud environment is running smoothly.",
  },
];
