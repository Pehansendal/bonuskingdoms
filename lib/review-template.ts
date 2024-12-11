interface CasinoReviewTemplate {
  title: string;
  metadata: {
    description: string;  // For meta description
    faq: Array<{
      question: string;
      answer: string;
    }>;
    schema: {
      rating: number;
      reviewCount: number;
      // Andre schema.org felter
    };
  };
  sections: {
    overview: string;
    security: {
      title: string;
      isLicensed: boolean;
      licenseDetails: string;
      securityMeasures: string[];
    };
    games: {
      total: number;
      categories: Array<{
        name: string;
        description: string;
        popularTitles: string[];
        rtp?: string;
      }>;
    };
    paymentMethods: {
      deposits: Array<{
        method: string;
        minAmount: string;
        maxAmount: string;
        processingTime: string;
      }>;
      withdrawals: Array<{
        method: string;
        minAmount: string;
        maxAmount: string;
        processingTime: string;
      }>;
    };
    // ... andre seksjoner
  };
} 