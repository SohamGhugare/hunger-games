'use client';

import { useRouter } from 'next/navigation';
import { Button, Stack, Text } from '@xsolla-zk/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function LobbyPage() {
  const [timeLeft, setTimeLeft] = useState(5);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameStarted(true);
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const router = useRouter();

  const handleEnterGame = () => {
    // Navigate to the game round page
    router.push('/game/round');
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
          <Stack alignItems="center" gap="$space.400" marginTop="$space.600">
            {!gameStarted ? (
              <Text 
                fontSize={24} 
                paddingHorizontal="$space.500"
                paddingVertical="$space.300"
                backgroundColor="rgba(255, 255, 255, 0.1)"
                borderRadius="$radius.300"
              >
                Game Begins in... {timeLeft}s
              </Text>
            ) : (
              <Stack alignItems="center" gap="$space.600">
                <Text 
                  fontSize={24} 
                  paddingHorizontal="$space.500"
                  paddingVertical="$space.300"
                  backgroundColor="rgba(255, 255, 255, 0.1)"
                  borderRadius="$radius.300"
                  textAlign="center"
                >
                  The game has begun!
                  <Text display="block" fontSize={16} color="$content.neutral-secondary" marginTop="$space.200">
                    May the odds be in your favour
                  </Text>
                </Text>
                <Button 
                  onPress={handleEnterGame}
                  width="100%"
                  maxWidth={300}
                >
                  <Button.Text>Enter</Button.Text>
                </Button>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
