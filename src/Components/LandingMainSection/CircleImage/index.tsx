
import React, { ReactNode } from 'react';
import { CicleImageWrapper, validOptions } from './styles';

interface Props {
  children?: ReactNode;
  position: validOptions;
  direction: validOptions;
  image: validOptions;
  size: number;
  opacity?: number;
}

export default function CircleImage({ children, position, direction, image, size, opacity }: Props) {
  return (
    <React.Fragment>
      <CicleImageWrapper position={position} direction={direction} image={image} size={size} opacity={opacity} />
    </React.Fragment>
  );
}
