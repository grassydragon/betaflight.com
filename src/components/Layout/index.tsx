import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = {
  children: React.ReactNode
}

export default function BetaflightLayout({ children }: Props) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title} - Pushing the Limits of UAV Performance`} description="Are you ready to fly?">
      <div
        className="absolute w-full pointer-events-none -z-20 brightness-50"
        style={{
          WebkitMaskImage: 'linear-gradient(transparent, black, transparent)',
        }}
      >
        <svg className="max-w-full h-fit origin-top" id="visual" viewBox="0 0 2700 1200" width="2700" height="1200" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <g>
            <g transform="translate(2667 701)">
              <path d="M0 -105.2L91.1 -52.6L91.1 52.6L0 105.2L-91.1 52.6L-91.1 -52.6Z" fill="none" stroke="#FFBB00" stroke-width="8"></path>
            </g>
            <g transform="translate(1916 66)">
              <path d="M0 -88L76.2 -44L76.2 44L0 88L-76.2 44L-76.2 -44Z" fill="none" stroke="#FFBB00" stroke-width="8"></path>
            </g>
            <g transform="translate(375 976)">
              <path d="M0 -53L45.9 -26.5L45.9 26.5L0 53L-45.9 26.5L-45.9 -26.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(2309 3)">
              <path d="M0 -79L68.4 -39.5L68.4 39.5L0 79L-68.4 39.5L-68.4 -39.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1239 514)">
              <path d="M0 -80L69.3 -40L69.3 40L0 80L-69.3 40L-69.3 -40Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1284 227)">
              <path d="M0 -103L89.2 -51.5L89.2 51.5L0 103L-89.2 51.5L-89.2 -51.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(550 534)">
              <path d="M0 -74L64.1 -37L64.1 37L0 74L-64.1 37L-64.1 -37Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1527 791)">
              <path d="M0 -56L48.5 -28L48.5 28L0 56L-48.5 28L-48.5 -28Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1384 1022)">
              <path d="M0 -46L39.8 -23L39.8 23L0 46L-39.8 23L-39.8 -23Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(854 922)">
              <path d="M0 -36L31.2 -18L31.2 18L0 36L-31.2 18L-31.2 -18Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1873 860)">
              <path d="M0 -43L37.2 -21.5L37.2 21.5L0 43L-37.2 21.5L-37.2 -21.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1514 477)">
              <path d="M0 -38L32.9 -19L32.9 19L0 38L-32.9 19L-32.9 -19Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(2024 1075)">
              <path d="M0 -26L22.5 -13L22.5 13L0 26L-22.5 13L-22.5 -13Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(60 630)">
              <path d="M0 -65L56.3 -32.5L56.3 32.5L0 65L-56.3 32.5L-56.3 -32.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1827 1186)">
              <path d="M0 -90L77.9 -45L77.9 45L0 90L-77.9 45L-77.9 -45Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(896 404)">
              <path d="M0 -82L71 -41L71 41L0 82L-71 41L-71 -41Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(553 1111)">
              <path d="M0 -77L66.7 -38.5L66.7 38.5L0 77L-66.7 38.5L-66.7 -38.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(92 961)">
              <path d="M0 -97L84 -48.5L84 48.5L0 97L-84 48.5L-84 -48.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(2227 592)">
              <path d="M0 -59L51.1 -29.5L51.1 29.5L0 59L-51.1 29.5L-51.1 -29.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(743 245)">
              <path d="M0 -31L26.8 -15.5L26.8 15.5L0 31L-26.8 15.5L-26.8 -15.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1169 813)">
              <path d="M0 -55L47.6 -27.5L47.6 27.5L0 55L-47.6 27.5L-47.6 -27.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(2344 411)">
              <path d="M0 -56L48.5 -28L48.5 28L0 56L-48.5 28L-48.5 -28Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(2263 1026)">
              <path d="M0 -41L35.5 -20.5L35.5 20.5L0 41L-35.5 20.5L-35.5 -20.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(7 126)">
              <path d="M0 -92L79.7 -46L79.7 46L0 92L-79.7 46L-79.7 -46Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(380 737)">
              <path d="M0 -35L30.3 -17.5L30.3 17.5L0 35L-30.3 17.5L-30.3 -17.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(475 184)">
              <path d="M0 -77L66.7 -38.5L66.7 38.5L0 77L-66.7 38.5L-66.7 -38.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(2216 217)">
              <path d="M0 -93L80.5 -46.5L80.5 46.5L0 93L-80.5 46.5L-80.5 -46.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(2650 1112)">
              <path d="M0 -43L37.2 -21.5L37.2 21.5L0 43L-37.2 21.5L-37.2 -21.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1978 591)">
              <path d="M0 -70L60.6 -35L60.6 35L0 70L-60.6 35L-60.6 -35Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(2646 109)">
              <path d="M0 -52L45 -26L45 26L0 52L-45 26L-45 -26Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1584 278)">
              <path d="M0 -53L45.9 -26.5L45.9 26.5L0 53L-45.9 26.5L-45.9 -26.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(142 1183)">
              <path d="M0 -65L56.3 -32.5L56.3 32.5L0 65L-56.3 32.5L-56.3 -32.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1035 128)">
              <path d="M0 -80L69.3 -40L69.3 40L0 80L-69.3 40L-69.3 -40Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1007 1103)">
              <path d="M0 -104L90.1 -52L90.1 52L0 104L-90.1 52L-90.1 -52Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1611 39)">
              <path d="M0 -70L60.6 -35L60.6 35L0 70L-60.6 35L-60.6 -35Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1973 375)">
              <path d="M0 -65L56.3 -32.5L56.3 32.5L0 65L-56.3 32.5L-56.3 -32.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(354 1189)">
              <path d="M0 -45L39 -22.5L39 22.5L0 45L-39 22.5L-39 -22.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(2484 867)">
              <path d="M0 -68L58.9 -34L58.9 34L0 68L-58.9 34L-58.9 -34Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(2596 424)">
              <path d="M0 -77L66.7 -38.5L66.7 38.5L0 77L-66.7 38.5L-66.7 -38.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(108 317)">
              <path d="M0 -97L84 -48.5L84 48.5L0 97L-84 48.5L-84 -48.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(672 794)">
              <path d="M0 -44L38.1 -22L38.1 22L0 44L-38.1 22L-38.1 -22Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(2078 782)">
              <path d="M0 -69L59.8 -34.5L59.8 34.5L0 69L-59.8 34.5L-59.8 -34.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(261 142)">
              <path d="M0 -65L56.3 -32.5L56.3 32.5L0 65L-56.3 32.5L-56.3 -32.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(329 468)">
              <path d="M0 -61L52.8 -30.5L52.8 30.5L0 61L-52.8 30.5L-52.8 -30.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1394 2)">
              <path d="M0 -79L68.4 -39.5L68.4 39.5L0 79L-68.4 39.5L-68.4 -39.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(975 607)">
              <path d="M0 -26L22.5 -13L22.5 13L0 26L-22.5 13L-22.5 -13Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1751 550)">
              <path d="M0 -73L63.2 -36.5L63.2 36.5L0 73L-63.2 36.5L-63.2 -36.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(777 1129)">
              <path d="M0 -43L37.2 -21.5L37.2 21.5L0 43L-37.2 21.5L-37.2 -21.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(2435 195)">
              <path d="M0 -102L88.3 -51L88.3 51L0 102L-88.3 51L-88.3 -51Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(2442 641)">
              <path d="M0 -49L42.4 -24.5L42.4 24.5L0 49L-42.4 24.5L-42.4 -24.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1532 1179)">
              <path d="M0 -62L53.7 -31L53.7 31L0 62L-53.7 31L-53.7 -31Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(843 3)">
              <path d="M0 -91L78.8 -45.5L78.8 45.5L0 91L-78.8 45.5L-78.8 -45.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(2431 1193)">
              <path d="M0 -54L46.8 -27L46.8 27L0 54L-46.8 27L-46.8 -27Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1631 994)">
              <path d="M0 -75L65 -37.5L65 37.5L0 75L-65 37.5L-65 -37.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(595 3)">
              <path d="M0 -75L65 -37.5L65 37.5L0 75L-65 37.5L-65 -37.5Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
            <g transform="translate(1237 1194)">
              <path d="M0 -62L53.7 -31L53.7 31L0 62L-53.7 31L-53.7 -31Z" stroke="#FFBB00" fill="none" stroke-width="8"></path>
            </g>
          </g>
        </svg>
      </div>
      <div className="absolute w-full -z-10 md:top-0 top-16">
        <svg className="max-w-full h-fit" width="2700" height="1200" viewBox="0 0 2700 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_2)">
            <g filter="url(#filter0_d_1_2)">
              <path
                d="M2700 2.38745C2448.27 2.38745 2371.37 353.391 2082.39 353.391C1742.09 353.391 1800.03 836.488 1409.59 792.37C1240.29 773.24 1022.42 1021.73 846.885 1021.73C686.747 1021.73 657.834 926.332 466.9 926.332C275.965 926.332 15.5274 1111.58 0 1200L2700 1200V2.38745Z"
                className="fill-[var(--ifm-background-color)]"
              />
            </g>
          </g>
          <defs>
            <filter id="filter0_d_1_2" x="-270" y="-267.613" width="3100" height="1597.61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-70" dy="-70" />
              <feGaussianBlur stdDeviation="100" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape" />
            </filter>
            <clipPath id="clip0_1_2">
              <rect width="2700" height="1200" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="xl:max-w-[1920px] xl:m-auto flex flex-col items-center min-h-screen mt-16 w-full">{children}</div>
    </Layout>
  );
}
