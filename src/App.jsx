import React, { useCallback, useEffect, useState } from 'react';
import { render } from 'react-dom';
import styles from './App.css'
import CardSection from '@Components/CardSection';
import LandingMainSection from '../src/Components/LandingMainSection';
import Header from '../src/Components/Header';
import LandingLayout from '../src/Layouts/Landing';
//import { MixerZkApp } from 'mina-smart-contract';
import TransactionCard from '@Components/TransactionCard';


// some style params
let grey = '#cccccc';
let darkGrey = '#999999';
let lightGrey = '#f6f6f6';
let thin = `${grey} solid 1px`;
let gridWidth = 450;

let Sudoku; // this will hold the dynamically imported './sudoku-zkapp.ts'

render(<App />, document.querySelector('#root'));

function App() {
  let [zkapp, setZkapp] = useState();
  let [zkappState, pullZkappState] = useZkappState(zkapp);

  return (
    <LandingLayout>
      {zkappState ? (
        <h1>todo bien</h1>
        ) : (
        <DeployContract {...{ setZkapp }} />
      )}
    </LandingLayout>
  );
}

function DeployContract({ setZkapp }) {
  let [isLoading, setLoading] = useState(false);

  async function deploy() {
    if (isLoading) return;
    setLoading(true);
    Sudoku = await import('../src/sudoku.js');
    let zkapp = await Sudoku.deploy();
    setLoading(false);
    setZkapp(zkapp);
  }

  return (
    // <Layout>
    //   <Header>Step 1: Deploy the contract</Header>

    //   <Button onClick={deploy} disabled={isLoading}>
    //     Deploy
    //   </Button>
    //   <div style={{ padding: 12 }}><i>Please wait ~30s for the proof to generate</i></div>
    // </Layout>
    <div className={styles.container}>
    <LandingLayout>
      <Header></Header>
      <LandingMainSection></LandingMainSection>
      <div className="w-1 h-1 my-5" />
      <TransactionCard></TransactionCard>
      {/* <ScrollingText title={'SpeeDao'} /> */}
      {/* <CardSection /> */}
    </LandingLayout>
  </div>
  );
}


function useZkappState(zkapp) {
  // custom hook to get the state in the SmartContract instance
  let [state, setState] = useState();
  let pullZkappState = useCallback(() => {
    let state = zkapp?.getState();
    setState(state);
    return state;
  }, [zkapp]);
  useEffect(() => {
    setState(zkapp?.getState());
  }, [zkapp]);
  return [state, pullZkappState];
}

// Pure UI components

// function Header({ children }) {
//   return (
//     <div style={{ position: 'relative' }}>
//       <h1 style={{ fontSize: '36px', textAlign: 'center' }}>{children}</h1>
//     </div>
//   );
// }

function Button({ disabled = false, ...props }) {
  return (
    <button
      className="highlight"
      style={{
        color: disabled ? darkGrey : 'black',
        fontSize: '1rem',
        fontWeight: 'bold',
        backgroundColor: disabled ? 'white !important' : 'white',
        borderRadius: '10px',
        paddingTop: '10px',
        paddingBottom: '10px',
        width: '100%',
        border: disabled ? `4px ${darkGrey} solid` : '4px black solid',
        boxShadow: `${grey} 3px 3px 3px`,
        cursor: disabled ? undefined : 'pointer',
      }}
      disabled={disabled}
      {...props}
    />
  );
}

// function Container(props) {
//   return (
//     <div
//       style={{
//         maxWidth: '900px',
//         margin: 'auto',
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'stretch',
//         justifyContent: 'center',
//         padding: '2rem',
//         background: "linear-gradient(#02E365, #56FA0A)"
//       }}
//       {...props}
//     />
//   );
// }

function Layout({ children }) {
  let [header, left, right] = children;
  return (
    <>
      {header}
      <Space h="4rem" />
      <div style={{ display: 'flex' }}>
        {left}
        <Space w="4rem" />
        {right}
      </div>
    </>
  );
}

function Space({ w, h }) {
  return <div style={{ width: w, height: h }} />;
}
