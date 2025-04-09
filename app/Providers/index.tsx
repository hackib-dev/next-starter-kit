'use client';

import UseQueryProvider from './UseQuery';
import { useInitialRender } from '@/hooks/useInitialRender';
import { ReloadProvider } from '@/hooks/useReloadContext';
import { ReduxProviders } from '@/store/provider';
import { Toaster } from '@/components/ui/sonner';

export function Providers({ children }: { children: React.ReactNode }) {
  const isInitialRenderComplete = useInitialRender();

  if (!isInitialRenderComplete) return null;

  return (
    <UseQueryProvider>
      <ReloadProvider>
        <ReduxProviders>
          {children}
          <Toaster />
        </ReduxProviders>
      </ReloadProvider>
    </UseQueryProvider>
  );
}
