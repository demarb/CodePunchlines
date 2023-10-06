import React, { useState } from 'react'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query"
import { getJokes, getJoke } from '../api/jokes'
import Joke from '../components/Joke'


export default function Home() {

    const [jokeDelivery, setJokeDelivery] = useState({})

    const jokesQuery = useQuery({
        queryKey: ["jokes"],
        queryFn: getJokes,
        placeholderData: [{ id: 99999, setup: "No Jokes" }], 
        staleTime: 60000, //Jokes will be stale after one minute
    })

    async function getPunchline(id){
        const joke = await getJoke(id)
        setJokeDelivery(joke[0])
    }
    
    if (jokesQuery.status === "loading") return <div className='w-52 h-40 bg-slate-200 rounded-md border m-3 p-2'>...Loading</div>
    if (jokesQuery.status === "error") {
      return <div className='w-52 h-40 bg-slate-200 rounded-md border m-3 p-2'>{JSON.stringify(jokesQuery.error)}</div>
    }


  return (
    <>
      <Nav />

      <div className='lg:w-3/4 mx-auto m-3 p-2'>
            <h1 className='text-lg font-bold'>Setup: {jokeDelivery?.setup}</h1>
            <h1 className='text-lg font-bold'>Punchline: {jokeDelivery?.delivery}</h1>
            <h1 className='text-lg italic'>Refresh For More Jokes</h1>
        </div>
      
      <div className='flex flex-wrap lg:w-3/4 mx-auto'>
        {jokesQuery?.data?.jokes?.map((joke)=>{
            return (
                <Joke key={joke.id} joke={joke} getPunchline={getPunchline}/>
            )
        })}
      </div>

      <div className='lg:w-3/4 mx-auto m-3 p-2'>
            <h1 className='text-sm italic'>This Project is a demonstration of React + Axios + React-Query</h1>
            <h1 className='text-sm italic'>JokesQuery becomes stale after one minute. And Will update if page loses and regains focus.</h1>

        </div>
    </>
  )
}
