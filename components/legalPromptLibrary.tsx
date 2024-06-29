'use client';

import React, { useState } from 'react'
import { Book, FileText, Scale, Gavel, Briefcase, Users, Globe, Buildings, ShieldCheck } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

interface PromptCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

const PromptCard: React.FC<PromptCardProps> = ({ title, description, icon }) => (
  <div className="bg-card rounded-lg shadow-md overflow-hidden">
    <div className="flex flex-row items-center space-x-4 p-4">
      <div className="bg-primary/20 p-2 rounded-full">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <div className="px-4 pb-4">
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
)

const LegalPromptLibrary: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const prompts = [
    { title: 'Contract Analyzer', description: 'Analyze legal contracts to identify key clauses, potential risks, and suggest improvements', icon: <FileText className="text-primary" size={24} />, category: 'Corporate' },
    { title: 'Case Law Researcher', description: 'Find relevant case law and legal precedents based on specific legal issues or scenarios', icon: <Book className="text-primary" size={24} />, category: 'Litigation' },
    { title: 'Legal Brief Writer', description: 'Generate outlines for legal briefs based on case details and legal arguments', icon: <FileText className="text-primary" size={24} />, category: 'Litigation' },
    { title: 'Compliance Checker', description: 'Evaluate business practices or documents for compliance with specific laws and regulations', icon: <Scale className="text-primary" size={24} />, category: 'Corporate' },
    { title: 'Legal Procedure Guide', description: 'Provide step-by-step guidance on legal procedures for different types of cases', icon: <Gavel className="text-primary" size={24} />, category: 'Litigation' },
    { title: 'Legal Document Drafter', description: 'Create drafts of common legal documents based on user inputs and requirements', icon: <FileText className="text-primary" size={24} />, category: 'Corporate' },
    { title: 'Legal Ethics Advisor', description: 'Offer guidance on ethical considerations in various legal scenarios', icon: <Scale className="text-primary" size={24} />, category: 'Ethics' },
    { title: 'Legal Terminology Explainer', description: 'Simplify and explain complex legal terms and concepts for clients', icon: <Book className="text-primary" size={24} />, category: 'Client Communication' },
    { title: 'Due Diligence Assistant', description: 'Help lawyers conduct thorough due diligence by providing checklists and analysis frameworks', icon: <Briefcase className="text-primary" size={24} />, category: 'Corporate' },
    { title: 'Merger & Acquisition Advisor', description: 'Guide through legal aspects of M&A processes, including regulatory considerations', icon: <Buildings className="text-primary" size={24} />, category: 'Corporate' },
    { title: 'Intellectual Property Analyzer', description: 'Assess IP portfolios, identify potential infringements, and suggest protection strategies', icon: <ShieldCheck className="text-primary" size={24} />, category: 'Intellectual Property' },
    { title: 'Employment Law Guide', description: 'Provide guidance on employment laws, regulations, and best practices for HR policies', icon: <Users className="text-primary" size={24} />, category: 'Labor' },
    { title: 'International Trade Compliance', description: 'Assist with international trade regulations, customs compliance, and export controls', icon: <Globe className="text-primary" size={24} />, category: 'International' },
    { title: 'Environmental Law Advisor', description: 'Offer guidance on environmental regulations, compliance, and sustainability practices', icon: <Globe className="text-primary" size={24} />, category: 'Environmental' },
    { title: 'Legal Research Assistant', description: 'Conduct comprehensive legal research on specific topics or jurisdictions', icon: <Book className="text-primary" size={24} />, category: 'Research' },
  ]

  const filters = ['All', 'Litigation', 'Corporate', 'Ethics', 'Client Communication', 'Intellectual Property', 'Labor', 'International', 'Environmental', 'Research']

  const filteredPrompts = activeFilter === 'All' ? prompts : prompts.filter(prompt => prompt.category === activeFilter)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Legal Prompt Library</h1>
      <p className="text-muted-foreground mb-4">Explore optimized prompts for a comprehensive range of legal tasks and scenarios.</p>
      <p className="text-muted-foreground mb-4">
        User-submitted prompts have dark backgrounds with light colored icons (currently, there are none).
        You can submit prompts via our <a href="#" className="text-primary hover:underline">prompt submission form</a>.
      </p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Filter</h2>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPrompts.map((prompt, index) => (
          <PromptCard key={index} {...prompt} />
        ))}
      </div>
    </div>
  )
}

export default LegalPromptLibrary
