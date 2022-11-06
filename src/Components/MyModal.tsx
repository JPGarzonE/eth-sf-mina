import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { StyleInput } from './TransactionCard/styles';

// export default function MyModal({ isOpen, setIsOpen, noteValue }: { isOpen: any; setIsOpen: any; noteValue: string }) {
//   function closeModal() {
//     setIsOpen(false);
//   }

//   function copyToClipBoard() {
//     navigator.clipboard.writeText(noteValue);
//     closeModal();
//   }

//   useEffect(() => {
//     copyToClipBoard();
//   }, []);
export default function MyModal (
){

    return (
      <h1>Hola</h1>)
}
    // <>
    //   <Transition appear show={isOpen} as={Fragment}>
    //     <Dialog as="div" className="relative z-10" onClose={closeModal}>
    //       <Transition.Child
    //         as={Fragment}
    //         enter="ease-out duration-300"
    //         enterFrom="opacity-0"
    //         enterTo="opacity-100"
    //         leave="ease-in duration-200"
    //         leaveFrom="opacity-100"
    //         leaveTo="opacity-0"
    //       >
    //         <div className="fixed inset-0 bg-black bg-opacity-25" />
    //       </Transition.Child>

    //       <div className="fixed inset-0 overflow-y-auto">
    //         <div className="flex items-center justify-center min-h-full p-4 text-center">
    //           <Transition.Child
    //             as={Fragment}
    //             enter="ease-out duration-300"
    //             enterFrom="opacity-0 scale-95"
    //             enterTo="opacity-100 scale-100"
    //             leave="ease-in duration-200"
    //             leaveFrom="opacity-100 scale-100"
    //             leaveTo="opacity-0 scale-95"
    //           >
    //             <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
    //               <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-[#484848]">
    //                 This is your transaction note:
    //               </Dialog.Title>
    //               <div className="mt-2">
    //                 <p className="text-sm text-[#484848]">You can copy this note to share or withdraw your funds from the mixer:</p>
    //               </div>
    //               <div className="w-full p-3 mt-3 text-white bg-[#3a3a42] rounded-md">{noteValue}</div>

    //               <div className="mt-4">
    //                 <button
    //                   type="button"
    //                   className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#A678D4] border border-transparent rounded-md focus:outline-none"
    //                   onClick={copyToClipBoard}
    //                 >
    //                   Copy and Close
    //                 </button>
    //               </div>
    //             </Dialog.Panel>
    //           </Transition.Child>
    //         </div>
    //       </div>
    //     </Dialog>
    //   </Transition>
    // </>
//   );
// }
