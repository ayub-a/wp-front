import { FC } from 'react'
import cl from './SvgIcon.module.css'

export const ICON_TYPES = {
  LIKE: 'LIKE',
  SEARCH: 'SEARCH',
  USER: 'USER',
  USERS: 'USERS',
  SETTINGS: 'SETTINGS',
  ARROW_LEFT: 'ARROW_LEFT',
  ARROW_RIGHT: 'ARROW_RIGHT',
  FILES_1: 'FILES_1',
  FILES_2: 'FILES_2',
  VIEW_TYPE_SQUARE: 'VIEW_TYPE_SQUARE',
  VIEW_TYPE_RANDOM: 'VIEW_TYPE_RANDOM',
  IMAGE: 'IMAGE',
  HOME: 'HOME',
  CLEAR: 'CLEAR',
  CLOSE: 'CLOSE',
  COLLECTIONS: 'COLLECTIONS',
  GITHUB: 'GITHUB',
  VIEWS: 'VIEWS',
  DOWNLOADS: 'DOWNLOADS',
  CALENDAR: 'CALENDAR',
  LOCATION: 'LOCATION',
  CAMERA: 'CAMERA',
  DONE: 'DONE',
  DOWNLOAD: 'DOWNLOAD',
  LINK: 'LINK',
  CHECK: 'CHECK',
  SPINNER: 'SPINNER',
}

export interface SvgIconsProps {
  icon?: keyof typeof ICON_TYPES
  fill?: string
  strokeColor?: string
  strokeWidth?: number | string
  iconsize?: [string | number, string | number]
}

const SvgIcon: FC<SvgIconsProps> = ({
  icon,
  fill = 'none',
  strokeColor = '#8D8D8D',
  strokeWidth = '1.5',
  iconsize = [24, 24],
}) => {
  if (!iconsize[1]) iconsize[1] = iconsize[0]

  switch (icon) {
    case ICON_TYPES.SPINNER:
      return (
        <div className={cl.loader}>
          <span></span>
        </div>
      )

    case ICON_TYPES.CHECK:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 24 24"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 6L9 17L4 12"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.DOWNLOAD:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 17 17"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.875 10.625L14.875 11.475C14.875 12.6651 14.875 13.2602 14.6434 13.7147C14.4397 14.1146 14.1146 14.4397 13.7147 14.6434C13.2602 14.875 12.6651 14.875 11.475 14.875L5.525 14.875C4.33489 14.875 3.73983 14.875 3.28527 14.6434C2.88543 14.4397 2.56034 14.1146 2.35661 13.7147C2.125 13.2602 2.125 12.6651 2.125 11.475L2.125 10.625M12.0417 7.08333L8.5 10.625M8.5 10.625L4.95833 7.08333M8.5 10.625L8.5 2.125"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.LINK:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 17 17"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.37508 12.0416H4.95841C3.00241 12.0416 1.41675 10.4559 1.41675 8.49992C1.41675 6.54391 3.00241 4.95825 4.95841 4.95825H6.37508M10.6251 12.0416H12.0417C13.9978 12.0416 15.5834 10.4559 15.5834 8.49992C15.5834 6.54391 13.9978 4.95825 12.0417 4.95825H10.6251M4.95841 8.49992L12.0417 8.49992"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.DONE:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 17 17"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_89_532)">
            <path
              d="M5.31258 8.50008L7.43758 10.6251L11.6876 6.37508M15.5834 8.50008C15.5834 12.4121 12.4121 15.5834 8.50008 15.5834C4.58806 15.5834 1.41675 12.4121 1.41675 8.50008C1.41675 4.58806 4.58806 1.41675 8.50008 1.41675C12.4121 1.41675 15.5834 4.58806 15.5834 8.50008Z"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_89_532">
              <rect width="17" height="17" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )

    case ICON_TYPES.CAMERA:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 17 17"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.41675 5.93395C1.41675 5.6858 1.41675 5.56173 1.4271 5.45723C1.52697 4.44931 2.32431 3.65197 3.33223 3.5521C3.43673 3.54175 3.5675 3.54175 3.82904 3.54175C3.92981 3.54175 3.9802 3.54175 4.02298 3.53916C4.56926 3.50607 5.04763 3.16129 5.25177 2.6535C5.26775 2.61373 5.2827 2.5689 5.31258 2.47925C5.34247 2.38959 5.35741 2.34477 5.3734 2.305C5.57753 1.79721 6.0559 1.45242 6.60218 1.41934C6.64496 1.41675 6.69222 1.41675 6.78672 1.41675H10.2134C10.3079 1.41675 10.3552 1.41675 10.398 1.41934C10.9443 1.45242 11.4226 1.79721 11.6268 2.305C11.6428 2.34477 11.6577 2.38959 11.6876 2.47925C11.7175 2.5689 11.7324 2.61373 11.7484 2.6535C11.9525 3.16129 12.4309 3.50607 12.9772 3.53916C13.02 3.54175 13.0704 3.54175 13.1711 3.54175C13.4327 3.54175 13.5634 3.54175 13.6679 3.5521C14.6758 3.65197 15.4732 4.44931 15.5731 5.45723C15.5834 5.56173 15.5834 5.6858 15.5834 5.93395V11.4751C15.5834 12.6652 15.5834 13.2602 15.3518 13.7148C15.1481 14.1147 14.823 14.4397 14.4231 14.6435C13.9686 14.8751 13.3735 14.8751 12.1834 14.8751H4.81675C3.62664 14.8751 3.03158 14.8751 2.57702 14.6435C2.17717 14.4397 1.85209 14.1147 1.64836 13.7148C1.41675 13.2602 1.41675 12.6652 1.41675 11.4751V5.93395Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.50008 11.6876C10.0649 11.6876 11.3334 10.4191 11.3334 8.85425C11.3334 7.28944 10.0649 6.02091 8.50008 6.02091C6.93527 6.02091 5.66675 7.28944 5.66675 8.85425C5.66675 10.4191 6.93527 11.6876 8.50008 11.6876Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.LOCATION:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 16 16"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.49992 9.20841C9.67352 9.20841 10.6249 8.25702 10.6249 7.08341C10.6249 5.90981 9.67352 4.95841 8.49992 4.95841C7.32631 4.95841 6.37492 5.90981 6.37492 7.08341C6.37492 8.25702 7.32631 9.20841 8.49992 9.20841Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.49992 15.5834C11.3333 12.7501 14.1666 10.213 14.1666 7.08341C14.1666 3.9538 11.6295 1.41675 8.49992 1.41675C5.37031 1.41675 2.83325 3.9538 2.83325 7.08341C2.83325 10.213 5.66659 12.7501 8.49992 15.5834Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.CALENDAR:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 17 17"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.875 7.08341H2.125M11.3333 1.41675V4.25008M5.66667 1.41675V4.25008M5.525 15.5834H11.475C12.6651 15.5834 13.2602 15.5834 13.7147 15.3518C14.1146 15.1481 14.4397 14.823 14.6434 14.4231C14.875 13.9686 14.875 13.3735 14.875 12.1834V6.23341C14.875 5.0433 14.875 4.44825 14.6434 3.99368C14.4397 3.59384 14.1146 3.26876 13.7147 3.06503C13.2602 2.83341 12.6651 2.83341 11.475 2.83341H5.525C4.33489 2.83341 3.73983 2.83341 3.28527 3.06503C2.88543 3.26876 2.56034 3.59384 2.35661 3.99368C2.125 4.44825 2.125 5.0433 2.125 6.23341V12.1834C2.125 13.3735 2.125 13.9686 2.35661 14.4231C2.56034 14.823 2.88543 15.1481 3.28527 15.3518C3.73983 15.5834 4.33489 15.5834 5.525 15.5834Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.DOWNLOADS:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 15 15"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_89_498)">
            <path
              d="M5 7.49989L7.5 9.99989M7.5 9.99989L10 7.49989M7.5 9.99989V4.24989C7.5 3.38069 7.5 2.9461 7.15593 2.45951C6.92732 2.13621 6.26911 1.73718 5.87674 1.68402C5.28618 1.60401 5.06192 1.721 4.61339 1.95497C2.61458 2.99766 1.25 5.08941 1.25 7.49989C1.25 10.9517 4.04822 13.7499 7.5 13.7499C10.9518 13.7499 13.75 10.9517 13.75 7.49989C13.75 5.1865 12.4931 3.16668 10.625 2.08603"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_89_498">
              <rect width="15" height="15" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )

    case ICON_TYPES.VIEWS:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 60 50"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 12C18.35 8.65 23.8 7 29.8 7C35.8 7 41.25 8.65 46.1 12C50.95 15.35 54.45 19.75 56.6 25.2C54.5 30.65 51 35.1 46.1 38.4C41.25 41.75 35.8 43.4 29.8 43.4C23.8 43.4 18.35 41.75 13.5 38.4C8.65 35.05 5.15 30.65 3 25.2C5.15 19.75 8.65 15.3 13.5 12ZM21.2 33.8C23.6 36.2 26.45 37.4 29.8 37.4C33.15 37.4 36 36.2 38.4 33.8C40.8 31.4 42 28.55 42 25.2C42 21.85 40.8 19 38.4 16.6C36 14.2 33.15 13 29.8 13C26.45 13 23.6 14.2 21.2 16.6C18.8 19 17.6 21.85 17.6 25.2C17.6 28.55 18.8 31.4 21.2 33.8ZM24.65 20.05C26.1 18.65 27.8 17.9 29.8 17.9C31.75 17.9 33.5 18.6 34.95 20.05C36.35 21.5 37.1 23.2 37.1 25.2C37.1 27.2 36.4 28.9 34.95 30.35C33.5 31.75 31.75 32.5 29.8 32.5C27.8 32.5 26.1 31.8 24.65 30.35C23.25 28.9 22.5 27.2 22.5 25.2C22.5 23.2 23.25 21.5 24.65 20.05Z"
            fill="#8D8D8D"
          />
        </svg>
      )

    case ICON_TYPES.GITHUB:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 24 24"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1428_79493)">
            <path
              d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
              fill="black"
            />
          </g>
        </svg>
      )

    case ICON_TYPES.COLLECTIONS:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 24 24"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.01 2.92007L18.91 5.54007C20.61 6.29007 20.61 7.53007 18.91 8.28007L13.01 10.9001C12.34 11.2001 11.24 11.2001 10.57 10.9001L4.67 8.28007C2.97 7.53007 2.97 6.29007 4.67 5.54007L10.57 2.92007C11.24 2.62007 12.34 2.62007 13.01 2.92007Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.CLOSE:
    case ICON_TYPES.CLEAR:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 10 10"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.16998 7.83004L7.82998 2.17004"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.82998 7.83004L2.16998 2.17004"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.VIEW_TYPE_RANDOM:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 20 20"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3333 9.08334V3.41667C18.3333 2.16667 17.8 1.66667 16.475 1.66667H13.1083C11.7833 1.66667 11.25 2.16667 11.25 3.41667V9.08334C11.25 10.3333 11.7833 10.8333 13.1083 10.8333H16.475C17.8 10.8333 18.3333 10.3333 18.3333 9.08334Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3333 16.5833V15.0833C18.3333 13.8333 17.8 13.3333 16.475 13.3333H13.1083C11.7833 13.3333 11.25 13.8333 11.25 15.0833V16.5833C11.25 17.8333 11.7833 18.3333 13.1083 18.3333H16.475C17.8 18.3333 18.3333 17.8333 18.3333 16.5833Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.74999 10.9167V16.5833C8.74999 17.8333 8.21666 18.3333 6.89166 18.3333H3.52499C2.19999 18.3333 1.66666 17.8333 1.66666 16.5833V10.9167C1.66666 9.66667 2.19999 9.16667 3.52499 9.16667H6.89166C8.21666 9.16667 8.74999 9.66667 8.74999 10.9167Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.74999 3.41667V4.91667C8.74999 6.16667 8.21666 6.66667 6.89166 6.66667H3.52499C2.19999 6.66667 1.66666 6.16667 1.66666 4.91667V3.41667C1.66666 2.16667 2.19999 1.66667 3.52499 1.66667H6.89166C8.21666 1.66667 8.74999 2.16667 8.74999 3.41667Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.VIEW_TYPE_SQUARE:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 20 20"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3333 7.10001V3.31667C18.3333 2.14167 17.8 1.66667 16.475 1.66667H13.1083C11.7833 1.66667 11.25 2.14167 11.25 3.31667V7.09167C11.25 8.27501 11.7833 8.74167 13.1083 8.74167H16.475C17.8 8.75 18.3333 8.27501 18.3333 7.10001Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3333 16.475V13.1083C18.3333 11.7833 17.8 11.25 16.475 11.25H13.1083C11.7833 11.25 11.25 11.7833 11.25 13.1083V16.475C11.25 17.8 11.7833 18.3333 13.1083 18.3333H16.475C17.8 18.3333 18.3333 17.8 18.3333 16.475Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.74999 7.10001V3.31667C8.74999 2.14167 8.21666 1.66667 6.89166 1.66667H3.52499C2.19999 1.66667 1.66666 2.14167 1.66666 3.31667V7.09167C1.66666 8.27501 2.19999 8.74167 3.52499 8.74167H6.89166C8.21666 8.75 8.74999 8.27501 8.74999 7.10001Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.74999 16.475V13.1083C8.74999 11.7833 8.21666 11.25 6.89166 11.25H3.52499C2.19999 11.25 1.66666 11.7833 1.66666 13.1083V16.475C1.66666 17.8 2.19999 18.3333 3.52499 18.3333H6.89166C8.21666 18.3333 8.74999 17.8 8.74999 16.475Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.FILES_2:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 24 24"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.01 2.92007L18.91 5.54007C20.61 6.29007 20.61 7.53007 18.91 8.28007L13.01 10.9001C12.34 11.2001 11.24 11.2001 10.57 10.9001L4.67 8.28007C2.97 7.53007 2.97 6.29007 4.67 5.54007L10.57 2.92007C11.24 2.62007 12.34 2.62007 13.01 2.92007Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.FILES_1:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            d="M8 2H17C19 2 20 3 20 5V6.38"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.ARROW_RIGHT:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 24 24"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M9 5L16 12L9 19"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.ARROW_LEFT:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 24 24"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M15 19L8 12L15 5"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.USERS:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 24 24"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M21 19.9999C21 18.2583 19.3304 16.7767 17 16.2275M15 20C15 17.7909 12.3137 16 9 16C5.68629 16 3 17.7909 3 20M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5M9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9C13 11.2091 11.2091 13 9 13Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.LIKE:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 20 20"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5167 17.3417C10.2333 17.4417 9.76666 17.4417 9.48332 17.3417C7.06666 16.5167 1.66666 13.075 1.66666 7.24168C1.66666 4.66668 3.74166 2.58334 6.29999 2.58334C7.81666 2.58334 9.15832 3.31668 9.99999 4.45001C10.8417 3.31668 12.1917 2.58334 13.7 2.58334C16.2583 2.58334 18.3333 4.66668 18.3333 7.24168C18.3333 13.075 12.9333 16.5167 10.5167 17.3417Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.SEARCH:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 16 16"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.98788 14C11.3341 14 14.0468 11.1645 14.0468 7.66668C14.0468 4.16887 11.3341 1.33334 7.98788 1.33334C4.64163 1.33334 1.92896 4.16887 1.92896 7.66668C1.92896 11.1645 4.64163 14 7.98788 14Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.6846 14.6667L13.409 13.3333"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.SETTINGS:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 20 20"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.66666 10.7333V9.26666C1.66666 8.4 2.37499 7.68333 3.24999 7.68333C4.75832 7.68333 5.37499 6.61666 4.61666 5.30833C4.18332 4.55833 4.44166 3.58333 5.19999 3.15L6.64166 2.325C7.29999 1.93333 8.14999 2.16666 8.54166 2.825L8.63332 2.98333C9.38332 4.29166 10.6167 4.29166 11.375 2.98333L11.4667 2.825C11.8583 2.16666 12.7083 1.93333 13.3667 2.325L14.8083 3.15C15.5667 3.58333 15.825 4.55833 15.3917 5.30833C14.6333 6.61666 15.25 7.68333 16.7583 7.68333C17.625 7.68333 18.3417 8.39166 18.3417 9.26666V10.7333C18.3417 11.6 17.6333 12.3167 16.7583 12.3167C15.25 12.3167 14.6333 13.3833 15.3917 14.6917C15.825 15.45 15.5667 16.4167 14.8083 16.85L13.3667 17.675C12.7083 18.0667 11.8583 17.8333 11.4667 17.175L11.375 17.0167C10.625 15.7083 9.39166 15.7083 8.63332 17.0167L8.54166 17.175C8.14999 17.8333 7.29999 18.0667 6.64166 17.675L5.19999 16.85C4.44166 16.4167 4.18332 15.4417 4.61666 14.6917C5.37499 13.3833 4.75832 12.3167 3.24999 12.3167C2.37499 12.3167 1.66666 11.6 1.66666 10.7333Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.USER:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 24 24"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.HOME:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 24 24"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 17H16M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case ICON_TYPES.IMAGE:
      return (
        <svg
          width={iconsize[0]}
          height={iconsize[1]}
          viewBox="0 0 24 24"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M3.00005 18.0001C3 17.9355 3 17.8689 3 17.8002V6.2002C3 5.08009 3 4.51962 3.21799 4.0918C3.40973 3.71547 3.71547 3.40973 4.0918 3.21799C4.51962 3 5.08009 3 6.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21 4.5192 21 5.07899 21 6.19691V17.8031C21 18.2881 21 18.6679 20.9822 18.9774M3.00005 18.0001C3.00082 18.9884 3.01337 19.5058 3.21799 19.9074C3.40973 20.2837 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H17.8036C18.9215 21 19.4805 21 19.9079 20.7822C20.2842 20.5905 20.5905 20.2837 20.7822 19.9074C20.9055 19.6654 20.959 19.3813 20.9822 18.9774M3.00005 18.0001L7.76798 12.4375L7.76939 12.436C8.19227 11.9426 8.40406 11.6955 8.65527 11.6064C8.87594 11.5282 9.11686 11.53 9.33643 11.6113C9.58664 11.704 9.79506 11.9539 10.2119 12.4541L12.8831 15.6595C13.269 16.1226 13.463 16.3554 13.6986 16.4489C13.9065 16.5313 14.1357 16.5406 14.3501 16.4773C14.5942 16.4053 14.8091 16.1904 15.2388 15.7607L15.7358 15.2637C16.1733 14.8262 16.3921 14.6076 16.6397 14.5361C16.8571 14.4734 17.0896 14.4869 17.2988 14.5732C17.537 14.6716 17.7302 14.9124 18.1167 15.3955L20.9822 18.9774M20.9822 18.9774L21 18.9996M15 9C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    default:
      return null
  }
}

export default SvgIcon
