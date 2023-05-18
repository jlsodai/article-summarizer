/* eslint-disable @next/next/no-img-element */
import React from "react";

import { RxChevronRight, RxGithubLogo } from "react-icons/rx";
import { IoLinkOutline, IoReturnDownBackSharp } from "react-icons/io5";

const page = () => {
	const summary = [...Array(4)];

	return (
		<section className="bg-slate-900">
			<div className="bg-gradient-to-b from-violet-600/[.15] via-transparent min-h-screen flex items-center">
				<div className="container lg:grid grid-cols-2 text-white gap-x-16 items-center my-16">
					<div className="flex lg:block flex-col items-center my-8">
						<div className="flex justify-start">
							<a
								className="group bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md flex gap-2 items-center"
								href="#!"
							>
								<RxGithubLogo className="text-white" />
								<p className="mr-2 inline-block text-white text-sm">
									Github
								</p>
								<span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
									<RxChevronRight />
								</span>
							</a>
						</div>
						<h1 className="font-medium bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl mt-8 break-all">
							Summarizer
						</h1>
						<h3 className="text-gray-200 text-lg font-extrabold mt-4">
							Open AI GPT-4 powered
						</h3>

						<div className="max-w-[400px] w-full">
							<div className="flex mt-8  border rounded bg-gray-700 border-gray-600">
								<div className="inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-600">
									<IoLinkOutline className="text-gray-200 text-2xl" />
								</div>
								<input
									type="url"
									className="block w-full p-4 text-sm text-gray-200 placeholder-gray-400 flex-grow bg-transparent focus:outline-0"
									placeholder="URL goes here"
								/>
								<button
									type="submit"
									className="text-white px-4"
								>
									<IoReturnDownBackSharp className="text-gray-200 text-2xl" />
								</button>
							</div>
						</div>
					</div>

					<div className="h-[400px] flex flex-col w-full flex-grow p-6 relative  bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] rounded text-gray-400">
						<div className="overflow-y-auto">
							{summary.length ? (
								summary.map((p, i) => (
									<p className={`${i > 0 && "mt-3"}`} key={i}>
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit. Asperiores pariatur,
										repudiandae vitae, ipsum saepe dolor
										voluptates, aperiam amet libero
										perspiciatis officia labore dolorum
										ullam magni possimus! Maiores
										repellendus sequi quo.
									</p>
								))
							) : (
								<p className="mb-3">
									Enter your url to begin...
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;
