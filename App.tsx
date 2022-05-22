import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";

const Example = () => {
  return <Box alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={13 / 15}>
          <Image source={require('./img/devour.gif')} 
          style={{ width: 11, height: 10 }}
          alt="image" alignItems="center" />
          </AspectRatio>
          <Center bg="blue.500" _dark={{
          bg: "blue.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="130" py="1.5">
            MOONFALL
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Moonfall – Ameaça Lunar
            </Heading>
            <Text fontSize="xs" _light={{
            color: "green.500"
          }} _dark={{
            color: "green.400"
          }} fontWeight="600" ml="-0.5" mt="-1">
              Ameaça Lunar oferece destruição com contemplação.
            </Text>
          </Stack>
          <Text fontWeight="400">
            Uma força misteriosa tira a Lua de sua órbita e a coloca em rota de colisão com a Terra. Poucas semanas antes do impacto e com a humanidade à beira da aniquilação, a ex-astronauta da NASA Jo Fowler está convencida de que tem a resposta para salvar o planeta, mas apenas um colega do passado, o astronauta Brian Harper, e o teorista K.C. Houseman, acreditam nela. Os improváveis heróis correm contra o tempo para montar uma missão ao espaço, mas lá descobrem que a Lua não é o que pensamos.
          </Text>
          <HStack alignItems="center" space={4
          } justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                02  maio 2022
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    