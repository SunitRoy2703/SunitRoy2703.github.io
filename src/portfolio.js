﻿/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Sunit Roy",
  title: "Hi all, I'm Sunit",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having mobile development work experience in Android, Flutter, Augmented Reality, Machine Learning .  I'm currently working in a start-up called Wholesome Company."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1J3wzvp4HBxAyA-tRWXD3spiyp0sn0-zz/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SunitRoy2703/",
  linkedin: "https://www.linkedin.com/in/sunit-roy/",
  gmail: "iamsunitroy03@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
   medium: "https://sunitroy.medium.com/",
  // // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY MOBILE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your android and flutter applications"
    ),
    emoji("⚡ Developed multiple apps from stretch and published them to play store"),
    emoji(
      "⚡ Developed apps using multiple SDK like Arcore, MLkit and Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "android sdk",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fas fa-angle-double-left"
    },
    {
      skillName: "dart",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "tflite",
      fontAwesomeClassname: "fas fa-head-side-virus"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fab fa-free-code-camp"
    },
    {
      skillName: "ml-kit",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "arcore",
      fontAwesomeClassname: "fab fa-codepen"
    },
    {
      skillName: "Third Party Apis",
      fontAwesomeClassname: "fas fa-check-circle"
    },
    {
      skillName: "android studio",
      fontAwesomeClassname: "fas fa-drafting-compass"
    },
    {
      skillName: "vs code",
      fontAwesomeClassname: "fas fa-align-left"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "debuging",
      fontAwesomeClassname: "fas fa-bug"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Engineering Institute For Junior Executives",
      logo: require("./assets/images/eije.png"),
      subHeader: "Diploma in Electronics & Tele-Communications",
      duration: "july 2019 - August 2022 (expected)",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Kenduadihi High School(H.S)",
      logo: require("./assets/images/kenduadihi.png"),
      subHeader: "Secondary Educations",
      duration: "January 2013 - April 2019",
      // desc:
      //   "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
     // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android Framework", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java/Kotlin",
      progressPercentage: "90%"
    },
    {
      Stack: "Flutter Framework",
      progressPercentage: "90%"
    },
    {
      Stack: "Firebase",
      progressPercentage: "75%"
    },
    {
      Stack: "Rest Api",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Software Developer",
      company: "Wholesome Company",
      companylogo: require("./assets/images/wholesome.webp"),
      date: "Mar 2021 - Present",
      desc:
        "Recently, I got promoted to Junior Software Developer in Wholesome Company, Now I'm helping the start up in Research and building docs",
     
         descBullets: [
        "Research",
        "Adding new features",
        "App Security",
        "Building docs"
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Wholesome Company",
      companylogo: require("./assets/images/wholesome.webp"),
      date: "Dec 2020 – Mar 2021",
      desc:
        "I was a Mobile Developer intern in Wholesome Company, I have helped the start up for developing multiple AR apps from scratch, and deploy it to the Playstore.",
     
         descBullets: [
        "Modifying their previous projects",
        "Improving their UI/UX",
        "Adding new features",
        "App Security",
        "Firebase Integration",
        "VCS",
        "App Optimization",
        "Building docs"
      ]
    },
    {
      role: "Open Source Developer",
      company: "Fossasia",
      companylogo: require("./assets/images/fossasia.jpg"),
      date: "Aug 2020 – Dec 2020",
      desc:
        "Last year I got involved in Fossasia, an One of the biggest Open Source Organization in Asia.",
     descBullets: [
          "Got Involved in multiple projects",
          "Multiple pull request to their code",
          "Many contributions related to the community",
          "Participated in multiple virtual events there",
        ]  
      },
  //  {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken:  process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "SunitRoy2703", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS THAT I HAVE DEVELOPED AND CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/ic_launcher_foreground.png"),
      projectName: "Essence(WHOLESOME COMPANY)",
      projectDesc: "Essence is an Augmented Reality app, that captures the essence of the real world in the virtual or augmented world",
      footerLink: [
        {
          name: "Get The App in PlayStore",
          url: "https://play.google.com/store/apps/details?id=com.wholesome.essence.android"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/arpicasso1.png"),
      projectName: "Ar Picasso",
      projectDesc: "Ar Picasso is an Augmented Reality app, which let's you draw in air!",
      footerLink: [
        {
          name: "Get The App in PlayStore",
          url: "https://play.google.com/store/apps/details?id=com.sunit.arpicasso"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/jackox.png"),
      projectName: "Jackoxr(WHOLESOME COMPANY)",
      projectDesc: "This app is an extended reality app, where we can put 3D objects in augmented reality space",
      footerLink: [
        {
          name: "Get The App in PlayStore",
          url: "https://play.google.com/store/apps/details?id=jacko.xr.ar"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Letters & Certifications 🏆 "),
  subtitle:
    "Here are some of my certificates that i want you to show!",

  achievementsCards: [

    {
      title: "MLH Letter",
      subtitle:
        "Letter from Major League Hacking",
      image: require("./assets/images/mlhicon.png"),
      footerLink: [
        {
          name: "Letter",
          url:
            "https://drive.google.com/file/d/1ntslnCQP-NXy7nurpS7OcWmbFt-h0CF9/view?usp=sharing"
        }
      ]
    },

    {
      title: "Google ARCore Certificate",
      subtitle:
        "This Certification covers the basic fundamentals of augmented reality (AR), and how to build an AR experience using ARCore, by Google",
      image: require("./assets/images/google.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1bjHWivIl0HvxcH_zmka4kDp5r3BV6vNA/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url:
        //     "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url:
        //     "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Jetbrains Kotlin Certificate",
      subtitle:
        "Kotlin Certification for Java Developers from Jetbrains",
      image: require("./assets/images/jetbrains.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1nOCIvdOW8BY95AWFI1Yuf-XZDkApT5aY/view?usp=sharing"
        }
      ]
    },

    {
      title: "Google Python Certificate",
      subtitle: "Crash Course on Python by Google",
      image: require("./assets/images/google.png"),
      footerLink: [
        {name: "Certification", 
        url: "https://drive.google.com/file/d/1gskIM0aH49Ifwnxujp16fM8AKbSsVJ6U/view?usp=sharing"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://sunitroy.medium.com/how-to-use-firebase-on-android-without-the-google-services-plugin-d02c8b9854b7",
      title: "Use Firebase without the google-services.json file in Android",
      description:
        "Do you want to know how to use firebase without google plug-in?"
    },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6295723709",
  emailAddress: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "sry_iam", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
