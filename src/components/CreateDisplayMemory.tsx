import {useState,FormEventHandler, useEffect} from 'react'
import {MdNotes, MdEdit, MdLabel} from 'react-icons/md'

export const CreateDisplayMemory = () => {
 
    const [memories, setMemories] = useState([])
    const [inputedMemory, setInputedMemory] = useState({
        id:"",
        title: "",
        content: ""
      });

      const [editMemoryPopUp, setEditMemoryPopUp]=useState(false);
      const [isEmptyEditedMemory, setIsEmptyEditedMemory] = useState(false)

    // method to handle on adding new memory
    const onSubmitMemory:FormEventHandler<HTMLFormElement> = async (e) =>{  
        e.preventDefault()
        if (inputedMemory.content !== ""){
            await fetch('/api/create', {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                  }, 
                  body: JSON.stringify({
                    content: inputedMemory.content,
                    title: inputedMemory.content.slice(0, inputedMemory.content.length)
                    
                  })
            })
            setInputedMemory({id:'',content: '', title:''});
            window.location.reload();
        }
    }


    // method to handle on update existing memory
    const onUpdateMemory= async() =>{ 
        if (inputedMemory.content !== ""){
            await fetch('/api/update', {
                method: "PUT", 
                headers: {
                    "Content-Type": "application/json",
                }, 
                body: JSON.stringify({
                    id: inputedMemory.id,
                    content: inputedMemory.content,
                })
            })
            setInputedMemory({id:'',content: '', title:''});
            window.location.reload();
        }
     }



    // method that fetch all memories from Backend
    const fetchMemories = async () => {
        await fetch('/api/read')
        .then(res => res.json())
        .then(data =>{
            setMemories(data)
        })
    }

    useEffect(() =>{
        fetchMemories()
    },[])

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
                <form  className="p-2 mt-6"  onSubmit={onSubmitMemory}>
                    <label htmlFor="message" className="block mb-2 text-md font-medium text-gray-900">
                        Write new memory below
                    </label>
                    <textarea rows={4}  value={inputedMemory.content || ""}
  className="block w-full text-base p-2 text-gray-900 bg-[#ce93d8] rounded-lg border-4 border-[#ac5eb9dc] focus:outline-none" placeholder='Write new memory here ...' disabled={editMemoryPopUp ? true:false}  onChange={({target})=> setInputedMemory({...inputedMemory, content: target.value})}>
                    </textarea>
                    <button type='submit' className="text-white text-2xl font-medium bg-[#ac5eb9dc] mt-6 px-3 py-2 rounded-lg hover:bg-[#800080]">
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
                    memories.map(({content, id}) =>(
                        <div key={id} className="w-full bg-white flex justify-between space-x-4 text-black rounded-md p-2 m-2 cursor-pointer" onClick={() => {
                            setEditMemoryPopUp(true)
                            setInputedMemory({id:id, content: content,title:''})
                        }}>
                            <MdNotes size={25}/>
                            <p>{content}</p>
                            <MdEdit size={25} className='cursor-pointer' onClick={() => setEditMemoryPopUp(true)}/>
                        </div>
                    ))
                }


            {/* Edit Popup */}
            {
            editMemoryPopUp ? <div className="absolute top-[55%] md:top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#E1BEE7] w-[90%] md:w-[45%] flex justify-center items-center flex-col rounded-lg shadow-xl h-auto p-2 mx-auto">
                <textarea rows={4} value={inputedMemory.content || ""} placeholder='Write new memory here ...' className='block p-2 w-full text-base text-gray-900 bg-[#ce93d8] rounded-lg border-4 border-[#ac5eb9dc] focus:outline-none' onChange={({target})=> setInputedMemory({...inputedMemory, content: target.value})}>
                </textarea>
                <div className="w-full flex justify-around">
                    <button className="my-5 w-auto px-8 h-10 bg-red-600 font-semibold text-white rounded-md shadow-md hover:shadow-lg" onClick={()=>{
                    }}>
                        Delete
                    </button>
                    <button className="my-5 w-auto px-8 h-10 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg" onClick={()=>{
                    }}>Save
                    </button>
                    <button className="bg-[#ac5eb9dc] my-5 h-10 px-8 font-semibold text-white shadow-md rounded-lg hover:bg-[#800080]" onClick={()=>{
                        setEditMemoryPopUp(false)
                        setInputedMemory({id:'', title:'', content:''})
                    }}>
                        Close
                    </button>
                </div>
            </div> : null
            }
            </section>

        </main>
    )
}