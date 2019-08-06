import React from 'react';

import './canasta.sass';

function CanastaView() {
  return (<div className={'bg-blue-100 h-full'}>
    <div className={'w-full mb-2 flex justify-center border-b-2'}>
      <h1 className={'text-2xl font-bold py-2'}>Canasta</h1>
    </div>
    <div className={'w-full mb-2 flex'}>
      <div className={'text-xl ml-2'}>Test 1</div>
      <div className={'flex-grow'}></div>
      <div className={'text-xl font-bold'}>0</div>
      <div className={'text-center text-xl mx-2'}>VS</div>
      <div className={'text-xl font-bold'}>0</div>
      <div className={'flex-grow'}></div>
      <div className={'text-xl mr-2'}>Test 2</div>
    </div>
    <div className={'w-full mb-2 flex'}>
      <div>
        <button
            className={'text-white bg-blue-500 py-2 px-4 rounded-r hover:bg-blue-100 hover:text-blue-500 border border-blue-500'}>Red
          Three
        </button>
      </div>
      <div className={'flex-grow'}></div>
      <div>0</div>
      <div className={'text-xl mx-4'}></div>
      <div>0</div>
      <div className={'flex-grow'}></div>
      <div>
        <button
            className={'text-white bg-blue-500 py-2 px-4 rounded-l hover:bg-blue-100 hover:text-blue-500 border border-blue-500'}>Red
          Three
        </button>
      </div>
    </div>
    <div>
      <div>
        <button>Fake Canasta</button>
      </div>
      <div>0</div>
      <div>0</div>
      <div>
        <button>Fake Canasta</button>
      </div>
    </div>
    <div>
      <div>
        <button>Real Canasta</button>
      </div>
      <div>0</div>
      <div>0</div>
      <div>
        <button>Real Canasta</button>
      </div>
    </div>
    <div>
      <div>
        <button>Out</button>
      </div>
      <div>
        <button>Out</button>
      </div>
    </div>
  </div>);
}

export default CanastaView;
