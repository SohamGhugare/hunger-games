'use client';

import { Button, Dialog, Stack, Text } from '@xsolla-zk/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function LobbyPage() {
  const [timeLeft, setTimeLeft] = useState(10);
  const [showGameStartModal, setShowGameStartModal] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setShowGameStartModal(true);
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleEnterGame = () => {
    // Handle game entry logic here
    console.log('Entering game...');
  };

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
      
      <Stack alignItems="center" gap="$space.400" marginTop="$space.800">
        <Text 
          color="white" 
          fontWeight="bold" 
          textAlign="center" 
          fontSize={48} 
          lineHeight={1.2}
        >
          Welcome!
        </Text>
        
        <Text 
          color="white" 
          textAlign="center" 
          fontSize={24}
          opacity={0.8}
          marginBottom="$space.600"
        >
          Waiting for other players...
        </Text>

        <Stack 
          backgroundColor="rgba(255, 255, 255, 0.1)" 
          padding="$space.400" 
          borderRadius="$radius.300"
          minWidth={300}
          gap="$space.200"
        >
          <Text color="white" fontWeight="bold">Players:</Text>
          <Text color="white">Player 1: You</Text>
        </Stack>

        {timeLeft > 0 && (
          <Text 
            color="white" 
            fontSize={20}
            marginTop="$space.800" 
            paddingHorizontal="$space.600"
            paddingVertical="$space.300"
            backgroundColor="rgba(255, 255, 255, 0.1)"
            borderRadius="$radius.300"
          >
            Game Begins in... {timeLeft}s
          </Text>
        )}
      </Stack>

      {timeLeft === 0 && (
        <Dialog open={showGameStartModal} onOpenChange={setShowGameStartModal}>
          <Dialog.Overlay />
          <Dialog.Content 
            width="90%" 
            maxWidth={500} 
            backgroundColor="$layer.floor-0" 
            borderRadius="$radius.400" 
            padding="$space.500" 
            gap="$space.400" 
            alignItems="center"
          >
            <Dialog.Title textAlign="center" fontSize={24}>
              The game has begun
            </Dialog.Title>
            <Dialog.Description textAlign="center" color="$content.neutral-secondary" fontSize={16}>
              May the odds be in your favour
            </Dialog.Description>
            <Button 
              marginTop="$space.400" 
              onPress={handleEnterGame}
              width="100%"
            >
              <Button.Text>Enter</Button.Text>
            </Button>
          </Dialog.Content>
        </Dialog>
      )}
    </Stack>
  );
}
