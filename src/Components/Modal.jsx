import React from 'react'
import { useAuth } from '../Context'
import { ChevronRight, XMark } from '../Icons'
import Meta from '../Asset/meta.png'
import WalletConnect from '../Asset/walletConnect.png'

function Modal() {
    const { showWallet, setShowWallet } = useAuth();

    return (
        <div>
            {showWallet &&

                <div className=''>
                    <div className='fixed top-0  bg-[#00000094] w-screen h-screen' onClick={() => {
                        setShowWallet(false)
                    }}>
                    </div>


                    <div className='absolute bg-white w-11/12 md:w-2/5 h-3/7 z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3 md:p-6 rounded-3xl'>
                        <div className='flex justify-between'>
                            <h2 className='font-bold text-[1.4em] mb-12'>Connect Wallet</h2>
                            <XMark />
                        </div>

                        <div>
                            <p>Choose your Preferred Wallet: </p>
                        </div>

                        <div className='flex justify-between my-4 items-center bg-[#F8F9FA] px-4 py-2 rounded-lg border border-[#CFD8DC]'>
                            <div className='flex items-center gap-8'>
                                <div><img src={Meta}></img></div>
                                <h2 className='font-bold'>MetaMask</h2>
                            </div>

                            <div>
                                <ChevronRight />
                            </div>
                        </div>

                        <div className='flex justify-between my-4 items-center bg-[#F8F9FA] px-4 py-2 rounded-lg border border-[#CFD8DC]'>
                            <div className='flex items-center gap-8'>
                                <div><img src={ WalletConnect }></img></div>
                                <h2 className='font-bold'>WalletConnect</h2>
                            </div>

                            <div>
                                <ChevronRight />
                            </div>
                        </div>

                    </div>


                </div>
            }
        </div>
    )
}

export default Modal