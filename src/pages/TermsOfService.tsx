import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-white dark:bg-dark">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Navigation Breadcrumb */}
        <Link 
          to="/" 
          className="inline-flex items-center text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5 mr-1" />
          Back to Overview
        </Link>

        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-12">
          <div className="flex items-center space-x-2 text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-2">
            <FileText className="h-4 w-4" />
            <span>Master Service Terms</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Enterprise Terms of Service
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last Updated: October 2026 • Governing all statements of work, custom engineering contracts, and consulting engagements.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Master Engagement Framework</h2>
            <p>
              These Terms of Service ("Terms") constitute the standard contractual baseline between Mactis IT Services ("Mactis") and the contracting entity or client ("Client"). By retaining Mactis for software architecture, custom application engineering, cloud hosting, or technical consulting, Client accepts and agrees to these standard terms unless explicitly modified by a signed Statement of Work (SOW).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Scope of Engineering & Milestone Delivery</h2>
            <p>
              All software development engagements are delivered according to agile sprint cycles and formalized milestone deliveries. Each sprint includes architectural specification, code execution, automated integration testing, and staging deployment verification.
            </p>
            <p>
              Client agrees to designate a technical or operational liaison empowered to review deliverables, participate in sprint demonstrations, and provide milestone acceptances in a timely manner.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Intellectual Property (IP) & Code Ownership</h2>
            <p>
              Mactis guarantees full Client Intellectual Property ownership:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400">
              <li><strong>Custom Software & Schemas:</strong> Upon receipt of corresponding milestone payments, 100% of custom source code, documentation, schema diagrams, and assets developed specifically for Client become the exclusive property of Client.</li>
              <li><strong>Open Source Components:</strong> Any standard open-source libraries (e.g., React, Next.js, PostgreSQL drivers) incorporated into deliverables remain governed by their respective permissive licenses (MIT, Apache 2.0).</li>
              <li><strong>Zero Vendor Lock-In:</strong> We provide full repository access, deployment manifests, and architectural handover documentation to ensure Client maintains complete autonomy.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Service Level Agreements (SLAs) & Production Support</h2>
            <p>
              For enterprise clients with active maintenance agreements, Mactis provides tiered response times, continuous server telemetry, automated backup verification, and high-priority critical bug resolution. Standard production deployments are architected for 99.9% uptime reliability within designated cloud environments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Warranties & Code Integrity</h2>
            <p>
              Mactis warrants that all deliverables will conform substantially to agreed technical specifications at the time of delivery. We provide a complimentary post-launch warranty period (typically 30 to 60 days as specified in the SOW) to address and resolve any architectural defects or deviations free of charge.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">6. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms and any individual project contracts are governed by applicable corporate law. Both parties commit to resolving disputes amicably through executive technical mediation prior to initiating formal legal proceedings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">7. Contact & Contract Administration</h2>
            <p>
              For legal notices, contract modifications, or enterprise Master Services Agreement (MSA) inquiries, contact:
            </p>
            <div className="p-4 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/60 font-mono text-xs">
              Mactis IT Services — Contracts & Legal Operations<br />
              Email: legal@mactis.co / info@mactis.co<br />
              Gulberg III, Lahore, Pakistan
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
