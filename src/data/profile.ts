import { FaLinkedin, FaRegIdBadge, FaRegEnvelope } from "react-icons/fa6";

export const profile = {
  name: `Yassine Ghorbel`,
  headline: `AI engineer building agentic and retrieval-driven systems`,
  email: `yassine.ghorbel.rep@gmail.com`,
  location: `Tunis, Tunisia`,
  profileImage: `/images/profile.jpg`,
  links: [
    {
      name: `LinkedIn`,
      url: `https://www.linkedin.com/in/yassine-ghorbel/`,
      icon: FaLinkedin
    },
    {
      name: `Résumé`,
      url: `/pdf/resume.pdf`,
      icon: FaRegIdBadge
    },
    {
      name: `Email`,
      url: `mailto:yassine.ghorbel.rep@gmail.com`,
      icon: FaRegEnvelope
    }
  ],
  biography: `Hi! I'm <strong>Yassine Ghorbel</strong>, an <em>AI engineer</em> building agentic and retrieval-driven systems, with hands-on ML/MLOps experience across domains.
I have worked on agentic systems, neuro-symbolic NLP pipelines, and production ML infrastructure, with a strong background in graph-based retrieval, knowledge engineering, and backend deployment.
<div class="my-2"></div>
I like turning research ideas into working prototypes, taking them from a first experiment to something that actually runs and can be used.
<div class="my-2"></div>
Feel free to <a href="mailto:yassine.ghorbel.rep@gmail.com" target="_blank" rel="noopener noreferrer">reach out</a> to connect.`
};