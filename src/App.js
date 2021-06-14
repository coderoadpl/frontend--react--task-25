/* eslint-disable react/prop-types */
import React from 'react'

export const TestProps = (props) => {
  const { reactComponent: ReactComponent } = props
  return (
    <div>
      <h1>
        TestProps
      </h1>
      <p>String: {props.string}</p>
      <p>Number: {props.number}</p>
      <p>Boolean: {props.boolean ? 'TRUE' : 'FALSE'}</p>
      <p>Null: {props.null === null ? 'NULL' : 'NOT NULL'}</p>
      <p>Undefined: {props.undefined === undefined ? 'UNDEFINED' : 'NOT UNDEFINED'}</p>

      <p>Object: {JSON.stringify(props.object)}</p>
      <p>Object property: {props.object.name}</p>
      <p>Array: {props.array}</p>
      <p>Function: <button onClick={props.function}>CLICK ME</button></p>

      <p>React element: {props.reactElement}</p>
      <p>React component: <ReactComponent name={'Marek'} /></p>
    </div>
  )
}

export const Greeter = (props) => {
  return (
    <h2>Hello {props.name}!</h2>
  )
}

export const App = () => {
  return (
    <div>
      <TestProps
        string={'Ala ma kota'}
        number={1223}
        boolean={true}
        null={null}
        undefined={undefined}

        object={{ name: 'Mateusz' }}
        array={['Ala', 'Ola', 'Ela']}
        function={() => console.log('I\'m form props!')}

        reactElement={<Greeter name={'Mateusz'} />}
        reactComponent={Greeter}
      />
    </div>
  )
}

export default App
