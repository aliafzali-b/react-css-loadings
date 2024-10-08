import React, {FC} from 'react';
const TEMPLATES_NAMES = ['frcms', 'LoadingType1'] as const;
type props = {
  template_name?: (typeof TEMPLATES_NAMES)[number];
  primary_color?: string;
  secondary_color?: string;
  full_width?: boolean;
  vertical_padding?: number;
  scale?: number;
  width?: string;
  height?: string;
};
const Loading: FC<props> = (props) => {
  let {
    template_name,
    primary_color,
    secondary_color,
    full_width,
    vertical_padding,
    scale,
    width,
    height,
  } = props;
  if (!template_name) template_name = 'frcms';
  if (!primary_color) primary_color = '#FF3D00';
  if (!secondary_color) secondary_color = '#FFF';
  const componentPath = `components/${template_name}`;
  let DynamicComponent;
  try {
    DynamicComponent = require(`./${componentPath}/index.tsx`).default;
  } catch (error) {
    console.log('error', error);
  }
  if (!DynamicComponent) return null;
  return (
    <div
      className='react-css-loadings'
      style={{
        width: full_width ? '100%' : 'auto',
        display: full_width ? 'flex' : 'block',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: vertical_padding,
        paddingBottom: vertical_padding,
      }}
    >
      <DynamicComponent
        width={width}
        height={height}
        primary_color={primary_color}
        secondary_color={secondary_color}
      />
    </div>
  );
};
export default Loading;
