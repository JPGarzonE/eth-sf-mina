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
    Group,
    Scalar,
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
    @state(Field) PublicKeyX = State<Field>();
    @state(Field) PublicKeyY = State<Field>();
  
    @state(Field) merkleTreeRoot = State<Field>();
    @method update(y: Field) {
        console.log('Just for compiling');
      }
      @method generateStealthAddress(secret: Field, publicKey:PublicKey) {
        console.log(secret);
    
        //  s*G = S
        const ellipticCurveStartingPoint = new Group({
          x: this.GX.get(),
          y: this.GY.get(),
        });
        const oneTimePublicData = ellipticCurveStartingPoint.scale(
          Scalar.ofFields([secret])
        );
        
        //  s*P = q
        const recipientPublicKey = new Group({
          x: this.PublicKeyX.get(),
          y: this.PublicKeyY.get(),
        });
        const sharedSecret = recipientPublicKey.scale(Scalar.ofFields([secret]));
        console.log('Shared secret: ', sharedSecret);
        let concatSharedSecred= sharedSecret.x.toString().concat(sharedSecret.y.toString())
        let fieldSecret= new Field(concatSharedSecred)
        let fieldArray=[];
        fieldArray.push(fieldSecret)
        let SharedSecretHashed= Poseidon.hash(fieldArray)
        console.log(SharedSecretHashed) 
        let publickKey= SharedSecretHashed.toString().slice(-20).padStart(42,'0x')
        console.log('Keccak: ', keccak);
        console.log('keccak 2: ', keccak.toString());
    
        // hash(sharedSecret)
    
        // hash value to public key
    
        // derive new public key
        // EllipticCurve.ecAdd(PublicKeyX, PublicKeyY, Qx, Qy, AA, PP);
        // generate stealth address
    
        return oneTimePublicData;
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
    this.PublicKeyX.set(
        Field(
          '89565891926547004231252920425935692360644145829622209833684329913297188986597'
        )
      );
      this.PublicKeyY.set(
        Field(
          '12158399299693830322967808612713398636155367887041628176798871954788371653930'
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
//TODO ADD INTEGRATION WITH ARURO WALLET

// Creating a user account that wants to use Harpo
//TODO Replace with real address coming from AurO;
let userAccountKey = PrivateKey.random();
let userAccountAddress = userAccountKey.toPublicKey();

function generateCredential (privateKey:PrivateKey, publicKey:PublicKey){

let stealthAddress = generateStealthAddress (privateKey,publicKey);

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
