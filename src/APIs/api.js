import "core-js/stable";
import "regenerator-runtime/runtime";

const APIHandler = (() => {
  const postData = async (url, dataObj) => {
    try {
      const response = await fetch(url, {
        mode: 'cors',
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',  
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',  
        body: JSON.stringify(dataObj),
      });
      return response.json();
    } catch (err) {
      return err;
    }
  };

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (err) {
      return err;
    }
  };

  return { postData, getData };
})();

export default APIHandler;