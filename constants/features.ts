export interface Feature {
  id: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 'medicus-features',
    title: 'Medicus Features',
    description: 'Discover what makes Medicus the most advanced agentic health intelligence system ever built.',
  },
  {
    id: 'clinical-reasoning',
    title: 'Clinical Reasoning Engine',
    description: 'Medicus interprets and explains medical evidence — not just retrieves it — using a reasoning model co-developed with physicians.',
  },
  {
    id: 'personalized-context',
    title: 'Personalized Health Context',
    description: 'Each response is dynamically tailored to a patient\'s symptoms, history, and care pathway.',
  },
  {
    id: 'evidence-based',
    title: 'Evidence-Based Explanations',
    description: 'Every output is backed by validated research and peer-reviewed data with transparent citations.',
  },
  {
    id: 'ai-action-plans',
    title: 'AI-Driven Action Plans',
    description: 'Medicus doesn\'t stop at insight. It automates scheduling, summarization, and follow-up workflows.',
  },
  {
    id: 'privacy-compliance',
    title: 'Privacy and Compliance',
    description: 'HIPAA-grade encryption and security standards ensure all data remains protected.',
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    description: 'Every physician interaction improves Medicus\' accuracy, context, and reasoning depth.',
  },
];


