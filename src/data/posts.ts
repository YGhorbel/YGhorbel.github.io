export const posts = {
  items: [
    {
      title: `Graduated with High Honors`,
      date: `Oct 2, 2026`,
      link: `https://www.linkedin.com/posts/yassine-ghorbel_graduated-with-high-honors-after-a-7-activity-7511772072776486912-GoLv`,
      images: [
        `/images/posts/graduation-1.jpg`,
        `/images/posts/graduation-2.jpg`,
        `/images/posts/graduation-3.jpg`,
        `/images/posts/graduation-4.jpg`,
        `/images/posts/graduation-5.jpg`
      ],
      description: `🎓 Graduated with High Honors!

After a 7-month internship at Guepard , I completed my project: “Ontology-Based Semantic Layer Construction for Natural-Language Database Querying.”

The project focused on Qwery, Guepard’s natural-language data exploration agent. When I joined, Qwery could hallucinate SQL, invent joins and business definitions, and sometimes needed multiple prompts to reach the right answer. My goal was to give it actual business knowledge through a semantic layer.

After nearly two months researching how to bridge LLMs and structured knowledge, I built that layer as an ontology.

The system has two parts:

🔹 Offline: an 8-step LangGraph pipeline that introspects databases, profiles columns, discovers undeclared joins, and builds an RDF/OWL ontology with IRIs, SKOS labels, synonyms, and QSL metadata. I then trained a dual-tower encoder in PyTorch using a frozen bge-small-en-v1.5 backbone and InfoNCE contrastive learning on BIRD queries.

🔹 Online: the retriever matches questions to ontology nodes. To solve cases where similarity finds the right tables but misses the bridge table, I used a Steiner-tree algorithm to recover the structurally required connections. The resulting subgraph is serialized into a schema that Qwery’s SQL agent can directly consume.

📊 Results:
• BIRD Dev: 32.5% → 59% exact match
• BIRD Mini-Dev: 29% → 66.4%
• ~⅓ of baseline token usage
• Tested across multiple databases and LLMs

One unexpected finding: several mismatches with BIRD’s gold SQL were actually issues in the benchmark itself, a reminder that even widely used benchmarks have blind spots.

My biggest takeaway: AI + real knowledge beats AI alone. Ontologies may be a powerful way to bridge LLMs and real-world data, and I’m excited to keep exploring this space.

Huge thanks to my family, my supervisors Yassine Tbessi and Prof. Amine Ben Salem , Ouael Ben Amara for his guidance throughout the project, and our CEO KC - Koutheir Cherni for believing in me from day one.

Next chapter, let’s go. 🚀`
    },
    {
      title: `Guepard's GFS Wins Audience Favorite at GOSIM Paris 2026`,
      date: `May 6, 2026`,
      link: `https://www.linkedin.com/feed/update/urn:li:activity:7457840415954616320/`,
      images: [
        `/images/posts/gfs-1.jpg`,
        `/images/posts/gfs-2.jpg`
      ],
      description: `Guepard’s GFS won! 🏆😎
What a ride. Honestly, huge relief after this, but what stood out the most were the projects. So many promising ideas, real impact for the future of AI.
The competition was tight… but our community showed up strong over 50% of the votes across 10 projects. That says everything.
Big thanks to everyone who made this happen, especially Hani C.  and Amine Shiri 🙌
This is just the end of the beginning…
See you at the next GOSIM Foundation conferences 👀`
    },
    {
      title: `Speaking at WAJAHNI`,
      date: `Apr 8, 2026`,
      link: `https://www.linkedin.com/feed/update/urn:li:activity:7447677596647137280/`,
      images: [
        `/images/posts/wajahni-1.jpg`,
        `/images/posts/wajahni-2.jpg`
      ],
      description: `Throwback to this great event WAJAHNI where I had the chance to connect with inspiring and talented students. I really enjoyed sharing my journey and experiences with them.
Big thanks to Upmanyu B.  for the invitation!
Also, thank you all for 2.5K followers it truly means a lot to me. Grateful to have you along on this journey 🚀`
    },
    {
      title: `From Community Builder to AI Intern at Guepard`,
      date: `Feb 10, 2026`,
      link: `https://www.linkedin.com/feed/update/urn:li:activity:7427027492122583040/`,
      images: [
        `/images/posts/ai-intern-1.jpg`
      ],
      description: `There’s a French quote that says, “𝗢𝗻 𝗻𝗲 𝗰𝗵𝗮𝗻𝗴𝗲 𝗽𝗮𝘀 𝘂𝗻𝗲 𝗲𝗾𝘂𝗶𝗽𝗲 𝗾𝘂𝗶 𝗴𝗮𝗴𝗻𝗲.”🥐

𝗧𝗿𝗮𝗻𝘀𝗹𝗮𝘁𝗶𝗼𝗻:
After more than four months as a Community Builder at Guepard , I’m excited to continue the journey with the Database Wizards 🧙 team as an 𝗔𝗜 𝗜𝗻𝘁𝗲𝗿𝗻 for my final-year project. I’ll be working on s𝗲𝗺𝗮𝗻𝘁𝗶𝗰 𝗹𝗮𝘆𝗲𝗿 𝗲𝗻𝗵𝗮𝗻𝗰𝗲𝗺𝗲𝗻𝘁 𝗮𝗻𝗱 𝘂𝘀𝗲𝗿 𝗼𝗻𝗯𝗼𝗮𝗿𝗱𝗶𝗻𝗴, under the mentorship of the special one, Yassine Tbessi. 

All I can say is: 𝗕𝗜𝗚 𝗧𝗛𝗜𝗡𝗚𝗦 𝗔𝗥𝗘 𝗖𝗢𝗠𝗜𝗡. Six more months of adventure, learning, and building.🐆

A huge thanks to 🐆 KC - Koutheir Cherni , Ghassen Menaouar , and Hani C.  for their trust and for allowing me to be part of this movement.

I’ll be sharing this journey with you from now on.

𝗛𝗮𝗽𝗽𝘆 𝗰𝗼𝗱𝗶𝗻𝗴, 𝗴𝗲𝗲𝗸𝘀!`
    },
    {
      title: `Hosting, Mentoring and Judging at the Orange AI Hackathon`,
      date: `Dec 29, 2025`,
      link: `https://www.linkedin.com/posts/yassine-ghorbel_what-an-incredible-way-to-close-the-year-ugcPost-7411414924024934400-hzjL`,
      images: [
        `/images/posts/tsyp-1.jpg`,
        `/images/posts/tsyp-2.jpg`,
        `/images/posts/tsyp-3.jpg`,
        `/images/posts/tsyp-4.jpg`,
        `/images/posts/tsyp-5.jpg`,
        `/images/posts/tsyp-6.jpg`,
        `/images/posts/tsyp-7.jpg`,
        `/images/posts/tsyp-8.jpg`
      ],
      description: `What an incredible way to close the year!

After participating in many hackathons and even winning some, I never imagined that one day I’d be hosting, mentoring, and serving as a jury member at one.

I’m truly grateful to have been part of OAIH during the IEEE Tunisian Student and Young Professional TSYP Congress , hosted by Orange x Guepard  x IEEE Tunisia Section . 

It was an amazing experience engaging with participants from different universities and backgrounds. Over 24 hours, I had the chance to learn new tools, exchange ideas, and support teams, mainly around AWS services and the Guepard platform, alongside the GOAT chater Marzougui. Proud to say we also ensured that all data remained secure on our infrastructure.

I was also honored to meet and exchange with inspiring experts such as Mr Hironori Washizaki  (IEEE CS President) and Dr. Andrew D. Lowery, Ph.D.. Our discussions around AI, innovation, and business were truly enriching.

Huge thanks to the amazing team behind this success:
Heni Mezrani , Rami Gharbi, chater Marzougui, Mohamed Ali Zormati, and our Guepard teammates Ghassen Menaouar  and khalil TBINI. 
This TSYP edition was truly special and honestly, it feels like just the beginning 🚀`
    },
    {
      title: `Showing Guepard at the INSAT Forum`,
      date: `Nov 26, 2025`,
      link: `https://www.linkedin.com/posts/yassine-ghorbel_insat-forum-was-a-blast-huge-thanks-to-ugcPost-7399489997600346112-NJx6`,
      images: [
        `/images/posts/insat-1.jpg`,
        `/images/posts/insat-2.jpg`
      ],
      description: `INSAT Forum was a blast 🔥
Huge thanks to Junior Entreprise INSAT for the incredible organization and hospitality.

Loved interacting with students, engineers and entrepreneurs from so many different fields.
The reactions were priceless people saw Guepard in action and went:
“Wait… how can you copy 1 TB in seconds?” 👀

My answer:
“Dude… no chef gives his recipes.”
Join us and you’ll figure it out 🐆

We also met teams from major firms the interest was real.
A lot of business conversations ahead. Fun times 🤝😅

If you want to support what we’re cooking next:
⭐️ 𝐆𝐢𝐯𝐞 𝐚 𝐬𝐭𝐚𝐫 𝐭𝐨 𝐨𝐮𝐫 𝐮𝐩𝐜𝐨𝐦𝐢𝐧𝐠 𝐩𝐫𝐨𝐝𝐮𝐜𝐭 𝐐𝐖𝐄𝐑𝐘 𝐨𝐧 𝐆𝐢𝐭𝐇𝐮𝐛

https://lnkd.in/erZvMdSC

Contact: yassine.ghorbel@guepard.run
See you at the next one 🚀`
    },
    {
      title: `Completing My AI Internship at Huawei`,
      date: `Aug 29, 2025`,
      link: `https://www.linkedin.com/feed/update/urn:li:activity:7367193375197806592/`,
      images: [
        `/images/posts/huawei-1.jpg`
      ],
      description: `After 2 months of exploration, challenges, and breakthroughs, I’m proud to complete my AI internship at Huawei 🚀 where I designed and deployed a fused network-issue classifier built on real-world KPI data.

- Collected historical KPI datasets and picked the signals that matter (call setup, throughput, RSRP, SINR, handover success, drop rate). 📊
- Did per-issue feature selection (correlation analysis) so each problem had the right KPIs. 🧠
- Trained different classifiers for Accessibility, Retainability, Mobility, Coverage, Congestion, Interference, and Random Access explainable, fast, and surprisingly robust (high precision in early tests). 🤖
- Fused outputs into an ensemble decision layer with probabilistic scores + adaptive thresholds for fewer false alarms.
- Built an MLOps pipeline: JSON config, joblib model versioning, unit tests, and a FastAPI service for real-time predictions and health checks. 🛠️
- Optimized for production: vectorized code, logging and monitoring, <100ms latency, and stress-tested to scale. ⚡

Grateful to my mentor Oussema Khiyari and team leader Slim Abdalkafi for their continuous guidance and support 🙏.

This internship marks just another milestone in my AI journey, building on previous projects and experiences and I’m excited for many more to come 🚀`
    },
    {
      title: `Study Trip to Barcelona with SUP'COM`,
      date: `Jul 11, 2025`,
      link: `https://www.linkedin.com/feed/update/urn:li:activity:7349408418870226944/`,
      images: [
        `/images/posts/barcelona-1.jpg`,
        `/images/posts/barcelona-2.jpg`,
        `/images/posts/barcelona-3.jpg`
      ],
      description: `Study Trip to Barcelona 🇪🇸 – An Unforgettable Experience! 

From June 8 to June 15, 2025, I had the incredible opportunity to take part in a study trip to Barcelona, a vibrant city full of culture, innovation, and inspiration.

Highlights of the trip included:
 🏛️ Exploring iconic landmarks such as the Sagrada Família, Park Güell, and Casa Batlló – true masterpieces of Gaudí’s genius.
 🏢 Visiting innovative companies like i2CAT, a leading research center in advanced digital technologies and future networks.

This journey was filled with:
 ✔️ Inspiring conversations
 ✔️ Cultural discovery
 ✔️ Valuable insights into technology and smart cities

🙏 Special thanks to SUP'COM for making this experience possible and for encouraging international learning and exploration.

📸 Here are some photos to share the moments that made this trip so memorable 👇

#StudyTrip #Barcelona #Innovation #i2CAT #Technology #SmartCities #Gaudi #SUPCOM #InternationalExperience #Networking #LearningByDoing #ThankYou`
    },
    {
      title: `Winning IndabaX Tunisia 2025 with Team Zero_GPU`,
      date: `May 5, 2025`,
      link: `https://www.linkedin.com/feed/update/urn:li:activity:7325113487808946176/`,
      images: [
        `/images/posts/indabax-1.jpg`,
        `/images/posts/indabax-2.jpg`,
        `/images/posts/indabax-3.jpg`
      ],
      description: `From a participant in 2024 to a hacker in 2025 not only this — we WON the biggest award 🏆

This year's IndabaX Tunisia  was a game-changer for me and my team Zero_GPU along with Sahar Guebsi ,Mohammed Arbi Nsibi and Mohamed Ala Ben ayed 🚀

The hackathon, hosted on Zindi, included two major challenges:
- Classify types of anomalies
- Fine-tune an LLM to offer improvement solutions for this anomalies 

It was super competitive ⚔️
We landed:
⭐ 15th place in the first challenge
⭐ 6th place in the second
Scores were tight, but we pushed through and made it to the TOP 8 — advancing to the pitching phase. We impressed the jury with our unique choice of BART Large over other models for the advantage of:
⚡️ Faster response
🧠 Lower computation
✅ Perfect for the task
And that’s not all — we built a user-friendly UI, now live on GitHub 

A massive thank you to the IEEE SupCom Student Branch organizing committee ❤️ for this unforgettable edition, and to InstaDeep for empowering young minds like ours to shine brighter than ever! ✨`
    }
  ]
};