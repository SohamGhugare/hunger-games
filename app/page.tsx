'use client';

import { Stack, Text, Button } from '@xsolla-zk/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <Stack 
      flex={1} 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh"
      width="100%"
      position="relative"
      overflow="hidden"
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
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
          quality={100}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // 60% opacity black overlay
        }} />
      </div>
      <Stack width="100%" maxWidth={1200} alignItems="center">
        <Text 
          color="white"
          fontWeight="bold"
          textAlign="center"
          fontSize={60}
          lineHeight={1.2}
          marginBottom="$space.600"
          paddingHorizontal="$space.400"
        >
          Hunger Games
        </Text>
        <Text 
          color="white"
          textAlign="center"
          maxWidth={800}
          fontSize="$400"
          marginTop="$space.400"
          cursor="pointer"
          textDecorationLine="underline"
          onPress={() => router.push('/how-to-play')}
        >
          How to play
        </Text>
        <Button
          size="$500"
          variant="primary"
          backgroundColor="white"
          marginTop="$space.600"
          paddingHorizontal="$space.600"
          paddingVertical="$space.400"
          onPress={() => {
            // Wallet connection logic will go here
            console.log('Connect Wallet clicked');
          }}
        >
          <Button.Text>Connect Wallet</Button.Text>
        </Button>
      </Stack>
    </Stack>
  );
}
