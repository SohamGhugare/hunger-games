'use client';

import { Button, Stack, Text } from '@xsolla-zk/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { Search, Sword, Move as MoveIcon, Heart, Utensils, Droplets, X } from 'lucide-react';

type PlayerChoice = 'search' | 'attack' | 'move' | null;

export default function RoundPage() {
  const router = useRouter();
  const [selectedChoice, setSelectedChoice] = useState<PlayerChoice>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showInventory, setShowInventory] = useState(false);

  const handleChoiceSelect = (choice: PlayerChoice) => {
    setSelectedChoice(choice);
  };

  const handleSubmit = () => {
    if (selectedChoice && !isSubmitted) {
      console.log('Selected choice:', selectedChoice);
      // In a real implementation, this would send the choice to the server
      setIsSubmitted(true);
    }
  };

  return (
    <Stack flex={1} minHeight="100vh" width="100%" position="relative" overflow="hidden">
      {/* Background Image */}
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

      {/* Content */}
      <Stack 
        flex={1} 
        padding="$space.400" 
        gap="$space.600" 
        justifyContent="center" 
        alignItems="center"
        maxWidth={1200}
        width="100%"
        marginHorizontal="auto"
      >
        {/* Round Header */}
        <Stack alignItems="center" gap="$space.400">
          <Text fontSize={32} fontWeight="bold">Round 1 Begins</Text>
          <Text textAlign="center" fontSize={18} color="$content.neutral-secondary" maxWidth={800}>
            The arena shimmers under a blood-orange sky. As the starting horn echoes, tension crackles through the air. 
            Every player eyes the treeline, the supplies, and — most importantly — each other.
          </Text>
        </Stack>

        {/* Choices */}
        <Text fontSize={20} marginTop="$space.400" marginBottom="$space.200">
          You have three choices:
        </Text>
        
        <Stack 
          flexDirection="row" 
          flexWrap="wrap" 
          justifyContent="center" 
          gap="$space.400"
          width="100%"
        >
          {/* Search for Supplies Card */}
          <Stack 
            onPress={() => handleChoiceSelect('search')}
            opacity={isSubmitted && selectedChoice !== 'search' ? 0.5 : 1}
            backgroundColor={
              isSubmitted 
                ? selectedChoice === 'search' 
                  ? 'rgba(255, 255, 255, 0.2)' 
                  : 'rgba(255, 255, 255, 0.07)'
                : selectedChoice === 'search' 
                  ? 'rgba(255, 255, 255, 0.2)' 
                  : 'rgba(255, 255, 255, 0.15)'
            }
            borderRadius="$radius.300" 
            padding="$space.400"
            minWidth={175}
            maxWidth={200}
            flex={1}
            gap="$space.200"
            borderWidth={1}
            borderColor={selectedChoice === 'search' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'}
            style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
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
              <Search size={20} color="white" />
            </Stack>
            <Text fontWeight="bold" color="white" fontSize={16}>Search for Supplies</Text>
            <Text color="rgba(255, 255, 255, 0.8)" fontSize={14}>
              Scavenge the area for weapons, food, or other useful items.
            </Text>
          </Stack>

          {/* Attack Card */}
          <Stack 
            onPress={() => handleChoiceSelect('attack')}
            opacity={isSubmitted && selectedChoice !== 'attack' ? 0.5 : 1}
            backgroundColor={
              isSubmitted 
                ? selectedChoice === 'attack' 
                  ? 'rgba(255, 255, 255, 0.2)' 
                  : 'rgba(255, 255, 255, 0.07)'
                : selectedChoice === 'attack' 
                  ? 'rgba(255, 255, 255, 0.2)' 
                  : 'rgba(255, 255, 255, 0.15)'
            }
            borderRadius="$radius.300" 
            padding="$space.400"
            minWidth={175}
            maxWidth={200}
            flex={1}
            gap="$space.200"
            borderWidth={1}
            borderColor={selectedChoice === 'attack' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'}
            style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
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
              <Sword size={20} color="white" />
            </Stack>
            <Text fontWeight="bold" color="white" fontSize={16}>Attack</Text>
            <Text color="rgba(255, 255, 255, 0.8)" fontSize={14}>
              Confront another player in your zone. High risk, high reward.
            </Text>
          </Stack>

          {/* Move Zone Card */}
          <Stack 
            onPress={() => handleChoiceSelect('move')}
            opacity={isSubmitted && selectedChoice !== 'move' ? 0.5 : 1}
            backgroundColor={
              isSubmitted 
                ? selectedChoice === 'move' 
                  ? 'rgba(255, 255, 255, 0.2)' 
                  : 'rgba(255, 255, 255, 0.07)'
                : selectedChoice === 'move' 
                  ? 'rgba(255, 255, 255, 0.2)' 
                  : 'rgba(255, 255, 255, 0.15)'
            }
            borderRadius="$radius.300" 
            padding="$space.400"
            minWidth={175}
            maxWidth={200}
            flex={1}
            gap="$space.200"
            borderWidth={1}
            borderColor={selectedChoice === 'move' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'}
            style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
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
              <MoveIcon size={20} color="white" />
            </Stack>
            <Text fontWeight="bold" color="white" fontSize={16}>Move Zone</Text>
            <Text color="rgba(255, 255, 255, 0.8)" fontSize={14}>
              Change your location to a different zone on the map.
            </Text>
          </Stack>
          
          {/* Submit Button */}
          <Button 
            onPress={handleSubmit}
            marginTop="$space.600"
            disabled={!selectedChoice || isSubmitted}
            width="100%"
            maxWidth={400}
          >
            <Button.Text>{isSubmitted ? 'Submitted ✓' : 'Submit Choice'}</Button.Text>
          </Button>
          
          {/* Inventory Link */}
          <Stack width="100%" alignItems="center" marginTop="$space.600">
            <Text 
              onPress={() => setShowInventory(true)}
              color="$content.brand-primary"
              textDecorationLine="underline"
              cursor="pointer"
              textAlign="center"
              fontSize={20}
            >
              Show Inventory
            </Text>
          </Stack>
        </Stack>
      </Stack>

      {/* Inventory Modal */}
      {showInventory && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <Stack 
            backgroundColor="#1E1E2E" 
            borderRadius="$radius.400" 
            padding="$space.600"
            width="90%"
            maxWidth={500}
            gap="$space.600"
          >
            {/* Header */}
            <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
              <Text fontSize={24} fontWeight="bold">Inventory</Text>
              <X 
                size={24} 
                color="white" 
                style={{ cursor: 'pointer' }} 
                onClick={() => setShowInventory(false)}
              />
            </Stack>
            
            {/* Stats */}
            <Stack flexDirection="row" gap="$space.600" justifyContent="space-around">
              <Stack flexDirection="row" alignItems="center" gap="$space.200">
                <Heart size={36} color="#FF6B6B" />
                <Text>100</Text>
              </Stack>
              <Stack flexDirection="row" alignItems="center" gap="$space.200">
                <Utensils size={36} color="#4ECDC4" />
                <Text>96</Text>
              </Stack>
              <Stack flexDirection="row" alignItems="center" gap="$space.200">
                <Droplets size={36} color="#4D96FF" />
                <Text>98</Text>
              </Stack>
            </Stack>
            
            {/* Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
              marginTop: '16px'
            }}>
              {Array(16).fill(0).map((_, index) => (
                <Stack 
                  key={index} 
                  aspectRatio="1/1" 
                  backgroundColor="rgba(255, 255, 255, 0.1)" 
                  borderRadius="$radius.300"
                  justifyContent="center"
                  alignItems="center"
                >
                  {index === 0 && <Sword size={50} color="white" />}
                </Stack>
              ))}
            </div>
          </Stack>
        </div>
      )}
    </Stack>
  );
}
