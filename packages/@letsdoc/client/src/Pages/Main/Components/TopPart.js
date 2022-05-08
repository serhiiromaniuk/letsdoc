import { MainPageIllustration } from '../../../Components'
import Title from './Title'

const mainPageIllustrationSrtyling = {
    left: '400px',
    top: '200px'    
}

export function TopPart() {
    return (
        <div>
            <MainPageIllustration style={mainPageIllustrationSrtyling} />
            <Title/>
        </div>
    )
}
