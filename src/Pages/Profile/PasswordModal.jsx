import React from 'react'

function PasswordModal({ showPassModal, setShowPassModal }) {


    return (
        <>
            {showPassModal &&
                <div className='' >
                    <div className='bg-[#00000065] h-full w-full left-0 fixed top-0 z-10 ' onClick={() => {
                        setShowPassModal(false);
                    }}>


                    </div>

                    <div className='absolute bg-white w-11/12 md:w-8/12 h-5/6 z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3 md:p-6 rounded-3xl'>
                        <div className='w-11/12 mx-auto overflow-hidden'>
                            {/* Close Button */}
                            <p className='inline rounded-full py-2 px-4  absolute top-[-2%] right-[-1%] z-40 font-bold text-xl bg-primaryMain text-white cursor-pointer border-4 border-white'
                                onClick={() => {
                                    setShowPassModal(false)
                                }}>X</p>

                            <div>



                            </div>

                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default PasswordModal