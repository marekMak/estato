import React from 'react'

type Props = {
    mainHeader:string,
    subHeader:string,
    secondHeader:string
    lastHeader:string
}

const Title = (props: Props) => {
  return (
    <div className='flex flex-col justify-center py-10 mt-10 items-center'>
        <div className='flex justify-center'>
            <h1 className='font-host text-3xl font-extrabold'>{props.mainHeader}</h1>
            <h5 className='font-host text-3xl ml-2 font-light underline underline-offset-4 decoration-1'>{props.subHeader}</h5>
        </div>
        <div className='font-host text-slate-700 text-center'>
            <p>{props.secondHeader}</p>
            <p>{props.lastHeader}</p>
        </div>
    </div>
  )
}

export default Title