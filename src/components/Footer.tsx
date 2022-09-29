import Icon from './Icon';

const Footer = () => {
	return (
		<div className="relative py-4">
			<div className=" bottom-0 left-0 w-full mt-40">
				<div className="flex justify-between">
					<div className="text-base font-semi-bold">
						Azharie Muhammad © 2022
					</div>
					<div className="flex justify-between">
						<a
							className="pr-8"
							href="https://twitter.com/azharieazharou"
							aria-label="visit my twitter"
						>
							<Icon iconName="twitter" wrapperStyle="h-2 w-2" />
						</a>
						<a
							className="pr-4"
							href="https://www.linkedin.com/in/azharie-muhammad/"
							aria-label="visit my linkedin profile"
						>
							<Icon iconName="linkedin" />
						</a>
						<a
							className="pr-4"
							href="https://github.com/azhariemuhammad"
							aria-label="visit my github"
						>
							<Icon iconName="github" />
						</a>

						<a
							className="pr-4"
							href="https://discord.gg/9s57Bj29z9"
							aria-label="join my discord"
						>
							<Icon iconName="discord" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
