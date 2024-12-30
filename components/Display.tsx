import { Box, Text } from "native-base";
import { Keys } from "./Keyboard";

export interface IDisplayProps {
  expression : Keys[];
  result: string;
}

export function Display({ expression, result }: IDisplayProps) {

  return (
    <Box w='full' h='2/5' padding='8' alignItems='flex-end' justifyContent='space-between'>
      <Text color='text.900' fontSize={38}>{expression}</Text>
      <Text color='text.800' fontSize={26}>{result}</Text>
    </Box>
  )
}