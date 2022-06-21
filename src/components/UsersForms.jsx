import React from 'react'

const UsersForms = ({ CreateNewPeople, UpdatePeopleById, update, reset, register, handleSubmit, isBoolean, setIsBoolean }) => {



    const ValorDefault = {
        birthday: "",
        email: "",
        first_name: "",
        id: '',
        last_name: "",
        password: "",
    }

    const submit = data => {
        if (update !== undefined) {
            UpdatePeopleById(update.id, data)
        } else {
            CreateNewPeople(data)
        }
        reset(ValorDefault)
    }

    return (
        <>
            {isBoolean &&
                <div className='form-container-box'>
                    <div className='form-box'>
                        <button onClick={() => setIsBoolean(false)} className='close-button'><i className="fa-solid fa-xmark fa-4x"></i></button>
                        <form className='forms-container' onSubmit={handleSubmit(submit)}>
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" id='name' placeholder='Tu nombre' {...register('first_name')} />
                            <label htmlFor="apellido">Apellido:</label>
                            <input type="text" id='apellido' placeholder='Tus apellidos' {...register('last_name')} />
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id='email' placeholder='Escribe tu E-mail' {...register('email')} />
                            <label htmlFor="contraseña">Password:</label>
                            <input type="password" id='contraseña' placeholder='Escribe tu password' {...register('password')} />
                            <label htmlFor="nacimiento">Fecha de nacimiento:</label>
                            <input type="date" id='nacimiento' placeholder='Escribe tu fecha de nacimiento' {...register('birthday')} />
                            <button className='button-submit'>Submit</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default UsersForms