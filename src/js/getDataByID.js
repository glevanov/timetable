export default (inputID, data) => {
  return data.filter(it => it.id === inputID);
};
