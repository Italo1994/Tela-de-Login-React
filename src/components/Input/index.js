import react from 'react';

import { InputContainer } from './styles';

const Input = ({ type, placeholder }) => {
	return(
		<InputContainer>
			<input type={type} placeholder={placeholder} />
		</InputContainer>
	);
}

export { Input };