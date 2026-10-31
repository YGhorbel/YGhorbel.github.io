import type { PublicationsType } from "@/types/publications";

export const publications: PublicationsType = {
  authorName: `Yassine Ghorbel`,
  items: [
    {
      title: `Ontology-Based Semantic Layer Construction for Natural-Language Database Querying`,
      authors: `Yassine Ghorbel`,
      year: `2026`,
      venue: `Graduation project report, SUP'COM (hosted at Guepard)`,
      abstract: `Text-to-SQL agents still ground their answers on raw schema dumps, which misses business meaning and makes prompt cost grow with schema size. This project builds an ontology-based semantic layer for Guepard's Qwery agent: an offline pipeline builds a domain ontology from datasource metadata and discovered joins, and a structure-aware retriever gives the SQL agent a small, query-relevant subgraph. Evaluated on the BIRD benchmarks, it makes Qwery more accurate, cheaper and faster.`,
      link: null,
      featured: true
    },
    {
      title: `AI-Powered Network Issue Classification with MLOps Integration for Telecom Operations`,
      authors: `Yassine Ghorbel`,
      year: `2025`,
      venue: `Internship report, SUP'COM (hosted at Huawei Technologies Tunis)`,
      abstract: `An AI system that automatically classifies network issues in Radio Access Networks from KPI data. Unlabeled data was labeled with clustering, then used to train specialized per-issue classifiers that are fused into one multi-label model. The system is served through FastAPI for real-time inference, with automated retraining, experiment tracking and Docker-based CI/CD.`,
      link: null,
      featured: true
    },
    {
      title: `Research Assistant for Insurance Policy Design`,
      authors: `Nermine Ezzine, Yassine Ghorbel`,
      year: `2024-2025`,
      venue: `Tutored project report, SUP'COM`,
      abstract: `A multi-agent research assistant that analyzes insurance regulations, answers regulatory questions, compares Tunisian and European frameworks, and proposes evidence-based policy improvements. It combines semantic retrieval with knowledge-graph reasoning (GraphRAG) so that answers stay grounded in the source documents.`,
      link: null,
      featured: true
    },
    {
      title: `AI-Driven Integrated Crop Management System`,
      authors: `Habib Bekir, Yassine Ghorbel`,
      year: `2024-2025`,
      venue: `Professional preparation project (P2M) report, SUP'COM`,
      abstract: `A smart-agriculture solution that detects diseases in tomato plants early and automates irrigation, combining AI, IoT and process automation to improve production and limit crop losses. The report covers the problem, the system architecture, and the implementation and results.`,
      link: null,
      featured: false
    },
    {
      title: `Application of Generative AI to Brain Tumor Classification`,
      authors: `Yassine Ghorbel`,
      year: `2024`,
      venue: `Internship report (in French), SUP'COM (hosted at CRNS)`,
      abstract: `A brain tumor classification model for MRI images, together with a generative model (GAN) studied as a way to enrich the training data. Both models are exposed through APIs and a Gradio interface so the results can be tested from a browser.`,
      link: null,
      featured: false
    }
  ]
};