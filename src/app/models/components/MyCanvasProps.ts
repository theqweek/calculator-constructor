import { FC, SVGProps } from 'react'

export interface MyCanvasProps {
  component: {
    name: string;
    data: string[]
  },
  Icon: FC<SVGProps<SVGSVGElement>>
}