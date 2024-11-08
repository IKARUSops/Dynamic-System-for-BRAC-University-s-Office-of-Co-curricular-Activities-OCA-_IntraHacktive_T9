import React, { useEffect, useState } from 'react';


function OCADashboard() {
    return (
        <div className='h-screen w-full flex items-center justify-center bg-slate-900'>
            <div className="grid h-full w-full grid-cols-4 grid-rows-3 gap-3 p-20 xl:m-64 lg:m-32 md:m-16">
                <div className="col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-green-500 to-green-700"></div>
                <div className='col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-600'></div>
                <div className='col-span-2 row-span-1 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'></div>
                
                <div className='col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-blue-400 to-emerald-400'></div> 
                <div className='col-span-2 row-span-1 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'></div>           
                <div className='col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-rose-300 to-rose-500'></div> 

                <div className='col-span-2 row-span-1 rounded-xl bg-gradient-to-r from-fuchsia-600 to-pink-600'></div>
                <div className='col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500'></div> 
                <div className='col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-fuchsia-600 to-pink-600'></div> 
            </div>

        </div>
    );
}

export default OCADashboard;

<OCADashboard />