import firebase from 'firebase';

async function GetPileNumber(){
  var pileNum = null;

  await firebase.database().ref('posts/PILE').once('value').then(function(snapshot) {
    pileNum = snapshot.val()
  });

  return pileNum;
}

async function AddToPile(){
  var pileNum = null;

  await firebase.database().ref('posts/PILE').once('value').then(function(snapshot) {
    pileNum = snapshot.val()
  });

  pileNum = pileNum + 1;

  await firebase.database().ref('posts/PILE').set(pileNum);
}

async function RemoveFromPile(){

}

export {GetPileNumber, AddToPile, RemoveFromPile, }
