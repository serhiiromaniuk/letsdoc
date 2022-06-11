import { MainPageIllustration } from '../../../Components'
import Title from './Title'

const mainPageIllustrationSrtyling = {
    left: '21%',
    top: '15%'    
}

export function TopPart() {
    return (
        <div>
            <MainPageIllustration style={mainPageIllustrationSrtyling} />
            <Title/>
        </div>
    )
}
