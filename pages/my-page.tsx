import Image from "next/image";
import { ShareNetwork } from "phosphor-react";
import styled from "styled-components";
import { Header, StickyHeader } from "../layouts/header";
import DefaultLayout from "../layouts";
import AvatarImage from "../public/avatar.svg";
import Link from "next/link";
import MissionStatusSection from "../components/MissionStatusSection";
import isLoggedIn from "../hooks/isLoggedIn";

const Title = styled.div`
	font-size: 24px;
	line-height: 150%;
	font-weight: 500;
	color: ${(props) => props.theme.colors.white};
`;

const AvatarSection = styled.section`
	padding: 24px 16px;
	display: flex;
	column-gap: 13px;
	align-items: center;
	border-bottom: 1px ${({ theme }) => theme.colors.gray10} solid;
`;

const AvatarName = styled.div`
	font-size: 20px;
	font-weight: 500;
	color: ${(props) => props.theme.colors.white};
`;

const JoinedMissionSection = styled.section`
	font-size: 14px;
	line-height: 21px;
	font-weight: 500;
	border-bottom: 1px ${({ theme }) => theme.colors.gray10} solid;
	color: ${(props) => props.theme.colors.white};
	padding: 18px;
	cursor: pointer;
`;

const MyRewardSection = styled.section`
	font-size: 14px;
	line-height: 21px;
	font-weight: 500;
	border-bottom: 1px ${({ theme }) => theme.colors.gray10} solid;
	color: ${(props) => props.theme.colors.white};
	padding: 18px;
`;

function MyPage() {
	isLoggedIn();
	const state = "2";
	
	return (
		<DefaultLayout>
			<StickyHeader>
				<Header>
					<Title>미션 현황</Title>
					<Link href="/share">
						<ShareNetwork size={28} color="#FFFFFF" />
					</Link>
				</Header>
			</StickyHeader>
			<AvatarSection>
				<Image src={AvatarImage} alt="avatar Image" />
				<AvatarName>김지구</AvatarName>
			</AvatarSection>
			<MissionStatusSection />
			<JoinedMissionSection>
				<Link href="/completed">참여한 인증 보기</Link>
			</JoinedMissionSection>
			<MyRewardSection>
				<Link href={`my-rewards?state=${state}`}>내 리워드 보기</Link>
			</MyRewardSection>
		</DefaultLayout>
	);
}

export default MyPage;
