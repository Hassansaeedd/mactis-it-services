import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
            <Shield className="h-4 w-4" />
            <span>Corporate Governance</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Enterprise Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last Updated: October 2026 • Effective for all global consulting and custom software delivery engagements.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Commitment to Data Custody & Privacy</h2>
            <p>
              Mactis IT Services ("Mactis", "we", "our", or "us") operates as an enterprise software engineering consultancy. We respect the confidentiality of our clients, their stakeholders, and users of our digital platforms. This Privacy Policy outlines our principles regarding the collection, processing, storage, and safeguarding of data across our consulting services, custom platform developments, and website.
            </p>
            <p>
              We adhere strictly to zero-trust architecture principles and do not monetize, distribute, or sell client data or proprietary source code to third parties under any circumstances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Information Collection in Enterprise Engagements</h2>
            <p>
              Depending on the scope of architectural consulting or custom software development, we may process:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400">
              <li><strong>Discovery & Communication Data:</strong> Technical specifications, contact names, corporate email addresses, and organizational project scopes submitted via discovery forms or communication channels.</li>
              <li><strong>Infrastructure Configuration Details:</strong> API keys, staging credentials, and repository access tokens strictly necessary for authorized CI/CD pipeline deployments and database provisioning.</li>
              <li><strong>Technical Diagnostics:</strong> Telemetry logs, latency metrics, and error traces captured within client-authorized staging environments for performance auditing.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Use of Information</h2>
            <p>
              Information collected is used solely for the following legitimate business purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400">
              <li>Architecting, engineering, testing, and deploying custom software platforms.</li>
              <li>Issuing technical proposals, milestone schedules, and formal invoices.</li>
              <li>Provisioning authorized multi-cloud infrastructure and monitoring service level agreements (SLAs).</li>
              <li>Complying with contractual obligations and applicable data protection regulations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Confidentiality & Non-Disclosure (NDA)</h2>
            <p>
              All proprietary algorithms, database schemas, API architecture, business workflows, and trade secrets disclosed to Mactis during consulting sessions are governed by comprehensive Non-Disclosure Agreements. We restrict access strictly to senior engineers and architects directly assigned to your technical pod.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Cloud Hosting, Security & Data Retention</h2>
            <p>
              All client systems engineered by Mactis are architected with end-to-end encryption in transit (TLS 1.3) and at rest (AES-256). Production databases are deployed within client-owned cloud accounts (AWS, Microsoft Azure, Google Cloud) so that total custody and governance reside perpetually with the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">6. Inquiries & Legal Governance</h2>
            <p>
              If you have any questions or require formal compliance audit documentation regarding this policy, please direct inquiries to our legal and data protection team:
            </p>
            <div className="p-4 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/60 font-sans font-medium text-xs text-slate-700 dark:text-slate-300">
              Mactis IT Services — Data Governance Officer<br />
              Email: legal@mactis.co / info@mactis.co<br />
              Address: Gulberg III, Lahore, Pakistan
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
