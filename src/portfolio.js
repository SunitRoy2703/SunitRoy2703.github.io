/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Sunit Roy",
  title: "Hi all, I'm Sunit",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having mobile development work experience in Android, Flutter, IOS & Augmented Reality.  I'm currently contributing to Google's Open Source Machine Learning Platform Tensorflow."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1JTJUpKhgkWnAUTnAbvbjgJPSkt8klW8mkOYgKxdmsW8/edit?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SunitRoy2703/",
  linkedin: "https://www.linkedin.com/in/sunit-roy/",
  gmail: "iamsunitroy03@gmail.com",
  medium: "https://sunitroy.medium.com/",
  twitter: "https://twitter.com/HeySunit",
  instagram: "https://www.instagram.com/sunitroy_/",
  youtube: "https://www.youtube.com/SunitRoy",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE MOBILE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive User Interfaces for your android and flutter applications"
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
      subHeader: "Diploma in Electronics & Tele-Communications Engineering",
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
      Stack: "Android SDK", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java/Kotlin",
      progressPercentage: "90%"
    },
    {
      Stack: "Flutter Framework",
      progressPercentage: "80%"
    },
    {
      Stack: "IOS SDK",
      progressPercentage: "65%"
    },
    {
      Stack: "Firebase",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Campus Expert",
      company: "GitHub",
      companylogo: require("./assets/images/github.png"),
      date: "Oct 2021 - Present",
      desc:
        "One of first GitHub Campus Expert from Bengal",

      descBullets: [
        "Campus Experts are student leaders that strive to build diverse and inclusive spaces to learn skills, share their experiences, and build projects together. They can be found across the globe leading in-person and online conferences, meetups, and hackathons, and maintaining open source projects."
      ]
    }, {
      role: "Educator",
      company: "YouTube",
      companylogo: require("./assets/images/youtube.svg"),
      date: "Mar 2021 - Present",
      desc:
        "I teach Android Development on my Youtube channel",

      descBullets: [
        "Detailed 4k quality videos",
        "4500+ Youtube views",
        "330+ Subscribers",
        "100+ Community Discord server",
      ]
    },
    {
      role: "GSoc Student Developer",
      company: "Tensorflow",
      companylogo: require("./assets/images/TF_Icon.png"),
      date: "May 2021 - Aug 2021",
      desc:
        "Contributing to Google's Open Source Machine Learning Platform Tensorflow in collaboration with Google Engineers",

      descBullets: [
        "Designed & recreated the BERT NLP Question Answering App (TFLite’s top 5 apps) to use the latest TFLite Task Library (released in Tensorflow DevSummit 2020) both in Android (Java) and iOS (Swift).",
        "Developed separate Android library modules of Task API and Interpreter for BERT Question Android App & redesigned the app to switch between both APIs using Android product flavors.",
        "Designed & recreated the Text Classification Android App (Java) to use the latest TFLite Task Library & to switch between both NLClassifier and BertNLClassifier API",
        "Replaced 6000 lines of tedious custom code with few lines of simplified APIs.",
        "Added documentation, tests, and code-walkthrough to help onboard new users.",
      ]
    },
    {
      role: "Software Developer",
      company: "Wholesome Company",
      companylogo: require("./assets/images/wholesome.webp"),
      date: "Mar 2021 - May 2021",
      desc:
        "Got promoted to Junior Software Developer in Wholesome Company",

      descBullets: [
        "Designed & Developed an Augmented Reality (Arcore) Social media platform (Java), which lets you capture Augmented Reality environments and recreate and edit them anywhere.",
        "Deployed and updated multiple Augmented Reality (Arcore) Android (Java) Apps to the Play store.",
        "Conducted a live Android Development webinar with 50 students.",
        "Researched Augmented Reality & 3D rendering on mobile devices and created architectural diagrams for the AR SDK."
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
        " Designed & Developed Augmented Reality Android(Java) Apps from scratch with Documentation.",
        "Fixed bugs on their previous app and updated the app on the Play store.",
        "Created architectural diagrams for their android applications and android app creation lifecycle.",
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
        "Spoked and participated in their multiple virtual events.",
        "Multiple pull request to their code",
        "Many contributions related to the community",
      ]
    }
  ]
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
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
      image: require("./assets/images/TF_Icon.png"),
      projectName: "BERT NLP Question Answering App",
      projectDesc: "This Open-source app answers questions based on the content of a given passage of text with Bert. Here, I Designed & recreated the app in Android (Java) and iOS (Swift) to use TFLite Library.",
      footerLink: [
        {
          name: "Get The Code",
          url: "https://github.com/SunitRoy2703/examples/tree/bertQa-android-task-lib/lite/examples/bert_qa"
        },
        {
          name: "Demo",
          url: "https://camo.githubusercontent.com/b778c1809535bce8aff46ccea3bfbbfff9cfb6693e35547dc97af41a4fab92d0/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f646f776e6c6f61642e74656e736f72666c6f772e6f72672f6d6f64656c732f74666c6974652f73637265656e73686f74732f6265727471615f696f735f737769667475695f64656d6f2e676966"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/help_out.png"),
      projectName: "helpOut",
      projectDesc: "helpOut lets you search for Oxygen, Ambulance, Ventilator, Beds, and many more related tweets by location.",
      footerLink: [
        {
          name: "Get The App in PlayStore",
          url: "https://play.google.com/store/apps/details?id=com.sunit.helpout"
        },
        {
          name: "Get The Source Code",
          url: "https://github.com/SunitRoy2703/helpOut"
        },
        {
          name: "Demo",
          url: "https://www.youtube.com/shorts/caky4uOc5xs"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ic_launcher_foreground.png"),
      projectName: "Essence",
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
        },
        {
          name: "Get The Source Code",
          url: "https://github.com/SunitRoy2703/ARPicasso"
        },
        {
          name: "Demo",
          url: "https://www.youtube.com/shorts/yhtn43MDR0A"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/jackox.png"),
      projectName: "Jackoxr",
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
  title: emoji("Leadership & Awards 🏆 "),
  subtitle:
    "Here are some of my achievement that i want you to show!",

  achievementsCards: [
    {
      title: "GitHub Campus Expert",
      subtitle:
        "One of first GitHub Campus Expert from Bengal",
      image: require("./assets/images/github.png"),
      footerLink: [
        {
          name: "Learn more",
          url:
            "https://education.github.com/experts"
        }
      ]
    },
    {
      title: "Seminars",
      subtitle:
        "Conducted live seminars on Android development, TFLite and Open Source",
      image: require("./assets/images/public-speaking.png"),
      footerLink: [
        {
          name: "All Seminars",
          url:
            "https://bit.ly/SunitRoyAllSeminars"
        },
        {
          name: "Open Source Seminar",
          url:
            "https://youtu.be/iws-QGALzLk"
        },
        {
          name: "TFLite Seminar",
          url:
            "https://youtu.be/sZayUoWW6nE"
        },
        {
          name: "Android seminar",
          url:
            "https://youtu.be/LnrkFd2UKaw"
        }
      ]
    },
    {
      title: "Discord server",
      subtitle:
        "Built Community Discord server of 100+ Developers",
      image: require("./assets/images/discord.svg"),
      footerLink: [
        {
          name: "Join the Community",
          url:
            "https://bit.ly/SunitRoyDiscord"
        }
      ]
    },
    {
      title: "Codepath Technical Mentor",
      subtitle:
        "Currently mentoring college students in this non-profit, on Open source programs and Programming as a Codepath Technical mentor.",
      image: require("./assets/images/codepath.png"),
      footerLink: [
        {
          name: "Codepath Mentorship",
          url:
            "https://codepath.org/volunteer"
        },
        {
          name: "Codepath",
          url:
            "https://codepath.org"
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
        }
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
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1gskIM0aH49Ifwnxujp16fM8AKbSsVJ6U/view?usp=sharing"
        },
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
      url: "https://sunitroy.medium.com/google-summer-of-code-2021-tensorflow-%EF%B8%8F-9e171134f2c8",
      title: "Google-Summer-of-Code-2021-Tensorflow ❤️",
      description:
        "Here’s my final submission for Google summer of code 2021 at #tensorflow."
    },
    {
      url: "https://sunitroy.medium.com/creating-a-collection-of-tensorflow-lite-example-apps-in-kotlin-bad01f7784b0",
      title: "Creating a collection of Tensorflow Lite example Apps in kotlin",
      description:
        "I’m creating a collection of Tensorflow Lite example Apps in kotlin, to show the kotlin implementation of the example Apps."
    },
    {
      url: "https://sunitroy.medium.com/android-development-series-for-beginners-46001562eb42",
      title: "Android Development Series for Beginners🚀",
      description:
        "I’m really excited to announce the Android development series. This series is specially for beginners in Android and will teach you how to build and deploy Android Applications with very efficient methods."
    },
    {
      url: "https://sunitroy.medium.com/learn-to-make-jetpack-compose-in-10-minutes-a27335a4a225",
      title: "Learn to make Jetpack Compose in 10 minutes!",
      description:
        "Jetpack Compose is a modern toolkit for building native Android UI. Jetpack Compose simplifies and accelerates UI development on Android with less code, powerful tools, and intuitive Kotlin API"
    },
    {
      url: "https://sunitroy.medium.com/create-a-branch-from-unstaged-uncommitted-changes-on-master-e8bbbd602797",
      title: "Create a branch from unstaged/uncommitted changes on master",
      description:
        "You might have started to make changes to your local repo and later released that you are working on the master branch"
    },
    {
      url: "https://sunitroy.medium.com/do-you-need-to-install-jdk-for-installing-android-studio-b8cade1f1e4d",
      title: "Do you need to install JDK for installing Android Studio📝",
      description:
        "It’s very surprising that big Youtubers, even guys with Million subscriber tells you to install standalone JDK before Android studio."
    },
    {
      url: "https://sunitroy.medium.com/error-pathspec-xxx-did-not-match-any-file-s-known-to-git-f3086153f054",
      title: "error: pathspec ‘XXX’ did not match any file(s) known to git",
      description:
        "You might be here because you searched the above title on Google (as I did yesterday when I faced the same problem) and after getting the results, you preferred Medium over StackOverflow. :)"
    },
    {
      url:
        "https://sunitroy.medium.com/how-to-use-firebase-on-android-without-the-google-services-plugin-d02c8b9854b7",
      title: "Use Firebase without the google-services.json file in Android",
      description:
        "Do you want to know how to use firebase without google plug-in?"
    },

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
    "Mail me for Seminars and Workshops Here",
  emailAddress: "iamsunitroy03@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "HeySunit", //Replace "twitter" with your twitter username without @
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
