// User related types
export interface User {
  id: string;
  username: string;
  email: string;
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
  learningPath: string[];
  createdAt: string;
}

// Attack related types
export interface Attack {
  id: number;
  attackName: string;
  category: string;
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  educationalContent: EducationalContent;
  businessImpact: string;
  prerequisiteKnowledge: string[];
  learningObjectives: string[];
  estimatedLearningTime: number;
  severityLevel: 'low' | 'medium' | 'high' | 'critical';
}

export interface EducationalContent {
  whyItWorks: string;
  realWorldExamples: string[];
  stepByStepPrevention: string[];
  codeExamples: {
    before: string;
    after: string;
    explanation: string;
  };
}

// Testing related types
export interface TestResult {
  id: string;
  targetUrl: string;
  attackId: number;
  testStatus: 'vulnerable' | 'secure' | 'inconclusive';
  vulnerabilityDetails: string;
  educationalExplanation: string;
  businessImpactAnalysis: string;
  codeSuggestions: CodeSuggestion[];
  timestamp: string;
}

export interface CodeSuggestion {
  language: string;
  before: string;
  after: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Community related types
export interface ForumPost {
  id: string;
  userId: string;
  title: string;
  content: string;
  category: string;
  vulnerabilityType?: string;
  upvotes: number;
  createdAt: string;
  user: Pick<User, 'username' | 'skillLevel'>;
}

export interface PeerReview {
  id: string;
  reviewerId: string;
  revieweeId: string;
  testResultId: string;
  reviewContent: string;
  rating: number;
  helpfulVotes: number;
  createdAt: string;
}
