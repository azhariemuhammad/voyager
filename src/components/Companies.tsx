import React from 'react';

const Companies = () => {
	const brands = [
		{
			name: 'gramedia digital nusantara',
			image:
				'https://user-images.githubusercontent.com/19600009/192915114-36dd1864-431a-4d86-b276-231862031e2b.png',
			url: 'https://www.gramedia.com/',
		},
		{
			name: 'tokopedia',
			image:
				'https://user-images.githubusercontent.com/19600009/192915121-822aeafb-e727-42e8-b2e1-82ed76449e8c.png',
			url: 'https://tokopedia.com',
		},
		{
			name: 'markoding',
			url: 'https://markoding.org/',
			image:
				'https://user-images.githubusercontent.com/19600009/192915883-e6292f69-c6bc-4401-a69a-c3b7fc895ae9.png',
		},
	];
	return (
		<div className="mt-20">
			<h2 className="font-semibold text-gray-600 text-center text">
				I&apos;m privilage to work with these amazing Companies and
				Organizations
			</h2>

			<div className="flex justify-center items-center">
				{brands.map((brand) => (
					<a href={brand.url} key={brand.name} className="relative">
						<img className="w-full" src={brand.image} alt={brand.name}></img>
					</a>
				))}
			</div>
		</div>
	);
};

export default Companies;
