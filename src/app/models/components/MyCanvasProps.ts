import { FC, SVGProps } from 'react'
import { DnDFunctions } from '../DnDFunctions';

export interface MyCanvasProps {
  component: {
    name: string;
    data: string[]
  },
  Icon: FC<SVGProps<SVGSVGElement>>,
  fns: DnDFunctions;
}