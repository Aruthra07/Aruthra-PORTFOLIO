import React from 'react';
import { ExternalLink, Calendar, Bookmark, Image as ImageIcon } from 'lucide-react';

interface CertVaultProps {
  playAudio: (type: 'hover' | 'click') => void;
}

interface Certificate {
  id: string;
  name: string;
  provider: string;
  category: 'cloud' | 'db' | 'programming' | 'other';
  displayDate: string;
  image: string;
  link: string;
  credentialId: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: 'aws_cp',
    name: 'AWS Certified Cloud Practitioner',
    provider: 'Amazon Web Services',
    category: 'cloud',
    displayDate: 'January 2025',
    image: import.meta.env.BASE_URL + 'portfolio_images/AWS_Cert.png',
    link: import.meta.env.BASE_URL + 'portfolio_images/AWS_Cert.pdf',
    credentialId: 'AWS-CCP-2025-9981'
  },
  {
    id: 'snowflake_core',
    name: 'Snowflake SnowPro Core Certification',
    provider: 'Snowflake',
    category: 'db',
    displayDate: 'February 2025',
    image: import.meta.env.BASE_URL + 'portfolio_images/Snowflake_Cert.png',
    link: import.meta.env.BASE_URL + 'portfolio_images/Snowflake_Cert.pdf',
    credentialId: 'SF-SNOWPRO-CORE-1025'
  },
  {
    id: 'sf_agentforce',
    name: 'Salesforce Certified Agentforce Specialist',
    provider: 'Salesforce',
    category: 'db',
    displayDate: 'March 2025',
    image: import.meta.env.BASE_URL + 'portfolio_images/Salesforce_Cert.png',
    link: import.meta.env.BASE_URL + 'portfolio_images/Salesforce_Cert.pdf',
    credentialId: 'SF-AG-SPECIALIST-3849'
  },
  {
    id: 'servicenow_csa',
    name: 'ServiceNow Certified System Administrator',
    provider: 'ServiceNow',
    category: 'db',
    displayDate: 'April 2025',
    image: import.meta.env.BASE_URL + 'portfolio_images/ServiceNow_Cert.png',
    link: import.meta.env.BASE_URL + 'portfolio_images/ServiceNow_Cert.pdf',
    credentialId: 'SN-CSA-2025-0982'
  },
  {
    id: 'oracle_oci',
    name: 'Oracle Cloud Infrastructure Certified Associate',
    provider: 'Oracle',
    category: 'cloud',
    displayDate: 'May 2025',
    image: import.meta.env.BASE_URL + 'portfolio_images/Oracle_Cert.png',
    link: import.meta.env.BASE_URL + 'portfolio_images/Oracle_Cert.pdf',
    credentialId: 'OCI-ASSOCIATE-2025-7763'
  },
  {
    id: 'azure_ai',
    name: 'Microsoft Azure AI Fundamentals',
    provider: 'Microsoft',
    category: 'cloud',
    displayDate: 'October 2024',
    image: import.meta.env.BASE_URL + 'portfolio_images/MS.jpg',
    link: '#',
    credentialId: 'MS-AI-900'
  }
];

export const CertVault: React.FC<CertVaultProps> = ({ playAudio }) => {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10 w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-accentBlue mb-4 font-sans">
          Verifications
        </span>
        <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-textPrimary mb-4">
          Credential Library
        </h2>
        <p className="text-textSecondary text-sm md:text-base max-w-2xl mt-2 leading-relaxed font-sans">
          Verified credentials and certifications from global technology leaders.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATES.map((cert) => (
          <div
            key={cert.id}
            onMouseEnter={() => playAudio('hover')}
            className="flex flex-col bg-bgSurface border border-borderSilver rounded-xl overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Certificate Preview Thumbnail */}
            <div className="w-full aspect-[4/3] bg-bgSecondary overflow-hidden relative border-b border-borderSilver flex items-center justify-center p-4">
              <img 
                src={cert.image} 
                alt={cert.name} 
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-bgSurface/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-textPrimary font-bold flex items-center gap-1.5 uppercase tracking-wide border border-borderSilver shadow-sm">
                <ImageIcon className="w-3 h-3" /> Preview
              </div>
            </div>

            {/* Credential Details */}
            <div className="flex flex-col flex-1 p-5">
              <h3 className="text-sm font-bold font-display text-textPrimary mb-1 leading-snug">
                {cert.name}
              </h3>
              <p className="text-xs font-semibold text-accentBlue mb-4">
                {cert.provider}
              </p>
              
              <div className="flex flex-col gap-2.5 text-[11px] font-mono text-textSecondary mt-auto">
                <div className="flex justify-between items-center bg-bgSecondary/50 px-3 py-2 rounded-lg border border-borderSilver">
                  <span className="uppercase flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" /> Date
                  </span>
                  <span className="text-textPrimary font-semibold">{cert.displayDate}</span>
                </div>
                <div className="flex justify-between items-center bg-bgSecondary/50 px-3 py-2 rounded-lg border border-borderSilver">
                  <span className="uppercase flex items-center gap-2">
                    <Bookmark className="w-3.5 h-3.5" /> ID
                  </span>
                  <span className="text-textPrimary font-semibold break-all text-right max-w-[120px]">{cert.credentialId}</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-5 mt-5 border-t border-borderSilver">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playAudio('click')}
                  className="w-full py-2.5 bg-bgPrimary hover:bg-borderSilver border border-borderSilver rounded-lg text-xs font-bold text-textPrimary flex items-center justify-center gap-2 transition-all group-hover:bg-accentBlue group-hover:border-accentBlue group-hover:text-white"
                >
                  Verify Credential <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
