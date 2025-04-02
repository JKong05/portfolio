import findmyap from "../../../assets/projects/findmyap.png"
import pattywagon from "../../../assets/projects/pattywagon.png"
import socialchangemaker from "../../../assets/projects/socialchange.png"
import llm_bjt from "../../../assets/projects/llm-bjt.png"
import miracle_flights from "../../../assets/projects/miracle-flights.png"
import age_linguistics_pipeline from "../../../assets/projects/age-linguistics.png"

export const projectDetails = {
    findmyAP: {
      projectID: "findmyAP",
      title: "findmyAP",
      description: "Earn college credit for your work. This platform is designed for students looking to streamline the AP credit policy search process at over 2000 College Board affiliated institutions. It allows students to simply enter their AP courses and scores, and our system checks for equivalent college credit at the specified school.",
      link: "https://apcredit.onrender.com/",
      stack: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
      image: findmyap,
      category: "webdev"
    },
    pattywagon: {
      projectID: "pattywagon",
      title: "Patty Wagon Voyage",
      description: "This was a coding challenge for Vanderbilt's Change Plus Plus student organization, which entailed developing a geography-based trivia game in your own style. The only conditions of the project were that the questions or trivia be related to geography. I had the brilliant idea to then base it off of the Spongebob movie because as I was trying to come up with ideas for a concept at 3:00 AM, I was watching clips of the movie on YouTube.",
      link: "https://github.com/JKong05/patty-wagon-voyage",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      image: pattywagon,
      category: "webdev"
    },
    socialchangemaker: {
      projectID: "socialchangemaker",
      title: "Case Management Form",
      description: "This was the case management form that my team and I designed and developed for case managers in the surrounding Nashville area in collaboration with Gift of Mary and the Social Changemakers initiative. It was built using HTML, CSS, and JavaScript, and it was designed to be a user-friendly and accessible tool for case managers to use in their work. This gave me an opprotunity to R&D a solution to a real-world problem, and I learned a lot about the importance of user experience and accessibility in software development.",
      link: "https://github.com/JKong05/SocialChangemakers",
      stack: ["HTML", "CSS", "JavaScript"],
      image: socialchangemaker,
      category: "webdev"
    },
    llm_bjt: {
      projectID: "llm_bjt",
      title: "Analyzing Developmental Linguistics - LLMs",
      description: "This project optimized virtual environments in Unity using C#, improving runtime efficiency by 60%. It also developed a Python-based pipeline for processing audio data, utilizing Meta’s Seamless Communication models and OpenAI’s Whisper model to extract prosodic and semantic features. This resulted in a 200% increase in embedding creation efficiency, significantly enhancing both performance and data processing speed.",
      link: "https://docs.google.com/document/d/1J6_oW0h9mophgnnnJRjAEf3nkxZU_oF8T99Pqf5lydE/edit?usp=sharing",
      stack: ["Python - Transformers, PyTorch, TensorFlow", "Unity", "C#"],
      image: llm_bjt,
      category: "research"
    },
    age_linguistics_pipeline: {
      projectID: "age_linguistics_pipeline",
      title: "Speech-to-Sentiment Pipeline for Analyzing Semantic and Expressive Changes Across the Lifespan",
      description: "This project aims to develop an accessible pipeline and user interface that converts spoken language into sentiment and semantic analyses. The initial application will investigate how semantics and expressivity in speech evolve with age. By processing speech inputs to extract prosodic features—such as intonation, tone, and pitch—and semantic content, we will generate representational embeddings that encapsulate both the meaning and emotional nuances of spoken language. Utilizing multimodal models, the pipeline will facilitate the comparison of these embeddings across different age groups, providing insights into the developmental trajectory of speech characteristics throughout the human lifespan.",
      link: "https://www.tovarlab.org/projects#project-speech-to-sentiment-pipeline-for-analyzing-semantic-and-expressive-changes-across-the-lifespan",
      stack: ["Python, PyTorch, Model Development"],
      image: age_linguistics_pipeline,
      category: "research"
    },
    miracle_flights: {
      projectID: "miracle_flights",
      title: "Miracle Flights",
      description: "This project was a collaboration with Miracle Flights, a non-profit organization that provides free air transportation to children with special needs. I was responsible for developing the notification system and refining the web application that allows the organization to manage their patient referrals and coordinate flights for children in need. The application was built using React, TypeScript,Node.js, and MongoDB, and it was designed to be a user-friendly and accessible tool for the organization to use in their work. This was done in collaboration with Vanderbilt's student organization Change Plus Plus.",
      link: "https://miracleflights.org/",
      stack: ["React", "TypeScript", "Node.js", "MongoDB"],
      image: miracle_flights,
      category: "webdev"
    }
  };