import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updatePerawi } from '../../features/Perawi/actions';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(result: any) {
  const [resData, setResData] = useState(result);

  const perawiSelected = useSelector((state:any) => state?.perawi);
  const dispatch = useDispatch();

  useEffect(()=>{
      const loadPerawi = async ()=>{
        try {
          const result = await axios.get(`https://api.hadith.gading.dev/books`);
          const initialPerawi = result.data;
          setResData(initialPerawi);
        } catch (error) {
          console.log(error);
        }
      }
      loadPerawi();
  },[])

  return (
    <Menu as="div" className="relative inline-block text-left" id="1">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"  id="1">
          -- Select Perawi Hadits --
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"  id="1">
          {
            resData?.data?.map((item: any) => {
              return (
                <div className="py-1" key={item?.id}>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                        onClick={() => dispatch(updatePerawi(item?.id))}
                      >
                        Perawi {item?.name}
                      </a>
                    )}
                  </Menu.Item>
                </div>
              )
            })
          }
        </Menu.Items>
      </Transition>
    </Menu>
  )
}