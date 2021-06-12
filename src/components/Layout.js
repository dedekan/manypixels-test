import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Box } from "@chakra-ui/react";
import { Children, cloneElement, isValidElement } from "react";

export const Layout = styled.div`
  height: 100%;
  width: 100%;
`;

export const Column = ({
  md,
  lg,
  xl,
  col,
  isDeck = false,
  totalColumn = 24,
  children,
  className,
  style,
}) => {
  const calculateWidth = (unit) => {
    const w = (100 / totalColumn) * unit;
    return `${w}%`;
  };

  const isEmptySize = !md && !lg && !xl && !col;

  const w = {
    sm: col && calculateWidth(col),
    md: md && calculateWidth(md),
    lg: lg && calculateWidth(lg),
    xl: xl && calculateWidth(xl),
  };

  const colProps = {
    flexGrow: isEmptySize ? 1 : 0,
    flexShrink: isEmptySize ? 0 : undefined,
    flexBasis: isEmptySize ? 0 : w,
    maxW: isEmptySize ? "100%" : w,
    w: isEmptySize ? undefined : "full",
  };

  return (
    <Box
      px={2}
      d={isDeck ? "flex" : "block"}
      {...colProps}
      flexDirection={isDeck ? "column" : undefined}
      alignItems={isDeck ? "stretch" : undefined}
      className={className}
      transition="width 250ms ease"
      style={style}
      css={css([
        isDeck &&
          css`
            & .card {
              flex: 1 1 auto;
            }
            & .card-body {
              flex: 1 1 auto;
            }
          `,
      ])}
    >
      {children}
    </Box>
  );
};

export const Row = ({
  totalColumn = 24,
  className,
  style,
  children,
  isDeck = false,
  ...restProps
}) => {
  const isZero = restProps.mx === 0;
  const marginX = restProps.mx || -2;

  return (
    <Box
      {...restProps}
      d={restProps.d || "flex"}
      mx={isZero ? 0 : marginX}
      flexWrap="wrap"
      className={className}
      style={style}
      // w={restProps.w || 'full'}
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null;

        if (child.type === Column) {
          return cloneElement(child, { isDeck, totalColumn });
        }
        return child;
      })}
    </Box>
  );
};

export const Header = styled.h1`
  display: block;
  padding-top: 36px;
  padding-bottom: 36px;
  font-size: 36px;
  background-color: transparent;
  color: black;
  font-weight: 600;
  text-align: center;
`;
