/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react';
import { OptionButton, OptionButtonContainer, StyleInput } from './styles';

interface Props {
  children?: ReactNode;
  account?: any;
  setAccount: any;
  text: string;
}

export default function AccountInput({ children, account, setAccount, text }: Props) {
  return (
    <React.Fragment>
      <div className="flex flex-col mt-4">
        <label className="mb-2" htmlFor="">
          {text}
        </label>
        <StyleInput
          onChange={(e) => {
            setAccount(e.target.value);
          }}
        ></StyleInput>
      </div>
    </React.Fragment>
  );
}
