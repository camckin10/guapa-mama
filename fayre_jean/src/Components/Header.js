import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
		background: lavender;
		padding:4em;
`;

const Title = styled.h1`
		color:purple;
		font-size:2.5em;
		font-family:sans-serif
`;

const Subtitle = styled.h2`
		color:black;
		font-style:bold;
		font-weight:300;
		font-family:sans-serif;
`;

class Header extends Component {
	render () {
		return (
			<div className="header-section">
				<Wrapper>
					<Title>Fayre Crossley</Title>
					<Subtitle>Fundraiser | Teacher | Grant writer</Subtitle>
				</Wrapper>
				
			</div>
		);
	}
}

export default Header;