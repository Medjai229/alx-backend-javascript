export default function getFullResponseFromAPI(success) {
  return new Promise((reslove, reject) => {
    if (success) {
      reslove({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
