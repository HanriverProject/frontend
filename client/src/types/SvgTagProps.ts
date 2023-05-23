import { ComponentPropsWithoutRef } from 'react';
type SvgTypes = ComponentPropsWithoutRef<'svg'>;

interface SvgTagProps extends SvgTypes {
  className?: string;
}

export default SvgTagProps;
