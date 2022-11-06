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
    Circuit
  } from 'snarkyjs';


class CredentialSmartContract extends SmartContract {
    @state(Field) merkleTreeRoot = State<Field>();
    @method update(y: Field) {
        console.log('Just for compiling');
      }
      /**
   * Verification Method for Merkle Tree
   */
   @method verifyProof(commitment: Field, merkleProof: MerkleWitness) {
    let witnessMerkleRoot = merkleProof.calculateRoot(commitment);

    let merkleTreeRoot = merkleTree.getRoot();
    // this.merkleTreeRoot.assertEquals(merkleTreeRoot);

    witnessMerkleRoot.assertEquals(merkleTreeRoot);
  }
}
function verifyMerkeTree (publicAddress){

}

function generateCredential (privateKey, publicKey){

let stealthAddress = generateStealthAddress ();

let registryAddition = addToRegistery ();

function pullFromRegistery ();

}

function verifyCredential ( publicKey){

}

function generateStealthAdress ( privateKey, publicKey ){

}

function addToRegistery (){

}

function eventCredentialEmit () {

}
