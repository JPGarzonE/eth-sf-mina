/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react';
import { OptionButton, OptionButtonContainer } from './styles';

interface Props {
  children?: ReactNode;
  option: any;
  setOption: any;
}

export default function AmountOptions({ children, option, setOption }: Props) {
  const options = [1, 10, 100, 1000];
  return (
    <React.Fragment>
      <OptionButtonContainer>
        <>
          {options.map((amount) => (
            <OptionButton
              onClick={() => {
                setOption(amount);
              }}
              className={`${option === amount ? 'active' : ''}`}
              key={amount}
            >
              {amount} MINA
            </OptionButton>
          ))}
        </>
      </OptionButtonContainer>
    </React.Fragment>
  );
}
