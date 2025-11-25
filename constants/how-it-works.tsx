import { JSX } from 'react';
import NaturalLanguageVisual from '@/components/sections/how-it-works/visuals/NaturalLanguageVisual';
import ContextAwareVisual from '@/components/sections/how-it-works/visuals/ContextAwareVisual';
import FreeFormVisual from '@/components/sections/how-it-works/visuals/FreeFormVisual';
import ChainOfThoughtVisual from '@/components/sections/how-it-works/visuals/ChainOfThoughtVisual';
import EvidenceBasedVisual from '@/components/sections/how-it-works/visuals/EvidenceBasedVisual';
import AdaptiveFormatVisual from '@/components/sections/how-it-works/visuals/AdaptiveFormatVisual';

export interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
  details: string[];
  icon: JSX.Element;
  visual: JSX.Element;
}

export interface FeatureHighlight {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
  visual: JSX.Element;
}

export const steps: Step[] = [
  {
    id: 'natural-language',
    number: 1,
    title: 'Natural Language Understanding',
    description: 'The AI is designed to understand physician queries in natural language and respond in structured formats (Impression, Differential, Plan) as you require.',
    details: [
      'Understands queries like "What\'s your impression for this patient with chest pain and ECG changes?"',
      'Responds in structured clinical formats',
      'Interprets intent from free-form questions',
    ],
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    visual: <NaturalLanguageVisual />,
  },
  {
    id: 'context-aware',
    number: 2,
    title: 'Context-Aware Responses',
    description: 'It uses context (patient\'s age, history, labs, current encounter) to tailor responses rather than generic advice.',
    details: [
      'Considers patient age, medical history, and current labs',
      'Adapts to the specific encounter type',
      'Provides personalized recommendations based on full context',
    ],
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    visual: <ContextAwareVisual />,
  },
  {
    id: 'free-form',
    number: 3,
    title: 'Free-Form Physician Queries',
    description: 'The system supports "free‑form" physician queries: physician asks anything, the AI interprets intent, retrieves relevant data, and formats an answer in a clinician‑friendly way.',
    details: [
      'Ask anything in your own words',
      'AI interprets intent automatically',
      'Formats responses in clinician-friendly ways (structured or conversational)',
    ],
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    visual: <FreeFormVisual />,
  },
];

export const featureHighlights: FeatureHighlight[] = [
  {
    id: 'chain-of-thought',
    title: 'Chain-of-Thought Reasoning',
    description: 'Explainability is built in: the AI can reference guideline-based reasoning with Chain-of-thought feature which can be activated with one click. This feature can be prioritized for transparent clinical decision-making.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'purple',
    visual: <ChainOfThoughtVisual />,
  },
  {
    id: 'evidence-based',
    title: 'Evidence-Based Findings',
    description: 'Evidence-based findings with references verified by a built-in feature certifying that the response is not a hallucination, which helps physician trust the AI.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'emerald',
    visual: <EvidenceBasedVisual />,
  },
  {
    id: 'adaptive-format',
    title: 'Adaptive Tone & Format',
    description: 'The AI is tuned to adapt tone/format: for example if asked "Explain to a patient," it uses plain language and empathy; if asked "What\'s my differential," it uses clinical tone. The key is flexibility: regardless of how the physician frames the query, the AI understands context and selects format accordingly.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    color: 'cyan',
    visual: <AdaptiveFormatVisual />,
  },
];

