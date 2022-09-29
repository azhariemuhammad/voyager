import React from 'react';
import dayjs from 'dayjs';
import useGetMediumRSS from '../hooks/useGetMediumRSS';
import LoaderStory from '../components/LoaderStory';

const Blog = () => {
	const { data, error } = useGetMediumRSS();

	console.log({ data, error });
	const feedItems = data?.items || [];

	return (
		<div className="max-w-full lg:w-[512px] mt-8">
			{feedItems.length <= 0 ? (
				<>
					{[...Array(3).keys()].map((x) => (
						<LoaderStory key={x} />
					))}
				</>
			) : (
				<>
					{feedItems.map((item, idx) => {
						const index = idx + 1;
						return (
							<a
								className="flex group"
								href={item.link}
								target="_blank"
								key={item.guid} rel="noreferrer"
							>
								<div className="mr-5 lg:mr-6 text-xl  text-amber-500">
									{index}
								</div>
								<div className="w-full">
									<h2 className="title group-hover:text-amber-500 text-gray-800 font-semibold">
										{item.title}
									</h2>
									<div>
										<p className="mt-2 text-xs text-gray-600">
											{dayjs(item.pubDate).format('MMMM DD, YYYY')}
										</p>
									</div>

									<div className="w-full relative flex py-5 items-center mt-5">
										<div className="flex-grow border-t border-gray-300"></div>
										<div className="flex-grow border-t border-gray-300"></div>
									</div>
								</div>
							</a>
						);
					})}
				</>
			)}
		</div>
	);
};

export default Blog;
