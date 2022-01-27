function filterByYesterDay(arr) {
    const today = new Date()
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    let result = arr.filter( (obj) => {
      return obj.date === new Date(yesterday).toISOString().slice(0, 10) || obj.date === today.toISOString().slice(0, 10)
    });
    console.log(result);
    return result;
  }
  
  function filterByLastWeek(arr) {
    const today = new Date();
    const lowerLimit = new Date(today);
    lowerLimit.setDate(lowerLimit.getDate() - 6);
  
    const filterer = (obj) => {
      let currentDate = new Date(obj.date);
      return currentDate >= lowerLimit && currentDate <= today;
    };
    return arr.filter(filterer);
  }
  
  function filterByLastMonth(arr) {
    const today = new Date();
    const lastMonthDate = new Date(today);
    lastMonthDate.setDate(lastMonthDate.getDate() - 30);
    // console.log(obj);
    
    let filterer = arr.filter((obj) => {
        console.log(obj);
      let currentDate = new Date(obj.date);
      return currentDate >= lastMonthDate && currentDate <= today;
    });

    return filterer
  }
  
  function filterByRange(arr, ll, ul) {
    const lowerLimit = new Date(ll);
    const upperLimit = new Date(ul);
  
    const filterer = arr.filter((obj) => {
        let currentDate = new Date(obj.date);
        return currentDate >= lowerLimit && currentDate <= upperLimit;
      });
    console.log(filterer);
   return filterer
  }
  
  const filterByDate = (list, option, ll, ul) => {
    switch (option) {
      case "yesterday":
        return filterByYesterDay(list);
      case "last-week":
        return filterByLastWeek(list);
      case "last-month":
        return filterByLastMonth(list);
      case "custom":
        return filterByRange(list, ll, ul);
      default:
        break;
    }
  };
  
  export default filterByDate;
  