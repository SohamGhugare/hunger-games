'use client';

import { Stack, Text } from '@xsolla-zk/react';
import Image from 'next/image';

export default function LobbyPage() {
  return (
    <Stack flex={1} justifyContent="center" alignItems="center" minHeight="100vh" width="100%" position="relative" overflow="hidden">
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}>
          <Image
            src="/background.png"
            alt="Background"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            priority
          />
        </div>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgba(0, 0, 0, 0.7)' 
        }} />
      </div>
      
      <Text 
        color="white" 
        fontWeight="bold" 
        textAlign="center" 
        fontSize={48} 
        lineHeight={1.2}
      >
        Welcome!
      </Text>
    </Stack>
  );
}
