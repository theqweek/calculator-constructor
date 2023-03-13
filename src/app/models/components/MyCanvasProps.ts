import { FC, SVGProps } from 'react'

export interface MyCanvasProps {
  component: {
    name: string;
    data: string[]
  },
  Icon: FC<SVGProps<SVGSVGElement>>,
  fns: ((e: any, board?: any, item?: any) => void)[]
}