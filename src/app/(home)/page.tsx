import Link from 'next/link';
import { Shield, Lock, Zap, GitBranch, Search, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            <Shield className="w-4 h-4" />
            <span>DevSecOps Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            DevSecForge
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Forge secure software with confidence. Integrate security seamlessly into your development pipeline.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/docs" 
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/docs" 
              className="px-8 py-3 rounded-lg border border-border font-semibold hover:bg-secondary/50 transition-colors"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-20 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Security at Every Stage
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Lock className="w-8 h-8" />}
            title="Shift Left Security"
            description="Integrate security practices early in the development lifecycle to catch vulnerabilities before they reach production."
          />
          
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="Automated Pipelines"
            description="Build CI/CD pipelines with security gates that automatically scan, test, and validate your code."
          />
          
          <FeatureCard
            icon={<Search className="w-8 h-8" />}
            title="Continuous Monitoring"
            description="Monitor your applications 24/7 with real-time threat detection and automated incident response."
          />
          
          <FeatureCard
            icon={<GitBranch className="w-8 h-8" />}
            title="Version Control Security"
            description="Protect your repositories with branch policies, code signing, and automated security reviews."
          />
          
          <FeatureCard
            icon={<CheckCircle2 className="w-8 h-8" />}
            title="Compliance Ready"
            description="Meet industry standards with automated compliance checks and audit trails built into your workflow."
          />
          
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Defense in Depth"
            description="Layer multiple security controls across your infrastructure for comprehensive protection."
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-6 py-20 bg-gradient-to-t from-background to-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Pipeline?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the DevSecOps revolution and build security into your development process from day one.
          </p>
          <Link 
            href="/docs" 
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Explore Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors bg-card">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
