import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
	background:thistle;
	padding:4em;	
`;

const Biography = styled.h3`
	font-size:1.5em;
	color:purple;
	
`;

const Paragraph = styled.p`
	color:black;
	font-weight:300;
	font-style:bold;
	font-family:sans-serif;
	
`;

class Bio extends Component {
	render() {
		return (
			<div className="bio-section">
				<Wrapper>
					<Biography>About Me</Biography>
					<Paragraph>
					Quit running around this house like you ain't got no goddamn sense! God ain't through with me yet! Don't ask me for nothing else. I don't need to explain myself! I'm grown! Do you pay my automo-bills? Roll your eyes again, imma slap em to the back of yo head.
					</Paragraph>
				</Wrapper>
				
			</div>
		);
	}
}

export default Bio;