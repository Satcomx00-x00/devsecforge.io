import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default async function Layout({ children, params }: LayoutProps<'/docs/[locale]'>) {
  const locale = (await params).locale;

  return (
    <DocsLayout tree={source.pageTree[locale]} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
