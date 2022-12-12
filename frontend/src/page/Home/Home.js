
import FoodList from '../../component/FoodList/FoodList';

function Home({foods, myfilter, combos}) {
    return (<>
        <FoodList foods = {foods} myfilter = {myfilter} combos = {combos}/>
    </>
    );
}

export default Home;
