import React, { useState } from 'react'
import { SectionWrapper } from '../Components/SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/Plans'
import { Button } from '../Components/Button'

export const Generator = (props) => {
    const { muscle, setMuscle, poison, setPoison, goal, setGoal, updateWorkout } = props
    const [showModel, setShowModel] = useState(false)

   // let showModel = false;



   function toggleModel() {
    setShowModel(!showModel)
   }

   function updateMuscles(muscleGroup) {
    if (muscle.includes(muscleGroup)) {
        //if already selcted de-select it
        setMuscle(muscle.filter(val => val !== muscleGroup))
        return
    }

    //if not individual only one muscle is allowed
    if (poison !== 'individual') {
        setMuscle([muscleGroup])
        setShowModel(false)
        return
    }

    if (muscle.length > 2) {
        return
    }

    //appending muscle with new musicle grouo selected
    setMuscle([...muscle, muscleGroup])

    //once 3 muscles are selected close the model
    if (muscle.length === 2) {
        setShowModel(false)
    }

}
   

    function Header(props) {
        const { index, title, description } = props
        return (
            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-center gap-2'>
                    <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                    <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
                </div>
                <p className='text-sm sm:text-base mx-auto'>{description}</p>
            </div>
        )
    }

  return (
    <SectionWrapper id={'generate'} header={"Generate Your Workout"} title={['It\'s' , 'Huge' , 'O\' Clock']}>
        <Header index={'01'} title={'Pick your Poison'} description={"Select the workout you wish to endure."} />
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={()=> 
                            { setMuscle([]) 
                            setPoison(type) }} 
                            className={'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg' 
                        +  (type === poison ? ' border-blue-600' : ' border-blue-400') } key={typeIndex}>
                             <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                            </button>

                    )
                })
            }
        </div>

        <Header index={'02'} title={'Lock your Targets'} description={"Select the muscles judged for annihilation"} />
        
        <div className='bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col'>
                <button onClick={toggleModel} className='relative p-3 flex items-center justify-center'>
                <p className='capitalize'>{muscle.length == 0 ? 'Select muscle groups' : muscle.join(' ')}</p>
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                </button>
            
            { showModel && (
                //if individual is selected return it simply as it is an array othewise return keys of the other poison which are nested arrays
                <div className='flex flex-col px-3 pb-3'>
                    {(poison==='individual'? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex)=>{
                        return(<button onClick={() => 
                        {updateMuscles(muscleGroup)}} className={'hover:text-blue-400 duration-200 ' + (muscle.includes(muscleGroup) ? ' text-blue-400' : ' ')} key={muscleGroupIndex}>
                            <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p> 
                              </button>)
                    })}
                    </div>
            )}
        </div>



        <Header index={'03'} title={'Pick your Type'} description={"Select your ultimate objective."} />
        <div className='grid grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme, schemIndex) => {
                    return (
                        <button onClick={() => {setGoal(scheme)}} className={'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg' 
                            +  (scheme === goal ? ' border-blue-600' : ' border-blue-400') } key={schemIndex}>
                             <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                            </button>

                    )
                })
            }
        </div>
        <Button func={updateWorkout} text={"Formulate"}></Button>
    </SectionWrapper>
  )
}
