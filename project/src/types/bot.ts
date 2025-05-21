export interface BotTemplate {
  id: string;
  name: string;
  description: string;
  category: 'ecommerce' | 'support' | 'healthcare' | 'travel' | 'custom';
  thumbnail: string;
  popularity: number;
}

export interface BotFlow {
  id: string;
  name: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
  createdAt: Date;
  updatedAt: Date;
}

export interface FlowNode {
  id: string;
  type: 'message' | 'input' | 'condition' | 'api' | 'code';
  position: { x: number; y: number };
  data: Record<string, any>;
}

export interface FlowEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
}