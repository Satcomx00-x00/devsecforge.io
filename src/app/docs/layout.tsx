import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';
import { Shield, Sparkles, Lock, Code2, BookOpen, Github, ArrowRight, Star, Trophy, ExternalLink, CheckCircle2, Zap } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      {...baseOptions()}
      sidebar={{
        defaultOpenLevel: 1,
        collapsible: true,
        banner: (
          <div className="p-3 border-b border-border/50">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-primary/10">
                <BookOpen className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Navigation</h3>
                <p className="text-xs text-muted-foreground">Browse documentation</p>
              </div>
            </div>
          </div>
        ),
        footer: (
          <div className="p-3 border-t border-border/50">
            <a
              href="https://github.com/Satcomx00-x00/devsecforge.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 rounded-lg hover:bg-accent transition-colors group"
            >
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-medium">View on GitHub</span>
              </div>
              <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        ),
      }}
    >
      <div className="flex-1 min-w-0">
        {children}
      </div>
      
      {/* Right Sidebar with Custom Cards - Snapped to screen right */}
      <aside className="hidden xl:block fixed right-0 top-16 w-80 h-[calc(100vh-4rem)] overflow-y-auto border-l border-border/50 bg-gradient-to-b from-background/95 to-background/98 backdrop-blur-xl">
        <div className="p-6 space-y-6">
          {/* Documentation Hub Card */}
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />


          {/* Security First Card with improved layout */}
          <div className="group relative overflow-hidden rounded-2xl border border-green-500/30 bg-gradient-to-br from-card to-green-500/5 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl" />

            <div className="relative p-5 space-y-4">
              {/* Enhanced Header */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 rounded-xl blur-lg opacity-30" />
                  <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
                    <Lock className="w-5 h-5 text-green-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-green-400 mb-0.5">Security First</h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-semibold">Enterprise Grade Protection</p>
                </div>
              </div>

              {/* Description with better typography */}
              <p className="text-xs text-muted-foreground leading-relaxed pl-1">
                Built with zero-trust architecture and end-to-end encryption for maximum security in every layer.
              </p>

              {/* Features with improved layout */}
              <div className="space-y-2.5 pl-1">
                <div className="flex items-center gap-2.5 group/item">
                  <div className="p-1 rounded-md bg-green-500/10 group-hover/item:bg-green-500/20 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="text-xs text-muted-foreground group-hover/item:text-foreground transition-colors">Zero-trust architecture</span>
                </div>
                <div className="flex items-center gap-2.5 group/item">
                  <div className="p-1 rounded-md bg-green-500/10 group-hover/item:bg-green-500/20 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="text-xs text-muted-foreground group-hover/item:text-foreground transition-colors">End-to-end encryption</span>
                </div>
                <div className="flex items-center gap-2.5 group/item">
                  <div className="p-1 rounded-md bg-green-500/10 group-hover/item:bg-green-500/20 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="text-xs text-muted-foreground group-hover/item:text-foreground transition-colors">SOC 2 Type II compliant</span>
                </div>
              </div>

              {/* Enhanced CTA */}
              <a
                href="/docs/security"
                className="group/link flex items-center justify-between p-3 rounded-xl border border-green-500/30 bg-green-500/5 hover:bg-green-500/10 hover:border-green-500/50 transition-all"
              >
                <span className="text-sm font-semibold text-green-400">Explore Security</span>
                <ArrowRight className="w-4 h-4 text-green-400 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Status Card with modern design */}
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-5 space-y-4">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500" />

            <div className="flex items-center justify-between">

            </div>

            <div className="space-y-3">
              <div className="group/status flex items-center justify-between p-2.5 rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <span className="text-xs font-medium text-foreground">API Services</span>
                </div>
                <span className="text-xs font-semibold text-green-400">99.9%</span>
              </div>

              <div className="group/status flex items-center justify-between p-2.5 rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <span className="text-xs font-medium text-foreground">Documentation</span>
                </div>
                <span className="text-xs font-semibold text-green-400">100%</span>
              </div>

              <div className="pt-3 mt-3 border-t border-border/50 flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-medium">Current Version</span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span className="text-xs font-mono font-bold text-foreground">v1.0.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </DocsLayout>
  );
}
