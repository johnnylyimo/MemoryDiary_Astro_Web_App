
export const CreateDisplayMemory = () => {
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
                    <button className="text-white text-2xl font-medium bg-[#ac5eb9dc] mt-6 px-3 py-2 rounded-lg hover:bg-[#800080]">
                        Save
                    </button>
                    <label  className="block ">
                        Remember the good times
                    </label>
                    </textarea>
                </form>

            </section>

        </main>
    )
}