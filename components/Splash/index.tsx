import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import anime from 'animejs'
import { Box, Container, createStyles, Space } from '@mantine/core'

import { useSplash } from '../../contexts/SplashContext'

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: '100vh',

    textAlign: 'center',
    ...theme.other.flexCenter,
  },
  number: { fontSize: '1.1rem' },
}))

export default function Splash() {
  const { classes } = useStyles()
  const router = useRouter()

  const { setSplashFinish } = useSplash()
  const [visibility, setVisibility] = useState('hidden')

  const strokeColor = '#333333'
  const strokeWidth = '3'

  useEffect(() => {
    if (router.asPath === '/') {
      anime({
        targets: '#splash path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 750,
        delay: function (el, i) {
          return i * 125
        },
        direction: 'alternate',
        loop: false,
      })

      anime({
        targets: '#counter',
        innerHTML: ['0%', '100%'],
        easing: 'easeOutCirc',
        round: 1,
        duration: 1000,
      })

      setVisibility('visible')

      const timer = setTimeout(() => {
        setSplashFinish()
      }, 1800)

      return () => {
        anime.remove('#splash path')
        anime.remove('#counter')
        clearTimeout(timer)
      }
    } else {
      setSplashFinish()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className={classes.container}>
      <svg
        visibility={visibility}
        id="splash"
        height="72px"
        viewBox="0 0 500 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          d="M 421.211487 126.259995 C 416.012512 126.259995 411.409668 125.306625 407.402893 123.399841 C 403.396088 121.493057 400.262543 118.852783 398.002106 115.478912 C 395.741669 112.105042 394.611481 108.218246 394.611481 103.818436 C 394.611481 96.857773 397.248138 91.447418 402.521484 87.587189 C 407.79483 83.726959 415.092285 81.796875 424.413971 81.796875 C 430.705261 81.796875 436.663971 82.749161 442.290222 84.653748 L 442.290222 79.421249 C 442.290222 75.155609 440.987213 71.966629 438.381165 69.854218 C 435.775116 67.741821 431.939728 66.685638 426.874908 66.685638 C 423.822601 66.685638 420.51297 67.15921 416.945862 68.106415 C 413.378754 69.053604 409.261932 70.566971 404.595245 72.646561 L 397.669617 58.456238 C 403.444641 55.829773 408.962555 53.873077 414.223511 52.58609 C 419.484467 51.299103 424.762512 50.65564 430.057739 50.65564 C 439.926331 50.65564 447.581055 53.006073 453.022095 57.707031 C 458.463165 62.40799 461.183685 69.045166 461.183685 77.618744 L 461.183685 125 L 442.290222 125 L 442.290222 119.841873 C 439.251068 122.081879 436.008118 123.711563 432.56134 124.730942 C 429.114532 125.75032 425.331299 126.259995 421.211487 126.259995 Z M 412.863983 103.437805 C 412.863983 106.223236 414.070007 108.43515 416.482117 110.073593 C 418.894196 111.712036 422.145538 112.53125 426.236176 112.53125 C 429.368683 112.53125 432.277679 112.145157 434.963196 111.372971 C 437.648743 110.600784 440.091064 109.381989 442.290222 107.716568 L 442.290222 97.159683 C 439.930634 96.201553 437.48468 95.496094 434.952271 95.043274 C 432.419861 94.590469 429.734741 94.364059 426.89679 94.364059 C 422.498444 94.364059 419.060089 95.16687 416.581635 96.772507 C 414.10318 98.378128 412.863983 100.599884 412.863983 103.437805 Z"
        />
        <path
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          d="M 280.284607 125 L 280.284607 52.055634 L 299.455841 52.055634 L 299.455841 60.193115 C 301.803772 57.02124 304.617615 54.598602 307.8974 52.925171 C 311.177216 51.251709 314.863861 50.415009 318.957428 50.415009 C 322.518677 50.482086 325.179382 51.009277 326.939606 51.996552 L 326.939606 68.827179 C 325.525024 68.160736 323.977356 67.66745 322.296631 67.347351 C 320.615906 67.027252 318.902008 66.867188 317.154907 66.867188 C 313.395325 66.867188 309.97226 67.80307 306.885681 69.67485 C 303.799103 71.546631 301.32254 74.214981 299.455841 77.679993 L 299.455841 125 Z"
        />
        <path
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          d="M 340.13681 125 L 340.13681 52.055634 L 359.308075 52.055634 L 359.308075 60.193115 C 361.656006 57.02124 364.469818 54.598602 367.749634 52.925171 C 371.029449 51.251709 374.716064 50.415009 378.809631 50.415009 C 382.370911 50.482086 385.031616 51.009277 386.791809 51.996552 L 386.791809 68.827179 C 385.377228 68.160736 383.82959 67.66745 382.148865 67.347351 C 380.468109 67.027252 378.754211 66.867188 377.007141 66.867188 C 373.247528 66.867188 369.824493 67.80307 366.737915 69.67485 C 363.651337 71.546631 361.174744 74.214981 359.308075 77.679993 L 359.308075 125 Z"
        />
        <path
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          d="M 226.825394 126.399994 C 219.529312 126.399994 212.934067 124.725128 207.039459 121.375305 C 201.144852 118.025497 196.477859 113.495239 193.038361 107.784378 C 189.598862 102.073517 187.87915 95.678055 187.87915 88.597809 C 187.87915 81.491318 189.592667 75.075806 193.019775 69.351089 C 196.446869 63.626373 201.113129 59.085907 207.018677 55.729523 C 212.924225 52.373169 219.524948 50.695007 226.821014 50.695007 C 234.131683 50.695007 240.728027 52.373169 246.610245 55.729523 C 252.492462 59.085907 257.155792 63.626373 260.600403 69.351089 C 264.044983 75.075806 265.767273 81.491318 265.767273 88.597809 C 265.767273 95.678055 264.047913 102.073517 260.609131 107.784378 C 257.17038 113.495239 252.508865 118.025497 246.624451 121.375305 C 240.740051 124.725128 234.140427 126.399994 226.825394 126.399994 Z M 226.823212 109.748749 C 230.648438 109.748749 234.085693 108.807404 237.135086 106.924683 C 240.184479 105.041977 242.596893 102.499023 244.372421 99.295776 C 246.147949 96.092529 247.035706 92.509079 247.035706 88.545319 C 247.035706 84.581543 246.140305 81.002106 244.349457 77.80687 C 242.558609 74.611649 240.133072 72.069443 237.072739 70.180161 C 234.012405 68.290863 230.599579 67.346252 226.834152 67.346252 C 223.06871 67.346252 219.653687 68.290863 216.588989 70.180161 C 213.524292 72.069443 211.095093 74.611649 209.301331 77.80687 C 207.507568 81.002106 206.610703 84.581543 206.610703 88.545319 C 206.610703 92.509079 207.504288 96.092529 209.291489 99.295776 C 211.07869 102.499023 213.505692 105.041977 216.572586 106.924683 C 219.639465 108.807404 223.05632 109.748749 226.823212 109.748749 Z"
        />
        <path
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          d="M 115.225136 125 L 115.225136 27 L 134.396378 23.819366 L 134.396378 82.693756 L 165.970764 52.055634 L 187.683884 52.055634 L 153.189194 85.476257 L 189.803574 125 L 165.248886 125 L 134.396378 91.699692 L 134.396378 125 Z"
        />
        <path
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          d="M 38.717888 125 L 38.717888 111.371872 L 75.391327 68.205933 L 39.039452 68.205933 L 39.039452 52.055634 L 100.007263 52.055634 L 100.007263 65.644379 L 63.196011 108.849686 L 100.9282 108.849686 L 100.9282 125 Z"
        />
      </svg>

      <Space h="xl" />

      <Box id="counter" className={classes.number} />
    </Container>
  )
}
