import { useForm } from 'react-hook-form';

import { ContainerLogin, Content, Row } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';


const Login = () => {

	const {
		control, 
		formState: {errors, isValid},
		watch 
	} = useForm();

	const form = watch();
	console.log(form);

	return(
		<ContainerLogin>
			<Content>
		        <Row>
		          <h1>Login</h1>
		        </Row>
		        <Row>
		          <Input type="text" placeholder="Email" control={control} />
		        </Row>
		        <Row>
		          <Input type="password" placeholder="Senha" control={control} />
		        </Row>
		        <Row>
		          <Button name="Entrar" />
		        </Row>
	      	</Content>
      	</ContainerLogin>
	);
}

export  { Login };