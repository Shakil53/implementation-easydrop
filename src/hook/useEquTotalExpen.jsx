import { useEffect, useState } from 'react';
import { equTotalExpenses } from "@/api/equTotalExpenses";




const useTotalExpense = () => {

  const [expenses, setEexpenses] = useState(equTotalExpenses);


  useEffect(() => {
    
    fetch("../api/equTotalExpenses.js")
      .then(res => res.json())
      .then(data => setEexpenses(data))


  }, [])

  return [expenses]

};

export default useTotalExpense;
