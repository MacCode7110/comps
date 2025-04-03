import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {
    return <div>
        <div>
            <Button success outline rounded className="mb-5">
                <GoBell className="mr-1"/>
                    Click me!
            </Button>
        </div>
        <div>
            <Button danger outline>
                <GoCloudDownload className="mr-1"/>
                    Buy now!
            </Button>
        </div>
        <div>
            <Button warning>
                <GoDatabase />
                    See deal!
            </Button>
        </div>
        <div>
            <Button secondary outline>Hide ads!</Button>
        </div>
        <div>
            <Button primary rounded>
                Something!
            </Button>
        </div>
    </div>;
}

export default App;