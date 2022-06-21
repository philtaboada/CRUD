import axios from 'axios'
import React from 'react'

const CardsOfPeoples = ({ people, AllPeoples, setUpdate, reset, isBoolean, setIsBoolean }) => {


    const deletePeople = () => {
        const URL = 'https://users-crud1.herokuapp.com/users/'
        axios.delete(`${URL}${people.id}/`)
            .then(res => {
                console.log(res.data)
                AllPeoples()
            })
            .catch(err => console.log(err))
    }

    const UpdatePeopleButton = () => {

        const obj = {
            birthday: people.birthday,
            email: people.email,
            first_name: people.first_name,
            last_name: people.last_name,
            password: people.password,
        }
        reset(obj)
        setUpdate(people)
    }

    const UpdateScreen = () => {
        UpdatePeopleButton()
        setIsBoolean(true)
    }

    return (
        <div className='card-container'>
            <h4>#{people.id}</h4>
            <div className='name-container'>
                <i class="fa-solid fa-clipboard-user fa-2x"></i>
                <p>Full Name:</p>
            </div>
            <h1>{people.first_name} {people.last_name}</h1>
            <div className='line'>.</div>
            <p><i className="fa-solid fa-at"></i> E-mail: </p>
            <h2>{people.email}</h2>
            <p><i className="fa-solid fa-key"></i> Password: </p>
            <h2>{people.password}</h2>
            <p><i className="fa-solid fa-cake-candles"></i> Date of Birthday: </p>
            <h2>  {people.birthday}</h2>
            <div className='button-container'>
                <button onClick={deletePeople} className='button-box'><i className="fa-solid fa-trash-can fa-xl"></i></button>
                <button onClick={UpdateScreen} className='button-box'><i className="fa-solid fa-pencil fa-xl"></i></button>
            </div>
        </div>
    )
}

export default CardsOfPeoples