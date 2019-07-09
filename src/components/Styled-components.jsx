import styled from 'styled-components'

export const tablet = `601px`;
export const desktop = `992px`;
export const xlDesktop = `1201px`;

// / FONTS-SIZES

export const fontSizes = {
  xxs: '1.2vh',
  xs: '1.4vh',
  s: '1.8vh',
  m: '2.2vh',
  l: '2.5vh',
  xl: '3.5vh',
  xxl: '4vh'
}

// / TITLES 

export const H1 = styled.h1`
  font-family: 'Rajdhani', sans-serif;
  color: rgb(65, 66, 66);
  font-size: ${fontSizes.m};
  height: ${fontSizes.m};
  line-height: 1;
  margin:0.5vh 0 0.5vh 0;

  @media (min-width: ${tablet}) {
    font-size: ${fontSizes.l};
    height: ${fontSizes.l}
  };

  @media (min-width: ${desktop}) {
    font-size: ${fontSizes.xl};
    height: ${fontSizes.xl}
  };

  @media (min-width: ${xlDesktop}) {
    font-size: ${fontSizes.xxl};
    height: ${fontSizes.xxl}
  };
`;

export const Paragraph = styled.p`
  color: rgb(65, 66, 66);
  font-family: 'Rajdhani';
  font-size: ${fontSizes.xxs};
  height: ${fontSizes.xxs};
  line-height: 1;
  margin: 0.5vh 1vh 0.5vh 0;

  @media (min-width: ${tablet}) {
    font-size: ${fontSizes.xs};
    height: ${fontSizes.xs}
  };

  @media (min-width: ${desktop}) {
    font-size: ${fontSizes.s};
    height: ${fontSizes.s}
  };

  @media (min-width: ${xlDesktop}) {
    font-size: ${fontSizes.m};
    height: ${fontSizes.m}
  };
`;

export const H2 = styled.h2`
  color: rgb(26, 26, 26);
  font-family: 'Rajdhani';
  font-size: ${fontSizes.xs};
  height: ${fontSizes.xs};
  line-height: 1;
  margin: 0.5vh 0 0.5vh 0;

  @media (min-width: ${tablet}) {
    font-size: ${fontSizes.s};
    height: ${fontSizes.s}
  };

  @media (min-width: ${desktop}) {
    font-size: ${fontSizes.m};
    height: ${fontSizes.m}
  };

  @media (min-width: ${xlDesktop}) {
    font-size: ${fontSizes.l};
    height: ${fontSizes.l}
  };
`;

export const NotH2 = styled.p`
  color: rgb(26, 26, 26);
  font-family: 'Rajdhani';
  font-size: ${fontSizes.xs};
  height: ${fontSizes.xs};
  line-height: 1;
  margin: 0.5vh 0 0.5vh 0;

  @media (min-width: ${tablet}) {
    font-size: ${fontSizes.s};
    height: ${fontSizes.s}
  };

  @media (min-width: ${desktop}) {
    font-size: ${fontSizes.m};
    height: ${fontSizes.m}
  };

  @media (min-width: ${xlDesktop}) {
    font-size: ${fontSizes.l};
    height: ${fontSizes.l}
  };
`;

export const ProfilParagraph = styled.p`
  color: rgb(65, 66, 66);
  height: auto;
  font-family: 'Rajdhani';
  font-size: ${fontSizes.xxs};
  margin: 0.5vh 1vh 0.5vh 0;

  @media (min-width: ${tablet}) {
    font-size: ${fontSizes.xs};
  };

  @media (min-width: ${desktop}) {
    font-size: ${fontSizes.s};
  };

  @media (min-width: ${xlDesktop}) {
    font-size: ${fontSizes.m};
  };
`;


// /

export const OneLine = styled.div`
  display: flex;
  align-items: baseline;
  /*margin-left: .75rem;*/
  margin-left: 2vw;
  margin-right: 2vw;
  /*flex-wrap: wrap;*/
`;