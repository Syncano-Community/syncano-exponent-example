import Syncano from 'syncano';

const connection = Syncano({ accountKey: 'YOUR_ACCOUNT_KEY'});

 const {Instance} = connection;

export function getInstanceList() {
  return Instance.please().list();
}

export function createInstance(name) {
  return Instance.please().create({name});
}

export function deleteInstance(name) {
  return Instance.please().delete({name});
}
