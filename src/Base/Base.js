import React from 'react'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { UilSignout } from '@iconscout/react-unicons'
import { UilHipchat } from '@iconscout/react-unicons'

//nav buttons
const navigation = [
    { name: 'Memmories', href: '/posts', current: true }
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
function Base({title,description,children}) {

  return (
   <div>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                 <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                 <Link to={'/posts'}><UilHipchat className="mr-1 h-10 w-10 text-indigo-600" /></Link> 
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* right buttons */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div>
                <div className="flex space-x-4 mr-2">
                      <Link
                      to={'/newpost'}
                        className='rounded-md bg-indigo-600 px-2 py-1 font-semibold text-white shadow-sm hover:bg-indigo-500 hover:text-white'
                      >
                       +New Post
                      </Link>
                  </div>

                </div>
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">Log out</span>
                  <Link to={'/'}><UilSignout className="h-6 w-6" aria-hidden="true" /></Link>
                </button>
                </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
    <div>
      {children}
    </div>
    <df-messenger
        intent="WELCOME"
        chat-title="Bot"
        agent-id="36700b47-db8c-4b6b-902f-73ff4143fbfc"
        language-code="en"
></df-messenger>
    </div>
  )
}
export default Base;