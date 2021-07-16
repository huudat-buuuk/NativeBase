import React from 'react';
import { Stack, NumberInput } from 'native-base';

export const Example = () => {
  return (
    <Stack w="90%">
      <NumberInput size="lg">
        <NumberInput.Field />
        <NumberInput.Stepper>
          <NumberInput.IncrementStepper />
          <NumberInput.DecrementStepper />
        </NumberInput.Stepper>
      </NumberInput>
    </Stack>
  );
};
