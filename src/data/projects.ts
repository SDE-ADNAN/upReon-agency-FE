export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: 'web' | 'mobile' | 'ecommerce' | 'enterprise' | 'design' | 'healthcare' | 'security' | 'research';
  technologies: string[];
  image: string;
  liveUrl?: string;
  featured: boolean;
  completionDate: string;
  client: string;
  results: {
    metric: string;
    value: string;
  }[];
  highlights: string[];
  challenges: string[];
  solutions: string[];
}

export const projects: Project[] = [
  {
    id: 'healthkart',
    title: 'HealthKart - Health & Nutrition Platform',
    description: 'India\'s leading health, nutrition & bodybuilding supplements destination with comprehensive e-commerce capabilities.',
    fullDescription: 'HealthKart is India\'s premier destination for health, nutrition, and bodybuilding supplements. Established in 2011, the platform has evolved into a comprehensive e-commerce solution serving millions of customers across India. The platform offers an extensive range of products including whey proteins, vitamins, supplements, fitness equipment, and wellness products from both domestic and international brands.',
    category: 'ecommerce',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Redis', 'AWS', 'Stripe', 'Razorpay', 'Elasticsearch'],
    image: '/portfolio/healthkart.svg',
    liveUrl: 'https://www.healthkart.com/',
    featured: true,
    completionDate: '2023-12',
    client: 'HealthKart',
    results: [
      { metric: 'Monthly Active Users', value: '2M+' },
      { metric: 'Product Categories', value: '50+' },
      { metric: 'Brand Partners', value: '200+' },
      { metric: 'Delivery Coverage', value: '500+ Cities' }
    ],
    highlights: [
      'Comprehensive product catalog with 50+ categories including sports nutrition, vitamins, wellness products, and fitness equipment',
      'Advanced search and filtering system with product comparison capabilities',
      'Multi-vendor marketplace supporting both domestic and international brands',
      'Robust inventory management system with real-time stock tracking',
      'Integrated payment gateway supporting multiple payment methods including EMI options',
      'Mobile-first responsive design with dedicated mobile app',
      'Advanced analytics dashboard for sales tracking and customer insights',
      'Loyalty program (HK Rewards) with points-based system and exclusive discounts',
      'Expert consultation services with certified fitness and nutrition experts',
      'Comprehensive delivery network covering 500+ cities across India'
    ],
    challenges: [
      'Managing a vast product catalog with 200+ brands and thousands of SKUs',
      'Ensuring product authenticity and quality control across multiple vendors',
      'Handling high traffic during flash sales and promotional events',
      'Integrating multiple payment gateways and EMI options',
      'Maintaining real-time inventory across multiple warehouses',
      'Providing personalized recommendations for health and fitness products'
    ],
    solutions: [
      'Implemented advanced product catalog management with category-based organization',
      'Established direct partnerships with manufacturers to ensure product authenticity',
      'Built scalable infrastructure using AWS to handle traffic spikes during sales',
      'Integrated multiple payment gateways with unified checkout experience',
      'Developed real-time inventory management system with automated alerts',
      'Created AI-powered recommendation engine based on user preferences and goals'
    ]
  },
  {
    id: 'netprotector',
    title: 'NetProtector - Cybersecurity Solutions',
    description: 'Comprehensive cybersecurity platform providing advanced threat protection and network security solutions.',
    fullDescription: 'NetProtector is a cutting-edge cybersecurity platform that provides comprehensive protection against digital threats. The platform offers advanced firewall protection, real-time threat detection, network monitoring, and security consulting services. Built with enterprise-grade security protocols, NetProtector serves businesses of all sizes with scalable security solutions.',
    category: 'security',
    technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'WebSocket'],
    image: '/portfolio/netprotector.svg',
    liveUrl: 'https://netprotector.net',
    featured: true,
    completionDate: '2024-01',
    client: 'NetProtector',
    results: [
      { metric: 'Threats Blocked', value: '1M+ Daily' },
      { metric: 'Client Satisfaction', value: '98%' },
      { metric: 'Response Time', value: '< 50ms' },
      { metric: 'Uptime', value: '99.99%' }
    ],
    highlights: [
      'Advanced firewall protection with real-time threat detection and blocking',
      'Comprehensive network monitoring with detailed analytics and reporting',
      'Multi-layered security architecture with intrusion detection and prevention',
      'Real-time security alerts and automated incident response system',
      'Custom security policies and rule management for different business needs',
      'Comprehensive audit trails and compliance reporting for regulatory requirements',
      '24/7 security monitoring with dedicated security operations center',
      'Scalable architecture supporting enterprise-level deployments',
      'Integration with existing IT infrastructure and security tools',
      'Advanced threat intelligence with machine learning-based threat detection'
    ],
    challenges: [
      'Handling massive volumes of network traffic and security events in real-time',
      'Ensuring zero false positives while maintaining high threat detection accuracy',
      'Providing seamless integration with existing enterprise security infrastructure',
      'Maintaining compliance with various industry security standards and regulations',
      'Scaling security operations to handle growing client base and threat landscape',
      'Providing real-time security insights without impacting network performance'
    ],
    solutions: [
      'Implemented high-performance event processing pipeline using Apache Kafka and Redis',
      'Developed machine learning algorithms for intelligent threat detection and classification',
      'Created comprehensive API framework for seamless third-party integrations',
      'Built compliance automation system for various security standards (ISO 27001, SOC 2)',
      'Designed microservices architecture for horizontal scaling and high availability',
      'Optimized network monitoring with minimal performance impact using efficient protocols'
    ]
  },
  {
    id: 'tuliresearch',
    title: 'Tuli Research Centre - Scientific Platform',
    description: 'Comprehensive research and development platform for scientific studies and academic collaboration.',
    fullDescription: 'Tuli Research Centre is a state-of-the-art scientific research platform that facilitates academic collaboration, research project management, and scientific data analysis. The platform serves researchers, academic institutions, and scientific organizations with tools for data collection, analysis, publication, and collaboration.',
    category: 'research',
    technologies: ['React', 'Next.js', 'Python', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Jupyter', 'TensorFlow'],
    image: '/portfolio/tuliresearch.svg',
    liveUrl: 'https://www.tuliresearchcentre.org/',
    featured: true,
    completionDate: '2023-11',
    client: 'Tuli Research Centre',
    results: [
      { metric: 'Research Projects', value: '500+' },
      { metric: 'Active Researchers', value: '2,000+' },
      { metric: 'Publications', value: '1,000+' },
      { metric: 'Collaboration Rate', value: '+85%' }
    ],
    highlights: [
      'Comprehensive research project management system with workflow automation',
      'Advanced data analysis tools with statistical modeling and visualization capabilities',
      'Collaborative research platform supporting multi-institutional projects',
      'Publication management system with peer review workflow',
      'Real-time data collection and analysis tools for scientific studies',
      'Integration with scientific databases and research repositories',
      'Advanced search and discovery tools for research papers and datasets',
      'Secure data storage and sharing with role-based access control',
      'Analytics dashboard for research impact assessment and metrics tracking',
      'Mobile-responsive design for field research and data collection'
    ],
    challenges: [
      'Managing complex research workflows across multiple institutions and disciplines',
      'Ensuring data security and privacy compliance for sensitive research data',
      'Integrating diverse scientific tools and databases into unified platform',
      'Providing real-time collaboration tools for geographically distributed research teams',
      'Maintaining data integrity and version control for long-term research projects',
      'Scaling platform to handle large datasets and computational workloads'
    ],
    solutions: [
      'Developed flexible workflow engine supporting customizable research processes',
      'Implemented enterprise-grade security with end-to-end encryption and access controls',
      'Created comprehensive API framework for integrating scientific tools and databases',
      'Built real-time collaboration features with WebSocket-based communication',
      'Designed robust data management system with version control and audit trails',
      'Optimized platform architecture for handling large-scale scientific computations'
    ]
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);

export const getProjectById = (id: string) => projects.find(project => project.id === id);

export const getProjectsByCategory = (category: string) => 
  category === 'all' ? projects : projects.filter(project => project.category === category); 