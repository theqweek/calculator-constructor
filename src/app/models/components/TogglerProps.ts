import { FC, SVGProps } from 'react'

export interface TogglerProps {
  component: {
    name: string,
    titles: string[]
  },
  icons: FC<SVGProps<SVGSVGElement>>[]
}