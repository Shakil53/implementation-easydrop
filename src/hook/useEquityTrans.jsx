import { useEffect, useState } from 'react';
import { equityTranstion } from "@/api/equityTranstion";




const useEquityTrans = () => {

  const [transations, setTransations] = useState(equityTranstion);


  useEffect(() => {
    
    fetch("../api/equityTranstion.js")
      .then(res => res.json())
      .then(data => setTransations(data))


  }, [])

  return [transations]

};

export default useEquityTrans;