import React from 'react'

export default function Joke({joke, getPunchline}) {

    return (
        <div className='w-52 h-40 bg-slate-200 rounded-md border m-3 p-2'>
            <h2>{joke.setup}</h2>
            <button onClick={()=>getPunchline(joke.id)} className='rounded-md bg-rose-600 text-white border-rose-600 border  hover:text-rose-600 hover:bg-white w-2/5 py-1 my-2'>Punchline</button>
        </div>
    )
}
