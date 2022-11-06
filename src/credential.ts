import {
    matrixProp,
    CircuitValue,
    Field,
    SmartContract,
    PublicKey,
    method,
    PrivateKey,
    Mina,
    state,
    State,
    isReady,
    Poseidon,
    AccountUpdate,
    Bool,
    Experimental,
    Circuit,
    DeployArgs
  } from 'snarkyjs';

type Witness = { isLeft: boolean; sibling: Field }[];

const MerkleTreeHeight = 4;

/** Merkle Tree
 * Instance for global reference. It must be stored off-chain.
 */
 const MerkleTree = Experimental.MerkleTree;
 const merkleTree = new MerkleTree(MerkleTreeHeight);
 
 class MerkleWitness extends Experimental.MerkleWitness(MerkleTreeHeight) {}

class zkAppCredentials extends SmartContract {
    @state(Field) GX = State<Field>();
    @state(Field) GY = State<Field>();
  
    @state(Field) merkleTreeRoot = State<Field>();
    @method update(y: Field) {
        console.log('Just for compiling');
      }
      /**
   * Verification Method for Merkle Tree
   */
   @method verifyProof(commitment: Field, merkleProof: MerkleWitness) {
    let witnessMerkleRoot = merkleProof.calculateRoot(commitment);

    //For our implementation this needs to happen off-chain
    let merkleTreeRoot = merkleTree.getRoot();
    witnessMerkleRoot.assertEquals(merkleTreeRoot);
  }
  deploy(args: DeployArgs) {
    super.deploy(args);
    this.GX.set(
      Field(
        '0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798'
      )
    );
    this.GY.set(
      Field(
        '0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8'
      )
    );
  }
  //TODO: ADD  gerIndex() function
} 
// setup
const Local = Mina.LocalBlockchain();
Mina.setActiveInstance(Local);
// ZK APP ACCOUNT 
let zkappKey = PrivateKey.random();
let zkappAddress = zkappKey.toPublicKey();
let zkapp = new zkAppCredentials(zkappAddress);
function generateCredential (privateKey:PrivateKey, publicKey:PublicKey){

let stealthAddress = generateStealthAddress (publicKey,privateKey);

let registryAddition = addToRegistery ();

function pullFromRegistery ();

}
function generateStealthAddress(privateKey:PrivateKey, publicKey:PublicKey){

}
function claimCreditial ( commitment: Field, publicKey:PublicKey ){
//Verify claim 
//This would verify that the commitment is part of the Merkle Tree 
let verifyBoolean=  verifyClaim(commitment);

if (verifyBoolean){

}

//Generate Steallth Address 

//Send credential to Stealth Address
}
async function verifyClaim (commitment:Field) {
    let merkleTreeWitness = merkleTree.getWitness(1n);
    let merkleWitness = new MerkleWitness(merkleTreeWitness);
    try {
        zkapp.verifyProof(commitment, merkleWitness);
        return true 
      } catch (e) {
        console.log('Proof not valid');
        return false 
      }
}

function generateStealthAdress ( privateKey, publicKey ){

}

function addToRegistery (){

}

function eventCredentialEmit () {

}
