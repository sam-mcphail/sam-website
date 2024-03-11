// import React, { ChangeEvent, useState } from 'react'
// import { useQueryClient, useMutation } from '@tanstack/react-query'
// import { addPlayer } from '../../api/api'

// const initialForm = {
//   id: 0,
//   full_name: '',
//   display_name: '',
//   position: '',
//   country: '',
//   team: '',
//   value: 0,
//   att_rating: 0,
//   def_rating: 0,
//   image: '',
// }

// export default function AddPlayerForm() {
//   const [formVisibility, setFormVisibility] = useState(false)
//   const [form, setForm] = useState(initialForm)
//   const queryClient = useQueryClient()

//   const addPlayerMutation = useMutation({
//     mutationFn: async () => {
//       return await addPlayer(form)
//     },
//     onSuccess: async () => {
//       queryClient.invalidateQueries({ queryKey: ['players'] })
//     },
//   })

//   function handleFormVisibility() {
//     setFormVisibility(!formVisibility)
//   }

//   async function handleAddChange(e: ChangeEvent<HTMLFormElement>) {
//     e.preventDefault()
//     await addPlayerMutation.mutate()
//     setForm(initialForm)
//     setFormVisibility(!formVisibility)
//   }

//   function handleChange(
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) {
//     const { name, value } = e.target
//     const newForm = { ...form, [name]: value }
//     setForm(newForm)
//   }

//   return (
//     <div>
//       <button onClick={handleFormVisibility}>This will be the form...</button>
//       {formVisibility ? (
//         <div>
//           <p>Hello</p>
//           <form action="" onSubmit={handleAddChange}>
//             <label htmlFor="id">ID</label>
//             <input id="id" onChange={handleChange} value={form.id}></input>
//             <label htmlFor="full_name"> Full name</label>
//             <input
//               id="full_name"
//               onChange={handleChange}
//               value={form.full_name}
//             ></input>
//             <label htmlFor="display_name">Display name</label>
//             <input
//               id="display_name"
//               onChange={handleChange}
//               value={form.display_name}
//             ></input>
//             <label htmlFor="position">Position</label>
//             <input
//               id="position"
//               onChange={handleChange}
//               value={form.position}
//             ></input>
//             <label htmlFor="country">Country</label>
//             <input
//               id="country"
//               onChange={handleChange}
//               value={form.country}
//             ></input>
//             <label htmlFor="team">Team</label>
//             <input id="team" onChange={handleChange} value={form.team}></input>
//             <label htmlFor="value">Value</label>
//             <input
//               id="value"
//               onChange={handleChange}
//               value={form.value}
//             ></input>
//             <label htmlFor="att_rating">Attacking rating</label>
//             <input
//               id="att_rating"
//               onChange={handleChange}
//               value={form.att_rating}
//             ></input>
//             <label htmlFor="def_rating">Defensive rating</label>
//             <input
//               id="def_rating"
//               onChange={handleChange}
//               value={form.def_rating}
//             ></input>
//             <label htmlFor="image">Image</label>
//             <input
//               id="image"
//               onChange={handleChange}
//               value={form.image}
//             ></input>
//             <button>ADD</button>
//           </form>
//         </div>
//       ) : null}
//     </div>
//   )
// }
