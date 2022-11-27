import {useState} from 'react'
import {MdNotes, MdEdit, MdLabel} from 'react-icons/md'

export const CreateDisplayMemory = () => {
    const memories = [
        {id: '1',memory: 'Tomorrow  jogging'},
    ]
    const [inputedMemory, setInputedMemory] = useState({
        id:"",
        title: "",
        memory: ""
      });

      const [editMemoryPopUp, setEditMemoryPopUp]=useState(false);
      const [isEmptyEditedMemory, setIsEmptyEditedMemory] = useState(false)

    return (
        <main className="w-full h-auto flex flex-col lg:flex-row gap-8 text-center p-4">
            <section className="max-w-screen-sm mx-auto lg:max-w-xxl rounded-lg p-2 bg-[#ce93d8]">
                <h1 className="text-2xl font-bold uppercase pt-4 tracking-wide">
                    World of the day
                </h1>
                <p className="text-xl font-bold">
                    Today will be better than yesterday
                </p>
                <p className="text-xl font-medium mt-6">
                    Anytime something positive happens, make a note of it and come back to it later
                </p>
                <form  className="p-2 mt-6">
                    <label htmlFor="message" className="block mb-2 text-md font-medium text-gray-900">
                        Write new memory below
                    </label>
                    <textarea rows={4}  className="block w-full text-base p-2 text-gray-900 bg-[#ce93d8] rounded-lg border-4 border-[#ac5eb9dc] focus:outline-none" placeholder='Write new memory here ...'>
                    </textarea>
                    <button className="text-white text-2xl font-medium bg-[#ac5eb9dc] mt-6 px-3 py-2 rounded-lg hover:bg-[#800080]">
                        Save
                    </button>
                    <label  className="block text-xl text-center font-medium mt-4">
                        Remember the good times
                    </label>
                </form>
            </section>
            <section className="max-w-screen-md lg:w-full mx-auto rounded-lg p-2">
                <h1 className="text-2xl font-bold text-start">
                    Highlights
                </h1>

                {
                    memories.map(({memory, id}) =>(
                        <div key={id} className="w-full bg-white flex justify-between space-x-4 text-black rounded-md p-2 m-2 cursor-pointer" onClick={() => {
                            setEditMemoryPopUp(true)
                            setInputedMemory({id:id, memory: memory,title:''})
                        }}>
                            <MdNotes size={25}/>
                            <p>{memory}</p>
                            <MdEdit size={25} className='cursor-pointer' onClick={() => setEditMemoryPopUp(true)}/>
                        </div>
                    ))
                }


            {/* Edit Popup */}
            {
            editMemoryPopUp ? <div className="absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#E1BEE7] w-[90%] md:w-[45%] flex justify-center items-center flex-col rounded-lg shadow-xl h-auto p-2 mx-auto">
                <textarea rows={4} value={inputedMemory.memory || ""} placeholder='Write new memory here ...' className='block p-2 w-full text-base text-gray-900 bg-[#ce93d8] '>

                </textarea>
            </div> : null
            }
            </section>

        </main>
    )
}