import { JSX } from 'react';

export function getFeatureDetails(featureId: string): JSX.Element | null {
  const details: Record<string, JSX.Element> = {
    'medicus-features': (
      <div className="space-y-4">
        <p className="text-base text-gray-700 leading-relaxed">
          Medicus combines cutting-edge AI with deep clinical understanding. Our system thinks, reasons, and provides actionable insights that enhance clinical decision-making.
        </p>
        <ul className="space-y-2.5 text-gray-700">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Advanced AI reasoning with multi-layered analysis</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Physician-co-developed intelligence validated by experts</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Enterprise-grade security and HIPAA compliance</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Seamless integration with EHR and clinical workflows</span>
          </li>
        </ul>
      </div>
    ),
    'clinical-reasoning': (
      <div className="space-y-4">
        <p className="text-base text-gray-700 leading-relaxed">
          Medicus employs advanced reasoning models that analyze, interpret, and explain medical evidence in context, processing complex scenarios like an experienced physician.
        </p>
        <ul className="space-y-2.5 text-gray-700">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Co-developed with physicians and validated by medical boards</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Contextual interpretation with multi-dimensional analysis</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Transparent explanations of reasoning behind recommendations</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Real-time adaptation based on new information and feedback</span>
          </li>
        </ul>
      </div>
    ),
    'personalized-context': (
      <div className="space-y-4">
        <p className="text-base text-gray-700 leading-relaxed">
          Every interaction is customized based on the patient&apos;s unique medical history, symptoms, and care pathway. Medicus creates a comprehensive profile that evolves with each interaction.
        </p>
        <ul className="space-y-2.5 text-gray-700">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Dynamic adaptation to patient profile with real-time updates</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Comprehensive analysis of medical history and contextual factors</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Tailored care pathway recommendations based on individual needs</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Integration with family history, lifestyle, and genetic factors</span>
          </li>
        </ul>
      </div>
    ),
    'evidence-based': (
      <div className="space-y-4">
        <p className="text-base text-gray-700 leading-relaxed">
          Every recommendation is backed by peer-reviewed research and validated medical evidence with full citation transparency. Medicus maintains direct connections to major medical databases.
        </p>
        <ul className="space-y-2.5 text-gray-700">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Transparent citations with DOI, PMID, and publication metadata</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Peer-reviewed validation with dual-AI fact-checking</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Direct access to original sources with download capabilities</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Continuous updates from latest clinical trials and research</span>
          </li>
        </ul>
      </div>
    ),
    'ai-action-plans': (
      <div className="space-y-4">
        <p className="text-base text-gray-700 leading-relaxed">
          Medicus actively helps execute next steps by automating workflows and administrative tasks, handling time-consuming work so physicians can focus on patient care.
        </p>
        <ul className="space-y-2.5 text-gray-700">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Automated appointment scheduling with calendar integration</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Intelligent clinical documentation summarization and notes</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Automated follow-up workflow with patient reminders</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Seamless integration with EHR systems for data sync</span>
          </li>
        </ul>
      </div>
    ),
    'privacy-compliance': (
      <div className="space-y-4">
        <p className="text-base text-gray-700 leading-relaxed">
          Built with healthcare security standards at its core, ensuring all patient data is protected with enterprise-grade encryption. Medicus meets and exceeds HIPAA requirements with multiple security layers.
        </p>
        <ul className="space-y-2.5 text-gray-700">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Full HIPAA compliance with regular audits and certifications</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">End-to-end encryption with AES-256 standards</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Enterprise-grade security with SOC 2 Type II compliance</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Comprehensive audit trails and access logging</span>
          </li>
        </ul>
      </div>
    ),
    'continuous-learning': (
      <div className="space-y-4">
        <p className="text-base text-gray-700 leading-relaxed">
          Medicus improves with every interaction, learning from physician feedback and clinical outcomes. The system adapts to your practice patterns and continuously refines its understanding.
        </p>
        <ul className="space-y-2.5 text-gray-700">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Adaptive learning from each interaction with real-time updates</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Enhanced accuracy over time through feedback integration</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Deeper clinical context understanding from accumulated knowledge</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Practice-specific customization based on specialty patterns</span>
          </li>
        </ul>
      </div>
    ),
  };

  return details[featureId] || null;
}

