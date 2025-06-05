'use client';

import React from 'react';
import { Stack, Text, Button, SemanticText } from '@xsolla-zk/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { EyeOff, Move, Search, Sword, Users } from 'lucide-react';

export default function HowToPlay() {
  const router = useRouter();

  return (
    <Stack flex={1} justifyContent="center" alignItems="center" minHeight="100vh" width="100%" position="relative" overflow="hidden" paddingVertical="$space.800">
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
      
      <Stack width="100%" maxWidth={1200} alignItems="center" gap="$space.500" padding="$space.400">
        <Text 
          color="white" 
          fontWeight="bold" 
          textAlign="center" 
          fontSize={48} 
          lineHeight={1.2}
        >
          How to Play
        </Text>
        
        <Text 
          color="white"
          textAlign="center"
          fontSize={32}
          lineHeight={1.3}
          maxWidth={800}
          marginTop="$space.400"
          marginBottom="$space.600"
        >
          Survive. Strategize. Outlast.
        </Text>

        <Stack width="100%" maxWidth={800} gap="$space.800" paddingHorizontal="$space.400">
          <Step 
            number="1" 
            title="Enter the Arena" 
            description={
              <Stack gap="$space.100" marginLeft="$space.200">
                <Text color="white">• Connect your wallet to join the game.</Text>
                <Text color="white">• Once enough players join, a new Simulation begins.</Text>
                <Text color="white">• You'll be dropped into a hostile arena — survival starts now.</Text>
              </Stack>
            }
          />
          
          <Step 
            number="2" 
            title="Make your choice" 
            description={
              <Stack gap="$space.400">
                <Text color="white" textAlign="left">Each round, you'll be given 3 random actions to choose from:</Text>
                <Stack gap="$space.400">
                  <Stack flexDirection="row" flexWrap="wrap" gap="$space.400" justifyContent="center">
                    <ActionCard 
                      icon="eye-off" 
                      title="Hide" 
                      description="Avoid danger and lower your chance of being targeted" 
                    />
                    <ActionCard 
                      icon="search" 
                      title="Search for Supplies" 
                      description="Find food, weapons, or useful tools" 
                    />
                    <ActionCard 
                      icon="sword" 
                      title="Attack" 
                      description="Target another player in your zone to eliminate them" 
                    />
                  </Stack>
                  <Stack flexDirection="row" flexWrap="wrap" gap="$space.400" justifyContent="center">
                    <ActionCard 
                      icon="move" 
                      title="Move Zones" 
                      description="Navigate to a new area in the arena" 
                    />
                    <ActionCard 
                      icon="users" 
                      title="Form Alliance" 
                      description="Team up with others (temporary or treacherous?)" 
                    />
                  </Stack>
                </Stack>
              </Stack>
            }
          />
          
          <Step 
            number="3" 
            title="The Simulation Engine Resolves" 
            description={
              <Stack gap="$space.200" maxWidth="100%" paddingHorizontal="$space.200">
                <Stack gap="$space.100">
                  <Text color="white" fontSize="$300">Once all players have locked in their moves, the game engine resolves </Text>
                  <Text color="white" fontSize="$300">all actions simultaneously.</Text>
                </Stack>
                <Text color="white" marginTop="$space.200">Outcomes are based on:</Text>
                <Stack gap="$space.100" marginLeft="$space.200">
                  <Text color="white">• Your action</Text>
                  <Text color="white">• Other players' actions</Text>
                  <Text color="white">• Zone dynamics</Text>
                  <Text color="white">• Random environmental effects (driven by secure on-chain randomness)</Text>
                </Stack>
                <Text color="white" fontStyle="italic">You'll see a detailed event log narrating what happened that round.</Text>
              </Stack>
            }
          />
          
          <Step 
            title="Win Condition" 
            number=""
            description={
              <Text color="white" fontWeight="bold">Be the last player standing in the Arena.</Text>
            }
          />
        </Stack>

        <Button
          size="$500"
          variant="primary"
          backgroundColor="white"
          marginTop="$space.800"
          paddingHorizontal="$space.600"
          paddingVertical="$space.400"
          onPress={() => router.push('/')}
        >
          <Button.Text>Back to Home</Button.Text>
        </Button>
      </Stack>
    </Stack>
  );
}

type IconName = 'eye-off' | 'search' | 'sword' | 'move' | 'users';

const iconComponents = {
  'eye-off': EyeOff,
  'search': Search,
  'sword': Sword,
  'move': Move,
  'users': Users
};

function ActionCard({ icon, title, description }: { icon: IconName; title: string; description: string }) {
  const IconComponent = iconComponents[icon];
  
  return (
    <Stack 
      backgroundColor="rgba(255, 255, 255, 0.15)" 
      borderRadius="$radius.300" 
      padding="$space.400"
      minWidth={100}
      maxWidth={175}
      flex={1}
      gap="$space.200"
      borderWidth={1}
      borderColor="rgba(255, 255, 255, 0.1)"
    >
      <Stack 
        width={40} 
        height={40} 
        borderRadius="$radius.300" 
        backgroundColor="rgba(255, 255, 255, 0.1)" 
        justifyContent="center" 
        alignItems="center"
        marginBottom="$space.200"
      >
        {IconComponent && <IconComponent size={20} color="white" />}
      </Stack>
      <Text fontWeight="bold" color="white" fontSize="$400">{title}</Text>
      <Text color="rgba(255, 255, 255, 0.8)" fontSize="$300">{description}</Text>
    </Stack>
  );
}

function Step({ number, title, description }: { number: string; title: string; description: React.ReactNode }) {
  return (
    <Stack flexDirection="row" gap="$space.400" alignItems="flex-start">
      <Stack
        backgroundColor="white"
        borderRadius={999}
        width={32}
        height={32}
        justifyContent="center"
        alignItems="center"
        flexShrink={0}
        marginTop={2}
      >
        <Text fontWeight="bold" color="black">
          {number}
        </Text>
      </Stack>
      <Stack>
        <Text color="white" fontWeight="bold" fontSize="$400" marginBottom="$space.100">
          {title}
        </Text>
        <Text color="white" opacity={0.9}>
          {description}
        </Text>
      </Stack>
    </Stack>
  );
}
