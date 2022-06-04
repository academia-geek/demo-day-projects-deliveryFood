import React from 'react'

export default function InputForm({name, label, type, state, setState, expresion, error}) {

  const handleChange = (e) => {
    setState({...state, campo: e.target.value})
  }

  const validation = () => {
    if(expresion) {
      if(!(expresion.test(state.campo))) {
        setState({...state, error: true})
      } else {
        setState({...state, error: false})
      }
    }
  }
  return (
    <div className=" flex flex-col relative">
      <label htmlFor={ name } className={`text-black-400 ${state.error && 'text-red-600'}`}>{ label }</label>
      <input
        id={ name }
        type={ type }
        name={ name }
        value={ state.campo }
        className={`p-3 rounded border-2 ${state.error && 'border-red-600'}`}
        onChange={ (e)=>handleChange(e) }
        onBlur={()=>validation()}
      />

          <span className={`${state.error ? 'opacity-100' : 'opacity-0'} duration-1000 absolute -top-10 left-full bg-red-600 p-2 rounded-3xl rounded-bl-none w-60`}>
            {error}
          </span>

    </div>
  )
}
