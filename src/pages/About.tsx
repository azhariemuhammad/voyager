import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Companies from '../components/Companies';
import { SKILLS } from '../constants';

const BASE_SITE_URL = import.meta.env.BASE_SITE_URL || '';

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const About = () => {
	return (
		<>
			<Helmet>
				<title>👋 Azharie | About</title>
				<link rel="canonical" href={`${BASE_SITE_URL}`} />
			</Helmet>

			<div className="max-w-full my-3">
				<h6 className="text-md font-semibold text-gray-600 py-2">
					What I use to do
				</h6>
				<p className="sm:text-4xl lg:text-base">
					I spent 3 years working as medical technologist, analyzing clinical
					samples (blood, urine and other infectious speciments).
				</p>

				<h6 className="text-md font-semibold text-gray-600 py-2">
					Switch Career
				</h6>
				<p>
					Then in 2017 I switched my career into tech after learn how to code in
					a coding bootcamp for 6 months. Now{' '}
					<strong>
						{' '}
						I&lsquo;m a Software engineer with over 4 years of experience.
					</strong>{' '}
					Living in Makassar, Indonesia. I started my tech career as Angular dev
					and now my day-to-day job is working with React as my main tech stack.
				</p>
				<h6 className="text-md font-semibold text-gray-600 py-2">
					Writing Online
				</h6>
				<p className="sm:text-4xl lg:text-base">
					I started writing online in the end of 2021. I published threads on
					Twitter, since then I grow my audience from 100+ to 4500+ followers.
					<br />I love sharing thoughts on &nbsp;
					<a
						href="https://twitter.com/azharieazharou"
						className="text-amber-500"
					>
						Twitter
					</a>
				</p>
				<div>
					<h6 className="text-md font-semibold text-gray-600 py-2">
						There is more in my life than Code!
					</h6>
					<p>I love reading</p>
					<p>I do mentoring</p>
					<p>I build an online community on discord</p>
				</div>

				<Companies />

				<div className="mt-20 flex flex-col">
					<div>
						<h2 className="font-semibold text-center text-gray-600 py-6">
							I&lsquo;ve spent most of my development life in Frontend things!
						</h2>
					</div>
					<motion.div
						className="flex flex-wrap"
						variants={container}
						initial="hidden"
						animate="visible"
					>
						{SKILLS.map((skill, idx) => (
							<motion.div
								key={idx}
								variants={item}
								className=" bg-violet-900 w-fit text-xs shadow-violet-400 m-1 text-white w-fit rounded-full cursor-pointer shadow-md hover:shadow-lg  py-2 px-4"
							>
								{skill}
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default About;
