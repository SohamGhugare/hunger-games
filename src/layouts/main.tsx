'use client';

import type { ReactNode } from 'react';
import { View } from '@xsolla-zk/react';
import { ScreenStack } from '~/components/stacks/screen-stack';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <View maxWidth={800} width="100%" marginHorizontal="auto">
      <ScreenStack>{children}</ScreenStack>
    </View>
  );
}
