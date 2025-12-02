import Link from 'next/link';
import { Shield, Lock, Zap, GitBranch, Search, CheckCircle2, Code, Server, Database } from 'lucide-react';
import { Spotlight } from '@/components/ui/spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Button } from '@/components/ui/moving-border';

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section with Spotlight */}
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            <Shield className="w-4 h-4" />
            <span>DevSecOps Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            DevSecForge
          </h1>
          
          <TextGenerateEffect 
            words="Forge secure software with confidence. Integrate security seamlessly into your development pipeline."
            className="text-center text-xl md:text-2xl mt-4 text-neutral-300"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/docs">
              <Button
                borderRadius="1rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Get Started
              </Button>
            </Link>
            <Link 
              href="/docs" 
              className="px-8 py-3 rounded-lg border border-neutral-700 font-semibold hover:bg-neutral-800 transition-colors text-white"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section with Bento Grid */}
      <div className="px-6 py-20 bg-neutral-950">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Security at Every Stage
        </h2>
        
        <BentoGrid className="max-w-7xl mx-auto">
          <BentoGridItem
            title="Shift Left Security"
            description="Integrate security practices early in the development lifecycle to catch vulnerabilities before they reach production."
            header={<SkeletonOne />}
            icon={<Lock className="h-4 w-4 text-neutral-300" />}
            className="md:col-span-2"
          />
          <BentoGridItem
            title="Automated Pipelines"
            description="Build CI/CD pipelines with security gates that automatically scan, test, and validate your code."
            header={<SkeletonTwo />}
            icon={<Zap className="h-4 w-4 text-neutral-300" />}
          />
          <BentoGridItem
            title="Continuous Monitoring"
            description="Monitor your applications 24/7 with real-time threat detection and automated incident response."
            header={<SkeletonThree />}
            icon={<Search className="h-4 w-4 text-neutral-300" />}
          />
          <BentoGridItem
            title="Version Control Security"
            description="Protect your repositories with branch policies, code signing, and automated security reviews."
            header={<SkeletonFour />}
            icon={<GitBranch className="h-4 w-4 text-neutral-300" />}
            className="md:col-span-2"
          />
          <BentoGridItem
            title="Compliance Ready"
            description="Meet industry standards with automated compliance checks and audit trails built into your workflow."
            header={<SkeletonFive />}
            icon={<CheckCircle2 className="h-4 w-4 text-neutral-300" />}
          />
          <BentoGridItem
            title="Defense in Depth"
            description="Layer multiple security controls across your infrastructure for comprehensive protection."
            header={<SkeletonSix />}
            icon={<Shield className="h-4 w-4 text-neutral-300" />}
            className="md:col-span-2"
          />
        </BentoGrid>
      </div>

      {/* Call to Action */}
      <div className="px-6 py-20 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Secure Your Pipeline?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Join the DevSecOps revolution and build security into your development process from day one.
          </p>
          <Link href="/docs" className="inline-block">
            <Button
              borderRadius="1rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Documentation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Skeleton components for Bento Grid
const SkeletonOne = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800">
      <div className="flex items-center justify-center w-full">
        <Code className="h-12 w-12 text-neutral-600" />
      </div>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800">
      <div className="flex items-center justify-center w-full">
        <Zap className="h-12 w-12 text-neutral-600" />
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800">
      <div className="flex items-center justify-center w-full">
        <Search className="h-12 w-12 text-neutral-600" />
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800">
      <div className="flex items-center justify-center w-full">
        <GitBranch className="h-12 w-12 text-neutral-600" />
      </div>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800">
      <div className="flex items-center justify-center w-full">
        <Database className="h-12 w-12 text-neutral-600" />
      </div>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800">
      <div className="flex items-center justify-center w-full">
        <Server className="h-12 w-12 text-neutral-600" />
      </div>
    </div>
  );
};
