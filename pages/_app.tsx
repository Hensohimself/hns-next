import {AppProps} from 'next/app'
import {Grommet} from 'grommet'
import {hnsTheme} from '../styles/theme'

function App({Component, pageProps}: AppProps) {
    return <Grommet theme={hnsTheme}>
        <Component {...pageProps} />
    </Grommet>
}

export default App