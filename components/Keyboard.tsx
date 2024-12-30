import { HStack, VStack } from "native-base";
import { Button } from "./Button";

export type Operation = '%' | '/' | '*' | '-' | '+' | '=';
export type Keys = number | Operation | 'C' | '⌫' | '.' | '(' | ')';
export const OperationsSet = new Set(['%', '/', '*', '-', '+', '='])
export const KeysThatAreNotNumbersSet = new Set([...OperationsSet, 'C', '⌫', '.', '(', ')'])
export interface IKeyboardProps {
  onButtonPress: (value: Keys) => void;
  onButtonLongPress: (message: string) => void;
}

export function Keyboard({ onButtonPress, onButtonLongPress }: IKeyboardProps) {
  return (
    <VStack p={4} borderTopColor='background.800' borderTopWidth={2}>
      <HStack justifyContent='space-evenly' w='full'>
        <Button type='clear' text='C' onPress={() => onButtonPress('C')} onLongPress={() => onButtonLongPress('Apagar Tudo')} />
        <Button type='operator' text='%' onPress={() => onButtonPress('%')} onLongPress={() => onButtonLongPress('Porcentagem')} />
        <Button type='operator' text='÷' onPress={() => onButtonPress('/')} onLongPress={() => onButtonLongPress('Divisão')} />
        <Button type='operator' text='x' onPress={() => onButtonPress('*')} onLongPress={() => onButtonLongPress('Multiplicação')} />
      </HStack>

      <HStack justifyContent='space-evenly' w='full' mt={2}>
        <Button type='default' text='7' onPress={() => onButtonPress(7)} onLongPress={() => onButtonLongPress('Sete')} />
        <Button type='default' text='8' onPress={() => onButtonPress(8)} onLongPress={() => onButtonLongPress('Oito')} />
        <Button type='default' text='9' onPress={() => onButtonPress(9)} onLongPress={() => onButtonLongPress('Nove')} />
        <Button type='operator' text='—' onPress={() => onButtonPress('-')} onLongPress={() => onButtonLongPress('Subtração')} />
      </HStack>

      <HStack justifyContent='space-evenly' w='full' mt={2}>
        <Button type='default' text='4' onPress={() => onButtonPress(4)} onLongPress={() => onButtonLongPress('Quatro')} />
        <Button type='default' text='5' onPress={() => onButtonPress(5)} onLongPress={() => onButtonLongPress('Cinco')} />
        <Button type='default' text='6' onPress={() => onButtonPress(6)} onLongPress={() => onButtonLongPress('Seis')} />
        <Button type='operator' text='+' onPress={() => onButtonPress('+')} onLongPress={() => onButtonLongPress('Adição')} />
      </HStack>

      <HStack justifyContent='space-evenly' w='full' mt={2}>
        <Button type='default' text='1' onPress={() => onButtonPress(1)} onLongPress={() => onButtonLongPress('Um')} />
        <Button type='default' text='2' onPress={() => onButtonPress(2)} onLongPress={() => onButtonLongPress('Dois')} />
        <Button type='default' text='3' onPress={() => onButtonPress(3)} onLongPress={() => onButtonLongPress('Três')} />
        <Button type='clear' text='⌫' onPress={() => onButtonPress('⌫')} onLongPress={() => onButtonLongPress('Apagar à Esquerda')} />
      </HStack>

      <HStack justifyContent='space-evenly' w='full' mt={2}>
        <Button type='default' text='( )' onPress={() => onButtonPress('(')} onLongPress={() => onButtonLongPress('Parênteses')} />
        <Button type='default' text='0' onPress={() => onButtonPress(0)} onLongPress={() => onButtonLongPress('Zero')} />
        <Button type='default' text=',' onPress={() => onButtonPress('.')} onLongPress={() => onButtonLongPress('Vírgula')} />
        <Button type='equal' text='=' onPress={() => onButtonPress('=')} onLongPress={() => onButtonLongPress('Igual')} />
      </HStack>
    </VStack>
  )
}