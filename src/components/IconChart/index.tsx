interface Props {
  color: string
}

export function IconChart({ color }: Props) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.98292 8.55078V14.1289"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="green"
      />
      <path
        d="M10.7302 5.88113V14.1294"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="green"
      />
      <path
        d="M14.416 11.4985V14.1292"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.71765 10.0307C2.71765 3.9456 4.72124 1.91666 10.7303 1.91666C16.7393 1.91666 18.7429 3.9456 18.7429 10.0307C18.7429 16.1158 16.7393 18.1447 10.7303 18.1447C4.72124 18.1447 2.71765 16.1158 2.71765 10.0307Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
