const handleClearBtn = (setLists) => {
  localStorage.clear();
  setLists([]);
};


const handleSubmit = (e, lists, setLists, inputVal, uid, setUid) => {
  e.preventDefault();
  //Saving data in Local Storage
  const temp = { content: inputVal.current.value, complete: false, id:uid };
  const newList = [...lists, temp];
  //saving the new data in the localStorage
  localStorage.setItem('data', JSON.stringify(newList));
  setLists(newList);
  setUid(uid+1);
  inputVal.current.value = '';
};


const handleCloseBtn = (e, lists, setLists) => {
  e.stopPropagation();
  const Id = Number(e.target.id);
  const newList = lists.filter((item) => item.id !== Id);
  localStorage.setItem('data', JSON.stringify(newList));
  setLists(newList);
};


const toggleComplete = (e, lists, setLists) => {
  e.stopPropagation();
  const Id = Number(e.target.id);
  console.log(typeof(Id), Id);
  const newList = lists.map((item) =>
    item.id === Id ? { ...item, complete: !item.complete } : item
  );
  setLists(newList);
};


export {
  handleClearBtn,
  handleCloseBtn,
  handleSubmit,
  toggleComplete
}