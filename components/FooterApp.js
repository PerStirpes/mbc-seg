import Cipher from '../components/cipher'

export default () => (
  <footer>
    <div style={{ paddingBottom: '10px' }}>
      Bootstrapped with Create Next App{' '}
    </div>

    <div className="flex-ns flex-wrap-ns justify-start-ns w-100 mt4">
      <div className="Footer-col flex">
        <a
          target="_blank"
          className="Footer-social overflow-hidden"
          href="https://github.com/PerStirpes"
          title="Follow Me on Github"
        >
          <svg
            width="32"
            height="32"
            stroke-linejoin="round"
            stroke-miterlimit="1.414"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="title">github</title>
            <g>
              <path
                d="M18.837,27.966c8.342,-0.241 9.163,-1.997 9.163,-11.966c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,9.995 0.826,11.734 9.228,11.968c0.073,-0.091 0.1,-0.205 0.1,-0.321c0,-0.25 -0.01,-2.816 -0.015,-3.699c-3.037,0.639 -3.678,-1.419 -3.678,-1.419c-0.497,-1.222 -1.213,-1.548 -1.213,-1.548c-0.991,-0.656 0.075,-0.643 0.075,-0.643c1.096,0.075 1.673,1.091 1.673,1.091c0.974,1.617 2.556,1.15 3.178,0.879c0.099,-0.683 0.381,-1.15 0.693,-1.414c-2.425,-0.267 -4.974,-1.175 -4.974,-5.23c0,-1.155 0.426,-2.099 1.124,-2.839c-0.113,-0.268 -0.487,-1.344 0.107,-2.8c0,0 0.917,-0.285 3.003,1.084c0.871,-0.235 1.805,-0.352 2.734,-0.356c0.927,0.004 1.861,0.121 2.734,0.356c2.085,-1.369 3,-1.084 3,-1.084c0.596,1.456 0.221,2.532 0.108,2.8c0.7,0.74 1.123,1.684 1.123,2.839c0,4.065 -2.553,4.96 -4.986,5.221c0.392,0.327 0.741,0.973 0.741,1.96c0,0.946 -0.006,2.619 -0.01,3.728c-0.002,0.549 -0.003,0.959 -0.003,1.074c0,0.109 0.029,0.224 0.095,0.319Z"
                fillRule="nonzero"
                fill="#FFF"
              />
            </g>
          </svg>
        </a>
        <a
          target="_blank"
          className="Footer-social overflow-hidden "
          href="http://twitter.com/@2_up"
          title="MBC"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M16,28c11,0 12,-1 12,-12c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,11 1,12 12,12Zm5.825,-13.901c0,3.669 -2.889,7.901 -8.172,7.901l0,0c-1.622,0 -3.132,-0.46 -4.403,-1.248c0.225,0.026 0.454,0.039 0.685,0.039c1.346,0 2.585,-0.444 3.568,-1.189c-1.258,-0.022 -2.318,-0.825 -2.684,-1.928c0.175,0.032 0.355,0.05 0.54,0.05c0.262,0 0.516,-0.034 0.758,-0.098c-1.315,-0.255 -2.305,-1.377 -2.305,-2.722c0,-0.013 0,-0.024 0.001,-0.036c0.387,0.208 0.829,0.333 1.301,0.348c-0.772,-0.498 -1.279,-1.348 -1.279,-2.312c0,-0.509 0.143,-0.985 0.389,-1.396c1.417,1.681 3.534,2.786 5.921,2.902c-0.049,-0.204 -0.074,-0.416 -0.074,-0.633c0,-1.533 1.286,-2.777 2.872,-2.777c0.826,0 1.573,0.338 2.097,0.877c0.654,-0.124 1.269,-0.356 1.824,-0.674c-0.215,0.649 -0.67,1.192 -1.263,1.536c0.581,-0.067 1.134,-0.216 1.649,-0.437c-0.384,0.557 -0.872,1.046 -1.433,1.438c0.006,0.119 0.008,0.239 0.008,0.359Z"
                fillRule="nonzero"
                fill="#FFF"
              />
            </g>
          </svg>
        </a>
        <a
          target="_blank"
          className="Footer-social "
          href="https://www.linkedin.com/in/barrazacarl"
          title="Find Me on Linked In"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.84 0C5.052 0 .36 4.7.36 10.5S5.052 21 10.84 21s10.48-4.7 10.48-10.5S16.628 0 10.84 0zM7.946 15.74H5.772v-7h2.174v7zM6.86 7.783c-.698 0-1.26-.565-1.26-1.262 0-.695.562-1.26 1.26-1.26.695 0 1.26.565 1.26 1.26 0 .698-.565 1.263-1.26 1.263zm9.22 7.957h-2.172v-3.404c0-.812-.013-1.856-1.128-1.856-1.13 0-1.302.885-1.302 1.798v3.462h-2.17v-7h2.082v.957h.03c.29-.55.998-1.13 2.055-1.13 2.2 0 2.605 1.45 2.605 3.334v3.84z"
              fillRule="nonzero"
              fill="#FFF"
            />
          </svg>
        </a>
      </div>
      <div>
        <Cipher />
      </div>
    </div>
    <style jsx>{`
      footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background: black;
        color: white;
        text-align: center;
        letter-spacing: 0.03em;
        margin-top: 10px;
        width: 100%;
      }

      .Footer-social path {
         {
           {
            /* transition: fill 0.3s; */
          }
        }
      }

      .Footer-social:hover path {
        fill: hsl(151, 44%, 50%);
        box-shadow: none;
        opacity: 1;
        transform: scale(1.05);
        transition: all 0.3s ease-in;
      }

      a,
      a:visited,
      a:active {
        padding-left: 6px;
      }
    `}</style>
  </footer>
)
