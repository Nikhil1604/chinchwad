
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './component/Layout';
import Reports from './component/Reports'
import Donations from './component/Donations';
import Sales from './component/Sales'
import OtherDonation from './component/OtherDonation';
import Gifts from './component/Gifts';
import Goods from './component/Goods';
import Ornaments from './component/Ornaments';


function App() {
  return (
    <Routes>
          
          <Route path='/' element={<Layout/>}>
            <Route index element={<Donations/>}/>
              <Route path='/donations' element={<Donations/>} />
              <Route path='/report' element={<Reports/>} />
              <Route path='/otherdonation' element={<OtherDonation/>} />
              <Route path='/sales' element={<Sales/>}/>
              <Route path='/gifts' element={<Gifts/>}/>
              <Route path='/goods' element={<Goods/>}/>
              <Route path='/ornaments' element={<Ornaments/>}/>
            </Route>
        </Routes>
  );
}

export default App;
