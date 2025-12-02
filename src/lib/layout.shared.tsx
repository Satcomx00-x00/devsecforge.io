import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpen, Home, Shield, Code2, GitBranch } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'DevSecForge.io',
      url: '/',
      transparentMode: 'top',
    },
    links: [
      {
        text: 'Home',
        url: '/',
        icon: <Home className="w-4 h-4" />,
      },
      {
        text: 'Documentation',
        url: '/docs',
        icon: <BookOpen className="w-4 h-4" />,
        active: 'nested-url',
      },
      {
        text: 'Security',
        url: '/docs/security',
        icon: <Shield className="w-4 h-4" />,
      },
      {
        text: 'Tools',
        url: '/docs/tools',
        icon: <Code2 className="w-4 h-4" />,
      },
    ],
    githubUrl: 'https://github.com/Satcomx00-x00/devsecforge.io',
  };
}
