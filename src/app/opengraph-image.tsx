import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Manik Rana";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_18_2)">
            <rect width="1200" height="630" fill="black" />
            <path
              d="M79.2127 74V57.0909H82.3722V59.843H82.5813C82.9336 58.911 83.5097 58.1844 84.3097 57.6634C85.1096 57.1349 86.0674 56.8707 87.1829 56.8707C88.3131 56.8707 89.2598 57.1349 90.0231 57.6634C90.7937 58.1918 91.3625 58.9183 91.7294 59.843H91.9055C92.3092 58.9403 92.9513 58.2211 93.832 57.6854C94.7127 57.1423 95.7622 56.8707 96.9805 56.8707C98.5143 56.8707 99.7656 57.3514 100.734 58.3129C101.71 59.2743 102.199 60.7237 102.199 62.6612V74H98.907V62.9695C98.907 61.8246 98.5951 60.9953 97.9712 60.4815C97.3474 59.9678 96.6025 59.7109 95.7365 59.7109C94.665 59.7109 93.832 60.0412 93.2376 60.7017C92.6431 61.3549 92.3459 62.1952 92.3459 63.2227V74H89.0653V62.7603C89.0653 61.8429 88.7791 61.1053 88.2067 60.5476C87.6342 59.9898 86.8893 59.7109 85.9719 59.7109C85.3481 59.7109 84.772 59.8761 84.2436 60.2063C83.7225 60.5292 83.3005 60.9806 82.9776 61.5604C82.6621 62.1402 82.5043 62.8117 82.5043 63.5749V74H79.2127ZM111.531 74.3743C110.459 74.3743 109.491 74.1761 108.625 73.7798C107.759 73.3762 107.073 72.7927 106.566 72.0295C106.067 71.2662 105.818 70.3305 105.818 69.2223C105.818 68.2682 106.001 67.483 106.368 66.8665C106.735 66.25 107.23 65.762 107.854 65.4023C108.478 65.0427 109.175 64.7712 109.946 64.5877C110.716 64.4042 111.502 64.2648 112.302 64.1694C113.314 64.052 114.136 63.9566 114.767 63.8832C115.399 63.8024 115.857 63.674 116.144 63.4979C116.43 63.3217 116.573 63.0355 116.573 62.6392V62.5621C116.573 61.6007 116.301 60.8558 115.758 60.3274C115.223 59.799 114.423 59.5348 113.358 59.5348C112.25 59.5348 111.377 59.7807 110.738 60.2724C110.107 60.7567 109.671 61.2962 109.428 61.8906L106.335 61.1861C106.702 60.1586 107.238 59.3293 107.942 58.6982C108.654 58.0597 109.472 57.5973 110.397 57.3111C111.322 57.0175 112.294 56.8707 113.314 56.8707C113.99 56.8707 114.705 56.9515 115.461 57.1129C116.224 57.267 116.936 57.5533 117.597 57.9716C118.265 58.3899 118.811 58.988 119.237 59.766C119.663 60.5366 119.875 61.5384 119.875 62.7713V74H116.661V71.6882H116.529C116.316 72.1139 115.997 72.5322 115.571 72.9432C115.145 73.3542 114.599 73.6954 113.931 73.967C113.263 74.2385 112.463 74.3743 111.531 74.3743ZM112.247 71.7322C113.157 71.7322 113.935 71.5524 114.58 71.1928C115.234 70.8332 115.729 70.3635 116.066 69.7837C116.411 69.1966 116.584 68.5691 116.584 67.9013V65.7216C116.466 65.839 116.239 65.9491 115.901 66.0518C115.571 66.1473 115.193 66.2317 114.767 66.305C114.342 66.3711 113.927 66.4335 113.524 66.4922C113.12 66.5436 112.782 66.5876 112.511 66.6243C111.872 66.705 111.289 66.8408 110.76 67.0316C110.239 67.2224 109.821 67.4976 109.505 67.8572C109.197 68.2095 109.043 68.6792 109.043 69.2663C109.043 70.081 109.344 70.6974 109.946 71.1158C110.548 71.5268 111.314 71.7322 112.247 71.7322ZM127.551 63.9602V74H124.26V57.0909H127.419V59.843H127.628C128.017 58.9477 128.626 58.2285 129.456 57.6854C130.292 57.1423 131.345 56.8707 132.615 56.8707C133.767 56.8707 134.776 57.1129 135.642 57.5973C136.508 58.0743 137.18 58.7862 137.657 59.733C138.134 60.6797 138.373 61.8503 138.373 63.2447V74H135.081V63.641C135.081 62.4154 134.762 61.4576 134.123 60.7678C133.485 60.0705 132.608 59.7219 131.492 59.7219C130.729 59.7219 130.05 59.8871 129.456 60.2173C128.868 60.5476 128.402 61.032 128.058 61.6705C127.72 62.3016 127.551 63.0649 127.551 63.9602ZM142.787 74V57.0909H146.078V74H142.787ZM144.449 54.4819C143.877 54.4819 143.385 54.2911 142.974 53.9094C142.57 53.5205 142.369 53.0581 142.369 52.5224C142.369 51.9793 142.57 51.5169 142.974 51.1353C143.385 50.7463 143.877 50.5518 144.449 50.5518C145.022 50.5518 145.51 50.7463 145.913 51.1353C146.324 51.5169 146.53 51.9793 146.53 52.5224C146.53 53.0581 146.324 53.5205 145.913 53.9094C145.51 54.2911 145.022 54.4819 144.449 54.4819ZM153.534 68.2646L153.512 64.2464H154.084L160.822 57.0909H164.763L157.079 65.2372H156.561L153.534 68.2646ZM150.507 74V51.4545H153.798V74H150.507ZM161.185 74L155.13 65.9638L157.398 63.663L165.225 74H161.185ZM167.763 74V57.0909H170.944V59.777H171.12C171.428 58.8669 171.971 58.1514 172.749 57.6303C173.535 57.1019 174.423 56.8377 175.413 56.8377C175.619 56.8377 175.861 56.8451 176.14 56.8597C176.426 56.8744 176.65 56.8928 176.812 56.9148V60.0632C176.679 60.0265 176.445 59.9862 176.107 59.9421C175.769 59.8907 175.432 59.8651 175.094 59.8651C174.316 59.8651 173.623 60.0302 173.014 60.3604C172.412 60.6834 171.935 61.1347 171.582 61.7145C171.23 62.2869 171.054 62.9401 171.054 63.674V74H167.763ZM184.429 74.3743C183.358 74.3743 182.389 74.1761 181.523 73.7798C180.657 73.3762 179.971 72.7927 179.465 72.0295C178.966 71.2662 178.716 70.3305 178.716 69.2223C178.716 68.2682 178.899 67.483 179.266 66.8665C179.633 66.25 180.129 65.762 180.753 65.4023C181.376 65.0427 182.074 64.7712 182.844 64.5877C183.615 64.4042 184.4 64.2648 185.2 64.1694C186.213 64.052 187.035 63.9566 187.666 63.8832C188.297 63.8024 188.756 63.674 189.042 63.4979C189.328 63.3217 189.471 63.0355 189.471 62.6392V62.5621C189.471 61.6007 189.2 60.8558 188.657 60.3274C188.121 59.799 187.321 59.5348 186.257 59.5348C185.149 59.5348 184.275 59.7807 183.637 60.2724C183.006 60.7567 182.569 61.2962 182.327 61.8906L179.233 61.1861C179.6 60.1586 180.136 59.3293 180.841 58.6982C181.553 58.0597 182.371 57.5973 183.296 57.3111C184.22 57.0175 185.193 56.8707 186.213 56.8707C186.888 56.8707 187.604 56.9515 188.359 57.1129C189.123 57.267 189.835 57.5533 190.495 57.9716C191.163 58.3899 191.71 58.988 192.135 59.766C192.561 60.5366 192.774 61.5384 192.774 62.7713V74H189.559V71.6882H189.427C189.214 72.1139 188.895 72.5322 188.47 72.9432C188.044 73.3542 187.497 73.6954 186.829 73.967C186.161 74.2385 185.361 74.3743 184.429 74.3743ZM185.145 71.7322C186.055 71.7322 186.833 71.5524 187.479 71.1928C188.132 70.8332 188.627 70.3635 188.965 69.7837C189.31 69.1966 189.482 68.5691 189.482 67.9013V65.7216C189.365 65.839 189.137 65.9491 188.8 66.0518C188.47 66.1473 188.092 66.2317 187.666 66.305C187.24 66.3711 186.826 66.4335 186.422 66.4922C186.018 66.5436 185.681 66.5876 185.409 66.6243C184.771 66.705 184.187 66.8408 183.659 67.0316C183.138 67.2224 182.719 67.4976 182.404 67.8572C182.096 68.2095 181.941 68.6792 181.941 69.2663C181.941 70.081 182.242 70.6974 182.844 71.1158C183.446 71.5268 184.213 71.7322 185.145 71.7322ZM200.45 63.9602V74H197.158V57.0909H200.317V59.843H200.527C200.916 58.9477 201.525 58.2285 202.354 57.6854C203.191 57.1423 204.244 56.8707 205.513 56.8707C206.666 56.8707 207.675 57.1129 208.541 57.5973C209.407 58.0743 210.078 58.7862 210.555 59.733C211.032 60.6797 211.271 61.8503 211.271 63.2447V74H207.979V63.641C207.979 62.4154 207.66 61.4576 207.022 60.7678C206.383 60.0705 205.506 59.7219 204.391 59.7219C203.627 59.7219 202.949 59.8871 202.354 60.2173C201.767 60.5476 201.301 61.032 200.956 61.6705C200.618 62.3016 200.45 63.0649 200.45 63.9602ZM220.606 74.3743C219.535 74.3743 218.566 74.1761 217.7 73.7798C216.834 73.3762 216.148 72.7927 215.641 72.0295C215.142 71.2662 214.893 70.3305 214.893 69.2223C214.893 68.2682 215.076 67.483 215.443 66.8665C215.81 66.25 216.306 65.762 216.929 65.4023C217.553 65.0427 218.25 64.7712 219.021 64.5877C219.792 64.4042 220.577 64.2648 221.377 64.1694C222.39 64.052 223.212 63.9566 223.843 63.8832C224.474 63.8024 224.933 63.674 225.219 63.4979C225.505 63.3217 225.648 63.0355 225.648 62.6392V62.5621C225.648 61.6007 225.377 60.8558 224.833 60.3274C224.298 59.799 223.498 59.5348 222.434 59.5348C221.325 59.5348 220.452 59.7807 219.814 60.2724C219.182 60.7567 218.746 61.2962 218.504 61.8906L215.41 61.1861C215.777 60.1586 216.313 59.3293 217.017 58.6982C217.729 58.0597 218.548 57.5973 219.472 57.3111C220.397 57.0175 221.369 56.8707 222.39 56.8707C223.065 56.8707 223.78 56.9515 224.536 57.1129C225.299 57.267 226.011 57.5533 226.672 57.9716C227.34 58.3899 227.886 58.988 228.312 59.766C228.738 60.5366 228.951 61.5384 228.951 62.7713V74H225.736V71.6882H225.604C225.391 72.1139 225.072 72.5322 224.646 72.9432C224.221 73.3542 223.674 73.6954 223.006 73.967C222.338 74.2385 221.538 74.3743 220.606 74.3743ZM221.322 71.7322C222.232 71.7322 223.01 71.5524 223.656 71.1928C224.309 70.8332 224.804 70.3635 225.142 69.7837C225.487 69.1966 225.659 68.5691 225.659 67.9013V65.7216C225.542 65.839 225.314 65.9491 224.977 66.0518C224.646 66.1473 224.268 66.2317 223.843 66.305C223.417 66.3711 223.002 66.4335 222.599 66.4922C222.195 66.5436 221.857 66.5876 221.586 66.6243C220.947 66.705 220.364 66.8408 219.836 67.0316C219.315 67.2224 218.896 67.4976 218.581 67.8572C218.272 68.2095 218.118 68.6792 218.118 69.2663C218.118 70.081 218.419 70.6974 219.021 71.1158C219.623 71.5268 220.39 71.7322 221.322 71.7322ZM235.503 74.2092C234.902 74.2092 234.384 73.9963 233.951 73.5707C233.518 73.1377 233.302 72.6166 233.302 72.0075C233.302 71.4057 233.518 70.8919 233.951 70.4663C234.384 70.0333 234.902 69.8168 235.503 69.8168C236.105 69.8168 236.623 70.0333 237.056 70.4663C237.489 70.8919 237.705 71.4057 237.705 72.0075C237.705 72.4111 237.602 72.7817 237.397 73.1193C237.199 73.4496 236.935 73.7138 236.604 73.9119C236.274 74.1101 235.907 74.2092 235.503 74.2092ZM248.444 74.3303C247.079 74.3303 245.861 73.9817 244.789 73.2844C243.725 72.5799 242.888 71.5781 242.279 70.2791C241.677 68.9728 241.377 67.4059 241.377 65.5785C241.377 63.7511 241.681 62.1879 242.29 60.8888C242.907 59.5898 243.751 58.5954 244.822 57.9055C245.894 57.2157 247.108 56.8707 248.466 56.8707C249.515 56.8707 250.359 57.0469 250.998 57.3991C251.644 57.7441 252.143 58.1477 252.495 58.6101C252.855 59.0724 253.134 59.4798 253.332 59.832H253.53V51.4545H256.821V74H253.607V71.369H253.332C253.134 71.7286 252.847 72.1396 252.473 72.6019C252.106 73.0643 251.6 73.4679 250.954 73.8129C250.308 74.1578 249.471 74.3303 248.444 74.3303ZM249.171 71.5231C250.117 71.5231 250.917 71.2736 251.57 70.7745C252.231 70.2681 252.73 69.5672 253.068 68.6719C253.412 67.7765 253.585 66.7344 253.585 65.5455C253.585 64.3712 253.416 63.3437 253.079 62.4631C252.741 61.5824 252.246 60.8962 251.592 60.4045C250.939 59.9128 250.132 59.6669 249.171 59.6669C248.18 59.6669 247.354 59.9238 246.694 60.4375C246.033 60.9512 245.534 61.6521 245.196 62.5401C244.866 63.4281 244.701 64.4299 244.701 65.5455C244.701 66.6757 244.87 67.6921 245.207 68.5948C245.545 69.4975 246.044 70.2131 246.705 70.7415C247.372 71.2625 248.194 71.5231 249.171 71.5231ZM268.807 74.3413C267.141 74.3413 265.706 73.9853 264.503 73.2734C263.306 72.5542 262.382 71.5451 261.729 70.2461C261.083 68.9397 260.76 67.4096 260.76 65.6555C260.76 63.9235 261.083 62.397 261.729 61.076C262.382 59.755 263.292 58.7238 264.459 57.9826C265.633 57.2414 267.005 56.8707 268.576 56.8707C269.53 56.8707 270.455 57.0285 271.35 57.3441C272.245 57.6597 273.049 58.1551 273.761 58.8303C274.473 59.5054 275.034 60.3825 275.445 61.4613C275.856 62.5328 276.062 63.8355 276.062 65.3693V66.5362H262.62V64.0703H272.836C272.836 63.2043 272.66 62.4374 272.308 61.7695C271.955 61.0943 271.46 60.5623 270.822 60.1733C270.19 59.7843 269.449 59.5898 268.598 59.5898C267.673 59.5898 266.866 59.8174 266.176 60.2724C265.493 60.7201 264.965 61.3072 264.591 62.0337C264.224 62.753 264.04 63.5346 264.04 64.3786V66.305C264.04 67.4353 264.238 68.3967 264.635 69.1893C265.038 69.9819 265.6 70.5874 266.319 71.0057C267.038 71.4167 267.879 71.6222 268.84 71.6222C269.464 71.6222 270.033 71.5341 270.546 71.358C271.06 71.1745 271.504 70.9029 271.878 70.5433C272.253 70.1837 272.539 69.7397 272.737 69.2113L275.852 69.7727C275.603 70.6901 275.155 71.4937 274.509 72.1836C273.871 72.8661 273.067 73.3982 272.099 73.7798C271.137 74.1541 270.04 74.3413 268.807 74.3413ZM293.695 57.0909L287.563 74H284.04L277.897 57.0909H281.431L285.713 70.103H285.889L290.161 57.0909H293.695Z"
              fill="white"
            />
            <g filter="url(#filter0_f_18_2)">
              <ellipse
                cx="599.621"
                cy="265.127"
                rx="142.749"
                ry="142.749"
                transform="rotate(-90 599.621 265.127)"
                fill="#A2A2A2"
                fill-opacity="0.5"
              />
            </g>
            <mask
              id="mask0_18_2"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="22"
              y="-80"
              width="1157"
              height="691"
            >
              <rect
                x="22"
                y="-80"
                width="1156.45"
                height="690.254"
                fill="url(#paint0_radial_18_2)"
              />
            </mask>
            <g mask="url(#mask0_18_2)">
              <rect
                x="170.772"
                y="-68.556"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="265.938"
                y="-68.556"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="361.104"
                y="-68.556"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="456.27"
                y="-68.556"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="551.435"
                y="-68.556"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="646.601"
                y="-68.556"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="741.767"
                y="-68.556"
                width="95.1659"
                height="95.1659"
                fill="white"
                fill-opacity="0.25"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="836.933"
                y="-68.556"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="932.099"
                y="-68.556"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="170.772"
                y="26.6099"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="265.938"
                y="26.6099"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="361.104"
                y="26.6099"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="456.27"
                y="26.6099"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="551.435"
                y="26.6099"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="646.601"
                y="26.6099"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="741.767"
                y="26.6099"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="836.933"
                y="26.6099"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="932.099"
                y="26.6099"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="170.772"
                y="121.776"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="265.938"
                y="121.776"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="361.104"
                y="121.776"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="456.27"
                y="121.776"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="551.435"
                y="121.776"
                width="95.1659"
                height="95.1659"
                fill="white"
                fill-opacity="0.25"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="646.601"
                y="121.776"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="741.767"
                y="121.776"
                width="95.1659"
                height="95.1659"
                fill="white"
                fill-opacity="0.25"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="836.933"
                y="121.776"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="932.099"
                y="121.776"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="170.772"
                y="216.942"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="265.938"
                y="216.942"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="361.104"
                y="216.942"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="456.27"
                y="216.942"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="551.435"
                y="216.942"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="646.601"
                y="216.942"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="741.767"
                y="216.942"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="836.933"
                y="216.942"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="932.099"
                y="216.942"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="170.772"
                y="312.107"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="265.938"
                y="312.107"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="361.104"
                y="312.107"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="456.27"
                y="312.107"
                width="95.1659"
                height="95.1659"
                fill="white"
                fill-opacity="0.25"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="551.435"
                y="312.107"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="646.601"
                y="312.107"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="741.767"
                y="312.107"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="836.933"
                y="312.107"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="932.099"
                y="312.107"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="170.772"
                y="407.273"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="265.938"
                y="407.273"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="361.104"
                y="407.273"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="456.27"
                y="407.273"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="551.435"
                y="407.273"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="646.601"
                y="407.273"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="741.767"
                y="407.273"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="836.933"
                y="407.273"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="932.099"
                y="407.273"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="170.772"
                y="502.439"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="265.938"
                y="502.439"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="361.104"
                y="502.439"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="456.27"
                y="502.439"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="551.435"
                y="502.439"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="646.601"
                y="502.439"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="741.767"
                y="502.439"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="836.933"
                y="502.439"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
              <rect
                x="932.099"
                y="502.439"
                width="95.1659"
                height="95.1659"
                stroke="white"
                stroke-width="1.20463"
              />
            </g>
            <g filter="url(#filter1_d_18_2)">
              <rect
                x="397"
                y="133"
                width="405.443"
                height="405.443"
                rx="80.3653"
                fill="url(#paint1_linear_18_2)"
              />
              <rect
                x="400.215"
                y="136.215"
                width="399.014"
                height="399.014"
                rx="77.1507"
                stroke="url(#paint2_linear_18_2)"
                stroke-width="6.42922"
              />
            </g>
            <rect
              x="427.941"
              y="163.941"
              width="343.963"
              height="343.963"
              rx="51.032"
              fill="url(#paint3_linear_18_2)"
            />
            <g style={{ mixBlendMode: "overlay" }}>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M516.716 416.689L501.108 432.297C496.342 427.432 491.934 422.215 487.925 416.689H516.716ZM518.753 414.652L518.725 414.68H486.494C470.863 392.307 461.694 365.085 461.694 335.721L461.694 335.521H518.753V414.652ZM518.753 417.493L502.524 433.723C507.566 438.723 512.992 443.338 518.753 447.518V417.493ZM499.687 433.718L424.109 509.296L425.53 510.717L501.103 435.143C506.563 440.559 512.466 445.528 518.753 449.991L518.753 532.014H520.762L520.762 451.391C543.242 466.766 570.431 475.758 599.721 475.758L599.922 475.758V532.014H601.931V475.741C631.43 475.284 658.715 465.707 681.091 449.705V532.014H683.1V448.241C689.024 443.844 694.589 438.991 699.742 433.733L774.315 508.306L775.736 506.885L701.138 432.287C705.784 427.41 710.082 422.197 713.991 416.689H796.014V414.68H715.391C730.766 392.201 739.758 365.011 739.758 335.721L739.758 335.521H796.014V333.511H739.741C739.284 304.013 729.707 276.728 713.705 254.352L796.014 254.352V252.342L712.241 252.342C708.24 246.952 703.861 241.859 699.143 237.103L774.315 161.931L772.894 160.511L697.718 235.687C693.141 231.202 688.257 227.029 683.1 223.202V139.429L681.091 139.429L681.091 221.738C658.715 205.736 631.43 196.158 601.931 195.702V139.429L599.922 139.429V195.685L599.721 195.685C570.431 195.685 543.242 204.677 520.762 220.052L520.762 139.429L518.753 139.429L518.753 221.452C513.246 225.361 508.033 229.659 503.155 234.305L426.95 158.1L425.53 159.521L501.71 235.701C496.452 240.854 491.599 246.419 487.202 252.342L403.429 252.342L403.429 254.352L485.738 254.352C469.736 276.728 460.158 304.013 459.702 333.511H403.429L403.429 335.521H459.685L459.685 335.721C459.685 365.011 468.677 392.201 484.052 414.68H403.429L403.429 416.689H485.452C489.746 422.739 494.509 428.433 499.687 433.718ZM696.297 237.108C692.145 233.041 687.738 229.234 683.1 225.714V250.305L696.297 237.108ZM681.091 252.314L681.063 252.342H601.931V197.711C631.509 198.176 658.829 207.944 681.091 224.217V252.314ZM679.054 254.352L601.931 331.474V254.352H679.054ZM602.735 333.511L681.091 255.155V333.511H602.735ZM599.922 336.324V414.68H521.566L599.922 336.324ZM597.885 335.521L520.762 412.643V335.521L597.885 335.521ZM683.904 252.342L697.723 238.524C702.02 242.857 706.032 247.473 709.729 252.342H683.904ZM711.518 416.689C707.899 421.677 703.955 426.413 699.717 430.866L685.54 416.689H711.518ZM698.321 432.312L683.1 417.091V445.729C688.499 441.631 693.586 437.145 698.321 432.312ZM683.1 414.25L683.531 414.68H712.949C728.58 392.307 737.749 365.085 737.749 335.721L737.749 335.521H683.1V414.25ZM604.371 335.521L681.091 412.241V335.521H604.371ZM680.689 414.68L601.931 335.922V414.68H680.689ZM523.202 254.352L599.922 331.072V254.352H523.202ZM599.521 333.511L520.762 254.753V333.511H599.521ZM520.762 251.912L521.193 252.342H599.922V197.694L599.721 197.694C570.358 197.694 543.136 206.863 520.762 222.494V251.912ZM504.577 235.726L518.753 249.903V223.925C513.766 227.543 509.03 231.488 504.577 235.726ZM518.352 252.342L503.131 237.122C498.298 241.857 493.812 246.944 489.714 252.342H518.352ZM461.711 333.511H518.753V254.352H488.217C471.944 276.614 462.176 303.933 461.711 333.511ZM711.225 254.352H683.1V333.511H737.731C737.267 303.933 727.499 276.614 711.225 254.352ZM681.091 447.225V416.689H601.931V473.731C631.509 473.267 658.829 463.499 681.091 447.225ZM599.922 473.749V416.689L520.762 416.689V448.948C543.136 464.58 570.358 473.749 599.721 473.749L599.922 473.749Z"
                fill="white"
                fill-opacity="0.4"
              />
            </g>
            <g filter="url(#filter2_f_18_2)">
              <circle
                cx="704.849"
                cy="243.849"
                r="10.8493"
                fill="white"
                fill-opacity="0.3"
              />
            </g>
            <g filter="url(#filter3_f_18_2)">
              <circle cx="704.849" cy="243.849" r="4.01826" fill="white" />
            </g>
            <g style={{ mixBlendMode: "overlay" }}>
              <circle
                cx="58.2648"
                cy="58.2648"
                r="58.2648"
                transform="matrix(-1 0 0 1 658.187 278.059)"
                fill="#EDF1F2"
                fill-opacity="0.3"
              />
            </g>
            <path
              d="M494.926 244.807H556.852L599.448 348.614H601.596L644.193 244.807H706.119V428.08H657.437V322.125H656.005L615.198 426.648H585.846L545.039 321.409H543.608V428.08H494.926V244.807Z"
              fill="url(#paint4_linear_18_2)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_18_2"
              x="215.946"
              y="-118.548"
              width="767.35"
              height="767.35"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="120.463"
                result="effect1_foregroundBlur_18_2"
              />
            </filter>
            <filter
              id="filter1_d_18_2"
              x="356.817"
              y="112.909"
              width="485.808"
              height="485.808"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="20.0913" />
              <feGaussianBlur stdDeviation="20.0913" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_18_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_18_2"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_f_18_2"
              x="684.356"
              y="223.356"
              width="40.9863"
              height="40.9863"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="4.82192"
                result="effect1_foregroundBlur_18_2"
              />
            </filter>
            <filter
              id="filter3_f_18_2"
              x="697.214"
              y="236.215"
              width="15.2694"
              height="15.2694"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1.80822"
                result="effect1_foregroundBlur_18_2"
              />
            </filter>
            <radialGradient
              id="paint0_radial_18_2"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(600.223 265.127) rotate(90) scale(425.464 712.819)"
            >
              <stop stop-color="#D9D9D9" stop-opacity="0.2" />
              <stop offset="0.802083" stop-color="#D9D9D9" stop-opacity="0" />
            </radialGradient>
            <linearGradient
              id="paint1_linear_18_2"
              x1="749.402"
              y1="133"
              x2="514.735"
              y2="335.922"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ACAEAE" />
              <stop offset="0.331593" stop-color="#818483" />
              <stop offset="1" stop-color="#101211" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_18_2"
              x1="753.822"
              y1="151.685"
              x2="469.128"
              y2="431.557"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EBFCF6" />
              <stop offset="0.295134" stop-color="#8F8F8F" />
              <stop offset="0.57639" stop-color="#1D1E1D" />
              <stop offset="0.975" stop-color="#202020" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_18_2"
              x1="716.05"
              y1="199.301"
              x2="573"
              y2="404.233"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#474B49" />
              <stop offset="0.529514" stop-color="#1C1C1C" />
              <stop offset="1" stop-color="#101211" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_18_2"
              x1="600.5"
              y1="178.08"
              x2="600.5"
              y2="495.08"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <clipPath id="clip0_18_2">
              <rect width="1200" height="630" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
