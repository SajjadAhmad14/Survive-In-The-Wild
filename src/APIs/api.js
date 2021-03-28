const DataRequester = (() => {
  const requestData = async (link, obj) => {
    try {
      const response = await fetch(url, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });
      return response.json();
    } catch (err) {
      return err;
    }
  };

  const receiveData = async (link) => {
    try {
      const response = await fetch(link);
      return response.json();
    } catch (err) {
      return err;
    }
  };

  return { requestData, receiveData };
})();

export default DataRequester;