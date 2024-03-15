import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';

import { useData } from '../context/DataContext';

const Graph = () => {
    const { getData, Hotels,Desks} = useData();

    useEffect(()=>{
        getData();
    },[])


return (
    <>
    <Chart
    options={Hotels}
    series={Desks}
    width={500}
    type='line'
    >

    </Chart>
    </>
)
}

export default Graph
