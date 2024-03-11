import { Jobs } from './job';
import { SearchField } from './SerachBranch';
import { NavBar } from './navbar';



export function App() {
  return (
    <>
      <div className='container-wrapper'>
        <NavBar />
        <SearchField />
        <Jobs />
      </div>
    </>
  );
}
