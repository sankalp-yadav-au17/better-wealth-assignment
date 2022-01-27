import React,{useState, useEffect} from 'react';
import Lists from "./Lists"
import filterByDate from "./Filter"


function Form({data}) {
    
    const [display, setdisplay] = useState(false);
    const [options, setoptions] = useState({
        country:"england-and-wales",
        time: "last-month",
        From:"2021-01-01",
        To: new Date().toISOString().slice(0, 10)
    });
    const [countryfiltereddata, setcountryfiltereddata] = useState(data[options.country].events);

    useEffect(() => {
      if (options.time === "custom"){
        setdisplay(true)    
      }
      else{
        setdisplay(false)      
      }
     
        const getfilterdata = filterByDate(data[options.country].events, options.time, options.From, options.To) 
        setcountryfiltereddata(getfilterdata)

    
}, [options]);

// console.log(countryfiltereddata);


    const handleInput = (e) => {
        const key = e.target.name
        const value = e.target.value
        setoptions({...options,[key]:value})
    }
    
    const datacomponent = countryfiltereddata.map((item) =>{
        return <Lists date={item.date} title={item.title} notes={item.notes} bunting={item.bunting} />
    })    
    
  return( 
  <>
    <div className="text-center mt-5">
        <label htmlFor="country">Select Country: </label>
        <select value={options.country} onChange={handleInput} name="country" id="country">
          <option value="northern-ireland">Northern-Ireland</option>
          <option value="scotland">Scotland</option>
          <option value="england-and-wales">England-And-Wales</option>
        </select>
      </div>
      
      <div className="text-center mt-2">
        <label htmlFor="">Time: </label>
        <select value={options.time} onChange={handleInput} name="time" id="time">
          <option value="yesterday">Yesterday</option>
          <option value="last-week">Last-week</option>
          <option value="last-month">Last-month</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      

      <div className="text-center mt-2" style={{display: !display ? 'none' : 'block'}}>
        <label htmlFor="from">From: </label>
        <input value={options.From} onChange={handleInput} name="from" type="date" className=" me-2" />

        <label htmlFor="to ">To: </label>
        <input value={options.To} onChange={handleInput} name="to" type="date" />
      </div>
      
      <div>
        {datacomponent}
      </div>
  </>
  )
}

export default Form;
