export type PropsWithOmit = {
  variant: string
  children: string
  // Omit CHILDREN from React.ComponentProps
} & Omit<React.ComponentProps<'button'>, 'children'>