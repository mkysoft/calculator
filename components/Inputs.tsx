import { Box, Text } from "native-base";
import { TextInput } from "react-native";
import { Keys } from "./Keyboard";
import { useEffect, useState } from "react";

export interface IInputsProps {
  onCalculate: (loanAmount: number, interestRate: number, repaymentRate: number, montlyPayment: number) => void;
}

export function Inputs({ onCalculate }: IInputsProps) {

  const [loanAmount, setLoanAmount] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [repaymentRate, setRepaymentRate] = useState<string>('');
  const [montlyPayment, setMontlyPayment] = useState<string>('');

  useEffect(() => {
    if (loanAmount && interestRate && repaymentRate && montlyPayment) {
      onCalculate(Number(loanAmount), Number(interestRate), Number(repaymentRate), Number(montlyPayment));
    } else {
      onCalculate(0, 0, 0, 0);
    }
  }, [loanAmount, interestRate, repaymentRate, montlyPayment]);

  return (
    <Box w='full' padding='8' alignItems='flex-end' justifyContent='space-between'>
      <Text fontSize={26}>Loan amount: 
        <TextInput onChange={(value) => {setLoanAmount(String(value))}} keyboardType="numeric" textAlign='right' placeholder="Enter loan amount" />
      </Text>
      <Text fontSize={26}>Interest rate (%): 
        <TextInput onChange={(value) => {setInterestRate(String(value))}} keyboardType="numeric" textAlign='right' placeholder="Enter interest rate" />
      </Text>
      <Text fontSize={26}>Repayment rate (%): 
        <TextInput onChange={(value) => {setRepaymentRate(String(value))}} keyboardType="numeric" textAlign='right' placeholder="Enter repayment rate" />
      </Text>
      <Text fontSize={26}>Montly payment: 
        <TextInput onChange={(value) => {setMontlyPayment(String(value))}} keyboardType="numeric" textAlign='right' placeholder="Enter montly payment" />
      </Text>      
    </Box>
  )
}