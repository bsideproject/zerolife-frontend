import Link from "next/link";
import { Alarm, CalendarCheck, Smiley } from "phosphor-react";
import styled from "styled-components";

const FooterContainer = styled.div`
	border-top: 1px ${({ theme }) => theme.colors.gray10} solid;
	padding-top: 14px;
	padding-bottom: 14px;
	width: 100%;
	height: 51px;
	position: absolute;
	bottom: 0;
	left: 0;
`;

const NavigationBar = styled.ul`
	text-decoration: none;
	display: flex;
	justify-content: space-evenly;
`;

const NavigationItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

const NavigationText = styled.div`
	font-size: 8px;
	line-height: 150%;
`;

const NavLinks = [
	{
		name: "DAILY_MISSION",
		path: "/daily-missions",
		text: "데일리 미션",
		icon: <Alarm size={32} />,
	},
	{
		name: "MISSION_STATUS",
		path: "/mission-status",
		text: "미션 현황",
		icon: <CalendarCheck size={32} />,
	},
	{
		name: "MY_PAGE",
		path: "/my-page",
		text: "마이 페이지",
		icon: <Smiley size={32} />,
	},
];

function Footer() {
	return (
		<FooterContainer>
			<NavigationBar>
				{NavLinks.map((navLink) => (
					<Link href={navLink.path} key={navLink.name}>
						<NavigationItem>
							{navLink.icon}
							<NavigationText>{navLink.text}</NavigationText>
						</NavigationItem>
					</Link>
				))}
			</NavigationBar>
		</FooterContainer>
	);
}

export default Footer;