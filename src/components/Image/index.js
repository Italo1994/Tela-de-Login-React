import { ContainerImage, ImageTag } from './styles';

const Image = ({src}) => {
	return(
		<ContainerImage>
			<ImageTag src={src} alt="Banner login" />
		</ContainerImage>
	);
} 

export { Image };