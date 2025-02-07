'use client'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Image from 'next/image'

export default function Modal({ open, setOpen, film }) {


  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[#000000b3] transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-2xl data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className='bg-[#161616] w-[100%] h-auto' >
              <div>
                {film && film.url1 && (
                  <div>
                    <div >
                      <Image src={film.url2} alt={film.description || "Image"} width={667} height={365} className='relative bg-cover bg-center w-full' />
                      <Image src={film.url3} alt={film.description || "title"} width={350} height={66} className='absolute top-[271px] p-10 z-10 w-[60%] h-auto' />
                      <div className='absolute top-0 left-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent w-full h-[365px]'></div>
                      <div className='absolute top-0 left-0 bg-gradient-to-tr from-[#161616] from-30% via-[#161616] via-20% to-transparent to-60%   w-full h-[365px]'></div>
                      <div className='absolute top-5 right-5 cursor-pointer hover:bg-slate-500 p-1 rounded-full' onClick={()=>setOpen(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="XStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div className='px-10 pb-10 pt-4 '>
                      <div className='flex'>
                        {film.category.map((cat) => {
                          return (
                            <div className='bg-[#414141] mb-2 py-[3px] px-[4px] mr-[0.5em] rounded' key={film.id}>
                              {cat}
                            </div>
                          )
                        })}
                      </div>
                      <h1 className='pt-4'>{film.description}</h1>
                      <button className='flex bg-[#e50914] text-[1.5rem] font-medium p-2 rounded ml-1 justify-center items-center w-40 mt-10'>
                        <span>Get Started</span>
                        <svg className='w-5 h-5 text-white fill-current' role="img" viewBox="0 0 24 24" data-icon="ChevronRightStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" ></path></svg>
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
