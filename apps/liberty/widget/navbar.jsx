const { tabs, tab } = props;

State.init({
  open: false,
});

function toggleOpen() {
  State.update({
    open: !state.open,
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Navbar = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1000;
  height: var(--header-height);
  background-color: ${(p) => (p.background ? "#1c6758" : "transparent")};

  @media (max-width: 768px) {
    background-color: #1c6758;
  }
`;

const NavbarToggle = styled.div`
  background-color: #fdfffe;
`;

const TabsButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-weight: 600;
  font-size: 24px;
  padding: 0 12px;
  position: relative;
  color: ${(p) => (p.selected ? "#11181C" : "#FDFFFE")};
  text-decoration: none !important;

  &:hover {
    color: #11181c;
  }
`;

return (
  <Navbar
    className="navbar navbar-expand-lg px-4"
    background={tab !== "welcome"}
  >
    <a
      className="navbar-brand d-flex align-items-center gap-2 text-decoration-none"
      href="//*__@appAccount__*//widget/home"
    >
      <svg
        height="48"
        viewBox="0 0 485 142"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M55.2555 130.152C56.2782 130.152 56.641 130.284 56.3441 131.404C55.5854 134.138 52.3526 137.333 48.361 137.004C46.0518 136.806 43.7096 136.971 41.3675 136.938C37.9697 136.905 34.4729 134.138 33.8461 131.074C33.6812 130.317 33.8791 130.086 34.7368 130.086C38.2336 130.119 51.9237 130.185 55.2555 130.152Z"
          fill="#FDFFFE"
        />
        <path
          d="M45.2939 124.948C49.7144 124.948 54.1348 124.948 58.5223 124.948C59.281 124.948 60.2376 124.652 60.4686 125.805C60.6995 126.925 60.1057 127.584 59.149 128.078C58.6212 128.341 58.0274 128.341 57.4336 128.341C49.1536 128.341 40.8405 128.341 32.5605 128.374C31.4718 128.374 30.5482 128.111 29.9544 127.221C29.1956 126.002 29.7894 124.981 31.3069 124.981C35.9912 124.948 40.6426 124.981 45.2939 124.948Z"
          fill="#FDFFFE"
        />
        <path
          d="M32.1956 106.602C28.27 98.0703 31.5358 87.99 39.9808 81.764C44.0384 78.7662 48.2279 75.9332 51.4938 72.1778C57.7286 64.9635 59.5099 56.7609 58.5203 47.9324C58.4543 47.3065 58.3883 46.6806 58.3223 46.0547H58.2564C60.2027 49.1512 61.3243 52.4784 62.083 55.9044C64.1613 65.4576 62.9077 74.6155 57.2997 83.1146C55.3204 86.1123 52.5824 88.6159 50.1742 91.3172C46.8424 95.0396 43.9724 98.9598 42.7849 103.703C41.4983 108.744 42.1251 113.487 45.7208 117.836C49.7124 112.532 56.2441 110.654 62.3469 108.216C69.2085 105.482 75.6742 102.254 80.4905 96.9174C82.4368 94.7761 84.0532 92.4372 85.3068 89.8677C85.1089 92.2396 84.2512 94.4467 83.1955 96.5879C79.6658 103.934 73.497 109.205 66.1076 113.52C64.6891 114.344 63.2376 115.167 61.8191 115.991C58.2564 118.099 57.1018 119.153 55.7493 119.977C51.1969 122.744 44.7642 123.073 40.1458 121.953C37.5397 121.295 36.814 120.504 30.2493 116.057C18.7694 108.282 20.0559 109.765 16.889 107.294C11.347 103.045 7.32242 97.9715 5.57404 91.5807C5.4091 90.9878 5.17818 90.4277 4.94727 89.8677C5.44209 89.736 5.57404 89.9336 5.67301 90.1642C9.10379 96.7197 15.2396 100.673 22.3321 103.67C25.4 104.955 28.5339 106.108 31.8327 106.899C32.0307 106.932 32.1956 106.932 32.3935 106.965C32.2946 106.833 32.2616 106.701 32.1956 106.602Z"
          fill="#FDFFFE"
        />
        <path
          d="M34.9346 76.6576C31.5038 73.3634 29.2936 69.8386 28.6339 65.589C27.7432 59.8242 29.4916 54.6193 32.6914 49.678C36.65 43.5508 40.3777 37.3576 42.5879 30.5386C45.293 22.1384 45.6558 13.5734 45.5239 4.84375C46.4146 7.01793 47.3052 9.15917 48.1629 11.3334C50.2412 16.637 51.7587 22.0395 52.0556 27.6726C52.5504 37.7859 48.9217 46.6803 42.225 54.7511C39.0582 58.5394 36.1882 62.5254 35.0996 67.2691C34.4068 70.2998 34.3078 73.3304 34.9346 76.6576Z"
          fill="#FDFFFE"
        />
        <path
          d="M72.3767 51.4922C74.2901 53.7652 75.5436 56.3017 76.5662 58.9701C79.7331 67.3374 80.6238 75.8035 77.5229 84.3355C74.6859 92.1098 69.0779 97.8747 60.5669 101.268C58.3897 102.124 56.3114 103.113 54.8599 105.155C53.9363 101.795 54.3321 98.7642 55.5197 95.7664C56.7403 92.7357 58.8515 90.1992 61.2927 87.8603C64.7234 84.5661 67.9563 81.1072 70.1665 77.0223C74.6199 68.8527 75.1148 60.3866 72.3437 51.7228C72.3108 51.6569 72.3767 51.5581 72.3767 51.4922Z"
          fill="#FDFFFE"
        />
        <path
          d="M22.2671 46.1172C22.3991 46.8419 21.8713 47.1713 21.5744 47.5996C14.7788 57.6469 15.8344 69.2096 24.3454 78.104C24.6093 78.3675 25.2691 78.4993 24.8072 79.1252C21.5744 83.8689 21.1125 88.9749 22.2671 94.4433C14.9107 89.0079 11.0841 82.1559 10.7542 73.8215C10.3254 63.4118 14.2839 54.3527 21.7393 46.4466C21.8713 46.3478 22.0362 46.249 22.2671 46.1172Z"
          fill="#FDFFFE"
        />
        <path
          d="M58.3236 46.0234C58.2906 46.0564 58.2906 46.0893 58.2576 46.0893C58.2906 46.0893 58.2906 46.0564 58.3236 46.0564C58.2906 46.0564 58.2576 46.0234 58.2246 46.0234C58.2246 46.0564 58.3236 46.0234 58.3236 46.0234Z"
          fill="#FDFFFE"
        />
        <path
          d="M122.62 94.25C122.013 94.25 121.608 93.845 121.608 93.2375V48.0125C121.608 47.405 122.013 47 122.62 47H130.248C130.855 47 131.26 47.405 131.26 48.0125V85.6775H145.705C146.313 85.6775 146.718 86.0825 146.718 86.69V93.2375C146.718 93.845 146.313 94.25 145.705 94.25H122.62ZM157.482 55.3025C154.512 55.3025 152.285 53.0075 152.285 50.105C152.285 47.27 154.512 44.975 157.482 44.975C160.452 44.975 162.612 47.27 162.612 50.105C162.612 53.0075 160.452 55.3025 157.482 55.3025ZM152.757 93.2375V62.1875C152.757 61.58 153.162 61.175 153.77 61.175H161.127C161.735 61.175 162.14 61.58 162.14 62.1875V93.2375C162.14 93.845 161.735 94.25 161.127 94.25H153.77C153.162 94.25 152.757 93.845 152.757 93.2375ZM189.191 95.06C184.196 95.06 180.686 92.9675 178.391 89.5925L178.256 93.2375C178.256 93.845 177.851 94.25 177.244 94.25H170.629C170.021 94.25 169.549 93.845 169.549 93.2375V47C169.549 46.3925 169.954 45.9875 170.561 45.9875H177.919C178.526 45.9875 178.931 46.3925 178.931 47V65.0225C181.159 62.0525 184.601 60.365 189.191 60.365C198.439 60.365 204.851 67.925 204.851 77.7125C204.851 87.5675 198.439 95.06 189.191 95.06ZM178.796 77.7125C178.796 83.045 182.239 86.555 187.234 86.555C192.094 86.555 195.739 83.045 195.739 77.7125C195.739 72.4475 192.094 68.87 187.234 68.87C182.239 68.87 178.796 72.38 178.796 77.7125ZM227.004 95.06C216.136 95.06 208.846 87.5675 208.846 77.5775C208.846 67.8575 215.664 60.365 225.856 60.365C235.914 60.365 241.719 67.79 241.719 76.16C241.719 79.4 240.976 81.2225 238.074 81.2225H217.959C218.971 85.4075 222.414 87.7025 227.746 87.7025C230.311 87.7025 232.741 87.23 235.441 85.6775C235.914 85.4075 236.251 85.475 236.589 85.9475L239.086 89.39C239.424 89.8625 239.356 90.335 238.749 90.875C235.914 93.71 231.661 95.06 227.004 95.06ZM217.824 74.675H233.416C232.876 70.2875 229.906 68.06 225.924 68.06C221.806 68.06 218.634 70.2875 217.824 74.675ZM248.313 94.25C247.705 94.25 247.3 93.845 247.3 93.2375V62.1875C247.3 61.58 247.705 61.175 248.313 61.175H255.333C255.94 61.175 256.278 61.445 256.345 62.255L256.615 66.5075C257.763 62.9975 259.855 60.365 263.77 60.365C265.323 60.365 266.268 60.77 266.808 61.175C267.28 61.5125 267.415 61.9175 267.415 62.525V68.465C267.415 69.275 266.943 69.4775 266.065 69.275C265.323 69.0725 264.58 68.9375 263.635 68.9375C259.045 68.9375 256.615 71.975 256.615 76.7V93.2375C256.615 93.845 256.21 94.25 255.603 94.25H248.313ZM286.551 94.655C281.286 94.655 276.561 92.225 276.561 85.0025V68.3975H272.376C271.768 68.3975 271.363 67.9925 271.363 67.385V62.1875C271.363 61.58 271.768 61.175 272.376 61.175H276.561V53.4125C276.561 52.805 276.966 52.4 277.573 52.4H284.931C285.538 52.4 285.943 52.805 285.943 53.4125V61.175H291.141C291.748 61.175 292.153 61.58 292.153 62.1875V67.385C292.153 67.9925 291.748 68.3975 291.141 68.3975H285.943V83.99C285.943 85.9475 287.091 86.8925 288.846 86.8925C289.453 86.8925 290.128 86.8925 290.938 86.825C291.681 86.7575 292.153 87.095 292.153 87.77V92.6975C292.153 94.25 288.778 94.655 286.551 94.655ZM304.25 107.075C303.507 107.075 303.102 106.67 303.44 105.928L308.232 94.3175L295.475 62.3225C295.205 61.58 295.542 61.175 296.285 61.175H303.71C304.25 61.175 304.722 61.445 304.925 61.985L312.822 83.45L320.652 61.985C320.855 61.445 321.327 61.175 321.867 61.175H329.292C330.035 61.175 330.372 61.58 330.102 62.3225L312.62 106.265C312.417 106.805 311.945 107.075 311.405 107.075H304.25ZM349.647 94.25C349.04 94.25 348.635 93.845 348.635 93.2375V48.0125C348.635 47.405 349.04 47 349.647 47H363.552C379.347 47 387.65 57.3275 387.65 70.625C387.65 83.9225 379.347 94.25 363.552 94.25H349.647ZM358.287 85.6775H363.417C373.002 85.6775 377.862 80.345 377.862 70.625C377.862 60.905 373.002 55.5725 363.417 55.5725H358.287V85.6775ZM388.728 94.25C387.986 94.25 387.648 93.7775 387.918 93.1025L403.713 47.81C403.916 47.27 404.456 47 404.996 47H413.163C413.703 47 414.243 47.27 414.446 47.81L430.241 93.1025C430.511 93.7775 430.106 94.25 429.363 94.25H421.398C420.858 94.25 420.453 94.0475 420.251 93.44L417.956 86.4875H400.136L397.841 93.44C397.638 94.0475 397.233 94.25 396.693 94.25H388.728ZM402.903 77.915H415.188L409.046 59.15L402.903 77.915ZM456.192 95.1275C442.759 95.1275 431.892 84.4625 431.892 70.8275C431.892 57.125 442.759 46.46 456.192 46.46C469.624 46.46 480.492 57.125 480.492 70.8275C480.492 84.4625 469.624 95.1275 456.192 95.1275ZM441.679 70.8275C441.679 79.265 447.957 85.6775 456.192 85.6775C464.494 85.6775 470.704 79.265 470.704 70.8275C470.704 62.3225 464.494 55.91 456.192 55.91C447.957 55.91 441.679 62.3225 441.679 70.8275Z"
          fill="#FDFFFE"
        />
      </svg>
    </a>

    <NavbarToggle className="navbar-toggler" type="button" onClick={toggleOpen}>
      <span className="navbar-toggler-icon"></span>
    </NavbarToggle>
    <div
      className={`collapse navbar-collapse ${state.open ? "show" : "hide"}`}
      id="navbarNav"
    >
      <ul className="navbar-nav">
        {Object.keys(tabs).map((t) => (
          <li className="nav-item">
            <Link key={key} href={`//*__@appAccount__*//widget/home?tab=${t}`}>
              <TabsButton selected={tab === t}>
                {capitalizeFirstLetter(t)}
              </TabsButton>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Navbar>
);
