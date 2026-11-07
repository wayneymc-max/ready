
import OverAll from "@/components/overAll";
let foods = ['fruits'
    , 'vegetables'
    , 'bread-cereals'
    , 'proteins'
    , 'dairies'
    , 'drinks',
    'oils-fats'
    , 'nuts-seeds'
    , 'snacks'
    , 'condiments-spreads']

export default function Home() {

    return (<OverAll foods={foods} />);
}

