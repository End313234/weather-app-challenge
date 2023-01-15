import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FC, Fragment } from "react";

interface SearchModalProps {
	isOpen: boolean;
	toggle: VoidFunction;
}

export const SearchModal: FC<SearchModalProps> = ({ isOpen, toggle }) => {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={toggle}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="relative opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex items-start justify-start text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-in duration-200"
							enterFrom="relative right-[30rem]"
							enterTo="relative right-0"
							leave="ease-out duration-300"
							leaveFrom="relative right-0"
							leaveTo="relative right-[30rem]"
						>
							<Dialog.Panel className="transform overflow-hidden rounded-r-sm h-screen bg-bluepurple-500 py-6 px-8 text-left align-middle shadow-xl transition-all w-screen xl:w-1/3">
								<Dialog.Title
									as="h1"
									className="flex items-center justify-between"
								>
									Search tab
									<XMarkIcon className="w-6 h-6 text-zinc-200 !text-opacity-100" />
								</Dialog.Title>
								<div className="mt-6">
									<form className="flex flex-1 gap-2 w-full">
										<input
											type="text"
											placeholder="Search for places"
											className="w-full"
										/>
										<button
											type="submit"
											className="primary"
										>Search</button>
									</form>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}
