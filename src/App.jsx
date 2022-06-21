import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardsOfPeoples from './components/CardsOfPeoples'
import UsersForms from './components/UsersForms'
import { set, useForm } from 'react-hook-form'

function App() {

  const { reset, register, handleSubmit } = useForm()
  const [isBoolean, setIsBoolean] = useState(false)
  const [peoples, setPeoples] = useState()
  const [update, setUpdate] = useState()

  useEffect(() => {
    AllPeoples()
  }, [])

  const AllPeoples = () => {
    const URL = 'https://users-crud1.herokuapp.com/users/'
    axios.get(URL)
      .then(res => setPeoples(res.data))
      .catch(err => console.log(err))
  }

  const CreateNewPeople = NewData => {
    const URL = 'https://users-crud1.herokuapp.com/users/'
    axios.post(URL, NewData)
      .then(res => {
        console.log(res.data)
        AllPeoples()
      })
      .catch(err => console.log(err))
  }

  const UpdatePeopleById = (id, UpdatePeople) => {
    const URL = 'https://users-crud1.herokuapp.com/users/'
    axios.patch(`${URL}${id}/`, UpdatePeople)
      .then(res => {
        console.log(res.data);
        AllPeoples()
        setUpdate()
      })
      .catch(err => console.log(err))
  }






  console.log(peoples);
  return (
    <div className='big-container'>
      <UsersForms
        CreateNewPeople={CreateNewPeople}
        UpdatePeopleById={UpdatePeopleById}
        update={update}
        reset={reset}
        register={register}
        handleSubmit={handleSubmit}
        isBoolean={isBoolean}
        setIsBoolean={setIsBoolean}
      />
      <div>
        <h1 className='Titleofproject'>Control de personal - Twitter <i className="fa-brands fa-twitter"></i></h1>
        <div className='button-container'>
          <button onClick={() => setIsBoolean(!isBoolean)} className='button-newuser'>
            <i className="fa-solid fa-user-plus fa-2x"></i>
          </button>
        </div>
      </div>

      <div className="App">
        {
          peoples?.map(people => (
            <CardsOfPeoples
              key={people.id}
              people={people}
              URL={URL}
              AllPeoples={AllPeoples}
              setUpdate={setUpdate}
              reset={reset}
              isBoolean={isBoolean}
              setIsBoolean={setIsBoolean}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
