import react from 'react';

import { InputContainer } from './styles';
// import { IInputProps } from './types';

const Input = ({ type, placeholder, ...rest}) => {
	return(
		<InputContainer>
			<input type={type} placeholder={placeholder} {...rest} />
		</InputContainer>
	);
}

export { Input };