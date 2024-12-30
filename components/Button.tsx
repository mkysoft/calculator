import { Circle, Pressable, IPressableProps } from "native-base";

export interface IButtonProps extends IPressableProps {
  text: string;
  type: 'equal' | 'operator' | 'clear' | 'default';
} 

export function Button({ text, type, ...rest }: IButtonProps) {
  return (
    <Pressable {...rest}>
      {({ isPressed }) => {
        return (
          <Circle bg={type === 'equal' ? (isPressed ? 'primary.800' : 'primary.900') : (isPressed ? 'background.600' : 'background.800')} size={20} _text={{
            color: type === 'operator' ? 'primary.800' : type === 'clear' ? 'error.400' : type === 'equal' ? 'white' : 'text.900',
            fontSize: 28,
            style: {
              transform: [{
                scale: isPressed ? 0.75 : 1,
              }]
            }
          }
          }>
            {text}
          </Circle>
        )
      }}
    </Pressable>
  )
}